"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap, Shield, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: "-10%",
              right: "-10%",
            }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Pioneering Zero-Emission Transport
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
          >
            Roads That
            <br />
            <span className="text-gradient">Propel</span> Vehicles
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The world&apos;s first contactless road propulsion system. No
            engines. No batteries. No charging stations. Just zero-emission
            motion, powered by the road itself.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#technology"
              className="px-8 py-4 bg-primary text-background font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20 text-base"
            >
              Explore the Technology
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-surface-light transition-all text-base"
            >
              How It Works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              {
                icon: Zap,
                label: "Zero Emissions",
                desc: "100% clean propulsion",
              },
              {
                icon: Shield,
                label: "Pedestrian Safe",
                desc: "Contactless technology",
              },
              {
                icon: Globe,
                label: "Any Vehicle",
                desc: "Universal compatibility",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-surface/50 backdrop-blur-sm hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-base font-semibold">{stat.label}</span>
                <span className="text-sm text-muted">{stat.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#technology"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
