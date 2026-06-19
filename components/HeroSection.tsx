"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, GraduationCap, Calendar, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const typingTexts = [
  "Mengoptimalkan Operasional, Mendorong Pertumbuhan",
  "Mentransformasi Kinerja Bisnis",
  "Keunggulan Strategis yang Terbukti",
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText.length < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, 80);
    } else if (!isDeleting && currentText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length - 1));
      }, 40);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-12"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Animated orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-[-100px] left-[-100px]" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[-50px] right-[-50px]" />
      <div className="orb orb-pink w-[300px] h-[300px] top-[40%] left-[40%]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="tag tag-purple">
              <Zap className="w-3 h-3" />
              Tersedia untuk Proyek Baru
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl p-[2px]"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee, #ec4899)" }}>
                <div className="w-full h-full rounded-2xl flex items-center justify-center text-4xl sm:text-5xl font-black text-white"
                  style={{ background: "var(--bg-card)" }}>
                  BM
                </div>
              </div>
              {/* Status dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2"
                style={{ borderColor: "var(--bg-base)" }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            Bima Maulana{" "}
            <span className="gradient-text">S. M</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold"
              style={{ color: "var(--text-secondary)" }}>
              Profesional{" "}
              <span className="gradient-text-pink">Manajemen Bisnis</span>
            </h2>
          </motion.div>

          {/* Info chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-8 text-sm"
          >
            {[
              { icon: <MapPin className="w-3.5 h-3.5" />, label: "Tangerang" },
              { icon: <Calendar className="w-3.5 h-3.5" />, label: "25 Tahun" },
              { icon: <GraduationCap className="w-3.5 h-3.5" />, label: "Esa Unggul – Manajemen Bisnis" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--purple-light)" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg sm:text-xl md:text-2xl font-medium mb-6 min-h-[36px] sm:min-h-[44px]"
            style={{ color: "var(--text-secondary)" }}
          >
            <span>{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 h-5 sm:h-6 ml-1 align-middle rounded-full"
              style={{ background: "var(--cyan)" }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Menghadirkan solusi strategis yang mentransformasi operasional, meningkatkan
            efisiensi, dan mendorong pertumbuhan berkelanjutan bagi bisnis di seluruh dunia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              style={{ borderRadius: "10px" }}
            >
              <span>Lihat Layanan</span>
            </motion.a>
            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline w-full sm:w-auto px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
            >
              Lihat Studi Kasus
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16"
          >
            <motion.a
              href="#services"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex flex-col items-center gap-1"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
