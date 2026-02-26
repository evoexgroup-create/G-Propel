"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  // Row 1
  { name: "Fraunhofer Germany", logo: "/partners/Fraunhofer.jpg", height: 40, url: "https://www.fraunhofer.de/en.html" },
  { name: "AIMS.GOV", logo: "/partners/AIMS-.jpg", height: 45, url: "https://www.aims.gov.au" },
  { name: "CSIRO", logo: "/partners/CSIRO-.jpg", height: 40, url: "https://www.csiro.au" },
  { name: "Propel Fremantle", logo: null, height: 0, url: "https://propelfremantle.com.au" },
  { name: "Australian Automation and Robotics Precinct", logo: "/partners/aarp.svg", height: 50, url: "https://www.theaarp.com.au/" },
  // Row 2
  { name: "WSU", logo: "/partners/wsu.png", height: 40, url: "https://www.westernsydney.edu.au" },
  { name: "BITS Pilani Dubai", logo: "/partners/bits-pilani.jpg", height: 40, url: "https://www.bits-pilani.ac.in/dubai" },
  { name: "CORE WA", logo: "/partners/Core.png", height: 40, url: "https://www.corehub.com.au/" },
  { name: "Swinburne University", logo: "/partners/swinburne.jpg", height: 40, url: "https://www.swinburne.edu.au" },
  { name: "MQU", logo: "/partners/Macquarie University Sydney Australia.jpg", height: 40, url: "https://www.mq.edu.au" },
  // Row 3
  { name: "EnergyLab", logo: "/partners/energylab.png", height: 20, url: "https://energylab.org.au", maxWidth: 70 },
  { name: "City of Canning", logo: "/partners/canning.webp", height: 45, url: "https://www.canning.wa.gov.au", filter: "grayscale invert brightness-200" },
  { name: "City of Fremantle", logo: "/partners/fremantle.svg", height: 45, url: "https://www.fremantle.wa.gov.au" },
  { name: "Meshpoints", logo: null, height: 0, url: "https://www.meshpoints.com/" },
  { name: "Spacecubed", logo: "/partners/spacecubed.svg", height: 30, url: "https://www.spacecubed.com" },
  // Row 4
  { name: "Apparent Power Control System", logo: "/partners/appcs.jpg", height: 40, url: "https://www.appcs.in/" },
  { name: "Lotterywest", logo: "/partners/Lotterywest.png", height: 40, url: "https://www.lotterywest.wa.gov.au/" },
  { name: "Climate-KIC", logo: "/partners/ClimateKIC.png", height: 40, url: "https://www.climate-kic.org/" },
  { name: "Fremantle Chamber of Commerce", logo: "/partners/fcc.png", height: 45, url: "https://fremantlechamber.com.au" },
  { name: "Curtin University", logo: "/partners/Curtin University.jpg", height: 40, url: "https://www.curtin.edu.au/" },
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
          className="flex flex-wrap justify-center gap-4"
        >
          {partners.map((partner, i) => (
            <motion.a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              className="group flex items-center justify-center p-6 h-28 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)] rounded-2xl border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-surface-light transition-all duration-300"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={"maxWidth" in partner ? partner.maxWidth : 140}
                  height={partner.height}
                  className={`object-contain max-h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${"filter" in partner ? partner.filter : ""}`}
                  style={"maxWidth" in partner ? { maxWidth: partner.maxWidth } : undefined}
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
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
