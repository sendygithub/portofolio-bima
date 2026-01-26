"use client";

import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bima Maulana S. M</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Transforming businesses through strategic excellence and
              operational optimization.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#10b981] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10b981] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-[#10b981] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#10b981] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#10b981] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#10b981] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#10b981] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 Bima Maulana S. M - Business Management Professional. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
