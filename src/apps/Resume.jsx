import React from 'react';

export default function Resume() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // PDF file should be in public folder
    link.download = 'Praveen_Kumar_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeData = {
    personal: {
      name: "Praveen Kumar Reddy Chinthapulusu",
      title: "Full Stack Developer",
      email: "praveen.220302@gmail.com",
      phone: "+91 9701711749",
      location: "Andhra Pradesh, India",
      linkedin: "linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253",
      github: "github.com/praveenmarch22"
    },
    summary: "Passionate Full Stack Developer with 1+ year of experience in building scalable web applications. Specialized in React.js, Node.js, and MongoDB. Proven track record of reducing development time and implementing innovative solutions in healthcare technology.",
    experience: [
      {
        company: "Apex Cura Healthcare Solutions",
        position: "Full Stack Developer",
        duration: "March 2024 - Present",
        location: "India (Remote)",
        achievements: [
          "Reduced UI development time by 30% through JSON-driven framework",
          "Engineered real-time communication features using WebSockets",
          "Developed responsive user interfaces using React, Redux, and Tailwind CSS",
          "Implemented automated workflows using cron jobs"
        ]
      }
    ],
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "RGUKT RK Valley",
        duration: "August 2019 - May 2023",
        cgpa: "8.80"
      }
    ],
    skills: {
      frontend: ["React.js", "JavaScript", "TypeScript", "Redux Toolkit", "Tailwind CSS", "HTML5/CSS3"],
      backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "WebSockets", "Socket.io"],
      tools: ["Git/GitHub", "AWS EC2", "Vercel", "Jest", "Webpack"]
    },
    projects: [
      {
        name: "DevTinder",
        tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Razorpay"],
        description: "Professional networking platform for developers with real-time chat and payment gateway"
      },
      {
        name: "FoodApp",
        tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Jest"],
        description: "Food ordering application with Swiggy API integration and optimized search"
      },
      {
        name: "WeTube",
        tech: ["React.js", "Redux Toolkit", "YouTube API"],
        description: "YouTube clone with live chat and N-level nested comments system"
      }
    ]
  };

  return (
    <div className="w-full" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-4xl mx-auto p-8 pb-16">
        {/* Header with Download Button */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">📄 Resume</h1>
          <p className="text-xl text-gray-600 mb-6">Professional Experience & Qualifications</p>
          <button
            onClick={handleDownload}
            className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Resume
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{resumeData.personal.name}</h2>
            <p className="text-xl text-purple-600 font-semibold mb-4">{resumeData.personal.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span>📧</span> {resumeData.personal.email}
              </div>
              <div className="flex items-center gap-1">
                <span>📱</span> {resumeData.personal.phone}
              </div>
              <div className="flex items-center gap-1">
                <span>📍</span> {resumeData.personal.location}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>👤</span>
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>💼</span>
            Work Experience
          </h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-purple-600 pl-6 pb-4">
              <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
              <p className="text-lg text-purple-600 font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-3">{exp.duration} | {exp.location}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 mt-1">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🎓</span>
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
              <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.duration}</p>
              <p className="text-lg font-bold text-gray-800 mt-2">CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🛠️</span>
            Technical Skills
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frontend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.backend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-medium shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-medium shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🚀</span>
            Key Projects
          </h3>
          <div className="space-y-4">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6 pb-4">
                <h4 className="text-xl font-bold text-gray-800">{project.name}</h4>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">View More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/praveenmarch22"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border-2 border-white/30 inline-flex items-center gap-2"
            >
              <span>💻</span> GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border-2 border-white/30 inline-flex items-center gap-2"
            >
              <span>💼</span> LinkedIn Profile
            </a>
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-xl font-medium bg-white text-purple-600 hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>📥</span> Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
