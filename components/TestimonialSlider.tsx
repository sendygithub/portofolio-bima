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
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Global",
    content:
      "Working with this professional transformed our entire operation. The strategic insights and execution excellence delivered results beyond our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Manufacturing Plus",
    content:
      "The process optimization and team leadership skills brought our efficiency to new heights. We saw immediate improvements and sustainable growth.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CFO",
    company: "FinanceFirst",
    content:
      "Outstanding expertise in risk management and compliance. The digital transformation initiative was executed flawlessly, and our team adapted seamlessly.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "VP of Sales",
    company: "RetailMax",
    content:
      "The omnichannel strategy and customer experience improvements revolutionized our business. Sales growth exceeded all projections.",
    rating: 5,
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0f172a] to-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-[#10b981]/20"
            >
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#10b981] mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-[#f59e0b] text-lg sm:text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0f172a] border border-[#10b981]/30 shadow-lg flex items-center justify-center hover:bg-[#10b981] hover:border-[#10b981] text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0f172a] border border-[#10b981]/30 shadow-lg flex items-center justify-center hover:bg-[#10b981] hover:border-[#10b981] text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#10b981] w-8"
                  : "bg-gray-600 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
