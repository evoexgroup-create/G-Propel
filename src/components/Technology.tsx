"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Battery,
  Plug,
  Fuel,
  CircleDot,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "No Batteries Required",
    description:
      "Vehicles are propelled by the road surface itself, eliminating the need for heavy, expensive battery packs and their environmental disposal costs.",
  },
  {
    icon: Plug,
    title: "No Charging Infrastructure",
    description:
      "Forget about charging stations and range anxiety. Our roads provide continuous propulsion 24/7, so vehicles never need to stop to recharge.",
  },
  {
    icon: Fuel,
    title: "No Fuel. No Emissions.",
    description:
      "Zero fossil fuels. Zero tailpipe emissions. Zero carbon footprint. A truly clean transportation solution from the ground up.",
  },
  {
    icon: CircleDot,
    title: "Contactless & Safe",
    description:
      "Our proprietary contactless propulsion technology is completely safe for pedestrians, cyclists, and wildlife — nothing dangerous on the road surface.",
  },
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            The Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Beyond Electric Vehicles
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            We&apos;re not improving the EV — we&apos;re replacing the need for
            one. Our road propulsion system applies new physics to eliminate
            vehicle powertrains entirely.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group p-8 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm hover:border-primary/30 hover:bg-surface/60 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
          >
            See how it works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
