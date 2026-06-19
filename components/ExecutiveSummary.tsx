"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Briefcase, Award, Target } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  gradient: string;
}

function MetricCard({ icon, value, suffix, label, delay, gradient }: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1800;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="card-glass p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: gradient }} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
        style={{ background: gradient, boxShadow: `0 8px 24px rgba(0,0,0,0.3)` }}>
        {icon}
      </div>
      <div className="stat-number text-4xl sm:text-5xl mb-2" style={{ color: "var(--text-primary)" }}>
        {count}<span style={{ color: "var(--purple-light)" }}>{suffix}</span>
      </div>
      <div className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{label}</div>
    </motion.div>
  );
}

export default function ExecutiveSummary() {
  const metrics = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      value: 10, suffix: "+",
      label: "Tahun Pengalaman",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    },
    {
      icon: <Target className="w-5 h-5" />,
      value: 50, suffix: "+",
      label: "Proyek Dikelola",
      gradient: "linear-gradient(135deg, #22d3ee, #0891b2)",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      value: 20, suffix: "%",
      label: "Peningkatan Efisiensi",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: 95, suffix: "%",
      label: "Kepuasan Klien",
      gradient: "linear-gradient(135deg, #10b981, #22d3ee)",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative" style={{ background: "var(--bg-surface)" }}>
      <div className="section-divider mb-16" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag tag-purple mb-4 inline-block">Pencapaian</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Rekam Jejak{" "}
            <span className="gradient-text">yang Terbukti</span>
          </h2>
          <p className="text-base sm:text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Menghasilkan hasil terukur yang mendorong kesuksesan bisnis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
