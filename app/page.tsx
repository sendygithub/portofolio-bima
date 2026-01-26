import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";
import TestimonialSlider from "@/components/TestimonialSlider";
import BusinessGrowthChart from "@/components/BusinessGrowthChart";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <CoreServices />
      <CaseStudies />
      <TestimonialSlider />
      <BusinessGrowthChart />
      <ContactSection />
      <Footer />
    </main>
  );
}
