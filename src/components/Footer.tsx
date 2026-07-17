"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  return (
    <footer className="w-full bg-[#0a0a0b] text-white border-t border-zinc-900">
      
      {/* 1. CTA Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-black tracking-tight leading-none mb-8 sm:mb-10 max-w-4xl select-none">
          Ready To Start <br />
          <span className="text-[#0052e0]">Your Next Campaign?</span>
        </h2>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-slate-950 font-bold px-10 py-4.5 rounded-full hover:bg-slate-100 transition-colors duration-200 text-base"
        >
          Let&apos;s Get Started
        </Link>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-900"></div>

      {/* 2. Main Footer Link Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 md:gap-6 items-start">
          
          {/* Column 1: Brand Info (4 cols width on desktop) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Quality Resource Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Address & Hours */}
            <div className="flex flex-col gap-3.5 text-sm text-zinc-400 font-medium w-full">
              <p className="hover:text-white transition-colors duration-200">
                <span className="font-bold text-zinc-300 block mb-0.5">Phone:</span>
                (571) 370-3427
              </p>
              <p className="hover:text-white transition-colors duration-200">
                <span className="font-bold text-zinc-300 block mb-0.5">Email:</span>
                info@qualityresourcellc.com
              </p>
              <p>
                <span className="font-bold text-zinc-300 block mb-0.5">Hours:</span>
                Monday - Friday 8:30 am - 5 pm
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (Collapsible Accordion on Mobile) */}
          <div className="lg:col-span-2 flex flex-col items-start w-full border-b border-zinc-900 md:border-b-0 pb-4 md:pb-0">
            {/* Header Trigger */}
            <button
              onClick={() => setIsLinksOpen(!isLinksOpen)}
              className="w-full md:pointer-events-none flex items-center justify-between md:block text-left text-sm font-bold text-white uppercase tracking-wider select-none py-2 md:py-0"
            >
              <span>Quick Links</span>
              <span className="md:hidden">
                {isLinksOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            
            {/* Links Wrapper */}
            <div
              className={`w-full transition-all duration-300 overflow-hidden md:max-h-none md:opacity-100 ${
                isLinksOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 md:mt-4"
              }`}
            >
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-400 font-medium">
                <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors duration-200">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors duration-200">Our Blog</Link></li>
                <li><Link href="/awards" className="hover:text-white transition-colors duration-200">Our Awards</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors duration-200">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Services (Collapsible Accordion on Mobile) */}
          <div className="lg:col-span-2 flex flex-col items-start w-full border-b border-zinc-900 md:border-b-0 pb-4 md:pb-0">
            {/* Header Trigger */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full md:pointer-events-none flex items-center justify-between md:block text-left text-sm font-bold text-white uppercase tracking-wider select-none py-2 md:py-0"
            >
              <span>Services</span>
              <span className="md:hidden">
                {isServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {/* Links Wrapper */}
            <div
              className={`w-full transition-all duration-300 overflow-hidden md:max-h-none md:opacity-100 ${
                isServicesOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 md:mt-4"
              }`}
            >
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-400 font-medium">
                <li><Link href="/services/web-design" className="hover:text-white transition-colors duration-200">Web Design & Development</Link></li>
                <li><Link href="/services/seo" className="hover:text-white transition-colors duration-200">Website SEO</Link></li>
                <li><Link href="/services/local-maps" className="hover:text-white transition-colors duration-200">Local Maps Optimization</Link></li>
                <li><Link href="/services/social-media" className="hover:text-white transition-colors duration-200">Social Media Marketing</Link></li>
                <li><Link href="/services/ppc" className="hover:text-white transition-colors duration-200">PPC Management</Link></li>
                <li><Link href="/services/app-dev" className="hover:text-white transition-colors duration-200">App Development</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Locations (Collapsible Accordion on Mobile) */}
          <div className="lg:col-span-2 flex flex-col items-start w-full border-b border-zinc-900 md:border-b-0 pb-4 md:pb-0">
            {/* Header Trigger */}
            <button
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              className="w-full md:pointer-events-none flex items-center justify-between md:block text-left text-sm font-bold text-white uppercase tracking-wider select-none py-2 md:py-0"
            >
              <span>Locations</span>
              <span className="md:hidden">
                {isLocationsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {/* Links Wrapper */}
            <div
              className={`w-full transition-all duration-300 overflow-hidden md:max-h-none md:opacity-100 ${
                isLocationsOpen ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0 md:mt-4"
              }`}
            >
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-400 font-medium">
                <li><span className="text-zinc-400">United States of America</span></li>
                <li><span className="text-zinc-400">Australia</span></li>
                <li><span className="text-zinc-400">United Kingdom</span></li>
                <li><span className="text-zinc-400">United Arab Emirates</span></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Follow Us & Google Partner (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 w-full">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider select-none">
              Follow Us
            </h3>
            
            {/* Social Icons */}
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white flex items-center justify-center text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white flex items-center justify-center text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white flex items-center justify-center text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

            {/* Google Partner Badge */}
            <div className="flex flex-col items-start gap-2 mt-2">
              <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider select-none">
                We&apos;re Google Partner!
              </span>
              
              {/* Google Partner Card Badge SVG representation */}
              <div className="w-[125px] h-[75px] bg-white rounded-lg flex flex-col items-center justify-center shadow-md border border-slate-200 select-none">
                <div className="flex items-center gap-1.5 mb-1">
                  {/* Google G logo */}
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.6-4.53-2.6-6.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-[12px] font-bold text-slate-800 tracking-tight">Google</span>
                </div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">Partner</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-900"></div>

      {/* 3. Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
        <span>Quality Resource LLC © 2010 - 2026 All Rights Reserved.</span>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
}
