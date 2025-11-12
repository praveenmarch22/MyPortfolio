import React from 'react';

export default function Experience() {
  const experience = {
    company: "Apex Cura Healthcare Solutions",
    position: "Full Stack Developer",
    duration: "Mar 2024 - Present",
    location: "India (Remote)",
    type: "Full-time",
    logo: "🏥",
    achievements: [
      {
        title: "UI Development Optimization",
        description: "Reduced UI development time by 30% through JSON-driven framework.",
        icon: "⚡",
        impact: "30% faster",
        color: "bg-blue-500"
      },
      {
        title: "Real-time Communication",
        description: "Engineered real-time features using WebSockets for instant notifications.",
        icon: "💬",
        impact: "Enhanced engagement",
        color: "bg-green-500"
      },
      {
        title: "Responsive UI Development",
        description: "Developed responsive interfaces using React, Redux, and Tailwind CSS.",
        icon: "🎨",
        impact: "Cross-platform",
        color: "bg-purple-500"
      },
      {
        title: "Process Automation",
        description: "Automated feedback processing with WhatsApp notifications via cron jobs.",
        icon: "🤖",
        impact: "Automated workflows",
        color: "bg-orange-500"
      },
      {
        title: "Backend API Development",
        description: "Designed scalable APIs with Node.js, validation, and role-based access.",
        icon: "🔧",
        impact: "Scalable architecture",
        color: "bg-indigo-500"
      }
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit",
      "Tailwind CSS", "WebSockets", "TypeScript", "Jest", "Ant Design"
    ]
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f2f2f7]">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 pb-16">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">💼 Experience</h1>
          <p className="text-[15px] text-gray-500">Professional journey & achievements</p>
        </div>

        {/* Company card */}
        <div className="rounded-3xl bg-white shadow-sm overflow-hidden mb-4">
          {/* Company header with gradient */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#5E5CE6] to-[#007AFF] p-6 text-white">
            <div className="absolute top-0 right-0 text-8xl opacity-10 -mt-2 -mr-2">
              {experience.logo}
            </div>
            <div className="relative z-10">
              <div className="text-4xl mb-3">{experience.logo}</div>
              <h2 className="text-xl font-bold mb-1">{experience.company}</h2>
              <p className="text-[17px] font-semibold mb-3 text-white/95">{experience.position}</p>
              <div className="flex flex-wrap gap-3 text-[13px] text-white/90">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{experience.type}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="p-4">
            <h3 className="text-[17px] font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
              <span>🏆</span>
              Key Achievements
            </h3>
            <div className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="rounded-2xl bg-gray-50 overflow-hidden active:bg-gray-100 transition-colors"
                >
                  <div className="p-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${achievement.color} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[15px] font-semibold text-gray-900 mb-0.5">{achievement.title}</h4>
                        <p className="text-[13px] text-gray-600 mb-1.5">{achievement.description}</p>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                          📈 {achievement.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="rounded-3xl bg-white shadow-sm p-4 mb-4">
          <h3 className="text-[17px] font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
            <span>🛠️</span>
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-[13px] font-medium bg-gray-100 text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="rounded-3xl bg-white shadow-sm p-4">
          <h3 className="text-[17px] font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
            <span>📊</span>
            Timeline
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                2024
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-gray-900">Apex Cura Healthcare</div>
                <div className="text-[13px] text-gray-600">Full Stack Developer</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                2023
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-gray-900">B.Tech CSE Graduate</div>
                <div className="text-[13px] text-gray-600">CGPA: 8.80</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
