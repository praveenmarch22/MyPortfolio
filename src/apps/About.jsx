import React from 'react';

export default function About() {
  return (
    <div className="w-full h-full overflow-y-auto" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 pb-16">
        {/* Hero Section with Image */}
        <div className="relative mb-6 md:mb-8 rounded-2xl md:rounded-3xl overflow-hidden" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}>
          <div className="p-6 sm:p-8 md:p-12 text-center relative">
            {/* Profile Image */}
            <div className="mb-4 md:mb-6 inline-block">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/praveen.jpg" 
                  alt="Praveen Kumar Reddy" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-5xl md:text-7xl font-bold text-white">PK</div>';
                  }}
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Praveen Kumar Reddy</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-4 font-medium">Full Stack Developer</p>
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm md:text-base">
              <span className="text-base md:text-lg">💼</span>
              <span className="font-medium">Apex Cura Healthcare Solutions</span>
            </div>
          </div>
        </div>

        {/* Main About Section */}
        <div className="mb-6 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 bg-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <span className="text-2xl md:text-3xl">👋</span>
            Hello, I'm Praveen
          </h2>
          <div className="space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              I'm a passionate <span className="font-semibold text-purple-600">Full Stack Developer</span> currently 
              working at <span className="font-semibold">Apex Cura Healthcare Solutions</span>, where I build 
              innovative web applications that make healthcare more accessible and efficient.
            </p>
            <p>
              I specialize in creating <span className="font-semibold text-blue-600">scalable, responsive</span> web 
              applications using modern technologies like React, Node.js, and MongoDB. My work focuses on delivering 
              seamless user experiences while maintaining clean, maintainable code.
            </p>
            <p>
              With a strong foundation in both <span className="font-semibold text-green-600">frontend and backend</span> development, 
              I've successfully reduced UI development time by 30% through innovative frameworks and implemented 
              real-time communication systems that enhance user engagement.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl p-6 bg-white shadow-lg text-center">
            <div className="text-4xl mb-2">🎓</div>
            <div className="text-3xl font-bold text-purple-600 mb-1">8.80</div>
            <div className="text-sm text-gray-600 font-medium">CGPA in B.Tech CSE</div>
          </div>
          <div className="rounded-2xl p-6 bg-white shadow-lg text-center">
            <div className="text-4xl mb-2">💼</div>
            <div className="text-3xl font-bold text-blue-600 mb-1">1+ Year</div>
            <div className="text-sm text-gray-600 font-medium">Professional Experience</div>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="mb-6 rounded-2xl p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800 mb-1">Frontend Development</h3>
              <p className="text-sm text-gray-600">React, Redux, Tailwind CSS, TypeScript</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold text-gray-800 mb-1">Backend Development</h3>
              <p className="text-sm text-gray-600">Node.js, Express.js, MongoDB, REST APIs</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-gray-800 mb-1">Real-time Systems</h3>
              <p className="text-sm text-gray-600">WebSockets, Socket.io, Live Chat</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
              <div className="text-2xl mb-2">☁️</div>
              <h3 className="font-semibold text-gray-800 mb-1">Cloud & DevOps</h3>
              <p className="text-sm text-gray-600">AWS EC2, Git, CI/CD, Vercel</p>
            </div>
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="mb-6 rounded-2xl p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-2xl">📍</span>
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                📧
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Email</div>
                <div className="font-medium">praveen.220302@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                📱
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Phone</div>
                <div className="font-medium">+91 9701711749</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                🌍
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Location</div>
                <div className="font-medium">Hyderabad, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-2xl p-8 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Let's Build Something Amazing Together</h2>
          <p className="mb-6 text-white/90 text-lg">
            Open to new opportunities and collaborations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:praveen.220302@gmail.com"
              className="px-6 py-3 rounded-xl font-medium bg-white text-purple-600 hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>📧</span> Send Email
            </a>
            <a
              href="https://github.com/praveenmarch22"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border-2 border-white/30 inline-flex items-center gap-2"
            >
              <span>💻</span> View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border-2 border-white/30 inline-flex items-center gap-2"
            >
              <span>💼</span> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}