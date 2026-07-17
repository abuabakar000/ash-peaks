import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Services from "@/components/Services";
import Quote from "@/components/Quote";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <Plans />
        <About />
        <Services />
        <Quote />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
