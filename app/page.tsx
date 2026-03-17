import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnersBar from "./components/PartnersBar";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import OurTools from "./components/OurTools";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[var(--dark)]" dir="rtl">
      <Header />
      <main>
        <Hero />
        <PartnersBar />
        <HowItWorks />
        <WhyChooseUs />
        <OurTools />
        <Stats />
        <FAQ />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
