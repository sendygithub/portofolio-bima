"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
  Lightbulb,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-[#0f172a] rounded-xl p-6 sm:p-8 shadow-md border border-[#10b981]/20 hover:shadow-xl hover:border-[#10b981] transition-all group"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#10b981] to-[#f59e0b] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{description}</p>
    </motion.div>
  );
}

export default function CoreServices() {
  const services = [
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Strategic Planning",
      description:
        "Develop comprehensive business strategies that align with your goals and drive sustainable growth.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Process Optimization",
      description:
        "Streamline operations and eliminate inefficiencies to maximize productivity and reduce costs.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Team Leadership",
      description:
        "Build high-performing teams through effective leadership, training, and organizational development.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Risk Management",
      description:
        "Identify and mitigate risks while ensuring compliance and maintaining business continuity.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Market Expansion",
      description:
        "Navigate new markets and opportunities with data-driven insights and strategic execution.",
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Innovation Consulting",
      description:
        "Foster innovation and digital transformation to stay ahead in competitive markets.",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f172a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Core Services
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive business management solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
