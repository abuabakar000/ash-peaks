"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-16 pb-24 lg:pt-24 lg:pb-36 overflow-hidden border-b border-slate-100">
      
      {/* Premium visible background grid mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_80%,transparent_100%)] z-0 pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
            
            {/* Small Upper Tagline */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-[#f59e0b] uppercase mb-5 select-none">
              Digital Marketing That Delivers Results
            </span>

            {/* Main Title */}
            <h1 className="text-[44px] sm:text-[58px] lg:text-[70px] font-black text-slate-950 leading-[1.08] tracking-tight mb-6">
              We Grow Brands. <br />
              You Grow <span className="text-[#f59e0b]">Revenue.</span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-medium mb-10">
              Data-driven marketing strategies that generate leads, increase conversions, and scale your business sustainably.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 w-full">
              {/* Primary Black capsule button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-neutral-800 text-white font-bold px-8 py-4.5 rounded-full shadow-lg shadow-slate-950/15 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Play button */}
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 text-slate-800 hover:text-[#f59e0b] font-bold text-sm sm:text-base transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm group-hover:border-[#f59e0b]/40 group-hover:shadow-md transition-all shrink-0">
                  <Play className="w-3.5 h-3.5 text-slate-900 fill-current ml-0.5" />
                </div>
                <span>See How We Help</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Code-Based Dashboard Mockup Panel */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end relative">
            
            {/* Main Dashboard Card */}
            <div className="relative w-full max-w-[550px] bg-white border border-slate-100 rounded-[32px] p-5 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] flex flex-col gap-6 z-10 select-none">
              
              {/* Card Header */}
              <div className="flex items-center justify-between w-full">
                <span className="text-sm sm:text-base font-bold text-slate-950">
                  Performance Overview
                </span>
                
                {/* Time selector bubble */}
                <div className="px-3 py-1.5 border border-slate-100 rounded-lg text-xs font-bold text-slate-500 flex items-center gap-1">
                  <span>This Month</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </div>
              </div>

              {/* Metrics Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-100/60 pb-5">
                {[
                  { label: "Total Traffic", val: "24.5K", growth: "+18.6%" },
                  { label: "Leads Gen", val: "1.2K", growth: "+24.3%" },
                  { label: "Conversions", val: "356", growth: "+21.7%" },
                  { label: "ROI", val: "320%", growth: "+29.4%" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {stat.label}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base sm:text-lg font-black text-slate-950 leading-none">
                        {stat.val}
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-black text-emerald-500 bg-emerald-50/80 px-1 py-0.5 rounded">
                        {stat.growth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Line Chart Container */}
              <div className="relative w-full h-[140px] sm:h-[160px] overflow-visible">
                
                {/* SVG Area & Stroke curve */}
                <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="gold-chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Gradient Area Path */}
                  <path
                    d="M 0 130 Q 80 120 120 90 T 250 80 T 380 50 T 500 30 L 500 160 L 0 160 Z"
                    fill="url(#gold-chart-grad)"
                    className="animate-fade-in-chart"
                  />
                  
                  {/* Stroke Line Path */}
                  <path
                    d="M 0 130 Q 80 120 120 90 T 250 80 T 380 50 T 500 30"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />

                  {/* End highlight dot */}
                  <circle cx="500" cy="30" r="5.5" fill="#f59e0b" className="animate-fade-in-chart" />
                  
                  {/* Mid Dot (representing tooltips state) */}
                  <circle cx="380" cy="50" r="4.5" fill="#f59e0b" className="animate-fade-in-chart" />
                </svg>

                {/* Floating tooltip block aligned precisely at 76% horizontally */}
                <div
                  className="absolute bg-slate-950 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg shadow-md z-20 flex flex-col items-center select-none -translate-x-1/2 animate-fade-in-chart"
                  style={{
                    left: "76%",
                    top: "6px"
                  }}
                >
                  <span>24.5K</span>
                  <span className="text-slate-400 text-[7px] uppercase tracking-wider font-semibold">Total Traffic</span>
                  {/* Chevron down arrow under tooltip */}
                  <div className="w-1.5 h-1.5 bg-slate-950 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                </div>

              </div>

              {/* Chart Axis labels */}
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none px-1">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
              </div>

              {/* Overlapping Bottom Donut Card (Hidden on mobile) */}
              <div className="absolute bottom-[-30px] right-[-24px] bg-white border border-slate-100 rounded-2xl p-4 shadow-xl w-[205px] hidden sm:flex items-center gap-4 z-20 select-none">
                
                {/* SVG Donut */}
                <svg viewBox="0 0 36 36" className="w-14 h-14 shrink-0">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                  
                  {/* Google Ads segment - 45% (Amber) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="45 55" strokeDashoffset="25" strokeLinecap="round" />
                  
                  {/* Meta Ads segment - 30% (Gold hover) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#d97706" strokeWidth="4.5" strokeDasharray="30 70" strokeDashoffset="80" strokeLinecap="round" />
                  
                  {/* SEO segment - 15% (Light Gold) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#fbbf24" strokeWidth="4.5" strokeDasharray="15 85" strokeDashoffset="110" strokeLinecap="round" />
                </svg>

                {/* Donut Legend */}
                <div className="flex flex-col gap-1 text-[9px] font-bold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    <span>Google Ads <span className="text-slate-400 font-medium ml-0.5">45%</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                    <span>Meta Ads <span className="text-slate-400 font-medium ml-0.5">30%</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
                    <span>SEO <span className="text-slate-400 font-medium ml-0.5">15%</span></span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
