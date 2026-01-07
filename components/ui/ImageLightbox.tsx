'use client';

/**
 * ImageLightbox - Full-Screen Image Viewer
 * Keyboard navigation: ESC, Left/Right arrows
 * Professional spacing: 48px padding on controls, 32px on captions
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    caption?: string;
    category?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-bg/98 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button - 48px from edges */}
        <button
          onClick={onClose}
          className="absolute top-12 right-12 p-4 text-text hover:text-accent transition-colors z-50 hover:scale-110"
          aria-label="Close lightbox"
        >
          <X size={40} strokeWidth={3} />
        </button>

        {/* Previous Button - 32px from edge */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4 text-text hover:text-accent transition-all z-50 hover:scale-125"
          aria-label="Previous image"
        >
          <ChevronLeft size={60} strokeWidth={3} />
        </button>

        {/* Next Button - 32px from edge */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 text-text hover:text-accent transition-all z-50 hover:scale-125"
          aria-label="Next image"
        >
          <ChevronRight size={60} strokeWidth={3} />
        </button>

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-7xl max-h-[85vh] mx-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[85vh] object-contain border-4 border-accent"
          />

          {/* Caption - 48px horizontal padding, 24px vertical */}
          {currentImage.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-bg/95 border-t-4 border-accent px-12 py-6">
              <p className="text-text font-black uppercase text-lg tracking-widest">
                {currentImage.caption}
              </p>
              {currentImage.category && (
                <p className="text-accent font-bold uppercase text-sm mt-3 tracking-wider">
                  {currentImage.category}
                </p>
              )}
            </div>
          )}
        </motion.div>

        {/* Image Counter - 32px padding */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 bg-accent">
          <p className="text-bg font-black uppercase text-sm tracking-widest">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
