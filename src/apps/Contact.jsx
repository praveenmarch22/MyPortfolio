import React from 'react';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'praveen.220302@gmail.com',
      link: 'mailto:praveen.220302@gmail.com',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9701711749',
      link: 'tel:+919701711749',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: '@praveenmarch22',
      link: 'https://github.com/praveenmarch22',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Andhra Pradesh, India',
      link: null,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      link: 'https://github.com/praveenmarch22',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: 'https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:praveen.220302@gmail.com',
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="w-full" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-4xl mx-auto p-8 pb-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">📬 Get In Touch</h1>
          <p className="text-xl text-gray-600">Let's connect and build something amazing together</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>💬</span>
            Contact Information
          </h2>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all duration-200"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center text-2xl shadow-md`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                      <div className="font-medium text-gray-800 text-lg group-hover:text-purple-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center text-2xl shadow-md`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                      <div className="font-medium text-gray-800 text-lg">{info.value}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🌐</span>
            Connect With Me
          </h3>
          <p className="text-white/90 mb-6">
            Follow me on social media for updates and tech discussions
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200 ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>⏰</span>
            Availability
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700">Currently available for freelance projects</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Open to full-time opportunities</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">Response time: Within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Ready to connect?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:praveen.220302@gmail.com"
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>📧</span>
              Email Me
            </a>
            <a
              href="tel:+919701711749"
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>📱</span>
              Call Me
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:from-blue-800 hover:to-black transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

