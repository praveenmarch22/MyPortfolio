import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid3x3, 
  List, 
  Search, 
  Folder, 
  FileText, 
  Image, 
  Code,
  Star,
  Clock,
  Download,
  HardDrive,
  Tag,
  Eye,
  Info,
  FolderOpen,
  X,
  ExternalLink,
  Copy,
  Trash2,
  Share2,
  ChevronRight as BreadcrumbIcon
} from 'lucide-react';

// Detailed file system with nested folders
const fileSystemData = {
  'E-Commerce Platform': {
    type: 'folder',
    files: [
      { name: 'README.md', type: 'file', icon: 'document', size: '12 KB', modified: 'Nov 8, 3:15 PM', content: 'Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and admin dashboard.' },
      { name: 'package.json', type: 'file', icon: 'code', size: '2 KB', modified: 'Nov 8, 3:10 PM', content: '{\n  "name": "ecommerce-platform",\n  "dependencies": {\n    "react": "^18.2.0",\n    "express": "^4.18.2",\n    "mongodb": "^5.0.0"\n  }\n}' },
      { name: 'app.js', type: 'file', icon: 'code', size: '45 KB', modified: 'Nov 8, 2:00 PM', content: 'Main application entry point with Express server configuration, middleware setup, and route definitions.' },
      { name: 'Screenshots', type: 'folder', icon: 'folder', items: 8, modified: 'Nov 7, 5:00 PM' },
      { name: 'Documentation', type: 'folder', icon: 'folder', items: 5, modified: 'Nov 6, 4:30 PM' },
    ]
  },
  'AI Chatbot': {
    type: 'folder',
    files: [
      { name: 'chatbot.py', type: 'file', icon: 'code', size: '32 KB', modified: 'Nov 7, 10:30 AM', content: 'NLP-powered chatbot using transformers and PyTorch. Supports intent recognition, entity extraction, and contextual conversations.' },
      { name: 'requirements.txt', type: 'file', icon: 'document', size: '1 KB', modified: 'Nov 7, 10:00 AM', content: 'transformers==4.30.0\ntorch==2.0.0\nnumpy==1.24.0' },
      { name: 'model.pth', type: 'file', icon: 'document', size: '500 MB', modified: 'Nov 7, 9:00 AM', content: 'Trained model weights for chatbot' },
      { name: 'Training Data', type: 'folder', icon: 'folder', items: 12, modified: 'Nov 5, 2:00 PM' },
    ]
  },
  'Portfolio Website': {
    type: 'folder',
    files: [
      { name: 'index.html', type: 'file', icon: 'code', size: '8 KB', modified: 'Today, 11:45 AM', content: 'Main HTML file for the portfolio website' },
      { name: 'styles.css', type: 'file', icon: 'code', size: '24 KB', modified: 'Today, 11:40 AM', content: 'Custom CSS styles with animations and responsive design' },
      { name: 'App.jsx', type: 'file', icon: 'code', size: '15 KB', modified: 'Today, 11:30 AM', content: 'React component for the main application' },
      { name: 'vite.config.js', type: 'file', icon: 'code', size: '1 KB', modified: 'Nov 8, 10:00 AM', content: 'Vite configuration for fast development' },
      { name: 'Components', type: 'folder', icon: 'folder', items: 20, modified: 'Today, 11:00 AM' },
    ]
  },
  'Frontend': {
    type: 'folder',
    files: [
      { name: 'React Projects', type: 'folder', icon: 'folder', items: 5, modified: 'Nov 8, 1:00 PM' },
      { name: 'Vue Applications', type: 'folder', icon: 'folder', items: 3, modified: 'Nov 7, 3:00 PM' },
      { name: 'HTML & CSS', type: 'folder', icon: 'folder', items: 8, modified: 'Nov 6, 2:00 PM' },
    ]
  },
  'Backend': {
    type: 'folder',
    files: [
      { name: 'Node.js APIs', type: 'folder', icon: 'folder', items: 6, modified: 'Nov 8, 1:05 PM' },
      { name: 'Python Services', type: 'folder', icon: 'folder', items: 4, modified: 'Nov 7, 4:00 PM' },
      { name: 'Java Applications', type: 'folder', icon: 'folder', items: 3, modified: 'Nov 5, 1:00 PM' },
    ]
  },
  'Certifications': {
    type: 'folder',
    files: [
      { name: 'AWS Certified Developer.pdf', type: 'file', icon: 'document', size: '2.1 MB', modified: 'Nov 1, 3:00 PM', starred: true },
      { name: 'Google Cloud Professional.pdf', type: 'file', icon: 'document', size: '1.8 MB', modified: 'Oct 28, 2:00 PM', starred: true },
      { name: 'MongoDB University.pdf', type: 'file', icon: 'document', size: '1.2 MB', modified: 'Oct 20, 11:00 AM' },
    ]
  }
};

// Root categories
const fileSystem = {
  'Recent': {
    type: 'category',
    items: [
      { name: 'Resume.pdf', type: 'file', icon: 'document', size: '245 KB', modified: 'Today, 2:30 PM', starred: true, content: 'Professional resume with work experience, education, and skills.' },
      { name: 'Portfolio Website', type: 'folder', icon: 'folder', items: 12, modified: 'Today, 11:45 AM', description: 'This website!', hasChildren: true },
      { name: 'E-Commerce Platform', type: 'folder', icon: 'folder', items: 8, modified: 'Nov 8, 3:15 PM', description: 'Full-stack shopping app', hasChildren: true },
    ]
  },
  'Projects': {
    type: 'category',
    items: [
      { name: 'E-Commerce Platform', type: 'folder', icon: 'folder', items: 8, modified: 'Nov 8, 3:15 PM', description: 'Full-stack shopping app', hasChildren: true },
      { name: 'AI Chatbot', type: 'folder', icon: 'folder', items: 5, modified: 'Nov 7, 10:30 AM', description: 'NLP-powered assistant', hasChildren: true },
      { name: 'Portfolio Website', type: 'folder', icon: 'folder', items: 12, modified: 'Today, 11:45 AM', description: 'This website!', hasChildren: true },
      { name: 'Mobile Game', type: 'folder', icon: 'folder', items: 15, modified: 'Nov 5, 2:00 PM', description: 'Unity 3D game' },
      { name: 'Data Visualizer', type: 'folder', icon: 'folder', items: 6, modified: 'Nov 3, 4:45 PM', description: 'D3.js dashboard' },
    ]
  },
  'Documents': {
    type: 'category',
    items: [
      { name: 'Resume.pdf', type: 'file', icon: 'document', size: '245 KB', modified: 'Today, 2:30 PM', starred: true, content: 'Professional resume with work experience, education, and skills.' },
      { name: 'Cover Letter.pdf', type: 'file', icon: 'document', size: '180 KB', modified: 'Nov 7, 9:15 AM', content: 'Cover letter template for job applications.' },
      { name: 'Certifications', type: 'folder', icon: 'folder', items: 5, modified: 'Nov 1, 3:00 PM', hasChildren: true },
      { name: 'Transcripts', type: 'folder', icon: 'folder', items: 3, modified: 'Oct 28, 11:20 AM' },
    ]
  },
  'Skills': {
    type: 'category',
    items: [
      { name: 'Frontend', type: 'folder', icon: 'folder', items: 8, modified: 'Nov 8, 1:00 PM', description: 'React, Vue, Angular', hasChildren: true },
      { name: 'Backend', type: 'folder', icon: 'folder', items: 6, modified: 'Nov 8, 1:05 PM', description: 'Node.js, Python, Java', hasChildren: true },
      { name: 'DevOps', type: 'folder', icon: 'folder', items: 4, modified: 'Nov 8, 1:10 PM', description: 'Docker, K8s, CI/CD' },
      { name: 'Database', type: 'folder', icon: 'folder', items: 5, modified: 'Nov 8, 1:15 PM', description: 'SQL, MongoDB, Redis' },
    ]
  },
  'Gallery': {
    type: 'category',
    items: [
      { name: 'Screenshots', type: 'folder', icon: 'folder', items: 24, modified: 'Yesterday, 5:20 PM' },
      { name: 'Designs', type: 'folder', icon: 'folder', items: 18, modified: 'Nov 6, 2:30 PM' },
      { name: 'UI Mockups', type: 'folder', icon: 'folder', items: 15, modified: 'Nov 4, 11:00 AM' },
    ]
  }
};

const sidebarItems = [
  { id: 'recent', name: 'Recent', icon: Clock, category: 'Favorites' },
  { id: 'projects', name: 'Projects', icon: Folder, category: 'Favorites' },
  { id: 'documents', name: 'Documents', icon: FileText, category: 'Favorites' },
  { id: 'skills', name: 'Skills', icon: Code, category: 'Favorites' },
  { id: 'gallery', name: 'Gallery', icon: Image, category: 'Favorites' },
  { id: 'downloads', name: 'Downloads', icon: Download, category: 'iCloud' },
  { id: 'desktop', name: 'Desktop', icon: HardDrive, category: 'This Mac' },
];

export default function Finder() {
  const [selectedSection, setSelectedSection] = useState('recent');
  const [currentPath, setCurrentPath] = useState(['recent']);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [quickLook, setQuickLook] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const contextMenuRef = useRef(null);

  const getCurrentItems = () => {
    if (currentPath.length === 1) {
      // Root level
      const section = currentPath[0].charAt(0).toUpperCase() + currentPath[0].slice(1);
      return fileSystem[section]?.items || [];
    } else {
      // Inside a folder
      const folderName = currentPath[currentPath.length - 1];
      return fileSystemData[folderName]?.files || [];
    }
  };

  const filteredItems = getCurrentItems().filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close context menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
        setContextMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' && selectedItem) {
        e.preventDefault();
        handleQuickLook(selectedItem);
      }
      if (e.key === 'Escape') {
        setQuickLook(null);
        setShowInfo(false);
        setContextMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedItem]);

  const handleNavigation = (section) => {
    setCurrentPath([section]);
    setSelectedSection(section);
    setSelectedItem(null);
    setContextMenu(null);
  };

  const handleBack = () => {
    if (currentPath.length > 1) {
      const newPath = [...currentPath];
      newPath.pop();
      setCurrentPath(newPath);
      setSelectedItem(null);
    }
  };

  const handleBreadcrumbClick = (index) => {
    const newPath = currentPath.slice(0, index + 1);
    setCurrentPath(newPath);
    setSelectedItem(null);
  };

  const handleDoubleClick = (item) => {
    if (item.type === 'folder' && item.hasChildren) {
      setCurrentPath([...currentPath, item.name]);
      setSelectedItem(null);
    } else if (item.type === 'file') {
      handleQuickLook(item);
    }
  };

  const handleRightClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      item: item
    });
  };

  const handleQuickLook = (item) => {
    setQuickLook(item);
    setContextMenu(null);
  };

  const handleGetInfo = (item) => {
    setSelectedItem(item);
    setShowInfo(true);
    setContextMenu(null);
  };

  const getFileIcon = (item) => {
    if (item.type === 'folder') return <Folder className="w-full h-full text-blue-400" />;
    if (item.icon === 'document') return <FileText className="w-full h-full text-red-400" />;
    if (item.icon === 'image') return <Image className="w-full h-full text-purple-400" />;
    if (item.icon === 'code') return <Code className="w-full h-full text-green-400" />;
    return <FileText className="w-full h-full text-gray-400" />;
  };

  return (
    <div className="flex h-full bg-gray-900 text-white rounded-lg overflow-hidden relative">
      {/* Sidebar */}
      <div className="w-48 bg-gray-800/50 border-r border-gray-700/50 backdrop-blur-xl flex flex-col">
        <div className="p-3 border-b border-gray-700/50">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Favorites</h3>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-1.5 text-sm transition-colors ${
                  currentPath[0] === item.id
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'text-gray-300 hover:bg-gray-700/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="p-3 border-t border-gray-700/50">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Tag className="w-3 h-3" />
            <span>Tags</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-12 bg-gray-800/30 border-b border-gray-700/50 flex items-center justify-between px-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            {/* Navigation */}
            <button
              onClick={handleBack}
              disabled={currentPath.length === 1}
              className="p-1.5 rounded hover:bg-gray-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-sm">
              {currentPath.map((path, index) => (
                <div key={index} className="flex items-center gap-1">
                  <button
                    onClick={() => handleBreadcrumbClick(index)}
                    className="capitalize text-gray-300 hover:text-white transition-colors"
                  >
                    {path}
                  </button>
                  {index < currentPath.length - 1 && (
                    <BreadcrumbIcon className="w-3 h-3 text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Action Buttons */}
            {selectedItem && (
              <div className="flex gap-1">
                <button
                  onClick={() => handleQuickLook(selectedItem)}
                  className="p-1.5 rounded hover:bg-gray-700/50 transition-colors"
                  title="Quick Look (Space)"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleGetInfo(selectedItem)}
                  className="p-1.5 rounded hover:bg-gray-700/50 transition-colors"
                  title="Get Info"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* View Mode Toggle */}
            <div className="flex gap-1 bg-gray-700/30 rounded p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-gray-600' : 'hover:bg-gray-700/50'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-gray-600' : 'hover:bg-gray-700/50'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="pl-8 pr-3 py-1.5 text-sm bg-gray-700/30 border border-gray-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48"
              />
            </div>
          </div>
        </div>

        {/* File List/Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-4 gap-4"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedItem(item)}
                    onDoubleClick={() => handleDoubleClick(item)}
                    onContextMenu={(e) => handleRightClick(e, item)}
                    className={`group cursor-pointer p-3 rounded-lg transition-all ${
                      selectedItem?.name === item.name
                        ? 'bg-blue-500/20 ring-2 ring-blue-500/50'
                        : 'hover:bg-gray-700/30'
                    }`}
                  >
                    <div className="aspect-square bg-gray-800/50 rounded-lg mb-2 flex items-center justify-center p-6 group-hover:bg-gray-700/50 transition-colors relative">
                      {getFileIcon(item)}
                      {item.starred && (
                        <Star className="absolute top-2 right-2 w-4 h-4 text-yellow-400 fill-yellow-400" />
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-200 truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {item.type === 'folder' ? `${item.items} items` : item.size}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-1"
              >
                {/* List Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-gray-400 border-b border-gray-700/50">
                  <div className="col-span-5">Name</div>
                  <div className="col-span-3">Modified</div>
                  <div className="col-span-2">Size</div>
                  <div className="col-span-2">Kind</div>
                </div>

                {/* List Items */}
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => setSelectedItem(item)}
                    onDoubleClick={() => handleDoubleClick(item)}
                    onContextMenu={(e) => handleRightClick(e, item)}
                    className={`grid grid-cols-12 gap-4 px-4 py-2 rounded-lg cursor-pointer transition-all ${
                      selectedItem?.name === item.name
                        ? 'bg-blue-500/20'
                        : 'hover:bg-gray-700/30'
                    }`}
                  >
                    <div className="col-span-5 flex items-center gap-2">
                      <div className="w-5 h-5">
                        {getFileIcon(item)}
                      </div>
                      <span className="text-sm text-gray-200 truncate flex items-center gap-1">
                        {item.starred && <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
                        {item.name}
                      </span>
                    </div>
                    <div className="col-span-3 text-sm text-gray-400">{item.modified}</div>
                    <div className="col-span-2 text-sm text-gray-400">
                      {item.type === 'folder' ? `${item.items} items` : item.size || '--'}
                    </div>
                    <div className="col-span-2 text-sm text-gray-400 capitalize">{item.type}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <Folder className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-medium">No items found</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="h-8 bg-gray-800/30 border-t border-gray-700/50 flex items-center justify-between px-4 text-xs text-gray-400">
          <span>{filteredItems.length} items</span>
          {selectedItem && (
            <span className="text-gray-300">
              {selectedItem.name} {selectedItem.description && `· ${selectedItem.description}`}
            </span>
          )}
        </div>
      </div>

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            ref={contextMenuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bg-gray-800 border border-gray-700 rounded-lg shadow-2xl py-1 z-50 min-w-[180px]"
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            {contextMenu.item.type === 'folder' && (
              <button
                onClick={() => {
                  handleDoubleClick(contextMenu.item);
                  setContextMenu(null);
                }}
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 flex items-center gap-2"
              >
                <FolderOpen className="w-4 h-4" />
                Open
              </button>
            )}
            <button
              onClick={() => handleQuickLook(contextMenu.item)}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Quick Look
            </button>
            <button
              onClick={() => handleGetInfo(contextMenu.item)}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              Get Info
            </button>
            <div className="border-t border-gray-700 my-1"></div>
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </button>
            <div className="border-t border-gray-700 my-1"></div>
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 flex items-center gap-2 text-red-400">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Look Panel */}
      <AnimatePresence>
        {quickLook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setQuickLook(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
            >
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{quickLook.name}</h3>
                <button
                  onClick={() => setQuickLook(null)}
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {quickLook.type === 'folder' ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Folder className="w-24 h-24 text-blue-400 mb-4" />
                    <p className="text-xl font-semibold">{quickLook.name}</p>
                    <p className="text-gray-400 mt-2">{quickLook.items} items</p>
                    {quickLook.description && (
                      <p className="text-gray-400 mt-4 text-center">{quickLook.description}</p>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center p-3">
                        {getFileIcon(quickLook)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{quickLook.name}</h4>
                        <p className="text-sm text-gray-400">{quickLook.size}</p>
                        <p className="text-sm text-gray-400">Modified: {quickLook.modified}</p>
                      </div>
                    </div>
                    {quickLook.content && (
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                          {quickLook.content}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Get Info Panel */}
      <AnimatePresence>
        {showInfo && selectedItem && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="absolute right-0 top-0 bottom-0 w-80 bg-gray-800 border-l border-gray-700 shadow-2xl overflow-y-auto"
          >
            <div className="p-4 border-b border-gray-700 flex items-center justify-between sticky top-0 bg-gray-800 z-10">
              <h3 className="font-semibold flex items-center gap-2">
                <Info className="w-4 h-4" />
                Info
              </h3>
              <button
                onClick={() => setShowInfo(false)}
                className="p-1 hover:bg-gray-700 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center p-6 mb-3">
                  {getFileIcon(selectedItem)}
                </div>
                <h4 className="font-semibold text-center">{selectedItem.name}</h4>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Kind:</span>
                  <span className="capitalize">{selectedItem.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Size:</span>
                  <span>{selectedItem.type === 'folder' ? `${selectedItem.items} items` : selectedItem.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Modified:</span>
                  <span>{selectedItem.modified}</span>
                </div>
                {selectedItem.description && (
                  <div className="pt-2 border-t border-gray-700">
                    <span className="text-gray-400">Description:</span>
                    <p className="mt-1">{selectedItem.description}</p>
                  </div>
                )}
                {selectedItem.starred && (
                  <div className="pt-2 border-t border-gray-700 flex items-center gap-2 text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span>Starred</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
