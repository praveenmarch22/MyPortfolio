import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: "DevTinder",
      tagline: "Tinder for Developers",
      description: "A professional networking platform for developers to connect, collaborate, and build relationships. Features real-time chat, profile matching, and integrated payment gateway.",
      image: "💻",
      gradient: "from-pink-500 to-rose-600",
      tech: ["React.js", "Redux", "Daisy UI", "Node.js", "Express.js", "MongoDB", "Socket.io", "Razorpay"],
      features: [
        "Real-time chat with Socket.io",
        "Developer profile matching algorithm",
        "Razorpay payment gateway integration",
        "Deployed on Amazon EC2",
        "Responsive UI with Daisy UI"
      ],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      name: "FoodApp",
      tagline: "Food Delivery Experience",
      description: "A modern food ordering application integrating Swiggy's live API for real-time menu updates. Features optimized search, cart persistence, and smooth user experience.",
      image: "🍔",
      gradient: "from-orange-500 to-red-600",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Jest", "Parcel"],
      features: [
        "Live API integration with Swiggy",
        "Optimized search with custom hooks",
        "Cart persistence with localStorage",
        "ShimmerUI and Lazy Loading",
        "Unit & integration tests with Jest",
        "Deployed on Vercel"
      ],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      name: "WeTube",
      tagline: "YouTube Clone",
      description: "A YouTube-inspired video platform featuring live chat, N-level comments, and optimized search functionality with debouncing for enhanced performance.",
      image: "📹",
      gradient: "from-red-500 to-pink-600",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "YouTube API", "Webpack"],
      features: [
        "YouTube API integration",
        "Optimized search with debouncing",
        "N-level nested comments system",
        "Live chat with API polling",
        "Redux Toolkit for state management",
        "Smooth routing with React Router"
      ],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <div className="h-full w-full overflow-y-auto" style={{
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e8ecf1 100%)',
    }}>
      <div className="max-w-6xl mx-auto p-8 pb-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">🚀 Projects</h1>
          <p className="text-xl text-gray-600">Building Scalable Web Applications</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div 
                className="p-8 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(' to-', ', ')})`,
                }}
              >
                <div className="absolute top-0 right-0 text-9xl opacity-10 -mt-4 -mr-4">
                  {project.image}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-6xl mb-4">{project.image}</div>
                      <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                      <p className="text-xl text-white/90 font-medium mb-4">{project.tagline}</p>
                    </div>
                  </div>
                  <p className="text-white/95 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span>⚡</span>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r text-white shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(' to-', ', ')})`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span>✨</span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="flex-1 px-6 py-3 rounded-xl font-medium text-center transition-all duration-200 bg-gray-900 text-white hover:bg-gray-800 shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                  <a
                    href={project.links.live}
                    className="flex-1 px-6 py-3 rounded-xl font-medium text-center transition-all duration-200 text-white shadow-lg flex items-center justify-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(' to-', ', ')})`,
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Want to see more?</h2>
          <p className="mb-6 text-white/90">
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com/praveen"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium bg-white text-purple-600 hover:bg-gray-100 transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}