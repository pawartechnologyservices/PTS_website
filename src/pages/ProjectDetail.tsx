import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Code, CheckCircle, ArrowUpRight, Star, Zap, Award, Globe } from "lucide-react";

interface Milestone {
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  client: string;
  technology: string;
  timeline: string;
  image: string;
  progress: number;
  tags: string[];
  rating: number;
  link: string | null;
  isSecurity?: boolean;
  details?: {
    objectives?: string[];
    tools?: { category: string; tools: string }[];
    issues?: { problem: string; solution: string }[];
    modulesTested?: { module: string; status: string; notes: string }[];
    deliverables?: string[];
    riskAssessment?: { category: string; severity: string; status: string }[];
  };
}

const projects: Project[] = [
    {
      id: "1",
      title: "Delight Properties and Consultant",
      description: "High-performance real estate portal with excellent property showcasing capabilities.",
      status: "Completed",
      client: "Delight Properties",
      technology: "Next.js, Tailwind CSS, Node.js",
      timeline: "3 months",
      image: "/image/brand/Dig.png",
      progress: 100,
      tags: ["Real Estate", "Property Management"],
      rating: 4.8,
      link: "https://delightpropertiesandconsultant.com/"
    },
    {
      id: "2",
      title: "Alburaak Fashion",
      description: "Scalable e-commerce platform that handles fashion inventory and transactions seamlessly.",
      status: "Completed",
      client: "Alburaak Fashion",
      technology: "Next.js, Shopify, Stripe",
      timeline: "4 months",
      image: "/image/brand/Al.png",
      progress: 100,
      tags: ["E-commerce", "Fashion Retail"],
      rating: 4.9,
      link: "https://www.alburaakfashion.com/"
    },
    {
      id: "3",
      title: "Vistabella Realty",
      description: "Interactive real estate website with property filtering and contact management features.",
      status: "Completed",
      client: "Vistabella Realty",
      technology: "React.js, Firebase, Google Maps API",
      timeline: "2.5 months",
      image: "/image/brand/v.png",
      progress: 100,
      tags: ["Real Estate", "Property Listings"],
      rating: 4.7,
      link: "https://vistabellarealty.in/#contact"
    },
    {
      id: "4",
      title: "Celeb Fashion",
      description: "Fast, SEO-optimized fashion e-commerce platform with smooth checkout process.",
      status: "Completed",
      client: "Celeb Fashion",
      technology: "Next.js, MongoDB, Stripe",
      timeline: "3 months",
      image: "/image/brand/c.png",
      progress: 100,
      tags: ["E-commerce", "Fashion"],
      rating: 4.9,
      link: "https://www.celebfashion.in/"
    },
    {
      id: "5",
      title: "Edera Facility Solutions",
      description: "Modern facility management portal with service request tracking capabilities.",
      status: "Completed",
      client: "Edera Facility Solutions",
      technology: "Next.js, Node.js, PostgreSQL",
      timeline: "4 months",
      image: "/image/brand/e.png",
      progress: 100,
      tags: ["Facility Management", "Services"],
      rating: 4.6,
      link: "https://edera.in/"
    },
    {
      id: "6",
      title: "Zarinova",
      description: "A futuristic, animation-rich event platform that supports booking management.",
      status: "Completed",
      client: "Zarinova Event Management",
      technology: "Next.js, Node.js, PostgreSQL",
      timeline: "4 months",
      image: "/image/brand/Z.png",
      progress: 100,
      tags: ["Events", "Entertainment"],
      rating: 5.0,
      link: "https://www.zarinovaevents.com/gallery"
    },
    {
        id: "7",
      title: "Dharma Website Security Audit",
      description: "Full security assessment and UI testing for spiritual NGO website.",
      status: "Completed",
      client: "Dharma Organization",
      technology: "OWASP ZAP, Nikto, Nmap, Postman",
      timeline: "4 weeks",
      image: "/image/brand/dharma-security.png",
      progress: 100,
      tags: ["Web Security", "Static Site Audit", "UI Testing"],
      rating: 4.8,
      link: "https://dharma-website-6.netlify.app",
      isSecurity: true,
      details: {
        objectives: [
          "Identify vulnerabilities in frontend and Netlify hosting",
          "Evaluate forms, navigation links, and file permissions",
          "Validate security headers and SSL configuration",
          "Provide actionable fixes and verification"
        ],
        tools: [
          { category: "Vulnerability Scanning", tools: "OWASP ZAP" },
          { category: "Web Server Scan", tools: "Nikto" },
          { category: "Network Discovery", tools: "Nmap" },
          { category: "API & Form Testing", tools: "Postman" },
          { category: "Header Analysis", tools: "SecurityHeaders.com" },
          { category: "UI/UX Testing", tools: "Chrome DevTools" }
        ],
        issues: [
          { problem: "Missing Security Headers", solution: "Added _headers file in Netlify" },
          { problem: "Broken Buttons", solution: "Fixed navigation links and frontend code" },
          { problem: "No HTTPS Redirection", solution: "Enforced via _redirects file" },
          { problem: "CSRF Protection Missing", solution: "Recommended backend validation" },
          { problem: "Directory Listing Enabled", solution: "Blocked public access to sensitive folders" },
          { problem: "No Rate Limiting", solution: "Suggested API rate-limiting and CAPTCHA" },
          { problem: "No Content Validation", solution: "Enforced input sanitization" }
        ],
        deliverables: [
          "Vulnerability Assessment Report (PDF)",
          "Technical Recommendations with Code Snippets",
          "Before/After Screenshots",
          "UI/UX Testing Checklist (Excel)",
          "Post-fix Verification"
        ],
        riskAssessment: [
          { category: "SSL/TLS & HTTPS", severity: "High", status: "Secured" },
          { category: "Security Headers", severity: "High", status: "Secured" },
          { category: "Navigation & Forms", severity: "Medium", status: "Fixed" },
          { category: "Admin Exposure", severity: "Medium", status: "Blocked" },
          { category: "XSS Protection", severity: "High", status: "Patched" },
          { category: "Rate Limiting", severity: "Medium", status: "Implemented" }
        ]
        
      }
    },
    {
      id: "8",
      title: "CRM Security & QA Testing",
      description: "Full security audit and quality assurance testing for custom CRM software.",
      status: "Completed",
      client: "Confidential (SMB Client)",
      technology: "OWASP ZAP, Burp Suite, Selenium, JMeter",
      timeline: "8 weeks",
      image: "/image/brand/crm-security.png",
      progress: 100,
      tags: ["CRM Security", "QA Testing", "OWASP Top 10"],
      rating: 4.8,
      link: null,
      isSecurity: true,
      details: {
        objectives: [
          "Identify security vulnerabilities in CRM modules and APIs",
          "Test login, lead management, messaging, report generation",
          "Analyze role-based access and session control",
          "Provide technical remediation and security hardening plan"
        ],
        tools: [
          { category: "Vulnerability Testing", tools: "OWASP ZAP, Burp Suite, Nikto, SQLMap" },
          { category: "Functional Testing", tools: "Postman, Manual UI Testing, Selenium, JMeter" },
          { category: "Network Scanning", tools: "Nmap, Wireshark" },
          { category: "Header & Cookie Check", tools: "SecurityHeaders.com, DevTools, Cookie Editor" },
          { category: "Password Testing", tools: "Hydra, John the Ripper" },
          { category: "Reporting", tools: "Excel, Word, Screenshot Captures" }
        ],
        issues: [
          { problem: "Insecure Login Authentication", solution: "Added CAPTCHA, rate limit, 2FA" },
          { problem: "Sensitive Data in URLs", solution: "Replaced with POST + tokenized URLs" },
          { problem: "SQL Injection on Lead Search", solution: "Parameterized queries, sanitized inputs" },
          { problem: "Cross-Site Scripting (XSS)", solution: "Input encoding added on both client & server" },
          { problem: "CSRF Vulnerabilities", solution: "Integrated CSRF protection on backend" },
          { problem: "Broken Role-Based Access", solution: "Applied strict middleware-level access checks" },
          { problem: "Session Timeout Missing", solution: "Implemented auto-logout after inactivity" }
        ],
        modulesTested: [
          { module: "Login System", status: "✅ Passed", notes: "After applying 2FA & brute force fix" },
          { module: "Lead Management", status: "✅ Passed", notes: "All CRUD operations validated" },
          { module: "Task Scheduling", status: "⚠️ Minor Fixes", notes: "Time-zone bug fixed" },
          { module: "Messaging (Client Chat)", status: "✅ Passed", notes: "Secure WebSocket tested" },
          { module: "Reporting System", status: "✅ Passed", notes: "PDF exports & filters validated" },
          { module: "Admin Panel Access", status: "✅ Passed", notes: "Secured via RBAC" }
        ],
        deliverables: [
          "Vulnerability Audit Report (PDF)",
          "QA Functional Testing Checklist (Excel)",
          "Screenshots of Bugs and Proof-of-Concept Attacks",
          "Recommendations with Code Snippets",
          "Compliance Readiness for OWASP Top 10"
        ]
      }
    },
    {
      id: "9",
      title: "ERP Software Security Audit",
      description: "Comprehensive cybersecurity assessment and quality assurance testing for custom ERP system.",
      status: "Completed",
      client: "Confidential (Mid-size Indian company)",
      technology: "OWASP ZAP, Burp Suite, Selenium, JMeter, SQLmap",
      timeline: "8 weeks",
      image: "/image/brand/erp-security.png",
      progress: 100,
      tags: ["ERP Security", "Penetration Testing", "QA Testing"],
      rating: 4.9,
      link: null,
      isSecurity: true,
      details: {
        objectives: [
          "Conduct end-to-end functional testing of all modules",
          "Identify critical web application vulnerabilities",
          "Assess the API and database security",
          "Provide technical report with fixes and patch plans"
        ],
        tools: [
          { category: "Functional Testing", tools: "Postman, Selenium, JMeter, Manual Testing" },
          { category: "Vulnerability Scan", tools: "OWASP ZAP, Nikto, Nmap, SQLmap" },
          { category: "Network Scan", tools: "Nmap, Wireshark" },
          { category: "API Testing", tools: "Postman" },
          { category: "Security Analysis", tools: "Burp Suite, SecurityHeaders.com, DevTools" },
          { category: "Password Testing", tools: "Hydra, John the Ripper" }
        ],
        issues: [
          { problem: "Broken Authentication", solution: "Added 2FA, rate-limiting, and CAPTCHA" },
          { problem: "Insecure APIs", solution: "Added token validation and access control" },
          { problem: "SQL Injection", solution: "Implemented parameterized queries" },
          { problem: "Missing Security Headers", solution: "Configured CSP, HSTS headers" },
          { problem: "Session Hijacking Risk", solution: "Enabled secure cookie attributes" },
          { problem: "Broken Business Logic", solution: "Added backend validation checks" },
          { problem: "Improper RBAC", solution: "Implemented middleware permission checks" },
          { problem: "Unencrypted Passwords", solution: "Switched to bcrypt hashing" }
        ],
        deliverables: [
          "PDF Vulnerability Report",
          "Functional Bug Report (Excel)",
          "Screenshot Evidence",
          "Fixed Code Snippets (GitHub Repo)",
          "API Security Checklist",
          "Final Compliance Certificate"
        ],
        riskAssessment: [
          { category: "Authentication & Sessions", severity: "High", status: "Secured" },
          { category: "Input/Output Handling", severity: "High", status: "Secured" },
          { category: "API Authorization", severity: "Medium", status: "Fixed" },
          { category: "User Interface Bugs", severity: "Medium", status: "Fixed" },
          { category: "Headers & HTTPS", severity: "High", status: "Patched" },
          { category: "File/DB Access Controls", severity: "High", status: "Secured" }
        ]
      }
    },
    {
      id: "10",
      title: "Billing Software Security Audit",
      description: "Comprehensive cybersecurity assessment and testing for retail billing software.",
      status: "Completed",
      client: "Confidential (Retail Business)",
      technology: "OWASP ZAP, SQLmap, Burp Suite, Selenium",
      timeline: "6 weeks",
      image: "/image/brand/security.png",
      progress: 100,
      tags: ["Cybersecurity", "Penetration Testing", "GST Compliance"],
      rating: 4.9,
      link: null,
      isSecurity: true,
      details: {
        objectives: [
          "Test complete billing workflow and data integrity",
          "Identify security vulnerabilities (price tampering, PDF manipulation)",
          "Validate authentication and session security",
          "Check OWASP Top 10 and GST compliance"
        ],
        tools: [
          { category: "Vulnerability Testing", tools: "OWASP ZAP, SQLmap, Nikto" },
          { category: "Functional Testing", tools: "Manual UI Testing, Postman, Selenium" },
          { category: "Header & Auth Checks", tools: "SecurityHeaders.com, Burp Suite" },
          { category: "Network Testing", tools: "Nmap, Wireshark" },
          { category: "Data Validation", tools: "Excel, JSON Validator, JMeter" },
          { category: "PDF Invoice Testing", tools: "PDF.js, Custom Scripts" }
        ],
        issues: [
          { problem: "Price Tampering via URL", solution: "Backend verification added" },
          { problem: "Invoice ID Enumeration", solution: "Tokenized access validation" },
          { problem: "SQL Injection on Search", solution: "Parameterized SQL statements" },
          { problem: "Missing CSRF Protection", solution: "CSRF tokens implemented" },
          { problem: "Broken Session Management", solution: "Cookie timeout & auto-logout" },
          { problem: "Insecure PDF Files", solution: "Signed and password-protected PDFs" },
          { problem: "Incorrect GST Calculation", solution: "Fixed formula and unit testing" }
        ],
        deliverables: [
          "Full Cybersecurity Audit Report (PDF)",
          "Functional Testing Checklist (Excel)",
          "Code Snippets for Fixes (GitHub Repo)",
          "Screenshots (Before/After Proof)",
          "Final Certification of Software Readiness"

        ]
      }
    }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <section className="pt-24 pb-20 bg-gradient-to-r from-indigo-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Project Not Found</h1>
            <p className="text-xl text-gray-200">The project you're looking for doesn't exist.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section 
        className="pt-24 pb-20 relative bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-fade-in font-serif">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in animation-delay-200">
              {project.description}
            </p>
            
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.timeline}</div>
              <div className="text-gray-300">Timeline</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.technology.split(',')[0]}</div>
              <div className="text-gray-300">Primary Technology</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.status}</div>
              <div className="text-gray-300">Status</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{project.rating}/5</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-indigo-900/50 text-indigo-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">Project Overview</h2>
                </div>
                <p className="text-gray-300">
                  {project.description} The project was delivered on time and within budget, achieving all the client's objectives and receiving excellent feedback.
                </p>
              </div>

              {/* Technology Stack */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-900/50 text-blue-400">
                    <Code className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">Technology Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technology.split(',').map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-green-900/50 text-green-400">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">Project Tags</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full bg-indigo-900/20 text-indigo-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start text-gray-300">
                    <Users className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Client</div>
                      <div className="font-medium">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="font-medium">{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Code className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Technology</div>
                      <div className="font-medium">{project.technology}</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Star className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" />
                    <div>
                      <div className="text-sm text-gray-400">Client Rating</div>
                      <div className="font-medium flex items-center">
                        {project.rating}/5 
                        <span className="ml-2 text-yellow-400 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(project.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Status */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Project Status</h3>
                <div className="flex items-center">
                  <div className="relative w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-green-500 h-4 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-green-400 font-medium">{project.progress}%</span>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  {project.status} - {project.timeline}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Like what you see?</h3>
                <p className="text-gray-300 mb-4">Let's discuss how we can help with your next project.</p>
                <Button className="w-full bg-white text-indigo-900 hover:bg-white/90">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;