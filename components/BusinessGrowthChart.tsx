"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const growthData = [
  { month: "Jan", revenue: 120, efficiency: 75, clients: 15 },
  { month: "Feb", revenue: 135, efficiency: 78, clients: 18 },
  { month: "Mar", revenue: 150, efficiency: 82, clients: 22 },
  { month: "Apr", revenue: 165, efficiency: 85, clients: 25 },
  { month: "May", revenue: 180, efficiency: 88, clients: 28 },
  { month: "Jun", revenue: 200, efficiency: 92, clients: 32 },
];

const projectData = [
  { category: "Strategic Planning", value: 28 },
  { category: "Process Optimization", value: 22 },
  { category: "Team Leadership", value: 18 },
  { category: "Risk Management", value: 15 },
  { category: "Market Expansion", value: 12 },
  { category: "Innovation", value: 5 },
];

export default function BusinessGrowthChart() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Business Growth Metrics
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Data-driven insights showcasing consistent growth and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Revenue & Efficiency Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#10b981]/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Revenue & Efficiency Growth
            </h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #10b981",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  name="Revenue (K)"
                />
                <Area
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#f59e0b"
                  fillOpacity={1}
                  fill="url(#colorEfficiency)"
                  name="Efficiency %"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Project Distribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#10b981]/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Project Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <BarChart data={projectData} layout="vertical">
                <defs>
                  <linearGradient id="colorGradient1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="colorGradient2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis dataKey="category" type="category" stroke="#94a3b8" width={100} className="text-xs sm:text-sm" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #10b981",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {projectData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 2 === 0 ? "url(#colorGradient1)" : "url(#colorGradient2)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Client Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[#0f172a] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#10b981]/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Client Growth Trend
            </h3>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #10b981",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="clients"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", r: 6 }}
                  activeDot={{ r: 8 }}
                  name="Active Clients"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
