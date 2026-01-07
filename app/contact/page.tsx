'use client';

/**
 * Contact Page - Professional Form Spacing
 * Form fields: 32px spacing
 * Labels: 12px from inputs
 * Input padding: 24x16px
 * Grid: 64px column gaps
 */

import { motion } from 'framer-motion';
import { SplitHeader } from '@/components/layout/SplitHeader';
import { Footer } from '@/components/layout/Footer';

const contactInfo = {
  email: 'hello@opalaura.com',
  instagram: '@opalauraphoto',
  location: 'Belgrade, Serbia',
};

export default function ContactPage() {

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SplitHeader />

      <main className="flex-1" style={{ paddingTop: 'var(--header-height)' }}>
        {/* Contact Header - MINIMAL MARGIN */}
        <section className="pt-32 pb-16 bg-bg">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl md:text-9xl font-black uppercase mb-12"
              style={{ lineHeight: '1.1', letterSpacing: '-0.02em' }}
            >
              LET'S
              <br />
              <span className="text-accent">CONNECT</span>
            </motion.h1>

            {/* Accent bar - TIGHTER SPACE */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-2 w-48 bg-accent origin-left"
            />
          </div>
        </section>

        {/* Contact Info - Super Minimalist List */}
        <section className="bg-accent py-32">
          <div className="container max-w-3xl">
            <div className="space-y-16">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <a href={`mailto:${contactInfo.email}`} className="block group">
                  <p className="text-sm font-black uppercase tracking-widest text-bg/70 mb-4" style={{ lineHeight: '1.2' }}>
                    EMAIL
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-bg mb-6 group-hover:scale-105 transition-transform origin-left" style={{ lineHeight: '1.2' }}>
                    {contactInfo.email}
                  </p>
                  <div className="h-0.5 bg-bg/30" />
                </a>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a
                  href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-sm font-black uppercase tracking-widest text-bg/70 mb-4" style={{ lineHeight: '1.2' }}>
                    INSTAGRAM
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-bg mb-6 group-hover:scale-105 transition-transform origin-left" style={{ lineHeight: '1.2' }}>
                    {contactInfo.instagram}
                  </p>
                  <div className="h-0.5 bg-bg/30" />
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-bg/70 mb-4" style={{ lineHeight: '1.2' }}>
                    LOCATION
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-bg mb-6" style={{ lineHeight: '1.2' }}>
                    {contactInfo.location}
                  </p>
                  <div className="h-0.5 bg-bg/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
