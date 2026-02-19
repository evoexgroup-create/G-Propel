"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  { src: "/prototype/p1.jpg", alt: "Prototype view 1" },
  { src: "/prototype/p2.jpg", alt: "Prototype view 2" },
  { src: "/prototype/p3.jpg", alt: "Prototype view 3" },
  { src: "/prototype/p4.jpg", alt: "Prototype view 4" },
];

export default function Prototype() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Prototype
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Early <span className="text-gradient">Development</span>
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A look at the early-stage prototype behind GPropel&apos;s
            road-powered propulsion system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 w-10 h-10 rounded-full border border-border/50 bg-surface/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 w-10 h-10 rounded-full border border-border/50 bg-surface/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-[16/10]"
              >
                <Image
                  src={images[current].src}
                  alt={images[current].alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
