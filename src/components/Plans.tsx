"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Plans() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Grid */}
          <div className="lg:col-span-6 w-full flex flex-col gap-5 sm:gap-6">
            {/* Top Large Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] rounded-[32px] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
              <Image
                src="/images/charts_presentation.png"
                alt="Presentation charts and report"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {/* Bottom Left Image */}
              <div className="relative h-[180px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/charts_team.png"
                  alt="Business team discussing charts"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative h-[180px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/woman_charts.png"
                  alt="Business woman reviewing charts"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Accordion */}
          <div className="lg:col-span-6 flex flex-col items-start w-full">
            {/* Tagline (Reduced weight to font-bold) */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0052e0] uppercase mb-4 select-none">
              A team of specialists... not generalists
            </span>

            {/* Heading (Reduced weight to font-bold) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-950 leading-tight tracking-tight mb-8">
              Unique plans designed for you, not for the masses.
            </h2>

            {/* Paragraphs (Changed text color from text-slate-700 to text-black) */}
            <div className="flex flex-col gap-6 text-black text-sm sm:text-base leading-[1.65] font-medium mb-10">
              <p>
                At Quality Resource LLC, our local team is committed to turning your digital marketing goals into reality. We take the time to understand your business and craft personalized strategies that work specifically for you. Our focus is on delivering results that align with your unique vision and needs.
              </p>
              <p>
                We don&apos;t believe in one-size-fits-all solutions. Instead, we focus on developing tailored approaches that foster real growth. With a blend of skill, creativity, and professionalism, we aim to make your business stand out and succeed in a competitive digital landscape.
              </p>
              <p>
                From content marketing and SEO to social media management and more, our expert team delivers innovative strategies that elevate your brand&apos;s visibility. We&apos;re here to help your business thrive in the digital world by driving measurable success and meaningful results.
              </p>
            </div>

            {/* Accordion widget: Your Goals, Our Strategy */}
            <div className="w-full border-y border-slate-200">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-slate-950 font-bold text-base hover:text-[#0052e0] transition-colors duration-200 cursor-pointer"
              >
                <span>Your Goals, Our Strategy</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-slate-950" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-950" />
                )}
              </button>
              
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-black text-sm sm:text-base leading-[1.65] font-medium flex flex-col gap-4">
                  <p>
                    Our team of specialists will develop a digital marketing strategy that’s perfectly aligned with your business goals. With <strong className="font-extrabold">years of experience and a proven track record</strong>, we have the expertise to effectively market your brand and drive results.
                  </p>
                  <p>
                    We don’t settle for generic, “B-grade” solutions. Instead, we take a personalized approach, carefully crafting campaigns that are built on a deep understanding of your objectives. Our strategies are designed to <strong className="font-extrabold">deliver measurable success</strong> and propel your business forward.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Centered CTA Button at bottom of section */}
        <div className="w-full flex justify-center mt-16 sm:mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-slate-950 text-base sm:text-lg font-bold text-slate-950 bg-white hover:bg-slate-950 hover:text-white transition-all duration-300"
          >
            Ready to Start a Conversation?
          </Link>
        </div>

      </div>
    </section>
  );
}
