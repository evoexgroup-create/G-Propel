"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "GPropel at Demo Night — Propel Fremantle",
    excerpt:
      "Sam Saravanan took the stage at Demo Night hosted at Propel Fremantle, sharing GPropel's vision for zero-emission road-powered transport with founders, investors, and innovation leaders.",
    date: "Jun 2025",
    category: "Events",
    image: "/blog/blog1.jpg.png",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7373342897871634432/",
  },
  {
    title: "Gap Blitz Founder Stories: How Sam Saravanan Is Changing the Way We Get Around",
    excerpt:
      "Featured by Disruptors Co as part of the Gap Blitz program. Sam is disrupting how cars and other vehicles could get around — read on to see how his tech might help reduce emissions and save lives.",
    date: "May 2025",
    category: "Feature",
    image: "/blog/blog2.jpg.png",
    url: "https://www.linkedin.com/pulse/gap-blitz-founder-stories-how-sam-saravanan-changing-way-vzdmc/",
  },
  {
    title: "CSIRO — Acceleration Cohort",
    excerpt:
      "GPROPEL has landed in the CSIRO Acceleration Cohort. The startup pool is electric — next level innovation, collaboration, and big ideas everywhere. A huge thank you to CSIRO for selecting us.",
    date: "Feb 2025",
    category: "Accelerator",
    image: "/blog/blog3.jpg.png",
    url: "https://www.linkedin.com/posts/leahlucas_gapblitz-startups-innovation-activity-7302476135953481728-HXyh/",
  },
  {
    title: "WPU vs. WPT — and Why It Matters",
    excerpt:
      "Many wireless mobility systems work with Wireless Power Transfer (WPT) — charging batteries via coils. GPropel's approach is Wireless Power Utilisation (WPU) — which skips the charging step entirely.",
    date: "2025",
    category: "Technology",
    image: "/blog/blog4.jpg.png",
    url: "https://www.nexxtindustry.com/post/voices-in-emobility-what-if-roads-could-power-vehicles",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? posts.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === posts.length - 1 ? 0 : c + 1));

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
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
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            News, research, and perspectives on the future of zero-emission
            transport infrastructure.
          </p>
        </motion.div>

        {/* Carousel */}
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

          {/* Card */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="md:flex"
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[320px] bg-surface/50">
                  {posts[current].image ? (
                    <Image
                      src={posts[current].image}
                      alt={posts[current].title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted text-sm">Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-primary uppercase tracking-widest">
                      {posts[current].category}
                    </span>
                    <span className="text-xs text-muted">
                      {posts[current].date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                    {posts[current].title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {posts[current].excerpt}
                  </p>
                  <a
                    href={posts[current].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium group"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {posts.map((_, i) => (
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
