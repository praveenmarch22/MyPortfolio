import React from 'react';

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Rajiv Gandhi University of Knowledge and Technologies",
      location: "RK Valley, Kadapa",
      duration: "Aug 2019 - May 2023",
      cgpa: "8.80",
      icon: "🎓",
      iconBg: "bg-blue-500",
      highlights: [
        "Specialized in Full Stack Development",
        "Major projects in Web Technologies",
        "Active in coding competitions",
        "Strong DSA foundation"
      ]
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "RGUKT RK Valley",
      location: "Kadapa",
      duration: "Aug 2017 - May 2019",
      cgpa: "8.16",
      icon: "📚",
      iconBg: "bg-green-500",
      highlights: [
        "Mathematics and Physics foundation",
        "Programming fundamentals",
        "Analytical and problem-solving skills"
      ]
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Zilla Parishad High School",
      location: "Arikela",
      duration: "Jul 2016 - May 2017",
      cgpa: "10.0",
      icon: "🏆",
      iconBg: "bg-yellow-500",
      highlights: [
        "Perfect CGPA of 10.0",
        "Strong academic performance",
        "School topper"
      ]
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f2f2f7]">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 pb-16">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">🎓 Education</h1>
          <p className="text-[15px] text-gray-500">Academic journey & achievements</p>
        </div>

        {/* Timeline */}
        <div className="relative mb-4">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Education items */}
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className={`absolute left-0 w-10 h-10 rounded-full ${edu.iconBg} flex items-center justify-center text-white text-lg shadow-md z-10`}>
                  {edu.icon}
                </div>

                {/* Card */}
                <div className="rounded-3xl bg-white shadow-sm overflow-hidden">
                  {/* Header section */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="text-[17px] font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                        <p className="text-[15px] text-gray-700 font-medium">{edu.institution}</p>
                        <p className="text-[13px] text-gray-500">{edu.location}</p>
                      </div>
                      <div className="text-right ml-3">
                        <div className="text-2xl font-bold text-gray-900">{edu.cgpa}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">CGPA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[13px]">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Highlights section */}
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-sm">✨</span>
                      <h4 className="text-[15px] font-semibold text-gray-900">Key Highlights</h4>
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[15px] text-gray-700">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="rounded-3xl bg-white shadow-sm p-4">
          <h2 className="text-[17px] font-semibold text-gray-900 mb-3">Academic Summary</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-2xl bg-blue-50">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-xl font-bold text-blue-600">8.80</div>
              <div className="text-xs text-gray-600">B.Tech</div>
            </div>
            <div className="text-center p-3 rounded-2xl bg-yellow-50">
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-xl font-bold text-yellow-600">10.0</div>
              <div className="text-xs text-gray-600">10th</div>
            </div>
            <div className="text-center p-3 rounded-2xl bg-purple-50">
              <div className="text-2xl mb-1">📅</div>
              <div className="text-xl font-bold text-purple-600">4+</div>
              <div className="text-xs text-gray-600">Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
