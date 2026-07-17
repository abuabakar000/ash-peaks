"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Quote() {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    websiteUrl: "",
    serviceNeeded: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data: ", formData);
    alert("Thank you for your request! We will get back to you shortly.");
  };

  const checklist = [
    { bold: "Why your brand's message", normal: " isn't resonating with your target audience and how to fix it" },
    { bold: "Proven strategies", normal: " to optimize your digital presence and drive measurable results" },
    { bold: "How to identify and leverage", normal: " the right channels for maximum marketing impact" },
    { bold: "The key to aligning", normal: " your marketing tactics with evolving consumer behavior" },
    { bold: "Actionable insights", normal: " to transform data into powerful growth strategies for your business" }
  ];

  return (
    <section className="relative w-full bg-black py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-zinc-900">
      
      {/* Exotic amber light leak background accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-radial from-[#f59e0b]/5 to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Copy & Info (7 cols width) */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            
            {/* Header Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight mb-8">
              Ready to take your <span className="text-[#f59e0b]">digital marketing</span> <br />
              to the next level?
            </h2>

            {/* Tagline */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-[#f59e0b] uppercase mb-7 select-none">
              We Guarantee You&apos;ll Leave With a Clear Understanding of:
            </span>

            {/* Checklist */}
            <div className="flex flex-col gap-4.5 mb-12 w-full">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Small Circular Check Indicator */}
                  <div className="w-5.5 h-5.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#f59e0b] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_12px_rgba(245,158,11,0.08)]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-medium">
                    <strong className="text-zinc-200 font-bold">{item.bold}</strong>{item.normal}
                  </p>
                </div>
              ))}
            </div>

            {/* Our Team Section */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
              Our Team
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-medium max-w-2xl">
              Before we collaborate, it&apos;s important to understand our approach and the value we can add to your business. We work closely with you to ensure your goals are met with tailored strategies, and we are always here to provide guidance and support at every step.
            </p>

            {/* Editorial pull quote */}
            <div className="border-l-2 border-[#f59e0b] pl-4 my-6 max-w-xl">
              <p className="text-zinc-200 font-bold leading-relaxed text-[14.5px] sm:text-base">
                &ldquo;As a marketing agency, we emphasize transparency and are committed to sharing our expertise, helping you navigate the path to online marketing success.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-medium mb-8 max-w-2xl">
              Together, we&apos;ll create a roadmap for growth that aligns with your vision and delivers measurable results.
            </p>

            {/* More About Us Outline Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-zinc-700 text-sm sm:text-base font-bold text-white bg-transparent hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all duration-300 group"
            >
              <span>More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Right Column: Request a Quote Form Card (5 cols width) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/80 flex flex-col w-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
                Request a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                
                {/* Business Name */}
                <div className="w-full">
                  <input
                    type="text"
                    required
                    placeholder="Business / Company Name *"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                </div>

                {/* First & Last Name (Stacked on mobile, side-by-side on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                </div>

                {/* Phone & Email (Stacked on mobile, side-by-side on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <input
                    type="tel"
                    required
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                </div>

                {/* Website URL */}
                <div className="w-full">
                  <input
                    type="url"
                    required
                    placeholder="Website URL *"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                </div>

                {/* Dropdown Services */}
                <div className="w-full relative">
                  <select
                    required
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-zinc-300 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-zinc-950 text-zinc-500">What services do you need? *</option>
                    <option value="web-dev" className="bg-zinc-950 text-white">Website Design & Development</option>
                    <option value="seo" className="bg-zinc-950 text-white">Search Engine Optimization</option>
                    <option value="local-maps" className="bg-zinc-950 text-white">Local Maps Optimization</option>
                    <option value="content" className="bg-zinc-950 text-white">Content Marketing</option>
                    <option value="social" className="bg-zinc-950 text-white">Social Media Marketing</option>
                    <option value="ppc" className="bg-zinc-950 text-white">PPC Management</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-zinc-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Textarea */}
                <div className="w-full">
                  <textarea
                    required
                    rows={4}
                    placeholder="What's your monthly marketing budget, and what goals do you want to achieve? *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all h-[110px] resize-none"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start mt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#f59e0b] border-zinc-800 bg-zinc-900 focus:ring-[#f59e0b] cursor-pointer"
                  />
                  <label htmlFor="consent" className="ml-3 text-[11px] sm:text-xs text-zinc-400 leading-normal font-medium cursor-pointer">
                    By providing a telephone number and submitting the form of QRG, you are consenting to be contacted by SMS text message and agreeing to our{" "}
                    <Link href="/privacy" className="text-[#f59e0b] underline font-bold hover:text-[#d97706]">
                      Privacy Policy
                    </Link>.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 px-6 rounded-full text-sm sm:text-base transition-colors duration-200 cursor-pointer shadow-md shadow-[#f59e0b]/10 hover:shadow-lg hover:shadow-[#f59e0b]/20"
                >
                  Request My Free Quote
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
