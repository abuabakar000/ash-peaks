"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Trophy, ThumbsUp, Rocket, Sparkles, BarChart3 } from "lucide-react";

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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

export default function Solutions() {
  const items = [
    { icon: <TrendingUp className="w-4 h-4 text-[#1893b0]" />, metric: "75% Growth", detail: "in Monthly Organic Leads", client: "B2B SaaS" },
    { icon: <Trophy className="w-4 h-4 text-[#1893b0]" />, metric: "Best Decision", detail: "for online strategy", client: "Fintech CEO" },
    { icon: <ThumbsUp className="w-4 h-4 text-[#1893b0]" />, metric: "90% Boost", detail: "in Customer Retention", client: "Subscription Co" },
    { icon: <Rocket className="w-4 h-4 text-[#1893b0]" />, metric: "120% Increase", detail: "in Social Engagement", client: "Lifestyle Brand" },
    { icon: <Sparkles className="w-4 h-4 text-[#1893b0]" />, metric: "3x ROI Achieved", detail: "on Paid Ad Spend", client: "Local Service" },
    { icon: <BarChart3 className="w-4 h-4 text-[#1893b0]" />, metric: "65% Surge", detail: "in Email Effectiveness", client: "Healthcare" },
    { icon: <Trophy className="w-4 h-4 text-[#1893b0]" />, metric: "Transformed SEO", detail: "and search rankings", client: "Global Retail" },
    { icon: <Rocket className="w-4 h-4 text-[#1893b0]" />, metric: "150% Growth", detail: "in E-commerce Sales", client: "DTC Apparel" },
    { icon: <TrendingUp className="w-4 h-4 text-[#1893b0]" />, metric: "70% Decrease", detail: "in Acquisition Costs", client: "SaaS Start-Up" }
  ];

  return (
    <div className="w-full">
      {/* 1. Sleek Dark Marquee Bar (Responsive flex: stacked on mobile, row on desktop) */}
      <div className="w-full bg-[#09090b] border-y border-zinc-800/80 flex flex-col md:flex-row md:items-center md:h-16 overflow-hidden">
        
        {/* Left Badge: 350+ Real Results */}
        <div className="flex items-center font-black text-white px-6 md:px-8 py-3.5 md:py-0 w-full md:w-auto h-auto md:h-full border-b md:border-b-0 md:border-r border-zinc-800/80 bg-[#09090b] z-20 whitespace-nowrap text-sm sm:text-base select-none">
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1893b0]"></span>
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1893b0] font-black text-base sm:text-lg mr-1.5">350+</span> Real Results
        </div>
        
        {/* Right Scrolling content using performant CSS Marquee */}
        <div className="w-full md:flex-1 overflow-hidden relative flex items-center h-12 md:h-full select-none py-1.5 md:py-0">
          {/* Left Fade Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none hidden md:block" />
          
          <div className="flex whitespace-nowrap animate-marquee gap-x-12 items-center hover:[animation-play-state:paused]">
            {/* First list of items */}
            <div className="flex items-center gap-x-12">
              {items.map((item, idx) => (
                <React.Fragment key={`first-${idx}`}>
                  <span className="flex items-center gap-3 whitespace-nowrap text-zinc-300 font-medium group/item hover:text-white transition-all duration-300">
                    <span className="shrink-0 transition-transform duration-500 group-hover/item:scale-110 group-hover/item:rotate-6">{item.icon}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1893b0] font-black tracking-wide">{item.metric}</span>
                    <span className="text-zinc-300 group-hover/item:text-zinc-100 transition-colors duration-300">{item.detail}</span>
                    <span className="text-zinc-500 group-hover/item:text-zinc-400 transition-colors duration-300">— {item.client}</span>
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1893b0]/30 select-none shrink-0" />
                </React.Fragment>
              ))}
            </div>
            {/* Second list of items (identical copy for seamless looping) */}
            <div className="flex items-center gap-x-12">
              {items.map((item, idx) => (
                <React.Fragment key={`second-${idx}`}>
                  <span className="flex items-center gap-3 whitespace-nowrap text-zinc-300 font-medium group/item hover:text-white transition-all duration-300">
                    <span className="shrink-0 transition-transform duration-500 group-hover/item:scale-110 group-hover/item:rotate-6">{item.icon}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1893b0] font-black tracking-wide">{item.metric}</span>
                    <span className="text-zinc-300 group-hover/item:text-zinc-100 transition-colors duration-300">{item.detail}</span>
                    <span className="text-zinc-500 group-hover/item:text-zinc-400 transition-colors duration-300">— {item.client}</span>
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1893b0]/30 select-none shrink-0" />
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Right Fade Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* 2. Main Dark Section */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-black">
        {/* Background Image with overlay to retain absolute black vibe */}
        <div className="absolute inset-0 z-0 opacity-45">
          <Image
            src="/mtn-bg.png"
            alt="Dark premium mountain peaks background"
            fill
            priority
            sizes="100vw"
            className="object-cover pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start justify-center z-10">
          <RevealOnScroll>
            {/* Heading */}
            <h2 className="text-3xl sm:text-[40px] md:text-[44px] lg:text-[48px] font-black leading-[1.15] tracking-tight mb-8 max-w-4xl">
              <span
                className="text-transparent select-none"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
              >
                Marketing isn&apos;t about being flashy.
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                It&apos;s about building
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1893b0] via-[#38bdf8] to-[#1893b0]">
                connections that last
              </span>
              .
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-[19px] lg:text-[21px] text-white font-medium leading-[1.65] max-w-4xl">
              As a leading US agency, we build high-impact campaigns backed by a <span className="text-white font-bold">proven track record</span>. No fluff—just measurable growth.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
