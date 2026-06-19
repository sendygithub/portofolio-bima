"use client";

import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6" style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)" }}>
      {/* Gradient line at top */}
      <div className="section-divider mb-12" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-black"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee)" }}>
                BM
              </div>
              <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                Bima <span className="gradient-text">Maulana</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              Mentransformasi bisnis melalui keunggulan strategis dan optimalisasi operasional.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
                { icon: <Github className="w-4 h-4" />, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,92,246,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(139,92,246,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--purple-light)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-secondary)" }}>Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Layanan", href: "#services" },
                { label: "Studi Kasus", href: "#case-studies" },
                { label: "Testimoni", href: "#testimonials" },
                { label: "Kontak", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm flex items-center gap-1.5 group transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--purple-light)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terhubung */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-secondary)" }}>Terhubung</h4>
            <div className="card-glass p-5 rounded-xl">
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                Ingin berdiskusi atau berkolaborasi? Saya siap membantu Anda.
              </p>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 text-xs w-full justify-center"
              >
                Mulai Diskusi
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; 2024 Bima Maulana S. M — Profesional Manajemen Bisnis. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>Tersedia untuk proyek baru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
