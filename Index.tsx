import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandSection from "@/components/BrandSection";
import IndustrySection from "@/components/IndustrySection";
import ProjectsCounter from "@/components/ProjectsCounter";
import ContactForm from "@/components/ContactForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#2A2E3A]">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <BrandSection />
        <IndustrySection />
        <ProjectsCounter />
        <ContactForm />
      </main>
    </div>
  );
}
