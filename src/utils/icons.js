export const ICONS = {
  // ===================== Core Portfolio Apps ===================== //

  /**
   * Redesigned 'bio' (like iOS Contacts)
   * - Uses the gray gradient and silhouette style of the Contacts app.
   * - Adds a subtle inner shadow to the glyph for depth.
   */
  bio: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradBio" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0E0E0"/>
        <stop offset="100%" stop-color="#BDBDBD"/>
      </linearGradient>
      <filter id="glyphShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood flood-color="#000000" flood-opacity="0.15"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradBio)"/>
    <g filter="url(#glyphShadow)">
      <circle cx="512" cy="400" r="150" fill="white"/>
      <path d="M280 800c0-128 104-232 232-232s232 104 232 232v50H280z" fill="white"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'projects' (like a developer tool or Xcode)
   * - Uses a blueprint/developer-themed gradient.
   * - The glyph is a stylized set of angle brackets, suggesting code.
   */
  projects: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradProjects" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4A90E2"/>
        <stop offset="100%" stop-color="#357ABD"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradProjects)"/>
    <g fill="none" stroke="white" stroke-width="60" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
      <path d="M400 320l-140 192 140 192"/>
      <path d="M624 320l140 192 -140 192"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'contact' (like iOS Mail)
   * - Simple, bright blue gradient.
   * - The glyph is a clean, 3D-style envelope, similar to the Mail app.
   */
  contact: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradContact" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5AC8FA"/>
        <stop offset="100%" stop-color="#007AFF"/>
      </linearGradient>
      <filter id="shadowContact">
        <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
        <feOffset dx="0" dy="5" result="offsetblur"/>
        <feFlood flood-color="#000000" flood-opacity="0.2"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradContact)"/>
    <g filter="url(#shadowContact)">
      <path d="M192 384 L512 600 L832 384 L832 680 C832 720 800 752 760 752 L264 752 C224 752 192 720 192 680 Z" fill="#F0F0F0"/>
      <path d="M192 352 L512 568 L832 352 L512 300 Z" fill="white"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'gallery' (like iOS Photos)
   * - This is a recreation of the 8-petal color wheel from the Photos app.
   */
  gallery: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="225" fill="white"/>
    <g transform="translate(512 512) rotate(22.5)">
      <path d="M0 0 L250 0 A250 250 0 0 1 176.77 176.77 Z" fill="#FF453A"/>
      <path d="M0 0 L176.77 176.77 A250 250 0 0 1 0 250 Z" fill="#FF9F0A"/>
      <path d="M0 0 L0 250 A250 250 0 0 1 -176.77 176.77 Z" fill="#FFD60A"/>
      <path d="M0 0 L-176.77 176.77 A250 250 0 0 1 -250 0 Z" fill="#32D74B"/>
      <path d="M0 0 L-250 0 A250 250 0 0 1 -176.77 -176.77 Z" fill="#64D2FF"/>
      <path d="M0 0 L-176.77 -176.77 A250 250 0 0 1 0 -250 Z" fill="#0A84FF"/>
      <path d="M0 0 L0 -250 A250 250 0 0 1 176.77 -176.77 Z" fill="#BF5AF2"/>
      <path d="M0 0 L176.77 -176.77 A250 250 0 0 1 250 0 Z" fill="#FF4081"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'music' (like Apple Music)
   * - Uses the iconic red/pink gradient of Apple Music.
   * - Features a stylized musical note glyph.
   */
  music: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradMusic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2D55"/>
        <stop offset="100%" stop-color="#FA233B"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradMusic)"/>
    <g fill="white" opacity="0.95">
      <path d="M680 280 L680 620 C680 680 620 720 560 720 C500 720 440 680 440 620 C440 560 500 520 560 520 C590 520 620 530 640 550 L640 380 L440 420 L440 700 C440 760 380 800 320 800 C260 800 200 760 200 700 C200 640 260 600 320 600 C350 600 380 610 400 630 L400 340 L680 280 Z"/>
    </g>
  </svg>`,

  /**
   * Kept 'terminal' - this design is classic and works well.
   */
  terminal: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradTerminal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2D2D2D"/>
        <stop offset="100%" stop-color="#0A0A0A"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradTerminal)"/>
    <g fill="none" stroke="#32D74B" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
      <path d="M320 380 L480 512 L320 644"/>
      <path d="M520 644 H700"/>
    </g>
  </svg>`,
  /* Redesigned 'skills' (like a compass/Safari)
  * - A bar chart is very un-Apple. This uses the Safari compass metaphor.
  * - The glyph has a soft shadow to lift it off the gradient.
  */
  skills: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradSkills" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#64D2FF"/>
        <stop offset="100%" stop-color="#0A84FF"/>
      </linearGradient>
      <filter id="shadowCompass">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="0" dy="4" result="offsetblur"/>
        <feFlood flood-color="#000000" flood-opacity="0.2"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradSkills)"/>
    <g filter="url(#shadowCompass)" transform="translate(512 512)">
      <circle r="280" fill="white"/>
      <circle r="250" fill="url(#gradSkills)"/>
      <path d="M0 -210 L80 0 L0 50 L-80 0 Z" fill="#FF453A"/>
      <path d="M0 -210 L80 0 L0 50 L-80 0 Z" fill="white" opacity="0.5" transform="rotate(180)"/>
      <circle r="40" fill="white"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'experience' (like a briefcase)
   * - Uses a warmer, more professional gradient.
   * - A simple, clean briefcase glyph.
   */
  experience: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradExp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF9F0A"/>
        <stop offset="100%" stop-color="#F57C00"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradExp)"/>
    <g fill="white" opacity="0.95" transform="translate(512 512)">
      <rect x="-300" y="-200" width="600" height="400" rx="40"/>
      <rect x="-150" y="-300" width="300" height="100" rx="25"/>
      <rect x="-200" y="50" width="400" height="50" rx="10" opacity="0.3"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'certificates' (Medal/Award)
   * - A simpler, bolder glyph of a medal.
   */
  certificates: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradCert" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD60A"/>
        <stop offset="100%" stop-color="#FF9F0A"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="#357ABD"/>
    <g transform="translate(512 512)">
      <path d="M0 -300 L100 -100 L0 -150 L-100 -100 Z" fill="#FF453A"/>
      <circle r="220" fill="url(#gradCert)"/>
      <circle r="180" fill="#F0F0F0"/>
      <path d="M0 -120 L35 0 L120 0 L55 60 L75 150 L0 100 L-75 150 L-55 60 L-120 0 L-35 0 Z" fill="#FF9F0A"/>
    </g>
  </svg>`,

  /**
   * Kept 'blog' - this is a good representation of the Notes app.
   */
  blog: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradBlog" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD60A"/>
        <stop offset="100%" stop-color="#FFCA28"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradBlog)"/>
    <g opacity="0.95">
      <rect x="240" y="280" width="544" height="464" rx="30" fill="white"/>
      <rect x="300" y="360" width="424" height="40" rx="10" fill="#E0E0E0"/>
      <rect x="300" y="440" width="424" height="40" rx="10" fill="#E0E0E0"/>
      <rect x="300" y="520" width="320" height="40" rx="10" fill="#E0E0E0"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'about' (standard "info" icon)
   * - Uses a standard, clean "info" glyph.
   */
  about: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5AC8FA"/>
        <stop offset="100%" stop-color="#007AFF"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradAbout)"/>
    <g opacity="0.95" fill="white" transform="translate(512 512)">
      <circle cx="0" cy="-150" r="70"/>
      <rect x="-60" y="-50" width="120" height="400" rx="30"/>
    </g>
  </svg>`,

  /**
   * Kept 'resume' - this is a clear "document" icon.
   */
  resume: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradResume" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF453A"/>
        <stop offset="100%" stop-color="#C92A2A"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradResume)"/>
    <g opacity="0.95">
      <rect x="280" y="180" width="464" height="664" rx="20" fill="white"/>
      <rect x="340" y="260" width="140" height="140" rx="70" fill="#FFCDD2"/>
      <rect x="340" y="440" width="344" height="30" rx="10" fill="#FFEBEE"/>
      <rect x="340" y="500" width="344" height="30" rx="10" fill="#FFEBEE"/>
      <rect x="340" y="560" width="280" height="30" rx="10" fill="#FFEBEE"/>
      <rect x="340" y="640" width="344" height="20" rx="8" fill="#FFF0F0"/>
      <rect x="340" y="680" width="344" height="20" rx="8" fill="#FFF0F0"/>
      <rect x="340" y="720" width="250" height="20" rx="8" fill="#FFF0F0"/>
    </g>
  </svg>`,

  /**
   * Redesigned 'finder' (The classic Happy Mac)
   * - This is the iconic Finder logo.
   */
  finder: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="225" fill="#C7E6FB"/>
    <path d="M512 192C323.8 192 192 323.8 192 512C192 638.5 259.5 744.7 348.5 801.3C348.5 801.3 349.3 802 350.3 802C351.3 802 352 801.3 352 800.5V512C352 494.3 366.3 480 384 480H640C657.7 480 672 494.3 672 512V800.5C672 801.3 672.7 802 673.7 802C674.7 802 675.5 801.3 675.5 801.3C764.5 744.7 832 638.5 832 512C832 323.8 700.2 192 512 192Z" fill="#007AFF"/>
    <g fill="#000">
      <ellipse cx="432" cy="592" rx="40" ry="50"/>
      <ellipse cx="592" cy="592" rx="40" ry="50"/>
    </g>
    <path d="M448 688C448 688 470 728 512 728S576 688 576 688" fill="none" stroke="#000" stroke-width="20" stroke-linecap="round"/>
  </svg>`,

  /**
   * Redesigned 'settings' (like macOS Settings)
   * - This is the classic metallic gear.
   * - Uses multiple gradients to create a 3D, metallic look.
   */
  settings: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradSettingsBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F5F5F5"/>
        <stop offset="100%" stop-color="#E0E0E0"/>
      </linearGradient>
      <linearGradient id="gradGear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D0D0D0"/>
        <stop offset="100%" stop-color="#A0A0A0"/>
      </linearGradient>
      <linearGradient id="gradGearInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C0C0C0"/>
        <stop offset="100%" stop-color="#909090"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradSettingsBg)"/>
    <g transform="translate(512 512) rotate(15)">
      <path d="M0 -320 L50 -280 L100 -280 L100 -240 L150 -220 L180 -180 L220 -150 L240 -100 L280 -100 L280 -50 L320 0 L280 50 L280 100 L240 100 L220 150 L180 180 L150 220 L100 240 L100 280 L50 280 L0 320 L-50 280 L-100 280 L-100 240 L-150 220 L-180 180 L-220 150 L-240 100 L-280 100 L-280 50 L-320 0 L-280 -50 L-280 -100 L-240 -100 L-220 -150 L-180 -180 L-150 -220 L-100 -240 L-100 -280 L-50 -280 Z" fill="url(#gradGear)"/>
      <circle r="180" fill="url(#gradGearInner)"/>
      <circle r="100" fill="url(#gradSettingsBg)"/>
    </g>
  </svg>`,

  /**
   * Kept 'downloads' - this is a clear and simple glyph.
   */
  downloads: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradDownloads" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#64D2FF"/>
        <stop offset="100%" stop-color="#007AFF"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="225" fill="url(#gradDownloads)"/>
    <g opacity="0.95" fill="none" stroke="white" stroke-width="60" stroke-linecap="round">
      <path d="M512 300 V 650"/>
      <path d="M382 520 L 512 650 L 642 520"/>
      <path d="M300 750 H 724"/>
    </g>
  </svg>`,

  /**
   * Replaced 'assistivetouch' with pure SVG
   * - Your original was a base64 PNG. This is pure SVG.
   * - It's the standard AssistiveTouch icon.
   */
  assistivetouch: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="225" fill="#1C1C1E"/>
    <g fill="white" opacity="0.9">
      <circle cx="512" cy="512" r="280" opacity="0.3"/>
      <circle cx="512" cy="512" r="200" opacity="0.5"/>
      <circle cx="512" cy="512" r="120"/>
    </g>
  </svg>`
};

export default ICONS;