"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm' : 'bg-white border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'}`}>
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Quality Resource Logo"
              width={220}
              height={60}
              priority
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {/* The Agency Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("agency")}
                className="flex items-center space-x-1 text-slate-800 hover:text-[#f59e0b] font-bold text-base transition-colors duration-200 cursor-pointer"
              >
                <span>The Agency</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'agency' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === "agency" && (
                <div className="absolute top-full left-0 mt-3 w-48 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-xl py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#f59e0b] transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#f59e0b] transition-colors"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Our Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center space-x-1 text-slate-800 hover:text-[#f59e0b] font-bold text-base transition-colors duration-200 cursor-pointer"
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-xl py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/services/digital-marketing"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#f59e0b] transition-colors"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#f59e0b] transition-colors"
                  >
                    SEO Optimization
                  </Link>
                  <Link
                    href="/services/social-media"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#f59e0b] transition-colors"
                  >
                    Social Media Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-work"
              className="text-slate-800 hover:text-[#f59e0b] font-bold text-base transition-colors duration-200"
            >
              Our Work
            </Link>

            <Link
              href="/contact"
              className="text-slate-800 hover:text-[#f59e0b] font-bold text-base transition-colors duration-200"
            >
              Contact Us
            </Link>

            <Link
              href="/blog"
              className="text-slate-800 hover:text-[#f59e0b] font-bold text-base transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* Call to Action Section */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Phone number */}
            <a
              href="tel:5713703422"
              className="hidden lg:flex items-center space-x-2 text-slate-800 hover:text-[#f59e0b] font-bold text-base transition-colors duration-200"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>(571) 370-3422</span>
            </a>

            {/* I'm Ready Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent rounded-full shadow-sm text-sm sm:text-base font-bold text-white bg-[#f59e0b] hover:bg-[#d97706] transition-colors duration-300"
            >
              I&apos;m Ready
            </Link>

            {/* Mobile Hamburger toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden p-2 text-slate-800 hover:text-[#f59e0b] transition-colors cursor-pointer select-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Mobile Menu panel */}
      {isMobileMenuOpen && (
        <div className={`md:hidden w-full bg-white border-t border-slate-100 py-6 px-6 flex flex-col gap-5 shadow-lg absolute left-0 z-50 transition-all duration-300 ${isScrolled ? 'top-16 sm:top-20' : 'top-20 sm:top-24'}`}>
          <div className="flex flex-col gap-4 font-bold text-base text-slate-800">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1 select-none">The Agency</span>
            <Link href="/about" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 mt-2 mb-1 select-none">Our Services</span>
            <Link href="/services/digital-marketing" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</Link>
            <Link href="/services/seo" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>SEO Optimization</Link>
            <Link href="/services/social-media" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>Social Media Marketing</Link>
            
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 mt-2 mb-1 select-none">More Links</span>
            <Link href="/our-work" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link>
            <Link href="/blog" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="pl-2 hover:text-[#f59e0b]" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </div>
          
          <div className="w-full border-t border-slate-100 pt-4 flex flex-col gap-4">
            <a href="tel:5713703422" className="flex items-center space-x-2 text-slate-800 hover:text-[#f59e0b] font-bold text-sm">
              <Phone className="w-4 h-4 fill-current" />
              <span>(571) 370-3422</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
