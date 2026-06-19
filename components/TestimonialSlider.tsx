"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Global",
    content: "Bekerja dengan profesional ini mentransformasi seluruh operasional kami. Wawasan strategis dan keunggulan eksekusi menghasilkan hasil yang melampaui ekspektasi kami. Sangat direkomendasikan!",
    rating: 5,
    initials: "SJ",
    gradient: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
  },
  {
    name: "Michael Chen",
    role: "Direktur Operasional",
    company: "Manufacturing Plus",
    content: "Keahlian optimalisasi proses dan kepemimpinan tim membawa efisiensi kami ke level tertinggi. Kami melihat perbaikan langsung dan pertumbuhan yang berkelanjutan.",
    rating: 5,
    initials: "MC",
    gradient: "linear-gradient(135deg, #22d3ee, #10b981)",
  },
  {
    name: "Emily Rodriguez",
    role: "CFO",
    company: "FinanceFirst",
    content: "Keahlian luar biasa dalam manajemen risiko dan kepatuhan. Inisiatif transformasi digital dieksekusi dengan sempurna, dan tim kami beradaptasi dengan mulus.",
    rating: 5,
    initials: "ER",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
  },
  {
    name: "David Thompson",
    role: "VP Penjualan",
    company: "RetailMax",
    content: "Strategi omnichannel dan peningkatan pengalaman pelanggan merevolusi bisnis kami. Pertumbuhan penjualan melampaui semua proyeksi.",
    rating: 5,
    initials: "DT",
    gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 relative" style={{ background: "var(--bg-base)" }}>
      <div className="orb orb-pink w-[350px] h-[350px] top-0 right-0 opacity-40" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag tag-cyan mb-4 inline-block">Ulasan Klien</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Testimoni <span className="gradient-text-pink">Klien</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
            Apa yang klien kami katakan tentang bekerja bersama kami
          </p>
        </motion.div>

        <div className="relative px-10 sm:px-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="card-glass p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: t.gradient }} />

              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
                <Quote className="w-5 h-5" style={{ color: "var(--purple-light)" }} />
              </div>

              <p className="text-base sm:text-lg leading-relaxed mb-8 italic"
                style={{ color: "var(--text-secondary)" }}>
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: t.gradient }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold" style={{ color: "var(--text-primary)" }}>{t.name}</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>{t.role}, {t.company}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-sm" style={{ color: "#f59e0b" }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          {[
            { fn: prev, side: "left-0", label: "Previous testimonial", Icon: ChevronLeft },
            { fn: next, side: "right-0", label: "Next testimonial", Icon: ChevronRight },
          ].map(({ fn, side, label, Icon }) => (
            <button
              key={label}
              onClick={fn}
              aria-label={label}
              className={`absolute ${side} top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all`}
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "var(--purple-light)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,92,246,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,92,246,0.1)"; }}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === currentIndex ? "32px" : "8px",
                background: index === currentIndex ? "var(--purple)" : "rgba(255,255,255,0.15)",
              }}
              aria-label={`Testimoni ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
