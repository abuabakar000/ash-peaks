"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Search, 
  Cpu, 
  Layers
} from "lucide-react";

// Local Helper Component for Scroll Reveal
function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
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
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function WebDevelopmentService() {
  const servicesList = [
    {
      isFeatured: true,
      icon: Code2,
      title: "Custom Website Design",
      desc: "We believe that your website should reflect your brand's unique identity. Our custom website design services focus on creating visually stunning websites tailored to your business goals. Whether you're looking for a sleek, modern design or a more traditional layout, we craft designs that captivate your audience, enhance user experience, and drive engagement."
    },
    {
      icon: Layers,
      title: "WordPress Website Development",
      desc: "As one of the most popular content management systems (CMS), WordPress allows for easy management, scalability, and customization. We offer complete WordPress website development, from custom theme design to plugin integration and SEO optimization. Whether you need a simple blog, portfolio, or full-scale business site, we deliver websites that grow with your business."
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive Design",
      desc: "With more people browsing the web on mobile devices, having a mobile-responsive website is crucial. Our team ensures that your website adapts seamlessly across all screen sizes, providing a consistent and user-friendly experience on smartphones, tablets, and desktops. A mobile-optimized site not only improves user experience but also boosts your search engine rankings."
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Website Development",
      desc: "If you're looking to sell online, our e-commerce website development services are designed to create secure, user-friendly, and scalable online stores. We specialize in platforms like WooCommerce, Shopify, and Magento, ensuring that your online store is easy to manage, optimized for conversions, and fully equipped to handle payments, shipping, and inventory management."
    },
    {
      icon: Search,
      title: "SEO-Friendly Web Development",
      desc: "Having a beautiful website is important, but it's just as important that your website is visible on search engines. Our SEO-friendly web development ensures that your website is built with the latest SEO best practices, such as fast loading times, clean code, optimized content, and mobile responsiveness, to help your website rank higher in search engine results and drive organic traffic."
    },
    {
      icon: Cpu,
      title: "Website Maintenance & Support",
      desc: "A website needs continuous care to stay functional, secure, and up-to-date. Our website maintenance and support services include regular updates, security patches, backups, performance monitoring, and troubleshooting. Whether it's fixing bugs or adding new features, we're here to ensure your website runs smoothly at all times."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        
        {/* SECTION 1: HERO (Decent & Minimalist Style with Homepage Heading Twists) */}
        <section className="relative w-full bg-background flex items-center min-h-[50vh] overflow-hidden py-16 sm:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
            <RevealOnScroll>
              <div className="flex flex-col items-start text-left max-w-4xl">
                
                {/* Main Heading styled exactly like homepage hero */}
                <h1 className="text-[40px] sm:text-[54px] lg:text-[64px] font-black leading-[1.1] tracking-tight mb-6 text-slate-900">
                  <span
                    className="text-transparent select-none"
                    style={{ WebkitTextStroke: "1.5px #0f172a" }}
                  >
                    Website Design &
                  </span>{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1893b0] via-[#38bdf8] to-[#1893b0]">
                    Development
                  </span>
                </h1>

                {/* Subtext Paragraph */}
                <p className="text-base sm:text-lg md:text-[20px] leading-relaxed font-semibold mb-8">
                  <span className="text-black">Crafting Digital Experiences That Convert,</span>{" "}
                  <span className="text-slate-500">Ensuring a Strong Online Presence for Your Target Audience</span>
                </p>

                {/* CTA Button matching homepage design */}
                <Link
                  href="/contact"
                  id="hero-contact-btn"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1893b0] to-[#00a8cc] hover:from-[#15809b] hover:to-[#0097b8] text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-[#1893b0]/15 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base group select-none cursor-pointer"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* SECTION 2: WEB MAINTENANCE & SUPPORT (Taking Inspiration from Homepage Solutions Section) */}
        <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-black">
          {/* Background Image overlay to match Solutions section */}
          <div className="absolute inset-0 z-0 opacity-45">
            <Image
              src="/mtn-bg.png"
              alt="Dark premium mountain peaks background"
              fill
              priority
              sizes="100vw"
              className="object-cover pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image with Embedded Marquee */}
              <div className="lg:col-span-6 w-full">
                <RevealOnScroll>
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] md:aspect-[16/9]">
                    <Image
                      src="/images/presenting.png"
                      alt="Creative team collaboration"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    
                    {/* Embedded Marquee Over the bottom edge of the image */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-black/85 backdrop-blur-sm border-t border-white/10 flex items-center overflow-hidden z-20">
                      <div className="flex whitespace-nowrap animate-marquee gap-x-12 items-center text-white text-[11px] sm:text-xs font-bold select-none">
                        
                        {/* First scrolling set */}
                        <div className="flex items-center gap-x-12 shrink-0">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1893b0] font-extrabold">350+ Real Results</span>
                          <span className="text-zinc-500 select-none">|</span>
                          <span className="font-semibold text-zinc-100">75% Growth in Monthly Organic Leads – B2B Software Company</span>
                          <span className="text-zinc-500 select-none">|</span>
                          <span className="font-semibold text-zinc-100">Partnering with Quality Resource LLC was the best decision for our online success</span>
                          <span className="text-zinc-500 select-none">|</span>
                        </div>
                        
                        {/* Second scrolling set */}
                        <div className="flex items-center gap-x-12 shrink-0">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#1893b0] font-extrabold">350+ Real Results</span>
                          <span className="text-zinc-500 select-none">|</span>
                          <span className="font-semibold text-zinc-100">75% Growth in Monthly Organic Leads – B2B Software Company</span>
                          <span className="text-zinc-500 select-none">|</span>
                          <span className="font-semibold text-zinc-100">Partnering with Quality Resource LLC was the best decision for our online success</span>
                          <span className="text-zinc-500 select-none">|</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Right Column: Copy & Link Pills */}
              <div className="lg:col-span-6 flex flex-col items-start text-left text-white w-full">
                <RevealOnScroll delay={100}>
                  
                  {/* Tagline */}
                  <span className="text-[11px] font-extrabold tracking-widest text-[#1893b0] uppercase mb-4 select-none">
                    PROUDLY AWARDED 20+ WEB DESIGN AWARDS
                  </span>

                  {/* Heading with homepage Solutions styled gradient and outline */}
                  <h2 className="text-4xl sm:text-[46px] lg:text-[52px] font-black leading-[1.15] tracking-tight mb-4 text-white">
                    <span
                      className="text-transparent select-none"
                      style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
                    >
                      Web Maintenance &
                    </span>{" "}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1893b0] via-[#38bdf8] to-[#1893b0]">
                      Support
                    </span>
                  </h2>

                  {/* Cursive Subheading */}
                  <p className="font-cursive text-2xl sm:text-3xl text-cyan-200 mt-2 mb-6 select-none">
                    We&apos;re Also Specialists In...
                  </p>

                  {/* Paragraph text blocks using Solutions section text styling */}
                  <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
                    <p>
                      In today&apos;s digital world, your website is often the first interaction potential customers have with your brand. At Quality Resource LLC, we specialize in creating stunning, user-friendly websites that not only look great but are also optimized for performance and conversion. Whether you&apos;re starting from scratch or looking to revamp your existing site, our team of experts is here to bring your vision to life.
                    </p>
                    <p>
                      Let&apos;s work together to design a website that perfectly reflects your brand and achieves your business goals. Contact us today to get started on your web design and development journey!
                    </p>
                  </div>

                  {/* Pills block styled with homepage brand color */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Link 
                      href="/services/seo" 
                      id="pill-seo-services"
                      className="bg-white hover:bg-slate-50 text-[#1893b0] font-extrabold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      SEO Services
                    </Link>
                    <Link 
                      href="/services/content-marketing" 
                      id="pill-content-marketing"
                      className="bg-white hover:bg-slate-50 text-[#1893b0] font-extrabold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Content Marketing
                    </Link>
                    <Link 
                      href="/services/local-maps" 
                      id="pill-local-maps"
                      className="bg-white hover:bg-slate-50 text-[#1893b0] font-extrabold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Local Maps Optimization
                    </Link>
                  </div>

                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES CATALOG GRID (Pic 3 Style styled with Homepage Design language) */}
        <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Top Heading Block */}
            <div className="w-full mb-16 lg:mb-20 flex flex-col items-center text-center">
              <RevealOnScroll>
                
                {/* Tagline */}
                <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase mb-4 select-none">
                  BUILDING DIGITAL EXPERIENCES THAT DRIVE SUCCESS
                </span>

                {/* Heading styled like FAQ & plans sections */}
                <h2 className="text-[32px] sm:text-4xl lg:text-[45px] font-black leading-[1.1] tracking-tight mb-6">
                  <span
                    className="text-transparent select-none"
                    style={{ WebkitTextStroke: "1.5px #0f172a" }}
                  >
                    Our Website Design
                  </span>{" "}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1893b0] via-[#38bdf8] to-[#1893b0]">
                    &amp; Development Services
                  </span>
                </h2>

                {/* Centered Intro Paragraph */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-4xl mx-auto">
                  We offer a range of comprehensive services designed to ensure your website is not only visually stunning but also functional, user-friendly, and optimized for performance. From the initial design concept to the final launch and ongoing support, our expert team is here to guide you every step of the way. These services are designed to cater to a variety of business needs, from small businesses looking for a simple site to larger companies requiring complex, high-performance websites. We take pride in delivering solutions that are not only beautiful but also functional, driving measurable results for your business.
                </p>

              </RevealOnScroll>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <RevealOnScroll key={idx} delay={idx * 50}>
                    {service.isFeatured ? (
                      
                      /* Featured Card: Filled Background style with homepage primary gradient */
                      <div className="flex flex-col justify-between items-start p-8 rounded-3xl bg-gradient-to-br from-[#1893b0] to-[#00a8cc] text-white shadow-xl shadow-[#1893b0]/15 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group h-full">
                        <div className="flex flex-col items-start gap-4">
                          {/* White circle icon wrapper */}
                          <div className="w-12 h-12 rounded-2xl bg-white text-[#1893b0] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mt-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-zinc-100 font-semibold leading-relaxed text-left">
                            {service.desc}
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          id={`featured-card-btn-${idx}`}
                          className="mt-8 inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#1893b0] rounded-full px-6 py-2.5 font-bold text-xs uppercase tracking-wider transition-all duration-300"
                        >
                          Discover How
                        </Link>
                      </div>
                    ) : (
                      
                      /* Muted Cards: White Background style with brand teal borders on hover */
                      <div className="flex flex-col justify-between items-start p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#1893b0]/35 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 group h-full">
                        <div className="flex flex-col items-start gap-4">
                          {/* Light grey circle icon wrapper */}
                          <div className="w-12 h-12 rounded-2xl bg-[#e1e5e8]/50 text-[#1893b0] flex items-center justify-center shrink-0 group-hover:bg-[#1893b0] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#1893b0] transition-colors duration-300 mt-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 font-semibold leading-relaxed text-left">
                            {service.desc}
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          id={`card-btn-${idx}`}
                          className="mt-8 inline-flex items-center justify-center border border-[#1893b0] text-[#1893b0] hover:bg-[#1893b0] hover:text-white rounded-full px-6 py-2.5 font-bold text-xs uppercase tracking-wider transition-all duration-300"
                        >
                          Discover How
                        </Link>
                      </div>

                    )}
                  </RevealOnScroll>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
