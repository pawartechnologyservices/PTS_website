import { useState } from "react";
import { X, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter 
} from "@/components/ui/dialog";
import { database, storage, ref, push, storageRef, uploadBytes, getDownloadURL } from "@/lib/firebase";
import { toast } from "react-hot-toast";

interface Job {
  title: string;
  skills: string[];
}

interface ApplicationFormProps {
  job: Job;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  portfolio: string;
  linkedin: string;
  github: string;
  isExperienced: boolean | null;
  currentCompany: string;
  currentRole: string;
  currentSalary: string;
  noticePeriod: string;
  totalExperience: string;
  relevantExperience: string;
  salarySlip: File | null;
  skills: string[];
  education: Education[];
  employmentHistory: Employment[];
  projects: Project[];
  certifications: Certification[];
  references: Reference[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Employment {
  company: string;
  role: string;
  duration: string;
  responsibilities: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface Reference {
  name: string;
  relationship: string;
  contact: string;
}

const FORM_STEPS = [
  "Basic Information",
  "Experience",
  "Education",
  "Employment",
  "Projects",
  "Documents"
];

const ApplicationForm = ({ job, onClose }: ApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
    linkedin: "",
    github: "",
    isExperienced: null,
    currentCompany: "",
    currentRole: "",
    currentSalary: "",
    noticePeriod: "",
    totalExperience: "",
    relevantExperience: "",
    salarySlip: null,
    skills: [...job.skills],
    education: [{ degree: "", institution: "", year: "" }],
    employmentHistory: [{ company: "", role: "", duration: "", responsibilities: "" }],
    projects: [{ title: "", description: "", technologies: "" }],
    certifications: [{ name: "", issuer: "", year: "" }],
    references: [{ name: "", relationship: "", contact: "" }]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) setFormData(prev => ({ ...prev, [e.target.name]: file }));
  };

  const handleArrayChange = (arrayName: keyof FormData, index: number, field: string, value: string) => {
    const updatedArray = [...formData[arrayName] as any[]];
    updatedArray[index][field] = value;
    setFormData(prev => ({ ...prev, [arrayName]: updatedArray }));
  };

  const addArrayItem = (arrayName: keyof FormData, template: any) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName] as any[], { ...template }]
    }));
  };

  const removeArrayItem = (arrayName: keyof FormData, index: number) => {
    const updatedArray = [...formData[arrayName] as any[]];
    updatedArray.splice(index, 1);
    setFormData(prev => ({ ...prev, [arrayName]: updatedArray }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 0) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone) newErrors.phone = "Phone is required";
    }
    
    if (step === 1 && formData.isExperienced) {
      if (!formData.currentCompany) newErrors.currentCompany = "Current company is required";
      if (!formData.currentRole) newErrors.currentRole = "Current role is required";
      if (!formData.totalExperience) newErrors.totalExperience = "Total experience is required";
    }
    
    if (step === FORM_STEPS.length - 1 && !formData.resume) {
      newErrors.resume = "Resume is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, FORM_STEPS.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      try {
        // Upload files
        let resumeUrl = "";
        if (formData.resume) {
          const resumeRef = storageRef(storage, `applications/resumes/${Date.now()}_${formData.resume.name}`);
          await uploadBytes(resumeRef, formData.resume);
          resumeUrl = await getDownloadURL(resumeRef);
        }

        let salarySlipUrl = "";
        if (formData.isExperienced && formData.salarySlip) {
          const slipRef = storageRef(storage, `applications/salary_slips/${Date.now()}_${formData.salarySlip.name}`);
          await uploadBytes(slipRef, formData.salarySlip);
          salarySlipUrl = await getDownloadURL(slipRef);
        }

        // Prepare data
        const applicationData = {
          jobTitle: job.title,
          candidateInfo: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            linkedin: formData.linkedin,
            github: formData.github,
            portfolio: formData.portfolio
          },
          experience: formData.isExperienced ? {
            currentCompany: formData.currentCompany,
            currentRole: formData.currentRole,
            currentSalary: formData.currentSalary,
            noticePeriod: formData.noticePeriod,
            totalExperience: formData.totalExperience,
            relevantExperience: formData.relevantExperience
          } : null,
          education: formData.education,
          employmentHistory: formData.isExperienced ? formData.employmentHistory : null,
          skills: formData.skills,
          projects: formData.projects,
          certifications: formData.certifications,
          references: formData.isExperienced ? formData.references : null,
          documents: {
            resumeUrl,
            salarySlipUrl,
            coverLetter: formData.coverLetter
          },
          status: "new",
          createdAt: new Date().toISOString()
        };

        // Save to database
        const applicationsRef = ref(database, 'applications');
        await push(applicationsRef, applicationData);
        
        // Show success dialog
        setIsSuccessDialogOpen(true);
      } catch (error) {
        console.error("Error submitting application:", error);
        toast.error("There was an error submitting your application. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const renderBasicInfoStep = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 text-sm mb-1">Full Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-1">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-1">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-1">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-1">GitHub Profile</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-1">Portfolio Website</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
          />
        </div>
      </div>
    </div>
  );

  const renderExperienceStep = () => (
    <div className="space-y-4">
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, isExperienced: true }))}
          className={`px-6 py-3 rounded-md font-medium ${formData.isExperienced === true ? 'bg-white text-black' : 'bg-gray-800 text-white border border-gray-700'}`}
        >
          Experienced Professional
        </button>
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, isExperienced: false }))}
          className={`px-6 py-3 rounded-md font-medium ${formData.isExperienced === false ? 'bg-white text-black' : 'bg-gray-800 text-white border border-gray-700'}`}
        >
          Fresher / Student
        </button>
      </div>

      {formData.isExperienced === true && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Current Company*</label>
            <input
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${errors.currentCompany ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white`}
            />
            {errors.currentCompany && <p className="text-red-500 text-xs mt-1">{errors.currentCompany}</p>}
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Current Role*</label>
            <input
              type="text"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${errors.currentRole ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white`}
            />
            {errors.currentRole && <p className="text-red-500 text-xs mt-1">{errors.currentRole}</p>}
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Current Salary (₹)</label>
            <input
              type="text"
              name="currentSalary"
              value={formData.currentSalary}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Notice Period (Days)</label>
            <input
              type="text"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Total Experience (Years)*</label>
            <input
              type="text"
              name="totalExperience"
              value={formData.totalExperience}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${errors.totalExperience ? 'border-red-500' : 'border-gray-700'} rounded-md px-3 py-2 text-white`}
            />
            {errors.totalExperience && <p className="text-red-500 text-xs mt-1">{errors.totalExperience}</p>}
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Relevant Experience (Years)</label>
            <input
              type="text"
              name="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
        </div>
      )}

      {formData.isExperienced === false && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">University/College</label>
            <input
              type="text"
              name="institution"
              value={formData.education[0]?.institution || ""}
              onChange={(e) => handleArrayChange('education', 0, 'institution', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Degree Program</label>
            <input
              type="text"
              name="degree"
              value={formData.education[0]?.degree || ""}
              onChange={(e) => handleArrayChange('education', 0, 'degree', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Expected Graduation Year</label>
            <input
              type="text"
              name="year"
              value={formData.education[0]?.year || ""}
              onChange={(e) => handleArrayChange('education', 0, 'year', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">GPA/Percentage</label>
            <input
              type="text"
              name="gpa"
              value={formData.education[0]?.gpa || ""}
              onChange={(e) => handleArrayChange('education', 0, 'gpa', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            />
          </div>
        </div>
      )}
    </div>
  );

  const renderEducationStep = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Education</h3>
        <button
          type="button"
          onClick={() => addArrayItem('education', { degree: "", institution: "", year: "" })}
          className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
        >
          Add Education
        </button>
      </div>
      
      {formData.education.map((edu, index) => (
        <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Degree*</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Institution*</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Year*</label>
              <input
                type="text"
                value={edu.year}
                onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeArrayItem('education', index)}
              className="text-red-500 hover:text-red-400 text-sm flex items-center"
            >
              <X className="h-4 w-4 mr-1" /> Remove Education
            </button>
          )}
        </div>
      ))}
    </div>
  );

  const renderEmploymentStep = () => (
    formData.isExperienced ? (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Employment History</h3>
          <button
            type="button"
            onClick={() => addArrayItem('employmentHistory', { company: "", role: "", duration: "", responsibilities: "" })}
            className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
          >
            Add Employment
          </button>
        </div>
        
        {formData.employmentHistory.map((emp, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Company Name*</label>
                <input
                  type="text"
                  value={emp.company}
                  onChange={(e) => handleArrayChange('employmentHistory', index, 'company', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Job Title*</label>
                <input
                  type="text"
                  value={emp.role}
                  onChange={(e) => handleArrayChange('employmentHistory', index, 'role', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Duration*</label>
                <input
                  type="text"
                  value={emp.duration}
                  onChange={(e) => handleArrayChange('employmentHistory', index, 'duration', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm mb-1">Key Responsibilities</label>
                <textarea
                  value={emp.responsibilities}
                  onChange={(e) => handleArrayChange('employmentHistory', index, 'responsibilities', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  rows={3}
                />
              </div>
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeArrayItem('employmentHistory', index)}
                className="text-red-500 hover:text-red-400 text-sm flex items-center"
              >
                <X className="h-4 w-4 mr-1" /> Remove Employment
              </button>
            )}
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-8 text-gray-400">
        No employment history required for freshers/students
      </div>
    )
  );

  const renderProjectsStep = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Projects</h3>
        <button
          type="button"
          onClick={() => addArrayItem('projects', { title: "", description: "", technologies: "" })}
          className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
        >
          Add Project
        </button>
      </div>
      
      {formData.projects.map((project, index) => (
        <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Project Title*</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleArrayChange('projects', index, 'title', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Technologies Used</label>
              <input
                type="text"
                value={project.technologies}
                onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-300 text-sm mb-1">Description*</label>
              <textarea
                value={project.description}
                onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                rows={3}
              />
            </div>
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeArrayItem('projects', index)}
              className="text-red-500 hover:text-red-400 text-sm flex items-center"
            >
              <X className="h-4 w-4 mr-1" /> Remove Project
            </button>
          )}
        </div>
      ))}
    </div>
  );

  const renderDocumentsStep = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-300 text-sm mb-1">Resume/CV* (PDF, DOC, DOCX)</label>
        <div className={`border-2 border-dashed ${errors.resume ? 'border-red-500' : 'border-gray-700'} rounded-md p-6 text-center`}>
          {formData.resume ? (
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md">
              <span className="text-white">{formData.resume.name}</span>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                className="text-red-500 hover:text-red-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-2 flex justify-center text-sm text-gray-300">
                <label className="relative cursor-pointer rounded-md font-medium text-white hover:text-gray-200">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-400 mt-2">PDF, DOC, DOCX up to 5MB</p>
            </>
          )}
        </div>
        {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
      </div>

      <div>
        <label className="block text-gray-300 text-sm mb-1">Cover Letter (Optional)</label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
          rows={4}
          placeholder="Tell us why you're a great fit for this position..."
        />
      </div>

      {formData.isExperienced && (
        <div>
          <label className="block text-gray-300 text-sm mb-1">Latest Salary Slip (Optional)</label>
          <div className="border-2 border-dashed border-gray-700 rounded-md p-6 text-center">
            {formData.salarySlip ? (
              <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md">
                <span className="text-white">{formData.salarySlip.name}</span>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, salarySlip: null }))}
                  className="text-red-500 hover:text-red-400"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <>
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-2 flex justify-center text-sm text-gray-300">
                  <label className="relative cursor-pointer rounded-md font-medium text-white hover:text-gray-200">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="salarySlip"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-400 mt-2">PDF, JPG, PNG up to 5MB</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl bg-gray-900 border-gray-800 text-white overflow-y-auto max-h-screen">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Application for {job.title}
            </DialogTitle>
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
            >
            </button>
          </DialogHeader>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-6">
            {FORM_STEPS.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= index ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'}`}
                >
                  {index + 1}
                </div>
                <span className={`text-xs mt-1 ${currentStep >= index ? 'text-white' : 'text-gray-500'}`}>
                  {step.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-6">
            {/* Current Step Content */}
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">{FORM_STEPS[currentStep]}</h3>
              
              {currentStep === 0 && renderBasicInfoStep()}
              {currentStep === 1 && renderExperienceStep()}
              {currentStep === 2 && renderEducationStep()}
              {currentStep === 3 && renderEmploymentStep()}
              {currentStep === 4 && renderProjectsStep()}
              {currentStep === 5 && renderDocumentsStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-2"
              >
                Previous
              </Button>
              
              {currentStep < FORM_STEPS.length - 1 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-white text-black hover:bg-gray-200 px-6 py-2"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 px-6 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <DialogTitle className="text-2xl font-bold text-white text-center">
                Application Submitted Successfully!
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-center mt-2">
                Thank you for applying to {job.title}. We've received your application and will review it shortly.
              </DialogDescription>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              onClick={() => {
                setIsSuccessDialogOpen(false);
                onClose();
              }}
              className="bg-white text-black hover:bg-gray-200 px-6 py-2"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicationForm;