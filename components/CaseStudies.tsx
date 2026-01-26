"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

interface CaseStudyProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  delay: number;
}

function CaseStudyCard({
  company,
  industry,
  challenge,
  solution,
  result,
  delay,
}: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 shadow-lg border border-[#10b981]/20 min-w-[300px] sm:min-w-[350px] flex-shrink-0 hover:shadow-xl hover:border-[#10b981]/40 transition-shadow"
    >
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{company}</h3>
        <span className="text-sm text-[#10b981] font-semibold">{industry}</span>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Challenge
          </h4>
          <p className="text-gray-300 text-sm sm:text-base">{challenge}</p>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Solution
          </h4>
          <p className="text-gray-300 text-sm sm:text-base">{solution}</p>
        </div>

        <div className="bg-gradient-to-br from-[#10b981] to-[#0f172a] rounded-lg p-4 text-white">
          <h4 className="text-sm font-semibold uppercase mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Result
          </h4>
          <p className="font-semibold text-lg">{result}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge:
        "Facing declining market share and operational inefficiencies across multiple departments.",
      solution:
        "Implemented comprehensive process optimization, restructured teams, and introduced data-driven decision-making frameworks.",
      result: "35% increase in operational efficiency and 20% revenue growth in 12 months",
    },
    {
      company: "Manufacturing Plus",
      industry: "Manufacturing",
      challenge:
        "Supply chain disruptions and quality control issues affecting customer satisfaction.",
      solution:
        "Redesigned supply chain processes, implemented quality management systems, and established strategic vendor partnerships.",
      result: "50% reduction in defects and 30% improvement in on-time delivery",
    },
    {
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge:
        "Regulatory compliance challenges and need for digital transformation.",
      solution:
        "Developed compliance framework, led digital transformation initiative, and trained teams on new systems and processes.",
      result: "100% compliance rate and 40% reduction in processing time",
    },
    {
      company: "RetailMax",
      industry: "Retail",
      challenge:
        "Stagnant growth and inability to compete with e-commerce giants.",
      solution:
        "Created omnichannel strategy, optimized inventory management, and enhanced customer experience programs.",
      result: "25% increase in sales and 45% improvement in customer retention",
    },
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Real results from real businesses - see how we've transformed
            operations
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-6 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
          <div className="flex gap-4 sm:gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} delay={index * 0.1} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#10b981] to-[#0f172a] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
