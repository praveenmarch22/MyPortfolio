import React from 'react';

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rajiv Gandhi University of Knowledge and Technologies",
      location: "RK Valley, Kadapa",
      duration: "August 2019 - May 2023",
      cgpa: "8.80",
      color: "from-blue-500 to-purple-600",
      icon: "🎓",
      highlights: [
        "Specialized in Full Stack Development",
        "Completed major projects in Web Technologies",
        "Active participant in coding competitions",
        "Strong foundation in Data Structures and Algorithms"
      ]
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "RGUKT RK Valley",
      location: "Kadapa",
      duration: "August 2017 - May 2019",
      cgpa: "8.16",
      color: "from-green-500 to-teal-600",
      icon: "📚",
      highlights: [
        "Foundation in Mathematics and Physics",
        "Introduction to Programming Fundamentals",
        "Developed analytical and problem-solving skills"
      ]
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Zilla Parishad High School",
      location: "Arikela",
      duration: "July 2016 - May 2017",
      cgpa: "10.0",
      color: "from-yellow-500 to-orange-600",
      icon: "🏆",
      highlights: [
        "Perfect CGPA of 10.0",
        "Strong academic performance across all subjects",
        "School topper"
      ]
    }
  ];

  return (
    <div className="w-full" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-4xl mx-auto p-8 pb-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">🎓 Education</h1>
          <p className="text-xl text-gray-600">Academic Journey & Achievements</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 rounded-full"></div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-4 w-9 h-9 rounded-full flex items-center justify-center text-xl shadow-lg bg-gradient-to-r ${edu.color}`}
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div 
                    className={`p-6 text-white bg-gradient-to-r ${edu.color}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                        <p className="text-white/90 text-lg font-medium">{edu.institution}</p>
                        <p className="text-white/80 text-sm">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold mb-1">{edu.cgpa}</div>
                        <div className="text-sm text-white/90">CGPA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-lg">✨</span>
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-500 font-bold mt-1">•</span>
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

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-bold text-blue-600 mb-1">8.80</div>
            <div className="text-gray-600 font-medium">B.Tech CGPA</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-green-600 mb-1">10.0</div>
            <div className="text-gray-600 font-medium">10th CGPA</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-2">📅</div>
            <div className="text-3xl font-bold text-purple-600 mb-1">4+</div>
            <div className="text-gray-600 font-medium">Years Studied</div>
          </div>
        </div>
      </div>
    </div>
  );
}