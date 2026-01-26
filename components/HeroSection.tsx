"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, GraduationCap, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const typingTexts = [
  "Optimizing Operations, Driving Growth",
  "Transforming Business Performance",
  "Strategic Excellence Delivered",
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
      }, 100);
    } else if (!isDeleting && currentText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length - 1));
      }, 50);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-[#1e293b] px-4 sm:px-6 pt-24 pb-12"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#10b981] via-[#0f172a] to-[#f59e0b] p-1">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#10b981] to-[#0f172a] flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                    BM
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#10b981] opacity-75"
              />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Bima Maulana S. M
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#f59e0b] mb-2">
              Business Management Professional
            </h2>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />
              <span>Tangerang</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />
              <span>25 Tahun</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />
              <span className="text-center">Esa Unggul - Manajemen Bisnis</span>
            </div>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#94a3b8] mb-8 min-h-[40px] sm:min-h-[50px] md:min-h-[60px]"
          >
            <span>{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-1 h-6 sm:h-8 bg-[#10b981] ml-2"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Delivering strategic solutions that transform operations, enhance
            efficiency, and drive sustainable growth for businesses worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#10b981] to-[#0f172a] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border-2 border-[#10b981] rounded-lg font-semibold hover:bg-[#10b981] transition-colors text-center"
            >
              View Case Studies
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 sm:mt-16"
          >
            <motion.a
              href="#services"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#94a3b8] hover:text-[#10b981] transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
