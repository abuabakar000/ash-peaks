"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Trophy, ThumbsUp, Rocket, Sparkles, BarChart3 } from "lucide-react";

export default function Solutions() {
  const items = [
    { icon: <TrendingUp className="w-4 h-4 text-[#f59e0b]" />, metric: "75% Growth", text: "in Monthly Organic Leads – B2B Software Company" },
    { icon: <Trophy className="w-4 h-4 text-[#f59e0b]" />, metric: "Best Decision", text: "for our online strategy – CEO of a Fast-Growing Fintech" },
    { icon: <ThumbsUp className="w-4 h-4 text-[#f59e0b]" />, metric: "90% Boost", text: "in Customer Retention Through Enhanced UX – National Subscription Service" },
    { icon: <Rocket className="w-4 h-4 text-[#f59e0b]" />, metric: "120% Increase", text: "in Social Media Engagement – Lifestyle Brand" },
    { icon: <Sparkles className="w-4 h-4 text-[#f59e0b]" />, metric: "3x ROI Achieved", text: "on Ad Spend in 4 Months – Regional Service Provider" },
    { icon: <BarChart3 className="w-4 h-4 text-[#f59e0b]" />, metric: "65% Surge", text: "in Email Campaign Effectiveness – Healthcare Network" },
    { icon: <Trophy className="w-4 h-4 text-[#f59e0b]" />, metric: "Transformed SEO", text: "strategy and our business – VP of Marketing, Global Retail Chain" },
    { icon: <Rocket className="w-4 h-4 text-[#f59e0b]" />, metric: "150% Growth", text: "in E-commerce Sales – DTC Apparel Brand" },
    { icon: <TrendingUp className="w-4 h-4 text-[#f59e0b]" />, metric: "70% Decrease", text: "in Customer Acquisition Costs – SaaS Start-Up" }
  ];

  return (
    <div className="w-full">
      {/* 1. Sleek Dark Marquee Bar (Responsive flex: stacked on mobile, row on desktop) */}
      <div className="w-full bg-[#09090b] border-y border-zinc-800/80 flex flex-col md:flex-row md:items-center md:h-16 overflow-hidden">
        
        {/* Left Badge: 350+ Real Results (Full width with bottom border on mobile) */}
        <div className="flex items-center font-black text-white px-6 md:px-8 py-3 md:py-0 w-full md:w-auto h-auto md:h-full border-b md:border-b-0 md:border-r border-zinc-800/80 bg-[#09090b] z-10 whitespace-nowrap text-sm sm:text-base select-none">
          <span className="text-[#f59e0b] font-black text-base sm:text-lg mr-1.5">350+</span> Real Results
        </div>
        
        {/* Right Scrolling content using performant CSS Marquee (takes full width below header on mobile) */}
        <div className="w-full md:flex-1 overflow-hidden relative flex items-center h-10 md:h-full text-zinc-300 text-[13px] sm:text-sm font-semibold select-none py-1 md:py-0">
          <div className="flex whitespace-nowrap animate-marquee gap-x-16">
            {/* First list of items */}
            <div className="flex items-center gap-x-16">
              {items.map((item, idx) => (
                <span key={`first-${idx}`} className="flex items-center gap-2 whitespace-nowrap text-zinc-300 font-medium">
                  <span className="shrink-0">{item.icon}</span>
                  <span className="text-[#f59e0b] font-bold">{item.metric}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
            {/* Second list of items (identical copy for seamless looping) */}
            <div className="flex items-center gap-x-16">
              {items.map((item, idx) => (
                <span key={`second-${idx}`} className="flex items-center gap-2 whitespace-nowrap text-zinc-300 font-medium">
                  <span className="shrink-0">{item.icon}</span>
                  <span className="text-[#f59e0b] font-bold">{item.metric}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Dark Section */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-black">
        {/* Background Image with overlay to retain absolute black vibe */}
        <div className="absolute inset-0 z-0 opacity-45">
          <Image
            src="/images/dark_background_texture.png"
            alt="Dark premium texture background"
            fill
            priority
            sizes="100vw"
            className="object-cover pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start justify-center z-10">
          {/* Tagline */}
          <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.2em] text-white uppercase mb-6 select-none opacity-90">
            AI-Powered Digital Marketing Solutions
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-[40px] md:text-[44px] lg:text-[48px] font-black text-white leading-[1.15] tracking-tight mb-8 max-w-4xl">
            Marketing isn&apos;t about being flashy. <br className="hidden sm:inline" />
            It&apos;s about building <span className="text-[#f59e0b]">lasting connections</span> that matter.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-[19px] lg:text-[21px] text-zinc-300 font-medium leading-[1.65] max-w-4xl">
            Our expert team is proud to be recognized as a leader in the USA&apos;s digital marketing industry. With a <span className="text-white font-bold">proven track record</span>, unmatched expertise, and a passion for driving success, we&apos;re committed to delivering outstanding results. Let&apos;s work together to make your next campaign a stand out and fuel meaningful growth!
          </p>
        </div>
      </section>
    </div>
  );
}
