"use client";

import React, { useEffect, useRef, useState } from "react";

interface BenefitItem {
  number: string;
  title: string;
  description: string;
}

// Highly customized Staggered Spring Scroll Reveal component
function RevealItem({
  numberNode,
  contentNode,
  className = "",
}: {
  numberNode: React.ReactNode;
  contentNode: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
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
      className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 border-b border-zinc-800/80 group cursor-pointer overflow-hidden ${className}`}
    >
      {/* Left Column (Number): Springs in from the left with rotation */}
      <div
        className={`lg:col-span-3 flex items-start justify-start transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100 rotate-0"
            : "opacity-0 -translate-x-16 scale-75 -rotate-12"
        } group-hover:scale-105 group-hover:rotate-2`}
      >
        {numberNode}
      </div>

      {/* Right Column (Title & Text): Decelerates in from the right with blur stagger delay */}
      <div
        className={`lg:col-span-9 flex flex-col items-start justify-center transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 transform ${
          isVisible
            ? "opacity-100 translate-x-0 blur-0"
            : "opacity-0 translate-x-16 blur-[4px]"
        } group-hover:translate-x-2`}
      >
        {contentNode}
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(25);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate translation only if section is in/near the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalScrollable = windowHeight + rect.height;
        const scrolled = windowHeight - rect.top;
        const percent = scrolled / totalScrollable; // 0 to 1

        // Detect viewport width for responsive translation offsets
        const isMobile = window.innerWidth < 768;
        const startVal = isMobile ? 10 : 25; // starts slightly centered on mobile
        const endVal = isMobile ? -50 : -25;  // slides much further left on mobile to reveal full text

        const translation = startVal - percent * (startVal - endVal);
        setTranslateX(translation);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items: BenefitItem[] = [
    {
      number: "1.",
      title: "AI-Focused Agency",
      description: "As an AI-driven agency, we leverage cutting-edge technology to enhance every aspect of our digital marketing strategies. By integrating artificial intelligence into our processes, we create highly optimized campaigns that deliver smarter, more efficient results. Our focus on AI allows us to stay ahead of the curve, ensuring that your business benefits from the latest innovations in the industry."
    },
    {
      number: "2.",
      title: "Performance-Driven Partnerships",
      description: "At our core, we value building relationships based on trust and results. Instead of relying on rigid contracts, we focus on performance-driven partnerships where success is the true measure of our collaboration. We work closely with you to achieve your goals, ensuring mutual growth and satisfaction."
    },
    {
      number: "3.",
      title: "Local Expertise, Global Reach",
      description: "As a Texas-based, bilingual agency, we offer our clients the unique advantage of personalized, face-to-face meetings—free from language barriers. Our local insight, combined with a global perspective, allows us to tailor strategies that resonate both regionally and internationally."
    },
    {
      number: "4.",
      title: "No Outsourcing, Just In-House Excellence",
      description: "Our full-time, in-house team of marketing specialists is dedicated to your success. By keeping everything in-house, we ensure that every project receives the full attention and expertise it deserves. The company’s leadership is directly involved in every step, ensuring high-quality work and consistent results."
    },
    {
      number: "5.",
      title: "Impactful Success Stories",
      description: "We don’t just promise success—we deliver it. Our clients’ achievements speak for themselves, backed by a rich portfolio of case studies, testimonials, and tangible outcomes. With every campaign, we focus on driving marketing impact that helps your business grow."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0b] py-12 lg:py-16 overflow-hidden">
      {/* 1. Large Scrolling Outline Header */}
      <div className="w-full overflow-hidden mb-10 sm:mb-12 select-none">
        <h2
          className="text-[64px] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black tracking-tighter uppercase whitespace-nowrap transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${translateX}%)`,
            WebkitTextStroke: "2.5px #0052e0",
            color: "transparent",
          }}
        >
          Ash Peaks
        </h2>
      </div>

      {/* 2. Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Intro Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 lg:mb-14">
          <div className="lg:col-start-4 lg:col-span-9">
            <p className="text-lg sm:text-xl lg:text-[22px] text-white font-medium leading-[1.65]">
              While many digital marketing agencies offer a variety of services, what sets us apart is our ability to truly understand and address your unique needs. Unlike others, we don’t offer generic solutions—we create tailored strategies that are specifically designed to drive meaningful results for your business.
            </p>
          </div>
        </div>

        {/* Benefits List with Custom Reveal Elements */}
        <div className="flex flex-col w-full border-t border-zinc-800/80">
          {items.map((item, idx) => (
            <RevealItem
              key={idx}
              numberNode={
                <span
                  className="text-7xl sm:text-8xl md:text-[96px] font-black leading-none select-none transition-all duration-300 group-hover:text-blue-600/10 group-hover:drop-shadow-[0_0_12px_rgba(0,82,224,0.5)]"
                  style={{
                    WebkitTextStroke: "2.5px #0052e0",
                    color: "transparent",
                  }}
                >
                  {item.number}
                </span>
              }
              contentNode={
                <>
                  <h3 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-white leading-tight mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#0052e0]">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {item.description}
                  </p>
                </>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
