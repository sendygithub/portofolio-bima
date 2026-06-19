"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative" style={{ background: "var(--bg-surface)" }}>
      <div className="orb orb-purple w-[400px] h-[400px] top-0 left-[-100px] opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag tag-purple mb-4 inline-block">Kontak</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Mari <span className="gradient-text">Bekerja Sama</span>
          </h2>
          <p className="text-base sm:text-lg max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Siap mentransformasi bisnis Anda? Hubungi kami untuk mendiskusikan proyek Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Intro card */}
            <div className="card-glass p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee)" }}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>Mari Ngobrol!</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Saya selalu terbuka untuk mendiskusikan peluang baru, proyek menarik, atau sekadar ngobrol soal bisnis dan strategi.
              </p>
            </div>

            {[
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "bima.maulana@example.com", gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)" },
              { icon: <Phone className="w-5 h-5" />, label: "Telepon", value: "+62 812-3456-7890", gradient: "linear-gradient(135deg, #22d3ee, #0891b2)" },
              { icon: <MapPin className="w-5 h-5" />, label: "Lokasi", value: "Tangerang, Indonesia", gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: item.gradient }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>{item.label}</div>
                  <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-6 sm:p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Nama</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  required
                  className="input-dark w-full px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Email</label>
                <input
                  type="email"
                  placeholder="Email Anda"
                  required
                  className="input-dark w-full px-4 py-3 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Subjek</label>
              <input
                type="text"
                placeholder="Topik diskusi"
                className="input-dark w-full px-4 py-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Pesan</label>
              <textarea
                placeholder="Pesan Anda"
                required
                rows={5}
                className="input-dark w-full px-4 py-3 text-sm resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              style={{ borderRadius: "10px" }}
            >
              <span>Kirim Pesan</span>
              <Send className="w-4 h-4" style={{ position: "relative", zIndex: 1 }} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
