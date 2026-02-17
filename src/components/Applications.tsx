"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Truck,
  Bus,
  Car,
  Building2,
  Plane,
  TrainFront,
} from "lucide-react";

const applications = [
  {
    icon: Car,
    title: "Passenger Vehicles",
    description:
      "Everyday cars on highways and urban roads — lighter, cheaper, and fully emission-free without any onboard powertrain.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Truck,
    title: "Freight & Logistics",
    description:
      "Long-haul trucks that never need to refuel or recharge, keeping supply chains moving 24/7 with zero emissions.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Bus,
    title: "Public Transit",
    description:
      "Buses and shuttles running continuous routes without depot charging, reducing fleet costs and downtime.",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Building2,
    title: "Smart Cities",
    description:
      "Entire urban road networks converted to propulsion surfaces, creating emission-free zones across the city.",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Plane,
    title: "Airport Operations",
    description:
      "Taxiways and runways that propel aircraft on the ground, cutting airport emissions and fuel consumption.",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: TrainFront,
    title: "Industrial & Mining",
    description:
      "Heavy-duty haul roads in mines and industrial facilities powered by the road itself, reducing operational costs.",
    color: "from-teal-500/20 to-green-500/20",
  },
];

export default function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="applications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Applications
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Powering Every Road
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            From passenger cars to freight trucks, our technology transforms any
            road into a zero-emission propulsion corridor.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <app.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
