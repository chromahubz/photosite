'use client';

/**
 * Footer - Professional 4-Column Layout
 * Container: 64x80px padding
 * Columns: 64px gaps
 * Links: 16px spacing
 */

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Mail, Send } from 'lucide-react';
import { BoldButton } from '../ui/BoldButton';
import { spacing } from '@/lib/spacing';

const navigationLinks = [
  { name: 'HOME', href: '/' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
];

const contactInfo = {
  email: 'hello@opalaura.com',
  instagram: 'https://instagram.com/opalauraphoto',
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter signup
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="border-t-4 border-accent bg-surface">
      <div className={`${spacing.container} ${spacing.section}`}>
        {/* Main Footer Grid - 4 Columns with 64px gaps */}
        <div className={`grid md:grid-cols-4 ${spacing.footerColumns} mb-16`}>
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-5xl font-black uppercase leading-none mb-6">
              OPAL<span className="text-accent">AURA</span>
            </h3>
            <p className="text-text-secondary text-base font-bold uppercase mb-8">
              Fine Art Photography
            </p>
            <p className="text-text-muted text-sm font-bold uppercase">
              Belgrade, Serbia
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-black uppercase mb-8 text-accent tracking-widest">
              NAVIGATE
            </h4>
            <div className={`flex flex-col ${spacing.footerLinks}`}>
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold uppercase hover:text-accent transition-all duration-200 hover:scale-105 inline-block w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="text-xl font-black uppercase mb-8 text-accent tracking-widest">
              CONNECT
            </h4>
            <div className={`flex flex-col ${spacing.footerLinks}`}>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-base font-bold uppercase hover:text-accent transition-all duration-200 hover:scale-105"
              >
                <Mail size={24} strokeWidth={3} />
                EMAIL
              </a>
              {contactInfo.instagram && (
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-bold uppercase hover:text-accent transition-all duration-200 hover:scale-105"
                >
                  <Instagram size={24} strokeWidth={3} />
                  INSTAGRAM
                </a>
              )}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xl font-black uppercase mb-8 text-accent tracking-widest">
              NEWSLETTER
            </h4>
            <p className="text-text-secondary text-sm font-bold mb-6 uppercase">
              Get updates on new work
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL"
                  required
                  className="w-full px-8 py-5 bg-bg border-3 border-border text-text font-bold text-sm uppercase placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <BoldButton
                type="submit"
                variant="primary"
                size="sm"
                className="w-full"
                disabled={subscribed}
              >
                {subscribed ? (
                  'SUBSCRIBED ✓'
                ) : (
                  <>
                    SUBSCRIBE
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </BoldButton>
            </form>
          </div>
        </div>

        {/* Copyright Bar - 48px padding above */}
        <div className="pt-12 border-t-2 border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-text-muted text-sm font-bold uppercase">
              © {currentYear} OPAL AURA PHOTO. ALL RIGHTS RESERVED.
            </p>
            <p className="text-text-muted text-xs font-bold uppercase">
              DESIGNED & BUILT IN BELGRADE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
