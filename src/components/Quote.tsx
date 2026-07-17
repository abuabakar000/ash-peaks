"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    // Handle form submit logic
    console.log("Submit Form:", formData);
  };

  const checklist = [
    "Why your brand's message isn't resonating with your target audience and how to fix it",
    "Proven strategies to optimize your digital presence and drive measurable results",
    "How to identify and leverage the right channels for maximum marketing impact",
    "The key to aligning your marketing tactics with evolving consumer behavior",
    "Actionable insights to transform data into powerful growth strategies for your business"
  ];

  return (
    <section className="relative w-full bg-[#0a0a0b] py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Copy & Info (7 cols width) */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            
            {/* Header Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight mb-8">
              Ready to take your digital marketing <br />
              to the next level?
            </h2>

            {/* Tagline */}
            <span className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-6">
              We Guarantee You&apos;ll Leave With a Clear Understanding of:
            </span>

            {/* Checklist */}
            <div className="flex flex-col gap-4 mb-12 w-full">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {/* Verified Checkmark Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Our Team Section */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
              Our Team
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium mb-8 max-w-2xl">
              Before we collaborate, it&apos;s important to understand our approach and the value we can add to your business.{" "}
              <strong className="font-extrabold text-white">
                As a marketing, we emphasize transparency and are committed to sharing our expertise, helping you navigate the path to online marketing success.
              </strong>{" "}
              We work closely with you to ensure your goals are met with tailored strategies, and we are always here to provide guidance and support at every step. Together, we&apos;ll create a roadmap for growth that aligns with your vision and delivers measurable results.
            </p>

            {/* More About Us Outline Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-white text-sm sm:text-base font-bold text-white bg-transparent hover:bg-white hover:text-slate-950 transition-all duration-300"
            >
              More About Us
            </Link>

          </div>

          {/* Right Column: Request a Quote Form Card (5 cols width) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-xl border border-slate-100 flex flex-col w-full">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-6 tracking-tight">
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
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors"
                  />
                </div>

                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <input
                    type="tel"
                    required
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors"
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
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors"
                  />
                </div>

                {/* Dropdown Services */}
                <div className="w-full relative">
                  <select
                    required
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-600 bg-white focus:outline-none focus:border-[#0047e1] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>What services do you need? *</option>
                    <option value="web-dev">Website Design & Development</option>
                    <option value="seo">Search Engine Optimization</option>
                    <option value="local-maps">Local Maps Optimization</option>
                    <option value="content">Content Marketing</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="ppc">PPC Management</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-slate-400">
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
                    className="w-full border border-slate-200 rounded-lg p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0047e1] transition-colors h-[110px] resize-none"
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
                    className="mt-1 w-4 h-4 text-[#0047e1] border-slate-300 rounded focus:ring-[#0047e1] cursor-pointer"
                  />
                  <label htmlFor="consent" className="ml-3 text-[11px] sm:text-xs text-slate-600 leading-normal font-medium cursor-pointer">
                    By providing a telephone number and submitting the form of QRG, you are consenting to be contacted by SMS text message and agreeing to our{" "}
                    <Link href="/privacy" className="text-blue-600 underline font-bold hover:text-blue-700">
                      Privacy Policy
                    </Link>.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#0047e1] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full text-sm sm:text-base transition-colors duration-200 cursor-pointer shadow-md"
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
