"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "EnergyLab", logo: "/partners/energylab.png", height: 40 },
  { name: "PlusEight", logo: "/partners/pluseight.png", height: 40 },
  { name: "Propel Fremantle", logo: null, height: 0 },
  { name: "Fremantle Chamber of Commerce", logo: "/partners/fcc.png", height: 45 },
  { name: "Australian Automation and Robotics Precinct", logo: "/partners/aarp.svg", height: 50 },
  { name: "City of Canning", logo: "/partners/canning.webp", height: 45 },
  { name: "Spacecubed", logo: "/partners/spacecubed.svg", height: 30 },
  { name: "City of Fremantle", logo: "/partners/fremantle.svg", height: 45 },
  { name: "Meshpoints", logo: null, height: 0 },
  { name: "Fraunhofer Germany", logo: null, height: 0 },
  { name: "AIMS.GOV", logo: null, height: 0 },
  { name: "BITS Pilani Dubai", logo: null, height: 0 },
  { name: "WSU", logo: null, height: 0 },
  { name: "MQU", logo: null, height: 0 },
  { name: "Swinburne University", logo: null, height: 0 },
  { name: "Apparent Power Control System", logo: null, height: 0 },
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
            Backed by leading accelerators, government bodies, universities,
            and innovation hubs worldwide.
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
              className="group flex items-center justify-center p-6 h-28 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-surface-light transition-all duration-300"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={partner.height}
                  className="object-contain max-h-12 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-sm font-bold text-muted group-hover:text-foreground transition-colors text-center leading-tight tracking-wide">
                  {partner.name === "Propel Fremantle" ? (
                    <>
                      <span className="text-lg">Propel</span>
                      <span className="text-primary text-lg">*</span>
                      <br />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-normal">
                        Fremantle
                      </span>
                    </>
                  ) : partner.name === "Meshpoints" ? (
                    <span className="text-base tracking-wider">
                      #meshpoints
                    </span>
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-widest">
                      {partner.name}
                    </span>
                  )}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
