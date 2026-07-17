"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a full suite of tailored services including Website Design & Development, Search Engine Optimization (SEO), Local Maps Optimization, Social Media Marketing, PPC Management (Google, Meta, TikTok Ads), and Content Marketing. Each strategy is custom-built to align with your business goals."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term investment. While some initial index improvements can be seen within 30 to 60 days, significant growth in search rankings, traffic, and organic conversions typically takes 3 to 6 months of consistent, data-driven optimization."
    },
    {
      question: "Do you outsource your design or development work?",
      answer: "No, we do not outsource. We are proud to have a full-time, in-house team of marketing specialists, designers, and developers. This keeps our quality high, project turnaround times fast, and guarantees that our leadership remains directly involved in every step."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We focus on key performance indicators (KPIs) that directly impact your bottom line. This includes tracking organic keyword rankings, ad conversion rates, cost-per-acquisition (CPA), click-through rates (CTR), and overall return on investment (ROI)."
    },
    {
      question: "What is your pricing structure?",
      answer: "We believe in performance-driven partnerships and do not sell generic, one-size-fits-all packages. After understanding your business goals and analyzing your current strategy, we develop custom plans tailored specifically for your target audience and budget."
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden border-b border-slate-100">
      
      {/* Decorative soft ambient gradient background blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-radial from-[#f59e0b]/5 to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Headings & Support Link (4 cols width) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-[#f59e0b] uppercase mb-4 select-none">
              FAQ / Help
            </span>
            <h2 className="text-[32px] sm:text-4xl lg:text-[45px] font-black text-slate-950 leading-[1.1] tracking-tight mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold mb-8">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support team. We&apos;re here to guide you every step of the way.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-[#f59e0b] transition-colors group/cta"
            >
              <span>Still have questions? Contact support</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Accordion Tiles (7 cols width) */}
          <div className="lg:col-span-7 flex flex-col w-full gap-4.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#f59e0b]/35 shadow-md shadow-[#f59e0b]/5"
                      : "bg-slate-50/70 hover:bg-slate-100/50 border-slate-100"
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left text-slate-950 font-bold text-[15px] sm:text-[17px] hover:text-[#f59e0b] transition-colors duration-200 cursor-pointer select-none group"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    
                    {/* Rotating Circular Indicator */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 ${
                        isOpen
                          ? "bg-slate-950 border-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-900"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>
                  
                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
