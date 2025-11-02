const ICONS = {
  // ===================== Core Portfolio Apps ===================== //

  bio: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradBio" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4A90E2"/>
        <stop offset="100%" stop-color="#357ABD"/>
      </linearGradient>
      <filter id="shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
        <feOffset dx="0" dy="5" result="offsetblur"/>
        <feFlood flood-color="#000000" flood-opacity="0.2"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradBio)"/>
    <g filter="url(#shadow)">
      <circle cx="512" cy="380" r="140" fill="white" opacity="0.95"/>
      <path d="M280 750c0-128 104-232 232-232s232 104 232 232v50H280z" fill="white" opacity="0.95"/>
    </g>
  </svg>`,

  projects: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradProjects" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#667EEA"/>
        <stop offset="100%" stop-color="#764BA2"/>
      </linearGradient>
      <filter id="shadowProj">
        <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
        <feOffset dx="0" dy="4"/>
        <feFlood flood-color="#000000" flood-opacity="0.25"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradProjects)"/>
    <g filter="url(#shadowProj)">
      <path d="M340 380l120 132-120 132" stroke="white" stroke-width="60" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M560 644h140" stroke="white" stroke-width="60" stroke-linecap="round"/>
    </g>
  </svg>`,

  contact: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradContact" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4A9FF5"/>
        <stop offset="100%" stop-color="#1E88E5"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradContact)"/>
    <g opacity="0.95">
      <rect x="200" y="300" width="624" height="424" rx="30" fill="white"/>
      <path d="M200 330l312 200 312-200" stroke="#1E88E5" stroke-width="40" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`,

  gallery: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradGallery" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD54F"/>
        <stop offset="25%" stop-color="#FFCA28"/>
        <stop offset="50%" stop-color="#FFA726"/>
        <stop offset="75%" stop-color="#FF7043"/>
        <stop offset="100%" stop-color="#EF5350"/>
      </linearGradient>
      <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFE082"/>
        <stop offset="100%" stop-color="#FFB300"/>
      </radialGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradGallery)"/>
    <g transform="translate(512, 512)">
      <circle r="80" fill="#FF6F00"/>
      <g opacity="0.95">
        <ellipse cx="0" cy="-120" rx="90" ry="130" fill="url(#petalGrad)"/>
        <ellipse cx="104" cy="-60" rx="90" ry="130" fill="url(#petalGrad)" transform="rotate(72 0 0)"/>
        <ellipse cx="64" cy="97" rx="90" ry="130" fill="url(#petalGrad)" transform="rotate(144 0 0)"/>
        <ellipse cx="-64" cy="97" rx="90" ry="130" fill="url(#petalGrad)" transform="rotate(216 0 0)"/>
        <ellipse cx="-104" cy="-60" rx="90" ry="130" fill="url(#petalGrad)" transform="rotate(288 0 0)"/>
      </g>
    </g>
  </svg>`,

  terminal: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradTerminal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2D2D2D"/>
        <stop offset="100%" stop-color="#0A0A0A"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradTerminal)"/>
    <g opacity="0.95">
      <path d="M280 420l160 92-160 92" stroke="#4AF626" stroke-width="50" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="520" y="580" width="240" height="50" rx="10" fill="#4AF626"/>
    </g>
  </svg>`,

  game: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradGame" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#66BB6A"/>
        <stop offset="100%" stop-color="#388E3C"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradGame)"/>
    <g opacity="0.95" fill="white">
      <rect x="320" y="460" width="50" height="140" rx="10"/>
      <rect x="290" y="490" width="110" height="50" rx="10"/>
      <circle cx="680" cy="480" r="35"/>
      <circle cx="760" cy="560" r="35"/>
    </g>
  </svg>`,

  // ===================== Bonus Apps for Portfolio ===================== //

  skills: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradSkills" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00BCD4"/>
        <stop offset="100%" stop-color="#0097A7"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradSkills)"/>
    <g opacity="0.95" fill="white">
      <rect x="250" y="300" width="524" height="80" rx="15"/>
      <rect x="250" y="420" width="424" height="80" rx="15"/>
      <rect x="250" y="540" width="324" height="80" rx="15"/>
    </g>
  </svg>`,

  experience: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradExp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFA726"/>
        <stop offset="100%" stop-color="#F57C00"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradExp)"/>
    <g opacity="0.95">
      <rect x="250" y="380" width="524" height="340" rx="30" fill="white"/>
      <rect x="380" y="280" width="80" height="120" rx="15" fill="white"/>
      <rect x="564" y="280" width="80" height="120" rx="15" fill="white"/>
      <circle cx="420" cy="520" r="30" fill="#F57C00"/>
      <rect x="480" y="505" width="180" height="30" rx="8" fill="#FFE0B2"/>
      <rect x="480" y="570" width="140" height="30" rx="8" fill="#FFE0B2"/>
    </g>
  </svg>`,

  certificates: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradCert" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EC407A"/>
        <stop offset="100%" stop-color="#C2185B"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradCert)"/>
    <g opacity="0.95">
      <rect x="220" y="280" width="584" height="440" rx="30" fill="white"/>
      <path d="M512 620 L420 760 L470 660 L420 640 Z" fill="#EC407A"/>
      <path d="M512 620 L604 760 L554 660 L604 640 Z" fill="#EC407A"/>
      <circle cx="512" cy="440" r="80" fill="none" stroke="#EC407A" stroke-width="40"/>
      <path d="M490 440l20 30 40-60" stroke="#EC407A" stroke-width="35" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`,

  blog: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradBlog" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7E57C2"/>
        <stop offset="100%" stop-color="#5E35B1"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradBlog)"/>
    <g opacity="0.95">
      <rect x="240" y="280" width="544" height="464" rx="30" fill="white"/>
      <rect x="300" y="360" width="424" height="40" rx="10" fill="#E1BEE7"/>
      <rect x="300" y="440" width="424" height="40" rx="10" fill="#E1BEE7"/>
      <rect x="300" y="520" width="320" height="40" rx="10" fill="#E1BEE7"/>
    </g>
  </svg>`,

  about: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#AB47BC"/>
        <stop offset="100%" stop-color="#7B1FA2"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradAbout)"/>
    <g opacity="0.95" fill="white">
      <circle cx="512" cy="380" r="90"/>
      <rect x="460" y="520" width="104" height="240" rx="52"/>
    </g>
  </svg>`,

  resume: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradResume" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6B6B"/>
        <stop offset="100%" stop-color="#C92A2A"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradResume)"/>
    <g opacity="0.95">
      <rect x="280" y="180" width="464" height="664" rx="20" fill="white"/>
      <rect x="340" y="260" width="140" height="140" rx="70" fill="#FF6B6B"/>
      <rect x="340" y="440" width="344" height="30" rx="10" fill="#FFE0E0"/>
      <rect x="340" y="500" width="344" height="30" rx="10" fill="#FFE0E0"/>
      <rect x="340" y="560" width="280" height="30" rx="10" fill="#FFE0E0"/>
      <rect x="340" y="640" width="344" height="20" rx="8" fill="#FFF0F0"/>
      <rect x="340" y="680" width="344" height="20" rx="8" fill="#FFF0F0"/>
      <rect x="340" y="720" width="250" height="20" rx="8" fill="#FFF0F0"/>
    </g>
  </svg>`,

  finder: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradFinder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4A90E2"/>
        <stop offset="100%" stop-color="#357ABD"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradFinder)"/>
    <g opacity="0.95">
      <path d="M280 350c0-30 20-50 50-50h364c30 0 50 20 50 50v324c0 30-20 50-50 50H330c-30 0-50-20-50-50z" fill="white"/>
      <rect x="280" y="350" width="180" height="324" fill="#4A90E2" opacity="0.2"/>
      <circle cx="400" cy="450" r="30" fill="#4A90E2"/>
      <rect x="490" y="430" width="180" height="40" rx="10" fill="#E3F2FD"/>
      <rect x="490" y="510" width="140" height="30" rx="8" fill="#E3F2FD"/>
      <rect x="490" y="570" width="160" height="30" rx="8" fill="#E3F2FD"/>
    </g>
  </svg>`,

  settings: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradSettings" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78909C"/>
        <stop offset="100%" stop-color="#546E7A"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradSettings)"/>
    <g opacity="0.95">
      <path d="M512 280l50 100 110 16-80 78 19 110-99-52-99 52 19-110-80-78 110-16z" fill="white"/>
      <circle cx="512" cy="420" r="80" fill="white"/>
      <circle cx="512" cy="420" r="50" fill="#78909C"/>
      <rect x="478" y="520" width="68" height="200" rx="15" fill="white"/>
      <rect x="320" y="586" width="68" height="134" rx="15" fill="white"/>
      <rect x="636" y="600" width="68" height="120" rx="15" fill="white"/>
    </g>
  </svg>`,

  downloads: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradDownloads" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#26C6DA"/>
        <stop offset="100%" stop-color="#00ACC1"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradDownloads)"/>
    <g opacity="0.95">
      <rect x="462" y="280" width="100" height="280" rx="20" fill="white"/>
      <path d="M360 480l152 152 152-152" stroke="white" stroke-width="100" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="280" y="680" width="464" height="60" rx="30" fill="white"/>
    </g>
  </svg>`,
  asstivetouch:`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512">
                    <image xlink:href="data:image/png;base64,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" x="0" y="0" width="512" height="512"/>
                  </svg>`
}

export default ICONS