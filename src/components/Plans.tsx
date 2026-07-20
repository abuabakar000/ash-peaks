"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Plans() {
  const bullets = [
    "Results-driven strategies tailored to your business",
    "Transparent communication and reporting",
    "Dedicated team focused on your growth",
    "Proven process that delivers real, measurable results"
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-background via-background to-white py-20 sm:py-28 overflow-hidden border-b border-slate-100">
      
      {/* Decorative soft ambient gradient background blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-radial from-[#1893b0]/5 to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy Details */}
          <div className="lg:col-span-6 flex flex-col items-start text-left w-full lg:pr-8 xl:pr-12">
            <RevealOnScroll>
              
              {/* Tagline */}
              <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-[#1893b0] uppercase mb-4 select-none">
                Why Choose Ash Peaks
              </span>
              
              {/* Heading */}
              <h2 className="text-[32px] sm:text-4xl lg:text-[45px] font-black leading-[1.1] tracking-tight mb-6">
                <span
                  className="text-transparent select-none"
                  style={{ WebkitTextStroke: "1.5px #0f172a" }}
                >
                  More Than Marketers,
                </span>{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-900 to-slate-700">
                  We&apos;re
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1893b0] via-[#38bdf8] to-[#1893b0]">
                  Growth Partners.
                </span>
              </h2>
              
              {/* Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold mb-8 max-w-lg">
                We combine strategy, creativity, and analytics to deliver measurable growth. Your success is our mission.
              </p>
   
              {/* Core Pillars List */}
              <div className="flex flex-col gap-4.5 w-full">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    {/* Circular Check Indicator */}
                    <div className="w-5 h-5 rounded-full bg-[#1893b0] flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                    <span className="text-[14.5px] sm:text-[16px] font-bold text-slate-700 leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

            </RevealOnScroll>
          </div>

          {/* Right Column: Desk Setup Mockup Image */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end z-0">
            <RevealOnScroll delay={150}>
              <div className="relative w-[115%] lg:w-[130%] max-w-none h-auto lg:-mr-16 xl:-mr-36 transition-all duration-300">
                <Image
                  src="/images/ashp.png"
                  alt="Ash Peaks Analytics Dashboard Mockup"
                  width={850}
                  height={585}
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />

                {/* Floating Glassmorphic Metric Card 1 */}
                <div className="absolute top-[28%] left-[8%] bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-2.5 sm:p-3 shadow-lg shadow-slate-300/15 z-20 flex items-center gap-2.5 select-none pointer-events-none animate-slow-float">
                  <div className="w-8 h-8 rounded-full bg-[#1893b0]/10 flex items-center justify-center text-[#1893b0] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none mb-0.5">Average ROI</span>
                    <span className="text-sm font-black text-slate-900 leading-none">+240%</span>
                  </div>
                </div>

                {/* Floating Glassmorphic Metric Card 2 */}
                <div className="absolute bottom-[24%] right-[2%] bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-2.5 sm:p-3 shadow-lg shadow-slate-300/15 z-20 flex items-center gap-2.5 select-none pointer-events-none animate-slow-float-reverse">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none mb-0.5">New Leads</span>
                    <span className="text-sm font-black text-slate-900 leading-none">+32.5%</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
