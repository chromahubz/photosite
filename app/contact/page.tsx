'use client';

/**
 * Contact Page - Professional Form Spacing
 * Form fields: 32px spacing
 * Labels: 12px from inputs
 * Input padding: 24x16px
 * Grid: 64px column gaps
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';
import { SplitHeader } from '@/components/layout/SplitHeader';
import { Footer } from '@/components/layout/Footer';
import { BoldButton } from '@/components/ui/BoldButton';
import { spacing } from '@/lib/spacing';

const contactInfo = {
  email: 'hello@opalaura.com',
  instagram: '@opalauraphoto',
  location: 'Belgrade, Serbia',
};

const services = [
  'Editorial Photography',
  'Commercial Shoots',
  'Portrait Sessions',
  'Art Direction',
  'Creative Consultation',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SplitHeader />

      <main className="flex-1" style={{ paddingTop: 'var(--header-height)' }}>
        {/* Contact Header - GENEROUS MARGIN */}
        <section className={`${spacing.section} bg-bg`}>
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black uppercase mb-20"
              style={{ lineHeight: '1.2' }}
            >
              LET'S
              <br />
              <span className="text-accent">WORK</span>
            </motion.h1>

            {/* Accent bar - MORE SPACE */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-32 bg-accent mb-24 origin-left"
            />
          </div>
        </section>

        {/* Contact Form + Info - 64px column gaps */}
        <section className={`${spacing.section} bg-surface`}>
          <div className="container">
            <div className={`grid md:grid-cols-2 ${spacing.footerColumns}`}>
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-black uppercase mb-20" style={{ lineHeight: '1.3' }}>
                  GET IN
                  <br />
                  <span className="text-accent">TOUCH</span>
                </h2>

                {/* Contact Methods - MORE SPACING */}
                <div className={`${spacing.listGap} mb-24`}>
                  <div className="flex items-start gap-8">
                    <Mail size={32} strokeWidth={2.5} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest mb-4">
                        EMAIL
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-lg font-bold text-text-secondary hover:text-accent transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <Instagram
                      size={32}
                      strokeWidth={2.5}
                      className="text-accent flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest mb-4">
                        INSTAGRAM
                      </p>
                      <a
                        href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-text-secondary hover:text-accent transition-colors"
                      >
                        {contactInfo.instagram}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <MapPin size={32} strokeWidth={2.5} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest mb-4">
                        LOCATION
                      </p>
                      <p className="text-lg font-bold text-text-secondary">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services List - GENEROUS SPACING */}
                <div>
                  <h3 className="text-xl font-black uppercase mb-10 tracking-widest">
                    SERVICES
                  </h3>
                  <div className={`${spacing.listGap}`}>
                    {services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-4 text-text-secondary font-bold uppercase text-sm"
                      >
                        <div className="w-2 h-2 bg-accent" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form - 32px field spacing */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className={`${spacing.formField}`}>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-black uppercase tracking-widest ${spacing.labelGap}`}
                    >
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-6 bg-bg border-3 border-border text-text font-bold text-base focus:outline-none focus:border-accent transition-colors"
                      placeholder="JOHN DOE"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-black uppercase tracking-widest ${spacing.labelGap}`}
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-6 bg-bg border-3 border-border text-text font-bold text-base focus:outline-none focus:border-accent transition-colors"
                      placeholder="HELLO@EXAMPLE.COM"
                    />
                  </div>

                  {/* Service Field */}
                  <div>
                    <label
                      htmlFor="service"
                      className={`block text-sm font-black uppercase tracking-widest ${spacing.labelGap}`}
                    >
                      SERVICE INTERESTED IN
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-6 bg-bg border-3 border-border text-text font-bold text-base focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="">SELECT A SERVICE</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-black uppercase tracking-widest ${spacing.labelGap}`}
                    >
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-8 py-6 bg-bg border-3 border-border text-text font-bold text-base focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="TELL ME ABOUT YOUR PROJECT..."
                    />
                  </div>

                  {/* Submit Button */}
                  <BoldButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={submitted}
                  >
                    {submitted ? (
                      'MESSAGE SENT ✓'
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send size={20} className="ml-3" />
                      </>
                    )}
                  </BoldButton>
                </form>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-accent font-black uppercase text-sm text-center"
                  >
                    Thanks! I'll get back to you soon.
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
