import React from 'react';

export default function About() {
  return (
    <div className="w-full h-full overflow-y-auto bg-[#f2f2f7]">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 pb-16">
        {/* iOS-style Header Card */}
        <div className="mb-4 rounded-3xl overflow-hidden bg-white shadow-sm">
          <div className="relative">
            {/* Gradient Background */}
            <div className="h-32 bg-gradient-to-br from-[#5E5CE6] to-[#007AFF]"></div>

            {/* Profile Section */}
            <div className="px-6 pb-6">
              {/* Profile Image */}
              <div className="relative -mt-16 mb-4">
                <div className="w-28 h-28 rounded-full bg-white p-1.5 inline-block shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="/praveen.jpg"
                      alt="Praveen Kumar Reddy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-4xl font-bold text-white">PK</div>';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Praveen Kumar Reddy</h1>
              <p className="text-base text-gray-500 mb-3">Full Stack Developer</p>

              {/* Company Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100">
                <span className="text-sm">💼</span>
                <span className="text-sm font-medium text-gray-700">Apex Cura Healthcare</span>
              </div>
            </div>
          </div>
        </div>

        {/* iOS-style About Section */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-xl">👋</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">About Me</h2>
            </div>
            <div className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer at Apex Cura Healthcare Solutions, building innovative web applications that make healthcare more accessible.
              </p>
              <p>
                I specialize in creating scalable, responsive applications using React, Node.js, and MongoDB, focusing on seamless user experiences and clean code.
              </p>
              <p>
                With expertise in both frontend and backend development, I've reduced UI development time by 30% and implemented real-time systems that enhance engagement.
              </p>
            </div>
          </div>
        </div>

        {/* iOS-style Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-3xl bg-white shadow-sm p-5 text-center">
            <div className="text-3xl mb-2">🎓</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8.80</div>
            <div className="text-xs text-gray-500 font-medium">CGPA</div>
          </div>
          <div className="rounded-3xl bg-white shadow-sm p-5 text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1+ Year</div>
            <div className="text-xs text-gray-500 font-medium">Experience</div>
          </div>
        </div>

        {/* iOS-style Expertise Section */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Core Expertise</h2>
            </div>

            {/* iOS List Style */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 active:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                  🎨
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-medium text-gray-900">Frontend Development</div>
                  <div className="text-xs text-gray-500">React, Redux, Tailwind CSS</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 active:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                  ⚙️
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-medium text-gray-900">Backend Development</div>
                  <div className="text-xs text-gray-500">Node.js, Express, MongoDB</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 active:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                  🔄
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-medium text-gray-900">Real-time Systems</div>
                  <div className="text-xs text-gray-500">WebSockets, Socket.io</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 active:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm flex-shrink-0">
                  ☁️
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-medium text-gray-900">Cloud & DevOps</div>
                  <div className="text-xs text-gray-500">AWS EC2, Git, CI/CD</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iOS-style Contact Section */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <span className="text-xl">�</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
            </div>

            <div className="space-y-2">
              <a href="mailto:praveen.220302@gmail.com" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 active:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📧</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Email</div>
                  <div className="text-[15px] text-blue-500 truncate">praveen.220302@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919701711749" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 active:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📱</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Phone</div>
                  <div className="text-[15px] text-gray-900">+91 9701711749</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
                <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📍</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Location</div>
                  <div className="text-[15px] text-gray-900">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iOS-style CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-[#5E5CE6] to-[#007AFF] shadow-lg p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Let's Connect</h2>
          <p className="mb-5 text-white/90 text-sm">
            Open to new opportunities
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/praveenmarch22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full font-semibold bg-white text-blue-600 active:scale-95 transition-transform"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full font-semibold bg-white/20 backdrop-blur-sm active:scale-95 transition-transform border border-white/30"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}