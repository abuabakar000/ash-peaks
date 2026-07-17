"use client";

import React, { useState } from "react";

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
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0052e0] uppercase mb-4 select-none">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-950 leading-tight tracking-tight max-w-2xl">
            Common questions about our services
          </h2>
        </div>

        {/* FAQs Accordion List */}
        <div className="w-full border-t border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="border-b border-slate-200 w-full">
                
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between py-4 md:py-6 text-left text-slate-950 font-bold text-[15px] sm:text-base md:text-lg hover:text-[#0052e0] transition-colors duration-200 cursor-pointer select-none group"
                >
                  <span className="pr-4">{faq.question}</span>
                  
                  {/* Rotating Plus/Minus Icon */}
                  <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0">
                    {/* Horizontal Line */}
                    <div className="absolute w-3.5 h-0.5 md:w-4 bg-slate-950 group-hover:bg-[#0052e0] transition-colors duration-200"></div>
                    {/* Vertical Line (rotates and shrinks when open) */}
                    <div
                      className={`absolute w-0.5 h-3.5 md:h-4 bg-slate-950 group-hover:bg-[#0052e0] transition-all duration-300 ${
                        isOpen ? "rotate-90 scale-y-0" : "rotate-0 scale-y-100"
                      }`}
                    ></div>
                  </div>
                </button>
                
                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] pb-4 md:pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-[1.65] font-medium">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
