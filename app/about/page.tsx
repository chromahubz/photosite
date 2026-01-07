'use client';

/**
 * About Page - Consistent Card Spacing
 * Cards: 32px internal padding
 * Grid: 64px column gaps
 * Lists: 24px item spacing
 */

import { motion } from 'framer-motion';
import { Camera, Award, Users, Zap, Palette, Video } from 'lucide-react';
import { SplitHeader } from '@/components/layout/SplitHeader';
import { Footer } from '@/components/layout/Footer';
import { spacing } from '@/lib/spacing';

const specialties = [
  { icon: Camera, title: 'EDITORIAL', description: 'Bold narratives through lens' },
  { icon: Award, title: 'COMMERCIAL', description: 'Striking brand visuals' },
  { icon: Users, title: 'PORTRAITS', description: 'Raw human emotion captured' },
  { icon: Zap, title: 'EXPERIMENTAL', description: 'Pushing creative boundaries' },
  { icon: Palette, title: 'ARTISTIC', description: 'Creative vision realized' },
  { icon: Video, title: 'MOTION', description: 'Dynamic visual stories' },
];

const publications = [
  { year: '2024', title: 'FASHION EDITORIAL', role: 'Client collaborations' },
  { year: '2021', title: 'BRAND CAMPAIGNS', role: 'Commercial projects' },
  { year: '2018', title: 'PORTRAIT SERIES', role: 'Personal projects' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SplitHeader />

      <main className="flex-1" style={{ paddingTop: 'var(--header-height)' }}>
        {/* About Header - CENTERED */}
        <section className={`${spacing.section} bg-bg flex justify-center`}>
          <div className="max-w-7xl w-full px-30 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black uppercase mb-20 mx-auto"
              style={{ lineHeight: '1.2' }}
            >
              ABOUT
              <br />
              <span className="text-accent">OPAL AURA</span>
            </motion.h1>

            {/* Accent bar - CENTERED */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-32 bg-accent mb-24 mx-auto origin-center"
            />
          </div>
        </section>

        {/* Bio Section - CENTERED */}
        <section className={`${spacing.section} bg-surface flex justify-center`}>
          <div className="max-w-7xl w-full px-30">
            <div className={`grid md:grid-cols-2 ${spacing.footerColumns}`}>
              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black uppercase mb-10" style={{ lineHeight: '1.15' }}>
                  PHOTOGRAPHY WITH
                  <br />
                  <span className="text-accent">PURPOSE</span>
                </h2>
                <div className="text-text-secondary text-lg font-medium leading-relaxed">
                  <p className="mb-6">
                    Based in Belgrade, Serbia, OPAL AURA represents a brutalist approach to
                    fine art photography. No filters, no compromises, no pretense.
                  </p>
                  <p className="mb-6">
                    Every frame captures raw emotion and unfiltered truth. The aesthetic is
                    bold, the vision is clear, and the message is direct.
                  </p>
                  <p>
                    This is photography stripped to its essence—powerful, honest, and
                    unapologetically brutal.
                  </p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="border-4 border-accent overflow-hidden"
              >
                <img
                  src="https://picsum.photos/seed/about/600/800?grayscale"
                  alt="Photographer portrait"
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialties Grid - CENTERED */}
        <section className={`${spacing.section} bg-bg flex justify-center`}>
          <div className="max-w-7xl w-full px-30">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-black uppercase mb-20 text-center"
              style={{ lineHeight: '1.3' }}
            >
              WHAT I <span className="text-accent">DO</span>
            </motion.h2>

            <div className={`grid md:grid-cols-3 ${spacing.gridComfortable} w-full mx-auto`}>
              {specialties.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${spacing.cardPadding} bg-surface border-3 border-border hover:border-accent transition-all duration-200 group overflow-hidden text-center flex flex-col items-center`}
                  >
                    <Icon
                      size={48}
                      strokeWidth={2.5}
                      className="text-accent mb-8 group-hover:scale-110 transition-transform"
                    />
                    <h3 className="text-xl font-black uppercase mb-6 tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm font-medium uppercase">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Publications - CENTERED */}
        <section className={`${spacing.section} bg-accent`}>
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-black uppercase mb-20 text-bg text-center"
              style={{ lineHeight: '1.3' }}
            >
              FEATURED <span className="text-bg/70">IN</span>
            </motion.h2>

            <div className={`${spacing.listGap} max-w-4xl w-full px-30`}>
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${spacing.cardPadding} bg-bg/10 border-3 border-bg/30 hover:border-bg hover:bg-bg/20 transition-all duration-200`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-black uppercase text-bg mb-4 tracking-widest">
                        {pub.title}
                      </h3>
                      <p className="text-bg/80 font-bold uppercase text-sm">
                        {pub.role}
                      </p>
                    </div>
                    <div className="text-6xl font-black text-bg/30">{pub.year}</div>
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
