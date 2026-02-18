"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Road Integration",
    description:
      "Our proprietary propulsion modules are embedded beneath the road surface during construction or retrofit, creating an invisible network of propulsion points.",
  },
  {
    number: "02",
    title: "Contactless Energy Transfer",
    description:
      "Using advanced electromagnetic principles, the road transfers kinetic energy to vehicles contactlessly — no physical connection needed between road and vehicle.",
  },
  {
    number: "03",
    title: "Vehicle Propulsion",
    description:
      "Compatible vehicles receive continuous propulsion from the road, maintaining speed and acceleration without any onboard engine, motor, or battery system.",
  },
  {
    number: "04",
    title: "Clean & Continuous",
    description:
      "The system operates 24/7 using clean energy sources, providing uninterrupted zero-emission transport for any compatible vehicle on the road.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/videos/vid2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            The Road <span className="text-gradient">Powers</span> the Journey
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A fundamentally new approach to transportation, where the
            infrastructure itself becomes the propulsion system.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                  className={`relative lg:flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                      <span className="text-5xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
