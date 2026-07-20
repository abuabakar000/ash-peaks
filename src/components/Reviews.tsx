"use client";

import React, { useEffect, useRef, useState } from "react";

interface ReviewItem {
  name: string;
  rating: number;
  text: string;
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
        threshold: 0.1,
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

export default function Reviews() {
  const reviews: ReviewItem[] = [
    {
      name: "Olivia Turner",
      rating: 5,
      text: "Quality Resource LLC created a tailored social media marketing strategy for us, boosting engagement and improving our brand's visibility across platforms."
    },
    {
      name: "James Carter",
      rating: 5,
      text: "After working with Quality Resource LLC to redesign our website and improve our SEO, we've seen a significant increase in traffic and customer inquiries."
    },
    {
      name: "Samantha Davis",
      rating: 5,
      text: "We hired Quality Resource LLC to develop our new website, and the results exceeded our expectations – a clean, professional site optimized for speed and user experience."
    },
    {
      name: "Michael Roberts",
      rating: 5,
      text: "Quality Resource LLC developed a custom mobile app for our startup that perfectly aligns with our brand and has been a hit with our users."
    }
  ];

  return (
    <section className="relative w-full bg-black py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header: Left title, Right description */}
        <RevealContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black leading-tight tracking-tight">
              <span
                className="text-transparent select-none"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
              >
                Real Reviews,
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1893b0] via-[#38bdf8] to-[#1893b0]">
                Real Clients
              </span>
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="lg:col-span-6 text-sm sm:text-base leading-relaxed font-medium">
            <p className="font-bold text-white mb-4">
              Quality Resource LLC is honored to be recognized as one of the top digital marketing agencies in the industry.
            </p>
            <p className="text-zinc-400">
              We&apos;ve received numerous accolades, including awards from leading platforms like Clutch and Tech Behemoths, for our outstanding work in web design, SEO, and digital marketing.
            </p>
          </div>
        </RevealContainer>

        {/* Reviews Cards Grid (Horizontal touch swipe carousel on mobile, standard grid on desktop) */}
        <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch snap-x snap-mandatory pb-6 md:pb-0">
          {reviews.map((review, idx) => (
            <RevealContainer
              key={idx}
              className="w-[285px] sm:w-[320px] md:w-auto shrink-0 snap-center h-full flex"
            >
              <div className="w-full bg-zinc-950/70 border border-zinc-800/40 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#1893b0]/30">
                
                {/* Header Content */}
                <div className="w-full">
                  <div className="flex flex-col items-start w-full mb-5">
                    
                    {/* User Info */}
                    <span className="text-base font-bold text-white tracking-tight leading-none">
                      {review.name}
                    </span>
                    
                    {/* Rating (Amber Stars) */}
                    <div className="flex gap-0.5 mt-2.5 mb-1.5 select-none">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3.5 h-3.5 text-[#1893b0]"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Verified badge */}
                    <span className="text-[10px] font-extrabold tracking-widest text-[#1893b0] uppercase select-none">
                      Verified Client
                    </span>

                  </div>

                  {/* Review Text */}
                  <p className="text-[13.5px] text-zinc-300 leading-relaxed font-medium">
                    {review.text}
                  </p>
                </div>

              </div>
            </RevealContainer>
          ))}
        </div>

      </div>
    </section>
  );
}
