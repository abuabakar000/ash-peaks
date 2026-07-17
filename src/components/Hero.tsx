"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Column: Text & Content (Aligned to Center) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center text-center z-10 w-full">
            {/* Review Badge (with Google logo, black thin border, compact balanced sizes) */}
            <div className="inline-flex items-center gap-x-2.5 sm:gap-x-4.5 border border-slate-900 rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 mb-10 bg-white shadow-sm select-none whitespace-nowrap">
              <span className="flex items-center tracking-tight">
                {/* Standard Google G Logo SVG */}
                <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
              </span>
              <span className="h-4 w-px bg-slate-300"></span>
              <span className="text-[#0047e1] text-[10px] sm:text-xs md:text-sm font-bold tracking-widest flex gap-0.5">
                ★★★★★
              </span>
              <span className="text-slate-950 font-black text-[10px] sm:text-xs md:text-sm">
                4.8 Rating
              </span>
              <span className="h-4 w-px bg-slate-300"></span>
              <span className="text-slate-500 font-bold text-[10px] sm:text-xs md:text-sm">
                715+ Reviews
              </span>
            </div>

            {/* Cursive Overlap Title Container (Tighter margins and padding) */}
            <div className="relative flex flex-col items-center justify-center w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 mb-8 select-none">
              {/* Cursive text (Shifted slightly upward on all devices) */}
              <span className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6 font-cursive text-[72px] sm:text-[84px] md:text-[104px] lg:text-[124px] text-[#0052e0] z-20 whitespace-nowrap leading-none">
                Innovative
              </span>
              {/* Main title */}
              <h1 className="text-[54px] sm:text-[72px] md:text-[92px] lg:text-[108px] font-bold text-slate-950 leading-none tracking-tight -mt-3 sm:-mt-5 md:-mt-7">
                Marketing
              </h1>
            </div>

            {/* Subtitle / Description (Consistent font-weights and sizes matching Pic 1) */}
            <p className="max-w-[800px] text-[21px] sm:text-2xl md:text-[26px] lg:text-[30px] text-slate-950 font-bold leading-snug tracking-tight mb-10">
              AI-Driven Digital Marketing Agency where creativity sparks, strategy fuels, & innovation{" "}
              <span className="text-slate-400 font-bold">
                transforms your business into a success story.
              </span>
            </p>

            {/* Call to Action Button (Proportionate size and styling matching Pic 1) */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4.5 rounded-full text-[15px] sm:text-base font-bold text-white bg-[#0047e1] hover:bg-[#003bc2] transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
              Book Your Free Strategy Call Today
            </Link>
          </div>

          {/* Right Column: Image Grid (Reduced by 25% on medium/large screens) */}
          <div className="lg:col-span-5 w-full md:max-w-[360px] lg:max-w-[420px] md:mx-auto lg:mx-0 lg:ml-auto flex flex-col gap-5 sm:gap-6">
            {/* Top Large Image (Height reduced by 25% on md/lg: 320px -> 240px) */}
            <div className="relative w-full h-[260px] md:h-[240px] rounded-[32px] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
              <Image
                src="/images/presenting.png"
                alt="Presentation in modern office"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {/* Bottom Left Image (Height reduced by 25% on md/lg: 220px -> 165px) */}
              <div className="relative h-[180px] md:h-[165px] rounded-[24px] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/handshake.png"
                  alt="Business meeting handshake"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Bottom Right Image (Height reduced by 25% on md/lg: 220px -> 165px) */}
              <div className="relative h-[180px] md:h-[165px] rounded-[24px] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/creative_team.png"
                  alt="Creative team workspace"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
