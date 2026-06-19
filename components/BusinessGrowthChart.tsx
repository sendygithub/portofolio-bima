"use client";

import { motion } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Cell, LineChart, Line,
} from "recharts";

const growthData = [
  { month: "Jan", revenue: 120, efficiency: 75, clients: 15 },
  { month: "Feb", revenue: 135, efficiency: 78, clients: 18 },
  { month: "Mar", revenue: 150, efficiency: 82, clients: 22 },
  { month: "Apr", revenue: 165, efficiency: 85, clients: 25 },
  { month: "Mei", revenue: 180, efficiency: 88, clients: 28 },
  { month: "Jun", revenue: 200, efficiency: 92, clients: 32 },
];

const projectData = [
  { category: "Perencanaan Strategis", value: 28 },
  { category: "Optimalisasi Proses", value: 22 },
  { category: "Kepemimpinan Tim", value: 18 },
  { category: "Manajemen Risiko", value: 15 },
  { category: "Ekspansi Pasar", value: 12 },
  { category: "Inovasi", value: 5 },
];

const tooltipStyle = {
  contentStyle: {
    backgroundColor: "#111118",
    border: "1px solid rgba(139,92,246,0.3)",
    borderRadius: "10px",
    color: "#f1f0ff",
    fontSize: "12px",
  },
};

const barColors = ["#8b5cf6", "#22d3ee", "#ec4899", "#10b981", "#f59e0b", "#a78bfa"];

export default function BusinessGrowthChart() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative" style={{ background: "var(--bg-base)" }}>
      <div className="orb orb-cyan w-[300px] h-[300px] top-10 right-0 opacity-40" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag tag-cyan mb-4 inline-block">Data & Analitik</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Metrik <span className="gradient-text">Pertumbuhan Bisnis</span>
          </h2>
          <p className="text-base sm:text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Wawasan berbasis data yang menampilkan pertumbuhan dan kinerja yang konsisten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Area chart */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-5 sm:p-7"
          >
            <h3 className="text-base font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Pertumbuhan Pendapatan & Efisiensi
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="gradRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#5c5b6e" tick={{ fontSize: 11 }} />
                <YAxis stroke="#5c5b6e" tick={{ fontSize: 11 }} />
                <Tooltip {...tooltipStyle} />
                <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} fill="url(#gradRev)" name="Pendapatan (K)" />
                <Area type="monotone" dataKey="efficiency" stroke="#22d3ee" strokeWidth={2} fill="url(#gradEff)" name="Efisiensi %" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-5 sm:p-7"
          >
            <h3 className="text-base font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Distribusi Proyek
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={projectData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis type="number" stroke="#5c5b6e" tick={{ fontSize: 11 }} />
                <YAxis dataKey="category" type="category" stroke="#5c5b6e" width={110} tick={{ fontSize: 10 }} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {projectData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Line chart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 card-glass p-5 sm:p-7"
          >
            <h3 className="text-base font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Tren Pertumbuhan Klien
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#5c5b6e" tick={{ fontSize: 11 }} />
                <YAxis stroke="#5c5b6e" tick={{ fontSize: 11 }} />
                <Tooltip {...tooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="clients"
                  stroke="url(#lineGrad)"
                  strokeWidth={3}
                  dot={{ fill: "#8b5cf6", r: 5, strokeWidth: 0 }}
                  activeDot={{ r: 7, fill: "#22d3ee", strokeWidth: 0 }}
                  name="Klien Aktif"
                />
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
