'use client';
import PageLayout from "@/components/PageLayout";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/fade-up";

export default function PricingPage() {

  return (
    <PageLayout>
    <FadeUp delay={0.1}>
    <PricingSection />
    </FadeUp>
    <FadeUp delay={0.2}>
    <Footer/>
    </FadeUp>
    </PageLayout>)
} 