import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      title: "Workspace Setup",
      caption: "Where the magic happens"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
      title: "Code & Coffee",
      caption: "Fuel for development"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      title: "Coding Session",
      caption: "Late night debugging"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
      title: "Tech Stack",
      caption: "Modern web technologies"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      title: "Design System",
      caption: "Building beautiful interfaces"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      title: "Wireframing",
      caption: "Planning the architecture"
    }
  ];

  return (
    <div className="h-full w-full bg-gray-100 overflow-hidden relative">
      {/* Gallery Grid */}
      <div className={`h-full overflow-y-auto p-4 md:p-6 transition-opacity duration-300 ${selectedImage ? 'opacity-30' : 'opacity-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gallery</h1>
            <p className="text-gray-600 text-sm md:text-base">A glimpse into my world</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(photo)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium text-xs md:text-sm">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox - contained within the component */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-full max-h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Info bar */}
              <div className="p-4 bg-white border-t flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{selectedImage.title}</h2>
                  <p className="text-gray-500 text-sm">{selectedImage.caption}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Shot on iPhone</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
