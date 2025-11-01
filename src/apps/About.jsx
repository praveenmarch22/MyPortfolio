import React from 'react';

export default function About() {
  return (
    <div className="about-content p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">About Me</h1>
          <p className="text-lg text-gray-600">Full Stack Developer & Designer</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bio</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi! I'm a passionate developer with expertise in building modern web applications. 
            I love creating intuitive user experiences and writing clean, maintainable code.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My journey in tech started with curiosity and has evolved into a career focused on 
            crafting innovative solutions that make a difference.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['React', 'JavaScript', 'Node.js', 'Python', 'TailwindCSS', 'Redux'].map((skill) => (
              <div
                key={skill}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Open Source Contributions</li>
            <li>UI/UX Design</li>
            <li>Learning New Technologies</li>
            <li>Building Side Projects</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
          <p className="text-gray-700 mb-4">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
              Email Me
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
