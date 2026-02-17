"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "EnergyLab", display: "(Energy)Lab" },
  { name: "CSIRO", display: "CSIRO" },
  { name: "PlusEight", display: "PlusEight" },
  { name: "Propel Fremantle", display: "Propel Fremantle" },
  { name: "Fremantle Chamber of Commerce", display: "Fremantle Chamber of Commerce" },
  { name: "Australian Automation and Robotics Precinct", display: "AARP" },
  { name: "City of Canning", display: "City of Canning" },
  { name: "Spacecubed", display: "Spacecubed" },
  { name: "City of Fremantle", display: "City of Fremantle" },
  { name: "Meshpoints", display: "Meshpoints" },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-surface/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">
            Working With Industry Leaders
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
            Backed by leading accelerators, government bodies, and innovation hubs across Australia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              className="group flex items-center justify-center p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-surface-light transition-all duration-300"
            >
              <span className="text-sm font-semibold text-muted group-hover:text-foreground transition-colors text-center leading-tight">
                {partner.display}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
