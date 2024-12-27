import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TaskVisualizationSection from "@/components/TaskVisualizationSection";
import AutomationSection from "@/components/AutomationSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection/>
      <FeatureSection/>
      <TaskVisualizationSection/>
      <AutomationSection/>
      <PricingSection/>
      <Footer/>
    </PageLayout>
  );
}
