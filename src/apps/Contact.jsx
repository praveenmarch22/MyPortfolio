import React from 'react';

export default function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'praveen.220302@gmail.com',
      link: 'mailto:praveen.220302@gmail.com',
      color: 'bg-blue-500'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9701711749',
      link: 'tel:+919701711749',
      color: 'bg-green-500'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/',
      color: 'bg-blue-600'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: '@praveenmarch22',
      link: 'https://github.com/praveenmarch22',
      color: 'bg-gray-700'
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f2f2f7]">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 pb-16">
        {/* Header Section */}
        <div className="mb-4 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#5E5CE6] to-[#007AFF] flex items-center justify-center text-4xl shadow-lg">
            📬
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Get In Touch</h1>
          <p className="text-[15px] text-gray-500">Let's connect and collaborate</p>
        </div>

        {/* Contact Methods - iOS List Style */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-4 active:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-medium text-gray-900">{method.label}</div>
                  <div className="text-[13px] text-gray-500 truncate">{method.value}</div>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-lg flex-shrink-0">
              📍
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-gray-900">Location</div>
              <div className="text-[13px] text-gray-500">Hyderabad, India</div>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm overflow-hidden">
          <div className="p-4">
            <h2 className="text-[17px] font-semibold text-gray-900 mb-3">Availability</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-[15px] text-gray-700">Open for freelance projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-[15px] text-gray-700">Available for full-time opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-[15px] text-gray-700">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media - iOS Style */}
        <div className="mb-4 rounded-3xl bg-white shadow-sm p-4">
          <h2 className="text-[17px] font-semibold text-gray-900 mb-3">Follow Me</h2>
          <div className="flex gap-3">
            <a
              href="https://github.com/praveenmarch22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-20 rounded-2xl bg-gray-100 active:bg-gray-200 transition-colors flex flex-col items-center justify-center gap-1"
            >
              <div className="text-2xl">💻</div>
              <div className="text-xs font-medium text-gray-700">GitHub</div>
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-reddy-chinthapulusu-478676253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-20 rounded-2xl bg-blue-50 active:bg-blue-100 transition-colors flex flex-col items-center justify-center gap-1"
            >
              <div className="text-2xl">💼</div>
              <div className="text-xs font-medium text-blue-700">LinkedIn</div>
            </a>
            <a
              href="mailto:praveen.220302@gmail.com"
              className="flex-1 h-20 rounded-2xl bg-red-50 active:bg-red-100 transition-colors flex flex-col items-center justify-center gap-1"
            >
              <div className="text-2xl">📧</div>
              <div className="text-xs font-medium text-red-700">Email</div>
            </a>
          </div>
        </div>

        {/* Quick Actions - iOS Style Buttons */}
        <div className="rounded-3xl bg-white shadow-sm p-4">
          <h2 className="text-[17px] font-semibold text-gray-900 mb-3">Quick Actions</h2>
          <div className="space-y-2">
            <a
              href="mailto:praveen.220302@gmail.com"
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#5E5CE6] to-[#007AFF] text-white font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span>📧</span>
              Send Email
            </a>
            <a
              href="tel:+919701711749"
              className="w-full py-3 px-4 rounded-full bg-gray-100 text-gray-900 font-semibold text-[15px] flex items-center justify-center gap-2 active:bg-gray-200 transition-colors"
            >
              <span>📱</span>
              Call Now
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}