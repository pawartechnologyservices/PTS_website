import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, DollarSign, CheckCircle } from "lucide-react";
import { useState } from "react";
import ApplicationForm from "@/components/ApplicationForm";
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const openings = [
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-3 years",
      salary: "To be discussed after interview",
      description: "We're seeking a dynamic Sales Executive to drive business growth and build client relationships. You'll be responsible for identifying new business opportunities and maintaining existing accounts.",
      responsibilities: [
        "Identify and pursue new sales opportunities",
        "Build and maintain strong client relationships",
        "Achieve sales targets and KPIs",
        "Prepare and deliver sales presentations",
        "Collaborate with marketing team on lead generation",
        "Provide market feedback to management"
      ],
      requirements: [
        "Proven 2-3 years of sales experience",
        "Excellent communication and negotiation skills",
        "Ability to build rapport with clients",
        "Self-motivated with a results-driven approach",
        "Bachelor's degree in Business or related field preferred"
      ],
      skills: ["Sales", "Negotiation", "CRM", "Communication", "Market Research"]
    },
    {
      title: "Assistant Project Manager",
      department: "Management",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1-2 years",
      salary: "To be discussed after interview",
      description: "We're looking for an Assistant Project Manager to support our project delivery. You'll assist in planning, coordinating, and implementing projects while ensuring quality standards.",
      responsibilities: [
        "Assist in project planning and scheduling",
        "Coordinate between teams and stakeholders",
        "Track project progress and report updates",
        "Help manage project documentation",
        "Identify and mitigate project risks",
        "Support quality assurance processes"
      ],
      requirements: [
        "1-2 years of project coordination experience",
        "Basic understanding of project management methodologies",
        "Strong organizational and multitasking skills",
        "Proficiency in project management tools",
        "Bachelor's degree in relevant field"
      ],
      skills: ["Project Coordination", "Communication", "Teamwork", "Problem Solving", "Time Management"]
    },
    {
      title: "DevOps, Cloud & Cybersecurity Intern",
      department: "Technology",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      experience: "Freshers welcome",
      salary: "Unpaid (3 months probation)",
      description: "We're offering an exciting internship opportunity for aspiring DevOps, Cloud, and Cybersecurity professionals. After 3 months, performance-based onboarding decisions will be made.",
      responsibilities: [
        "Assist in implementing CI/CD pipelines",
        "Support cloud infrastructure management",
        "Participate in security monitoring activities",
        "Help troubleshoot system issues",
        "Document processes and procedures",
        "Learn and apply best practices in DevOps"
      ],
      requirements: [
        "Pursuing or recently completed degree in CS/IT",
        "Basic knowledge of cloud platforms (AWS/Azure/GCP)",
        "Understanding of cybersecurity fundamentals",
        "Familiarity with Linux and scripting",
        "Strong willingness to learn"
      ],
      skills: ["Cloud Computing", "CI/CD", "Security Basics", "Linux", "Scripting"]
    }
  ];

  const benefits = [
    "Performance-based career growth",
    "Learning and development opportunities",
    "Mentorship from industry experts",
    "Flexible work environment",
    "Networking opportunities",
    "Potential for full-time employment",
    "Practical hands-on experience",
    "Certificate of completion"
  ];

  const cultureValues = [
    {
      icon: "📈",
      title: "Performance-Driven",
      description: "We reward results and dedication"
    },
    {
      icon: "🎓",
      title: "Learning Culture",
      description: "Continuous growth is at our core"
    },
    {
      icon: "🤝",
      title: "Teamwork",
      description: "Collaboration amplifies success"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We value creative problem-solving"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Build Your <span className="text-gray-300">Career</span> With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Join our team of professionals and grow in a dynamic environment that values your skills and dedication.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Current Openings
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our available positions and find your perfect fit.
            </p>
          </div>

          <div className="space-y-8">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-xl border border-gray-800 hover:border-white transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-white mr-2 mt-0.5 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-white mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-6">
                      <h4 className="text-white font-semibold mb-4">Position Details</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-400 text-sm">Department:</span>
                          <div className="text-white">{job.department}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Experience:</span>
                          <div className="text-white">{job.experience}</div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Compensation:</span>
                          <div className="text-white font-semibold">{job.salary}</div>
                        </div>
                      </div>
                    </div>

                <Button 
  className="w-full bg-white text-black hover:bg-gray-200"
  onClick={() => setSelectedJob(job)}
>
  Apply Now
</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've built an environment that fosters growth, collaboration, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-white transition-colors text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                What We Offer
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-white mr-4 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-black p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Our Internship Program</h3>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Duration</span>
                    <span className="text-white font-semibold">3 Months Minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Evaluation</span>
                    <span className="text-white font-semibold">Monthly Performance Reviews</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-white font-semibold">Based on Performance</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Focus Areas</span>
                    <span className="text-white font-semibold">Practical Skills Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Hiring Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Application", description: "Submit your details online" },
              { step: "2", title: "Screening", description: "Initial HR evaluation" },
              { step: "3", title: "Interviews", description: "Technical/functional rounds" },
              { step: "4", title: "Decision", description: "Offer and onboarding" }
            ].map((phase, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="border-2 border-white text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Send us your resume and cover letter to start your journey with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3">
              Submit Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      {selectedJob && (
  <ApplicationForm 
    job={selectedJob} 
    onClose={() => setSelectedJob(null)} 
  />
)}
    </Layout>
  );
};

export default Careers;