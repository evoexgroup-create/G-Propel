"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Let&apos;s Build the Future
          </h2>
          <p className="text-muted text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Interested in our technology? Whether you&apos;re an investor,
            government partner, or technology collaborator — we&apos;d love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="Your company or organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us about your interest in G-Propel technology..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-background font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted">+61 433 193 473</p>
                    <p className="text-sm text-muted mt-1">
                      Technical Support Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted">contact@gpropel.com</p>
                    <p className="text-sm text-muted mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <a
                      href="https://gpropel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1"
                    >
                      gpropel.com
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom banner */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
              <p className="text-muted leading-relaxed text-sm">
                We&apos;re seeking strategic partnerships with governments,
                infrastructure companies, and automotive manufacturers to bring
                road propulsion technology to the world. Let&apos;s talk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
