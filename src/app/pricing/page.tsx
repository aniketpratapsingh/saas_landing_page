'use client';
import PricingSection from "@/components/PricingSection";
import { CheckIcon } from '@heroicons/react/24/solid'
import FAQSection from '@/components/FAQSection';
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { FadeUp } from "@/components/ui/fade-up";

export default function PricingPage() {
    return (
    <PageLayout>
      <main>
        <FadeUp>
          <div className="w-full flex justify-center pt-32 pb-4">
            <div className="bg-white px-4 py-1 rounded-full text-sm font-medium text-indigo-600 inline-flex items-center shadow-sm">
              PRICING
            </div>
          </div>
        </FadeUp>

        {/* Title and subtitle */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-16">
          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0a0a29] mb-4">
              Pricing
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xl text-gray-600">
              Choose your ideal plan. No obligation, cancel anytime.
            </p>
          </FadeUp>
        </div>

        {/* Pricing cards */}
        <div className="w-full max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <FadeUp delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
                <div>
                  <h3 className="text-lg font-medium text-gray-600 mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">50 Workflow Runs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Limited Process Analytics</span>
                  </li>
                </ul>
              </div>
            </FadeUp>

            {/* Pro Plan */}
            <FadeUp delay={0.4}>
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
                <div>
                  <h3 className="text-lg font-medium text-gray-600 mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-6xl font-bold">$30</span>
                    <span className="text-gray-600 ml-2">/month per user</span>
                  </div>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Unlimited Workflow Runs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Basic Customer Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Basic Process Analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Basic Collaboration Features</span>
                  </li>
                </ul>
              </div>
            </FadeUp>

            {/* Enterprise Plan */}
            <FadeUp delay={0.5}>
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
                <div>
                  <h3 className="text-lg font-medium text-gray-600 mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-xl font-medium text-indigo-600 flex items-center gap-2">
                      Talk to a Founder 🚀
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Unlimited Workflow Runs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Enterprise Customer Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Advanced Process Analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-600">Advanced Collaboration Features</span>
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Add FAQ Section */}
        <FadeUp delay={0.6}>
          <FAQSection />
        </FadeUp>
        <FadeUp delay={0.7}>
          <Footer/>
        </FadeUp>
      </main>
    </PageLayout>
  );
} 