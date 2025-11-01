// All available apps in the portfolio
const APPS = [
  // ===================== Personal Apps ===================== //
  {
    id: 'bio',
    name: 'About Me',
    iconKey: 'bio',
    category: 'personal',
    description: 'Learn about who I am',
    component: 'About', // Component name to load
  },
  {
    id: 'resume',
    name: 'Resume',
    iconKey: 'about',
    category: 'personal',
    description: 'My CV and biodata',
    component: 'Resume',
  },
  {
    id: 'finder',
    name: 'Finder',
    iconKey: 'finder',
    category: 'system',
    description: 'Browse projects and files',
    component: 'Finder',
  },

  // ===================== Professional Apps ===================== //
  {
    id: 'projects',
    name: 'Projects',
    iconKey: 'projects',
    category: 'professional',
    description: 'My portfolio of work',
    component: 'Projects',
  },
  {
    id: 'experience',
    name: 'Experience',
    iconKey: 'experience',
    category: 'professional',
    description: 'Work history and roles',
    component: 'Experience',
  },
  {
    id: 'skills',
    name: 'Skills',
    iconKey: 'skills',
    category: 'professional',
    description: 'Technical expertise',
    component: 'Skills',
  },

  // ===================== Academic Apps ===================== //
  {
    id: 'education',
    name: 'Education',
    iconKey: 'blog',
    category: 'academic',
    description: 'Academic background',
    component: 'Education',
  },
  {
    id: 'achievements',
    name: 'Achievements',
    iconKey: 'certificates',
    category: 'academic',
    description: 'Certificates and awards',
    component: 'Achievements',
  },

  // ===================== Contact & Utility Apps ===================== //
  {
    id: 'contact',
    name: 'Contact',
    iconKey: 'contact',
    category: 'utility',
    description: 'Get in touch with me',
    component: 'Contact',
  },
  {
    id: 'terminal',
    name: 'Terminal',
    iconKey: 'terminal',
    category: 'utility',
    description: 'Interactive command line',
    component: 'Terminal',
  },
  {
    id: 'gallery',
    name: 'Gallery',
    iconKey: 'gallery',
    category: 'utility',
    description: 'Photos and media',
    component: 'Gallery',
  },
  {
    id: 'settings',
    name: 'Settings',
    iconKey: 'settings',
    category: 'system',
    description: 'Customize your experience',
    component: 'Settings',
  },
];

// Apps configuration for different views

// Dock apps - shown at the bottom dock
export const DOCK_APPS = [
  'bio',
  'projects',
  'experience',
  'skills',
  'contact',
  'finder',
].map(id => APPS.find(app => app.id === id));

// Home screen apps - organized by pages (iPad-style)
export const HOME_SCREEN_APPS = [
  // Page 1 - Personal & Professional
  [
    APPS.find(app => app.id === 'bio'),
    APPS.find(app => app.id === 'resume'),
    APPS.find(app => app.id === 'projects'),
    APPS.find(app => app.id === 'experience'),
    APPS.find(app => app.id === 'skills'),
    APPS.find(app => app.id === 'finder'),
  ],
  // Page 2 - Academic & Utility
  [
    APPS.find(app => app.id === 'education'),
    APPS.find(app => app.id === 'achievements'),
    APPS.find(app => app.id === 'contact'),
    APPS.find(app => app.id === 'terminal'),
    APPS.find(app => app.id === 'gallery'),
    APPS.find(app => app.id === 'settings'),
  ],
];

// All apps lookup
export const getAppById = (id) => APPS.find(app => app.id === id);

// Get apps by category
export const getAppsByCategory = (category) => 
  APPS.filter(app => app.category === category);

// All apps list
export const ALL_APPS = APPS;

export default APPS;
