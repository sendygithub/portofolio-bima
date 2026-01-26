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
  color: string;
}

function MetricCard({ icon, value, suffix, label, delay, color }: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-[#0f172a] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#10b981]/20 hover:shadow-xl hover:border-[#10b981]/40 transition-all"
    >
      <div className={`inline-block p-3 rounded-xl mb-4 ${color}`}>
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-medium text-sm sm:text-base">{label}</div>
    </motion.div>
  );
}

export default function ExecutiveSummary() {
  const metrics = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      value: 10,
      suffix: "+",
      label: "Years Experience",
      color: "bg-[#0f172a]",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      value: 50,
      suffix: "+",
      label: "Projects Managed",
      color: "bg-[#10b981]",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      value: 20,
      suffix: "%",
      label: "Efficiency Increase",
      color: "bg-[#f59e0b]",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      value: 95,
      suffix: "%",
      label: "Client Satisfaction",
      color: "bg-[#64748b]",
    },
  ];

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
            Proven Track Record
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Delivering measurable results that drive business success
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
