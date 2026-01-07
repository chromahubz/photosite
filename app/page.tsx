'use client';

/**
 * Home Page - Bold Theme V2
 * Professional spacing with formula-based margins
 * text-9xl (144px) → mb-16 (64px)
 * text-8xl (96px) → mb-12 (48px)
 * text-6xl (60px) → mb-8 (32px)
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SplitHeader } from '@/components/layout/SplitHeader';
import { Footer } from '@/components/layout/Footer';
import { BoldButton } from '@/components/ui/BoldButton';
import { spacing } from '@/lib/spacing';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SplitHeader />

      <main className="flex-1" style={{ paddingTop: 'var(--header-height)' }}>
        {/* Hero Section - Oversized Typography with Professional Spacing */}
        <section className="min-h-screen flex items-center justify-center bg-bg">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Location Badge - MUCH MORE SPACE */}
              <div className="inline-flex items-center justify-center mb-24 px-12 py-6 border-3 border-accent">
                <span className="text-sm font-black uppercase tracking-widest">
                  BELGRADE, SERBIA
                </span>
              </div>

              {/* Massive Heading - MORE VERTICAL SPACE */}
              <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter mb-20" style={{ lineHeight: '1.2' }}>
                OPAL<span className="text-accent">AURA</span>
              </h1>

              {/* Subtitle - MORE LINE SPACING */}
              <p className="text-2xl md:text-3xl font-bold uppercase text-text-secondary mb-24 tracking-wider max-w-4xl" style={{ lineHeight: '1.6' }}>
                FINE ART PHOTOGRAPHY / BRUTAL AESTHETIC / BELGRADE BASED
              </p>

              {/* CTAs - 32px gap between buttons */}
              <div className={`flex flex-col sm:flex-row items-start ${spacing.buttonGroup}`}>
                <Link href="/gallery">
                  <BoldButton size="lg" variant="primary">
                    VIEW WORK
                  </BoldButton>
                </Link>
                <Link href="/contact">
                  <BoldButton size="lg" variant="outline">
                    BOOK NOW
                  </BoldButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statement Section - Full-Width Pink with Scroll Animation */}
        <section className={`${spacing.section} bg-accent`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Heading - MORE VERTICAL SPACE */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-6xl md:text-7xl font-black uppercase mb-16 text-bg tracking-tight"
                style={{ lineHeight: '1.25' }}
              >
                NO COMPROMISE
              </motion.h2>

              {/* Statement text - MORE LINE SPACING */}
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-bold uppercase text-bg/90 max-w-4xl tracking-widest"
                style={{ lineHeight: '1.7' }}
              >
                RAW EMOTION. BOLD VISION. UNFILTERED TRUTH.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Work Preview Section - Professional Spacing */}
        <section className={`${spacing.section} bg-surface`}>
          <div className="container">
            {/* Heading - MORE VERTICAL SPACE */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-6xl font-black uppercase mb-20"
              style={{ lineHeight: '1.25' }}
            >
              LATEST <span className="text-accent">WORK</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/gallery">
                <BoldButton variant="outline" size="lg">
                  SEE PORTFOLIO
                </BoldButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Work Grid - SPACIOUS */}
        <section className={`${spacing.section} bg-bg`}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-black uppercase mb-20"
              style={{ lineHeight: '1.3' }}
            >
              FEATURED <span className="text-accent">WORK</span>
            </motion.h2>

            {/* Grid with COMFORTABLE gaps */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 ${spacing.gridComfortable}`}>
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden border-4 border-accent">
                    <img
                      src={`https://picsum.photos/seed/${item}/800/800?grayscale`}
                      alt={`Featured work ${item}`}
                      className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Caption with GENEROUS padding */}
                  <div className="px-16 py-12 bg-surface">
                    <p className="font-black uppercase text-lg tracking-widest">
                      FEATURED {item}
                    </p>
                    <p className="text-accent font-bold uppercase text-sm mt-4 tracking-wider">
                      COLLECTION
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
