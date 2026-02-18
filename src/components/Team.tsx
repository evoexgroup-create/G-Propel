"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Sam Saravanan",
    role: "Founder & Engineer",
    location: "WA, Australia",
    image: "/team/sam.png",
    scale: "scale-150",
    description:
      "32+ years of techno-commercial expertise. Led $3.5B+ in high-impact energy projects. Delivers game-changing technology solutions.",
  },
  {
    name: "Ramin Ranjbar",
    role: "Technical Advisor",
    location: "Melbourne, Australia",
    image: "/team/ramin.png",
    scale: "scale-[2]",
    description:
      "20+ years as Senior R&D and Technology Manager. PhD Candidate in Technology, Innovation & Governance. Expert in system integration and control engineering.",
  },
  {
    name: "Ritthika",
    role: "Co-Founder",
    location: "Perth, Australia",
    image: "/team/ritthika.png",
    scale: "scale-150",
    description:
      "Robotics student at UWA. Prototype fabricator and driving force behind GPropel's mission for a zero-emission future.",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Visionaries That <span className="text-gradient">Disrupt</span>
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A team of engineers, innovators, and sustainability champions
            building the future of zero-emission transport.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group text-center p-8 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm hover:border-primary/30 hover:bg-surface/60 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover ${member.scale}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-1">
                {member.role}
              </p>
              <p className="text-muted text-xs mb-4">{member.location}</p>
              <p className="text-muted text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
