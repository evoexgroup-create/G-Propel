"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Leaf, Globe, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every decision we make is filtered through environmental impact. Our technology eliminates the two biggest polluters in transport — fossil fuels and battery manufacturing.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    description:
      "Designed to be retrofitted into existing roads or built into new ones, our system scales from a single lane to an entire national highway network.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Zero-emission transport shouldn't be a luxury. By removing the cost of vehicle powertrains and charging networks, we make clean mobility accessible to all.",
  },
  {
    icon: Lightbulb,
    title: "New Physics in Mobility",
    description:
      "We're applying breakthrough principles in electromagnetic propulsion to create something the world has never seen — roads that drive vehicles.",
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      className="relative py-32 bg-surface/50"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-tight">
              Beyond the
              <br />
              <span className="text-gradient">EV Revolution</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed">
              Electric vehicles were a step forward — but they still rely on
              heavy batteries, rare earth minerals, and vast charging
              infrastructure. We&apos;re building a future where none of that is
              needed.
            </p>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              Imagine a world where roads power vehicles, where transport has
              zero environmental footprint, and where clean mobility is available
              to everyone, everywhere.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex px-8 py-4 bg-primary text-background font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Join the Revolution
              </a>
            </div>
          </motion.div>

          {/* Right - Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
