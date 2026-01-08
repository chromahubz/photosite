'use client';

/**
 * SplitHeader - Professional Navigation Spacing
 * Container: 64px horizontal padding
 * Nav items: 48px gaps
 * Mobile: Full-screen overlay with staggered animations
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { spacing } from '@/lib/spacing';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
];

const colors = [
  '#ff0066', // accent pink
  '#ffffff', // white
  '#cccccc', // light gray
  '#999999', // medium gray
  '#cc0052', // darker pink
  '#ff3385', // lighter pink
];

export function SplitHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('#ffffff');

  const handleLogoHover = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <>
      {/* Desktop/Mobile Header */}
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-bg border-b-4 border-accent"
        style={{ height: 'var(--header-height)' }}
      >
        <nav className={`flex items-center justify-between h-full ${spacing.container}`}>
          {/* Logo/Brand - Left */}
          <Link
            href="/"
            className="text-4xl font-black uppercase tracking-tighter transition-all duration-300 group hover:tracking-wide"
            onMouseEnter={handleLogoHover}
          >
            <span
              style={{ color: currentColor }}
              className="transition-all duration-300"
            >
              OPAL
            </span>
            <span className="text-accent transition-all duration-300">AURA</span>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className={`hidden md:flex items-center ${spacing.navGap}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-black uppercase tracking-widest hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-text hover:text-accent transition-colors"
            aria-label="Open menu"
          >
            <Menu size={32} strokeWidth={3} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg md:hidden"
          >
            {/* Close Button */}
            <div className="absolute top-8 right-8">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-text hover:text-accent transition-all duration-200 hover:scale-110"
                aria-label="Close menu"
              >
                <X size={40} strokeWidth={4} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <motion.nav
              className="flex flex-col items-center justify-center h-full space-y-12"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-black uppercase tracking-tighter hover:text-accent transition-all duration-200 hover:scale-110"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
