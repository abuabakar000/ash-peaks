"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (idx: number) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  const tabs = [
    {
      title: "Your Goals, Our Strategy",
      content: [
        "Our team of specialists will develop a digital marketing strategy that’s perfectly aligned with your business goals. With years of experience and a proven track record, we have the expertise to effectively market your brand and drive results.",
        "We don’t settle for generic, “B-grade” solutions. Instead, we take a personalized approach, carefully crafting campaigns that are built on a deep understanding of your objectives."
      ]
    },
    {
      title: "Ongoing Optimization & Analytics",
      content: [
        "Digital landscapes change rapidly. We monitor campaign performance daily, adjusting bidding, keyword targeting, and ad copy in real-time to maximize efficiency.",
        "Through transparent, live dashboard reporting, you always see precisely where your marketing spend is generating the highest return on investment."
      ]
    },
    {
      title: "Scale & Market Expansion",
      content: [
        "Once your local baseline is profitable and converting steadily, we map out expansion strategies to target adjacent regional or national audiences.",
        "Through structured search campaigns and custom funnel scaling, we help your business capture new market share predictably."
      ]
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden border-b border-slate-100">
      
      {/* Decorative soft ambient gradient background blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-radial from-[#f59e0b]/5 to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Image Grid */}
          <div className="lg:col-span-6 w-full">
            <RevealOnScroll>
              <div className="flex flex-col gap-5 sm:gap-6">
                {/* Top Large Image */}
                <div className="relative w-full h-[260px] sm:h-[340px] rounded-[32px] overflow-hidden border border-slate-100/60 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.06)] group hover:shadow-[0_24px_50px_-15px_rgba(245,158,11,0.06)] transition-all duration-300">
                  <Image
                    src="/images/charts_presentation.png"
                    alt="Presentation charts and report"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                {/* Bottom Two Images */}
                <div className="grid grid-cols-2 gap-5 sm:gap-6">
                  {/* Bottom Left Image */}
                  <div className="relative h-[180px] sm:h-[230px] rounded-[24px] overflow-hidden border border-slate-100/60 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.06)] group hover:shadow-[0_24px_50px_-15px_rgba(245,158,11,0.06)] transition-all duration-300">
                    <Image
                      src="/images/charts_team.png"
                      alt="Business team discussing charts"
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom Right Image */}
                  <div className="relative h-[180px] sm:h-[230px] rounded-[24px] overflow-hidden border border-slate-100/60 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.06)] group hover:shadow-[0_24px_50px_-15px_rgba(245,158,11,0.06)] transition-all duration-300">
                    <Image
                      src="/images/analytics_dashboard_neutral.png"
                      alt="Marketing analytics dashboard"
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Copy & Accordion */}
          <div className="lg:col-span-6 w-full">
            <RevealOnScroll delay={150}>
              <div className="flex flex-col items-start w-full">
                {/* Tagline */}
                <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-[#f59e0b] uppercase mb-4 select-none">
                  A team of specialists... not generalists
                </span>
                
                {/* Heading */}
                <h2 className="text-[32px] sm:text-4xl lg:text-[45px] font-black text-slate-950 leading-[1.1] tracking-tight mb-8">
                  Unique plans designed for you, not for the masses.
                </h2>
                
                {/* Refined Description Paragraph */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold mb-8">
                  At Quality Resource LLC, we don&apos;t believe in one-size-fits-all templates. Our team takes the time to understand your unique business architecture and craft bespoke strategies that foster real, sustainable growth.
                </p>
     
                {/* Core Pillars List */}
                <div className="flex flex-col gap-6 mb-10 w-full">
                  {[
                    { title: "Bespoke Campaign Strategy", desc: "Every metric and keyword choice is custom-engineered for your specific target market." },
                    { title: "In-House Specialists Only", desc: "No outsourcing. Our full-time local specialists maintain complete oversight of your project." },
                    { title: "Performance-Backed Execution", desc: "We focus strictly on key metrics that drive conversions and increase your ROI." }
                  ].map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      {/* Circular Check Indicator */}
                      <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#f59e0b]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-2.5 h-2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[15px] sm:text-base font-bold text-slate-950 leading-tight mb-1">{pillar.title}</span>
                        <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{pillar.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Interactive Strategy Accordion Tabs Stack */}
                <div className="flex flex-col gap-4.5 w-full">
                  {tabs.map((tab, idx) => {
                    const isTabOpen = activeTab === idx;
                    return (
                      <div
                        key={idx}
                        className={`w-full border rounded-2xl p-5 transition-all duration-300 ${
                          isTabOpen
                            ? "bg-white border-[#f59e0b]/30 shadow-md shadow-[#f59e0b]/5"
                            : "bg-slate-50/70 border-slate-100 hover:bg-slate-100/50"
                        }`}
                      >
                        <button
                          onClick={() => toggleTab(idx)}
                          className="w-full flex items-center justify-between text-slate-950 font-bold text-sm sm:text-base hover:text-[#f59e0b] transition-colors duration-200 cursor-pointer select-none"
                        >
                          <span>{tab.title}</span>
                          <div
                            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isTabOpen
                                ? "bg-[#f59e0b] border-[#f59e0b] text-white"
                                : "border-slate-200 text-slate-900"
                            }`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isTabOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </div>
                        </button>
                        
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            isTabOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium flex flex-col gap-3">
                            {tab.content.map((p, pIdx) => (
                              <p key={pIdx}>{p}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>

        {/* Centered CTA Button at bottom of section */}
        <div className="w-full flex justify-center mt-20 sm:mt-24">
          <RevealOnScroll delay={250}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-full bg-slate-950 text-white font-bold text-base hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-slate-950/10 hover:shadow-slate-950/20 group"
            >
              <span>Ready to Start a Conversation?</span>
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
