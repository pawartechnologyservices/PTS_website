import { useState, useEffect } from "react";
import { X, Upload, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ApplicationForm = ({ job, onClose }) => {
  const [isExperienced, setIsExperienced] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
    linkedin: "",
    github: "",
    currentCompany: "",
    currentRole: "",
    currentSalary: "",
    noticePeriod: "",
    totalExperience: "",
    relevantExperience: "",
    skills: [],
    education: [{
      degree: "",
      institution: "",
      year: ""
    }],
    employmentHistory: [{
      company: "",
      role: "",
      duration: "",
      responsibilities: ""
    }],
    projects: [{
      title: "",
      description: "",
      technologies: ""
    }],
    certifications: [{
      name: "",
      issuer: "",
      year: ""
    }],
    references: [{
      name: "",
      relationship: "",
      contact: ""
    }]
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    education: true,
    employment: true,
    projects: true,
    certifications: true,
    references: true
  });

  useEffect(() => {
    // Initialize form with job-specific fields
    if (job) {
      setFormData(prev => ({
        ...prev,
        applyingFor: job.title,
        skills: job.skills
      }));
    }
  }, [job]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: file
      }));
    }
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const updatedArray = [...formData[arrayName]];
    updatedArray[index][field] = value;
    setFormData(prev => ({
      ...prev,
      [arrayName]: updatedArray
    }));
  };

  const addArrayItem = (arrayName, template) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], { ...template }]
    }));
  };

  const removeArrayItem = (arrayName, index) => {
    const updatedArray = [...formData[arrayName]];
    updatedArray.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      [arrayName]: updatedArray
    }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData(prev => ({
      ...prev,
      skills: updatedSkills
    }));
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };

  const removeSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      skills: updatedSkills
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    
    if (isExperienced) {
      if (!formData.currentCompany) newErrors.currentCompany = "Current company is required";
      if (!formData.currentRole) newErrors.currentRole = "Current role is required";
      if (!formData.totalExperience) newErrors.totalExperience = "Total experience is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Here you would typically send the form data to your backend
      console.log("Submitting form:", formData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Application submitted successfully!");
        onClose();
      }, 1500);
    }
  };

  const renderJobSpecificFields = () => {
    switch(job.title) {
      case "Sales Executive":
        return (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Sales Specific Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Total Sales Experience (Years)</label>
                <input
                  type="number"
                  name="salesExperience"
                  value={formData.salesExperience || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Average Deal Size ($)</label>
                <input
                  type="text"
                  name="dealSize"
                  value={formData.dealSize || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm mb-1">Sales Methodology You Follow</label>
                <input
                  type="text"
                  name="salesMethodology"
                  value={formData.salesMethodology || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>
        );
      case "Assistant Project Manager":
        return (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Project Management Specific Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Project Management Tools Used</label>
                <input
                  type="text"
                  name="pmTools"
                  value={formData.pmTools || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Largest Project Budget Managed ($)</label>
                <input
                  type="text"
                  name="projectBudget"
                  value={formData.projectBudget || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm mb-1">Project Management Certification (if any)</label>
                <input
                  type="text"
                  name="pmCertification"
                  value={formData.pmCertification || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>
        );
      case "DevOps, Cloud & Cybersecurity Intern":
        return (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Technical Skills Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Primary Cloud Platform</label>
                <select
                  name="cloudPlatform"
                  value={formData.cloudPlatform || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                >
                  <option value="">Select</option>
                  <option value="AWS">AWS</option>
                  <option value="Azure">Azure</option>
                  <option value="GCP">Google Cloud</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Programming Languages Known</label>
                <input
                  type="text"
                  name="programmingLanguages"
                  value={formData.programmingLanguages || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm mb-1">GitHub Profile (if available)</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
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
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          {/* Basic Information */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
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
            </div>
          </div>

          {/* Experience Level */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Experience Level</h3>
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                onClick={() => setIsExperienced(true)}
                className={`px-6 py-3 rounded-md font-medium ${isExperienced === true ? 'bg-white text-black' : 'bg-gray-800 text-white border border-gray-700'}`}
              >
                Experienced Professional
              </button>
              <button
                type="button"
                onClick={() => setIsExperienced(false)}
                className={`px-6 py-3 rounded-md font-medium ${isExperienced === false ? 'bg-white text-black' : 'bg-gray-800 text-white border border-gray-700'}`}
              >
                Fresher / Student
              </button>
            </div>

            {isExperienced !== null && (
              <div className="mt-4">
                {isExperienced ? (
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
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">University/College</label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Degree Program</label>
                      <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Expected Graduation Year</label>
                      <input
                        type="text"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">GPA/Percentage</label>
                      <input
                        type="text"
                        name="gpa"
                        value={formData.gpa}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Job Specific Fields */}
          {isExperienced !== null && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              {renderJobSpecificFields()}
            </div>
          )}

          {/* Skills */}
          {isExperienced !== null && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Skills</h3>
                <button
                  type="button"
                  onClick={addSkill}
                  className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                >
                  Add Skill
                </button>
              </div>
              <div className="space-y-2">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                    />
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="ml-2 text-red-500 hover:text-red-400"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {isExperienced !== null && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <button
                  type="button"
                  onClick={() => toggleSection('education')}
                  className="text-gray-400 hover:text-white"
                >
                  {expandedSections.education ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              {expandedSections.education && (
                <div className="space-y-4">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
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
                  <button
                    type="button"
                    onClick={() => addArrayItem('education', { degree: "", institution: "", year: "" })}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                  >
                    Add Another Education
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Employment History (for experienced candidates) */}
          {isExperienced === true && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Employment History</h3>
                <button
                  type="button"
                  onClick={() => toggleSection('employment')}
                  className="text-gray-400 hover:text-white"
                >
                  {expandedSections.employment ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              {expandedSections.employment && (
                <div className="space-y-4">
                  {formData.employmentHistory.map((emp, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
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
                            rows="3"
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
                  <button
                    type="button"
                    onClick={() => addArrayItem('employmentHistory', { company: "", role: "", duration: "", responsibilities: "" })}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                  >
                    Add Another Employment
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Projects */}
          {isExperienced !== null && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Projects</h3>
                <button
                  type="button"
                  onClick={() => toggleSection('projects')}
                  className="text-gray-400 hover:text-white"
                >
                  {expandedSections.projects ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              {expandedSections.projects && (
                <div className="space-y-4">
                  {formData.projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
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
                            rows="3"
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
                  <button
                    type="button"
                    onClick={() => addArrayItem('projects', { title: "", description: "", technologies: "" })}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                  >
                    Add Another Project
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Certifications */}
          {isExperienced !== null && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
                <button
                  type="button"
                  onClick={() => toggleSection('certifications')}
                  className="text-gray-400 hover:text-white"
                >
                  {expandedSections.certifications ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              {expandedSections.certifications && (
                <div className="space-y-4">
                  {formData.certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm mb-1">Certification Name</label>
                          <input
                            type="text"
                            value={cert.name}
                            onChange={(e) => handleArrayChange('certifications', index, 'name', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm mb-1">Issuing Organization</label>
                          <input
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => handleArrayChange('certifications', index, 'issuer', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm mb-1">Year Obtained</label>
                          <input
                            type="text"
                            value={cert.year}
                            onChange={(e) => handleArrayChange('certifications', index, 'year', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('certifications', index)}
                          className="text-red-500 hover:text-red-400 text-sm flex items-center mt-3"
                        >
                          <X className="h-4 w-4 mr-1" /> Remove Certification
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('certifications', { name: "", issuer: "", year: "" })}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                  >
                    Add Another Certification
                  </button>
                </div>
              )}
            </div>
          )}

          {/* References */}
          {isExperienced === true && (
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">References</h3>
                <button
                  type="button"
                  onClick={() => toggleSection('references')}
                  className="text-gray-400 hover:text-white"
                >
                  {expandedSections.references ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              {expandedSections.references && (
                <div className="space-y-4">
                  {formData.references.map((ref, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md border border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm mb-1">Name</label>
                          <input
                            type="text"
                            value={ref.name}
                            onChange={(e) => handleArrayChange('references', index, 'name', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm mb-1">Relationship</label>
                          <input
                            type="text"
                            value={ref.relationship}
                            onChange={(e) => handleArrayChange('references', index, 'relationship', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm mb-1">Contact Info</label>
                          <input
                            type="text"
                            value={ref.contact}
                            onChange={(e) => handleArrayChange('references', index, 'contact', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                          />
                        </div>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('references', index)}
                          className="text-red-500 hover:text-red-400 text-sm flex items-center mt-3"
                        >
                          <X className="h-4 w-4 mr-1" /> Remove Reference
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('references', { name: "", relationship: "", contact: "" })}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                  >
                    Add Another Reference
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Documents */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Documents</h3>
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
                  rows="4"
                  placeholder="Tell us why you're a great fit for this position..."
                />
              </div>

              {isExperienced === true && (
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3"
              disabled={isSubmitting || isExperienced === null}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;