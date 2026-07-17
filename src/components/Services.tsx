"use client";

import React, { useEffect, useRef, useState } from "react";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  isPrimary: boolean;
}

function RevealContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const cards: CardItem[] = [
    {
      isPrimary: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="17" x2="12" y2="20" />
          <path d="M7 8l-3 3 3 3" />
          <path d="M17 8l3 3-3 3" />
        </svg>
      ),
      title: "Website Design & Development",
      description: "Craft a digital experience that not only looks great but also performs at its best. Our web development team specializes in building SEO-optimized, user-friendly websites that highlight your brand's strengths and attract the right clients. We design with both aesthetics and functionality in mind, ensuring that your site offers seamless navigation, fast load times, and a strong user experience."
    },
    {
      isPrimary: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="8" x2="20.5" y2="8" />
          <line x1="8.5" y1="14" x2="12.75" y2="6.6" />
          <line x1="15" y1="18" x2="10.75" y2="10.6" />
        </svg>
      ),
      title: "Search Engine Optimization",
      description: "Enhance your online visibility and drive targeted traffic with our SEO services. We optimize your website to rank higher on search engines, ensuring that your business is found by the right audience. From keyword research and on-page optimization to link building and technical SEO, we employ a comprehensive strategy that improves your rankings, boosts traffic, and helps you achieve long-term growth in search results."
    },
    {
      isPrimary: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M3 6l5-3 8 3 5-3v12l-5 3-8-3-5 3V6z" />
          <path d="M8 3v12" />
          <path d="M16 6v12" />
          <circle cx="12" cy="10" r="1.5" fill="currentColor" />
          <path d="M12 5c-2.2 0-4 1.8-4 4 0 3 4 7.2 4 7.2s4-4.2 4-7.2c0-2.2-1.8-4-4-4z" />
        </svg>
      ),
      title: "Local Maps Optimization",
      description: "Get your business noticed in local searches with our Local Maps SEO services. We optimize your online presence to ensure your business appears in relevant local search results and on Google or Apple Maps, helping you attract nearby customers. By fine-tuning your location-based data, managing reviews, and optimizing your Google My Business profile, we drive targeted traffic to your business, increasing foot traffic and local conversions."
    },
    {
      isPrimary: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M4 7V4h16v3" />
          <path d="M9 20h6" />
          <path d="M12 4v16" />
          <path d="M5 12h14" strokeDasharray="2 2" />
        </svg>
      ),
      title: "Content Marketing",
      description: "Stand out online with content that captivates and resonates. From engaging blog posts and persuasive landing pages to authoritative guest articles, we craft content that not only sparks interest but also fosters genuine connections with your audience. Our tailored approach helps you build credibility, establish trust, and position your brand as a leader in your industry."
    },
    {
      isPrimary: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      title: "Social Media Marketing",
      description: "Unlock the power of social media with strategies built on data-driven insights. We design and execute tailored campaigns that not only expand your audience but also foster authentic engagement. By understanding your brand's unique voice and your audience's needs, we create content that resonates, builds relationships, and drives growth."
    },
    {
      isPrimary: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 7c.8 1.5 1 3.5 1 5s-.2 3.5-1 5" />
          <path d="M12 7c-.8 1.5-1 3.5-1 5s.2 3.5 1 5" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      ),
      title: "PPC Management",
      description: "Boost your online presence and attract high-quality traffic with our expertly managed PPC campaigns. We design your paid campaign ensuring your ad budget is spent effectively across multiple platforms like Google Ads, Meta Ads, TikTok Ads, and more. From research to bid management and performance tracking, our goal is to generate high-converting leads and maximize your return on investment."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* Top Header Text Content */}
        <RevealContainer className="text-center flex flex-col items-center w-full mb-16 lg:mb-20">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-slate-950 leading-tight tracking-tight max-w-4xl mb-8">
            Tailored digital strategies to help you build, grow, and scale your business.
          </h2>
          
          {/* Intro Paragraph (Reduced by 50% into a single paragraph) */}
          <div className="text-slate-600 text-sm sm:text-base leading-[1.65] font-medium max-w-4xl">
            <p>
              Our global team of digital marketing experts is here to guide you every step of the way. From SEO and Web Design to Social Media, PPC, and Content Services, we build tailored, results-driven campaigns that enhance your online presence, spark audience engagement, and align perfectly with your business goals.
            </p>
          </div>
        </RevealContainer>

        {/* 6 Columns Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          {cards.map((card, idx) => (
            <RevealContainer
              key={idx}
              className="h-full flex"
            >
              <div
                className={`w-full rounded-[24px] p-6 sm:p-7 flex flex-col justify-between h-full border border-slate-950 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  card.isPrimary
                    ? "bg-[#0047e1] text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                {/* Top Half Content */}
                <div className="flex flex-col items-start w-full">
                  {/* Icon */}
                  <div
                    className={`mb-6 p-1 rounded-xl ${
                      card.isPrimary ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-[21px] font-bold leading-tight mb-4 tracking-tight ${
                      card.isPrimary ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p
                    className={`text-xs sm:text-[13.5px] leading-relaxed mb-6 font-medium ${
                      card.isPrimary ? "text-slate-100" : "text-slate-700"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom Button */}
                <div className="w-full flex justify-start">
                  <button
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      card.isPrimary
                        ? "bg-white text-[#0047e1] hover:bg-slate-100"
                        : "bg-black text-white hover:bg-neutral-800"
                    }`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </RevealContainer>
          ))}
        </div>

      </div>
    </section>
  );
}
