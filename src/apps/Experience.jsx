import React from 'react';

export default function Experience() {
  const experience = {
    company: "Apex Cura Healthcare Solutions",
    position: "Full Stack Developer",
    duration: "March 2024 - Present",
    location: "India (Remote)",
    type: "Full-time",
    logo: "🏥",
    achievements: [
      {
        title: "UI Development Optimization",
        description: "Reduced UI development time by 30% through a JSON-driven framework, enabling rapid customization of client-specific interfaces.",
        icon: "⚡",
        impact: "30% faster delivery",
        color: "from-blue-500 to-cyan-600"
      },
      {
        title: "Real-time Communication",
        description: "Engineered real-time communication features using WebSockets to deliver instant notifications for appointments, missed calls, and leads.",
        icon: "💬",
        impact: "Enhanced engagement",
        color: "from-green-500 to-teal-600"
      },
      {
        title: "Responsive UI Development",
        description: "Developed responsive user interfaces using React, Redux, and Tailwind CSS, ensuring seamless and accessible user experiences across healthcare dashboards, chatbots, and administrative modules.",
        icon: "🎨",
        impact: "Cross-platform UX",
        color: "from-purple-500 to-pink-600"
      },
      {
        title: "Process Automation",
        description: "Increased operational efficiency through cron jobs automating feedback processing with WhatsApp notifications.",
        icon: "🤖",
        impact: "Automated workflows",
        color: "from-orange-500 to-red-600"
      },
      {
        title: "Backend API Development",
        description: "Designed and implemented APIs using Node.js including robust validation, role-based access control, and efficient data models to support scalable backend operations.",
        icon: "🔧",
        impact: "Scalable architecture",
        color: "from-indigo-500 to-purple-600"
      }
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit",
      "Tailwind CSS", "WebSockets", "TypeScript", "Jest", "Ant Design"
    ],
    responsibilities: [
      "Full-stack development of healthcare management systems",
      "Real-time feature implementation and optimization",
      "API design and backend architecture",
      "Code review and mentoring junior developers",
      "Performance optimization and testing",
      "Collaboration with cross-functional teams"
    ]
  };

  return (
    <div className="w-full" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-5xl mx-auto p-8 pb-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">💼 Work Experience</h1>
          <p className="text-xl text-gray-600">Professional Journey & Achievements</p>
        </div>

        {/* Company Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          {/* Company Header */}
          <div 
            className="p-8 text-white relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700"
          >
            <div className="absolute top-0 right-0 text-9xl opacity-10 -mt-4 -mr-4">
              {experience.logo}
            </div>
            <div className="relative z-10">
              <div className="text-6xl mb-4">{experience.logo}</div>
              <h2 className="text-3xl font-bold mb-2 text-white">{experience.company}</h2>
              <p className="text-xl text-white/95 font-semibold mb-4">{experience.position}</p>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{experience.type}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Key Achievements */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🏆</span>
                Key Achievements
              </h3>
              <div className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div 
                      className={`p-4 text-white bg-gradient-to-r ${achievement.color}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-1 text-white">{achievement.title}</h4>
                          <p className="text-white/90 text-sm mb-2">{achievement.description}</p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                            <span>📈</span>
                            {achievement.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>🛠️</span>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-white shadow-md bg-gradient-to-r from-indigo-600 to-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📋</span>
                Key Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700 bg-gray-50 rounded-xl p-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📊</span>
            Career Timeline
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                2024
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg">Started at Apex Cura Healthcare</div>
                <div className="text-white/80">Full Stack Developer Position</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                2023
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg">Graduated B.Tech CSE</div>
                <div className="text-white/80">CGPA: 8.80</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}