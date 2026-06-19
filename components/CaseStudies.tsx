"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";

interface CaseStudyProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  delay: number;
  accentColor: string;
}

function CaseStudyCard({ company, industry, challenge, solution, result, delay, accentColor }: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="card-glass p-6 sm:p-7 min-w-[300px] sm:min-w-[380px] flex-shrink-0 relative overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: accentColor }} />

      <div className="mb-5">
        <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{company}</h3>
        <span className="tag" style={{
          background: `rgba(139,92,246,0.1)`,
          color: "var(--purple-light)",
          border: "1px solid rgba(139,92,246,0.25)",
          fontSize: "0.7rem",
          padding: "3px 10px",
          borderRadius: "999px",
        }}>
          {industry}
        </span>
      </div>

      <div className="space-y-4">
        <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#f87171" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#f87171" }}>Tantangan</span>
          </div>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{challenge}</p>
        </div>

        <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <Lightbulb className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--cyan)" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--cyan)" }}>Solusi</span>
          </div>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{solution}</p>
        </div>

        <div className="p-3 rounded-xl" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--purple-light)" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--purple-light)" }}>Hasil</span>
          </div>
          <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{result}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Teknologi",
      challenge: "Menghadapi penurunan pangsa pasar dan inefisiensi operasional di berbagai departemen.",
      solution: "Menerapkan optimalisasi proses menyeluruh, merestrukturisasi tim, dan memperkenalkan kerangka pengambilan keputusan berbasis data.",
      result: "Peningkatan efisiensi operasional 35% dan pertumbuhan pendapatan 20% dalam 12 bulan",
      accentColor: "linear-gradient(90deg, #8b5cf6, #22d3ee)",
    },
    {
      company: "Manufacturing Plus",
      industry: "Manufaktur",
      challenge: "Gangguan rantai pasokan dan masalah pengendalian kualitas yang memengaruhi kepuasan pelanggan.",
      solution: "Mendesain ulang proses rantai pasokan, menerapkan sistem manajemen kualitas, dan membangun kemitraan vendor strategis.",
      result: "Pengurangan cacat 50% dan peningkatan pengiriman tepat waktu 30%",
      accentColor: "linear-gradient(90deg, #22d3ee, #10b981)",
    },
    {
      company: "FinanceFirst",
      industry: "Layanan Keuangan",
      challenge: "Tantangan kepatuhan regulasi dan kebutuhan transformasi digital.",
      solution: "Mengembangkan kerangka kepatuhan, memimpin inisiatif transformasi digital, dan melatih tim pada sistem dan proses baru.",
      result: "Tingkat kepatuhan 100% dan pengurangan waktu pemrosesan 40%",
      accentColor: "linear-gradient(90deg, #ec4899, #8b5cf6)",
    },
    {
      company: "RetailMax",
      industry: "Ritel",
      challenge: "Pertumbuhan stagnan dan ketidakmampuan bersaing dengan raksasa e-commerce.",
      solution: "Membuat strategi omnichannel, mengoptimalkan manajemen inventori, dan meningkatkan program pengalaman pelanggan.",
      result: "Peningkatan penjualan 25% dan perbaikan retensi pelanggan 45%",
      accentColor: "linear-gradient(90deg, #f59e0b, #ec4899)",
    },
  ];

  return (
    <section id="case-studies" className="py-20 sm:py-28 px-4 sm:px-6 relative" style={{ background: "var(--bg-surface)" }}>
      <div className="orb orb-cyan w-[350px] h-[350px] bottom-0 left-[-100px] opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag tag-purple mb-4 inline-block">Portofolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Studi <span className="gradient-text">Kasus</span>
          </h2>
          <p className="text-base sm:text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Hasil nyata dari bisnis nyata — lihat bagaimana kami mentransformasi operasional
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-6 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
          <div className="flex gap-5">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} delay={index * 0.08} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
            style={{ borderRadius: "10px" }}
          >
            <span>Diskusikan Proyek Anda</span>
            <ArrowRight className="w-4 h-4" style={{ position: "relative", zIndex: 1 }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
