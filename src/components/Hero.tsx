"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LineChart, Target, BarChart3, TrendingUp } from "lucide-react";

export default function Hero() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <section className="relative w-full bg-background flex items-center min-h-[calc(100vh-80px)] overflow-hidden border-b border-slate-100 py-12 lg:py-0">
      


      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 w-full">
            


            {/* Main Title */}
            <h1 className="text-[38px] sm:text-[52px] lg:text-[58px] font-black leading-[1.1] tracking-tight mb-6">
              <span
                className="text-transparent select-none"
                style={{ WebkitTextStroke: "1.5px #0f172a" }}
              >
                Reach New Heights.
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8cc] via-[#38bdf8] to-[#1893b0]">
                Grow
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-900 to-slate-700">
                Your Business.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-black text-sm sm:text-base lg:text-lg leading-relaxed font-medium mb-10">
              We help brands stand out, connect with their audience, and achieve measurable growth through strategic marketing solutions.
            </p>
            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              {/* Primary button: brand gradient, rounded-full, glowing shadow */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1893b0] to-[#00a8cc] hover:from-[#15809b] hover:to-[#0097b8] text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-[#1893b0]/15 hover:shadow-xl hover:shadow-[#1893b0]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base group select-none cursor-pointer"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary button: white/outline rounded-full, hover glow borders */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#1893b0] text-slate-800 hover:text-[#1893b0] font-extrabold px-8 py-4 rounded-full shadow-sm shadow-slate-100 hover:shadow-md hover:shadow-slate-200/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base group select-none cursor-pointer"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 w-full">
              {/* Feature 1 */}
              <div className="flex flex-col items-start w-full group/feat cursor-pointer select-none">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#1893b0]/10 group-hover/feat:bg-[#1893b0] flex items-center justify-center shrink-0 transition-all duration-300">
                    <LineChart className="w-5 h-5 text-[#1893b0] group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:rotate-6 transition-all duration-300" />
                  </div>
                  <span className="text-base sm:text-lg font-black text-slate-900 leading-none group-hover/feat:text-[#1893b0] transition-colors duration-300 font-sans">Data-Driven</span>
                </div>
                <span className="text-xs sm:text-[13.5px] text-black font-semibold leading-relaxed pl-1 transition-transform duration-300 group-hover/feat:translate-x-0.5 font-sans">
                  Strategies backed by real data
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start w-full group/feat cursor-pointer select-none">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#1893b0]/10 group-hover/feat:bg-[#1893b0] flex items-center justify-center shrink-0 transition-all duration-300">
                    <Target className="w-5 h-5 text-[#1893b0] group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:rotate-6 transition-all duration-300" />
                  </div>
                  <span className="text-base sm:text-lg font-black text-slate-900 leading-none group-hover/feat:text-[#1893b0] transition-colors duration-300 font-sans">Targeted Growth</span>
                </div>
                <span className="text-xs sm:text-[13.5px] text-black font-semibold leading-relaxed pl-1 transition-transform duration-300 group-hover/feat:translate-x-0.5 font-sans">
                  Reach the right audience that converts
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start w-full group/feat cursor-pointer select-none">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#1893b0]/10 group-hover/feat:bg-[#1893b0] flex items-center justify-center shrink-0 transition-all duration-300">
                    <BarChart3 className="w-5 h-5 text-[#1893b0] group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:rotate-6 transition-all duration-300" />
                  </div>
                  <span className="text-base sm:text-lg font-black text-slate-900 leading-none group-hover/feat:text-[#1893b0] transition-colors duration-300 font-sans">Measurable Results</span>
                </div>
                <span className="text-xs sm:text-[13.5px] text-black font-semibold leading-relaxed pl-1 transition-transform duration-300 group-hover/feat:translate-x-0.5 font-sans">
                  Transparent reporting that shows impact
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image Peak Illustration (Enlarged wrapper with 3D Parallax Effect) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end z-0" style={{ perspective: "1200px" }}>
            <div
              className="relative w-[115%] lg:w-[155%] xl:w-[170%] max-w-none h-auto lg:-ml-24 xl:-ml-36 lg:-mr-24 xl:-mr-36"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transformStyle: "preserve-3d",
                transform: isHovered
                  ? "rotateY(-2deg) rotateX(2deg) rotateZ(0.5deg) scale(1.02)"
                  : "rotateY(-8deg) rotateX(4deg) rotateZ(1deg)",
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >


              {/* Dot Grid Pattern */}
              <div
                className="absolute right-6 top-[30%] -z-10 hidden xl:block opacity-45 select-none pointer-events-none"
                style={{ transform: "translateZ(-20px)" }}
              >
                <svg width="100" height="120" fill="none" viewBox="0 0 100 120">
                  <defs>
                    <pattern id="dot-pattern-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="#94a3b8" />
                    </pattern>
                  </defs>
                  <rect width="100" height="120" fill="url(#dot-pattern-hero)" />
                </svg>
              </div>

              {/* Main Mountain Image */}
              <Image
                src="/images/hero1.png"
                alt="Reach New Heights. Grow Your Business."
                width={900}
                height={643}
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply"
                style={{ transform: "translateZ(0px)" }}
              />

              {/* Overlay Card: 200% Growth */}
              <div
                className="absolute top-[36%] right-[10%] lg:right-[15%] bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-3 sm:p-3.5 shadow-xl shadow-slate-300/40 z-20 flex items-center gap-2.5 select-none pointer-events-none transition-all duration-300"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="w-8.5 h-8.5 rounded-lg bg-[#00a8cc]/10 flex items-center justify-center text-[#00a8cc] shrink-0">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 leading-none">200%</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold tracking-wider uppercase mt-0.5">Average Growth</span>
                </div>
              </div>

              {/* Overlay Graphic: Performance Growth */}
              <div
                className="absolute top-[38%] left-[6%] md:left-[12%] bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-3 sm:p-3.5 shadow-lg shadow-slate-300/30 z-20 hidden sm:flex flex-col items-start gap-2.5 select-none pointer-events-none transition-all duration-300"
                style={{ transform: "translateZ(70px)" }}
              >
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Performance</span>
                  <span className="text-xs font-bold text-slate-800 leading-tight">Growth Rate</span>
                </div>
                <div className="flex items-end gap-1.5 h-6">
                  <div className="w-2 h-2.5 bg-slate-300/60 rounded-sm"></div>
                  <div className="w-2 h-4 bg-slate-300/60 rounded-sm"></div>
                  <div className="w-2 h-5 bg-[#00a8cc]/40 rounded-sm"></div>
                  <div className="w-2 h-6 bg-[#00a8cc] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
