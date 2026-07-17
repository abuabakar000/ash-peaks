"use client";

import React from "react";

export default function Solutions() {
  const items = [
    "📈 75% Growth in Monthly Organic Leads – B2B Software Company",
    "🏆 Partnering with Quality Resource LLC was the best decision for our online strategy – CEO of a Fast-Growing Fintech",
    "👍 90% Boost in Customer Retention Through Enhanced UX – National Subscription Service",
    "🚀 120% Increase in Social Media Engagement – Lifestyle Brand",
    "🌟 3x ROI Achieved on Digital Ad Spend in Just 4 Months – Regional Service Provider",
    "📊 65% Surge in Email Campaign Effectiveness – Healthcare Network",
    "🏆 Quality Resource LLC transformed our SEO strategy and our business – VP of Marketing, Global Retail Chain",
    "🚀 150% Growth in E-commerce Sales – Direct-to-Consumer Apparel Brand",
    "📈 70% Decrease in Customer Acquisition Costs – SaaS Start-Up",
  ];

  return (
    <div className="w-full">
      {/* 1. White Marquee Bar (Responsive flex: stacked on mobile, row on desktop) */}
      <div className="w-full bg-white border-y border-slate-200 flex flex-col md:flex-row md:items-center md:h-16 overflow-hidden">
        
        {/* Left Badge: 350+ Real Results (Full width with bottom border on mobile) */}
        <div className="flex items-center font-black text-slate-900 px-6 md:px-8 py-3 md:py-0 w-full md:w-auto h-auto md:h-full border-b md:border-b-0 md:border-r border-slate-200 bg-white z-10 whitespace-nowrap text-sm sm:text-base select-none">
          350+ Real Results
        </div>
        
        {/* Right Scrolling content using performant CSS Marquee (takes full width below header on mobile) */}
        <div className="w-full md:flex-1 overflow-hidden relative flex items-center h-10 md:h-full text-slate-800 text-[13px] sm:text-sm font-semibold select-none py-1 md:py-0">
          <div className="flex whitespace-nowrap animate-marquee gap-x-16">
            {/* First list of items */}
            <div className="flex items-center gap-x-16">
              {items.map((item, idx) => (
                <span key={`first-${idx}`} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
            {/* Second list of items (identical copy for seamless looping) */}
            <div className="flex items-center gap-x-16">
              {items.map((item, idx) => (
                <span key={`second-${idx}`} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Dark Section */}
      <section className="w-full bg-[#0a0a0b] py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start justify-center">
          {/* Tagline (Turned grey text to white, small, uppercase, spaced out) */}
          <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.2em] text-white uppercase mb-6 select-none opacity-90">
            AI-Powered Digital Marketing Solutions
          </span>

          {/* Heading (less font weight: changed font-black to font-bold) */}
          <h2 className="text-3xl sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold text-white leading-[1.2] tracking-tight mb-8 max-w-5xl">
            Marketing isn&apos;t about being flashy -{" "}
            <span className="text-[#0052e0]">
              It&apos;s about building lasting connections that matter...
            </span>
          </h2>

          {/* Description (bigger font size, turned grey text to white) */}
          <p className="text-base sm:text-xl md:text-[20px] lg:text-[22px] text-white font-normal leading-[1.65] max-w-5xl">
            Our expert team is proud to be recognized as a leader in the USA&apos;s digital marketing industry. With a proven track record, unmatched expertise, and a passion for driving success, we&apos;re committed to delivering outstanding results. Let&apos;s work together to make your next campaign a stand out and fuel meaningful growth!
          </p>
        </div>
      </section>
    </div>
  );
}
