'use client';

/**
 * Gallery Page - Professional Grid Spacing
 * Grid: 32px gaps (comfortable viewing)
 * Filters: 24px gaps
 * Captions: 48x32px padding
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SplitHeader } from '@/components/layout/SplitHeader';
import { Footer } from '@/components/layout/Footer';
import { BoldButton } from '@/components/ui/BoldButton';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { spacing } from '@/lib/spacing';

const categories = ['ALL', 'PORTRAITS', 'LANDSCAPES', 'URBAN', 'ABSTRACT'];

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: `photo-${i + 1}`,
  src: `https://picsum.photos/seed/${i + 1}/800/800?grayscale`,
  alt: `Photography work ${i + 1}`,
  caption: `UNTITLED ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}));

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredPhotos =
    selectedCategory === 'ALL'
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const lightboxImages = filteredPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: photo.alt,
    caption: photo.caption,
    category: photo.category,
  }));

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SplitHeader />

      <main className="flex-1" style={{ paddingTop: 'var(--header-height)' }}>
        {/* Gallery Header - GENEROUS MARGIN */}
        <section className={`${spacing.section} bg-bg`}>
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black uppercase mb-20"
              style={{ lineHeight: '1.2' }}
            >
              PHOTO
              <br />
              <span className="text-accent">GALLERY</span>
            </motion.h1>

            {/* Category Filters - MORE SPACE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex flex-wrap ${spacing.gridDense} mb-24`}
            >
              {categories.map((category) => (
                <BoldButton
                  key={category}
                  size="md"
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </BoldButton>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Photo Grid - 32px gaps (comfortable) */}
        <section className={`${spacing.section} bg-surface`}>
          <div className="container">
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 ${spacing.gridComfortable}`}>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative overflow-hidden border-4 border-accent">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Caption - GENEROUS PADDING */}
                  <div className="px-16 py-12 bg-bg">
                    <p className="font-black uppercase text-lg tracking-widest">
                      {photo.caption}
                    </p>
                    <p className="text-accent font-bold uppercase text-sm mt-4 tracking-wider">
                      {photo.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
