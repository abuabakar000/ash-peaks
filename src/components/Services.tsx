"use client";

import React, { useEffect, useRef, useState } from "react";

interface ServiceItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isPopular?: boolean;
}

function RevealRow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
        rootMargin: "0px 0px -40px 0px"
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
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      number: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="17" x2="12" y2="20" />
          <path d="M7 8l-3 3 3 3" />
          <path d="M17 8l3 3-3 3" />
        </svg>
      ),
      title: "Website Design & Development",
      isPopular: true,
      description: "Craft a digital experience that performs at its best. Our team specializes in building SEO-optimized, user-friendly websites that highlight your strengths and attract the right clients."
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="8" x2="20.5" y2="8" />
          <line x1="8.5" y1="14" x2="12.75" y2="6.6" />
          <line x1="15" y1="18" x2="10.75" y2="10.6" />
        </svg>
      ),
      title: "Search Engine Optimization",
      description: "Enhance your online visibility and drive targeted traffic with our SEO services. We optimize your website to rank higher on search engines, ensuring your business is found by the right audience."
    },
    {
      number: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 6l5-3 8 3 5-3v12l-5 3-8-3-5 3V6z" />
          <path d="M8 3v12" />
          <path d="M16 6v12" />
        </svg>
      ),
      title: "Local Maps Optimization",
      description: "Get your business noticed in local searches with our Maps SEO services. We optimize your location profiles to ensure your business appears in local search maps and results."
    },
    {
      number: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Content Marketing",
      description: "Stand out online with content that captivates and resonates. We craft blog posts, copy, and landing pages that spark interest and foster genuine connections with your audience."
    },
    {
      number: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      title: "Social Media Marketing",
      description: "Unlock the power of social media with strategies built on insights. We design and execute tailored campaigns that expand your audience and foster authentic engagement."
    },
    {
      number: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="12" cy="12" r="5" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      ),
      title: "PPC Management",
      description: "Boost your online presence and attract high-quality traffic with managed campaigns. We optimize your ad budget across Google, Meta, and TikTok for high-converting leads."
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start">
        
        {/* Top Header Text Content */}
        <RevealRow className="w-full mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold text-slate-950 leading-[1.25] tracking-tight max-w-4xl select-none">
            It&apos;s so challenging to find a good team to do great things. But we can provide you the best one.
          </h2>
        </RevealRow>

        {/* Services Rows List */}
        <div className="w-full flex flex-col border-b border-slate-200">
          {services.map((service, idx) => (
            <RevealRow key={idx}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-7 sm:py-8 border-t border-slate-200 items-center group cursor-pointer transition-all duration-300">
                
                {/* Left Area (Number + Icon + Title) */}
                <div className="lg:col-span-6 flex items-center gap-6 sm:gap-8">
                  {/* Number */}
                  <span className="text-[13px] sm:text-sm font-bold text-slate-400 tracking-wider w-6 select-none">
                    {service.number}
                  </span>
                  
                  {/* Icon Wrapper (Constantly floating in amber with staggered delays) */}
                  <div
                    className="text-[#f59e0b] shrink-0 animate-slow-float"
                    style={{
                      animationDelay: `${idx * 0.4}s`
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-center flex-wrap gap-3">
                    <h3 className="text-lg sm:text-[22px] font-bold text-slate-700 group-hover:text-black transition-colors duration-300 leading-none">
                      {service.title}
                    </h3>
                    {service.isPopular && (
                      <span className="bg-[#f59e0b] text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded select-none">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Area (Description) */}
                <div className="lg:col-span-6">
                  <p className="text-[13px] sm:text-[14px] text-slate-900 font-medium leading-relaxed lg:pl-10">
                    {service.description}
                  </p>
                </div>

              </div>
            </RevealRow>
          ))}
        </div>

      </div>
    </section>
  );
}
