import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnersBar from "./components/PartnersBar";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import OurTools from "./components/OurTools";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[var(--dark)]" dir="rtl">
      <Header />
      <main>
        <Hero />
        <PartnersBar />
        <HowItWorks />
        <WhyChooseUs />
        <OurTools />
      </main>
    </div>
  );
}
