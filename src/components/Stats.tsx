"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "0", unit: "g CO₂", label: "Tailpipe Emissions" },
  { value: "24/7", unit: "", label: "Continuous Operation" },
  { value: "100%", unit: "", label: "Contactless & Safe" },
  { value: "Any", unit: "Vehicle", label: "Universal Compatibility" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-border/50 bg-surface/30 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-lg md:text-xl text-muted ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
