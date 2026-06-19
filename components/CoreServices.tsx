"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Zap, Shield, Globe, Lightbulb } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
}

function ServiceCard({ icon, title, description, delay, gradient }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="card-glass p-6 sm:p-7 group relative overflow-hidden"
    >
      {/* Hover gradient bg */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at top left, rgba(139,92,246,0.06), transparent 60%)" }} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white transition-transform group-hover:scale-110"
        style={{ background: gradient }}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</p>
    </motion.div>
  );
}

export default function CoreServices() {
  const services = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Perencanaan Strategis",
      description: "Mengembangkan strategi bisnis komprehensif yang selaras dengan tujuan Anda dan mendorong pertumbuhan berkelanjutan.",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Optimalisasi Proses",
      description: "Merampingkan operasional dan menghilangkan inefisiensi untuk memaksimalkan produktivitas dan menekan biaya.",
      gradient: "linear-gradient(135deg, #22d3ee, #0891b2)",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Kepemimpinan Tim",
      description: "Membangun tim berkinerja tinggi melalui kepemimpinan efektif, pelatihan, dan pengembangan organisasi.",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Manajemen Risiko",
      description: "Mengidentifikasi dan memitigasi risiko sambil memastikan kepatuhan dan kelangsungan bisnis.",
      gradient: "linear-gradient(135deg, #10b981, #22d3ee)",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Ekspansi Pasar",
      description: "Menjelajahi pasar dan peluang baru dengan wawasan berbasis data dan eksekusi strategis.",
      gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Konsultasi Inovasi",
      description: "Mendorong inovasi dan transformasi digital agar tetap unggul di pasar yang kompetitif.",
      gradient: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 relative" style={{ background: "var(--bg-base)" }}>
      {/* Orbs */}
      <div className="orb orb-purple w-[400px] h-[400px] top-0 right-[-100px] opacity-60" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag tag-cyan mb-4 inline-block">Apa yang Saya Tawarkan</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Layanan <span className="gradient-text">Utama</span>
          </h2>
          <p className="text-base sm:text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Solusi manajemen bisnis komprehensif yang disesuaikan dengan kebutuhan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
