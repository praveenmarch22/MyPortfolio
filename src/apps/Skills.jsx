import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Ant Design", level: 80 },
        { name: "Daisy UI", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "WebSockets", level: 80 },
        { name: "Socket.io", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "AWS EC2", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 75 },
        { name: "Parcel", level: 80 },
        { name: "Amazon SES", level: 70 }
      ]
    }
  ];

  const getColorForLevel = (level) => {
    if (level >= 85) return 'bg-green-500';
    if (level >= 70) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  return (
    <div className="w-full" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-6xl mx-auto p-8 pb-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">🚀 Skills & Expertise</h1>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div 
                className={`p-6 text-white bg-gradient-to-r ${category.gradient}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${category.gradient}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📊</span>
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-800">Expert</div>
                <div className="text-sm text-gray-600">85% - 100%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-800">Advanced</div>
                <div className="text-sm text-gray-600">70% - 84%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-3 bg-yellow-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-800">Intermediate</div>
                <div className="text-sm text-gray-600">Below 70%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Competencies */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>✨</span>
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎯", text: "Problem Solving" },
              { icon: "🔄", text: "Agile Development" },
              { icon: "👥", text: "Team Collaboration" },
              { icon: "📱", text: "Responsive Design" },
              { icon: "⚡", text: "Performance Optimization" },
              { icon: "🔒", text: "Security Best Practices" },
              { icon: "📊", text: "Data Structures" },
              { icon: "🧪", text: "Testing & Debugging" }
            ].map((competency, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="text-3xl mb-2">{competency.icon}</div>
                <div className="text-sm font-medium">{competency.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}