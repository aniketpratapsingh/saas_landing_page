'use client';
import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you have a free trial?",
    answer: "CopyCat gives all new users a free trial of 50 workflows successfully created. After that, you'll be locked to just creating workflows until you upgrade to the pro plan."
  },
  {
    question: "My workflow sometimes doesn't work. What's going on?",
    answer: "We're constantly improving our AI to handle more complex workflows. If you're experiencing issues, please contact our support team for assistance."
  },
  {
    question: "Is there any discounted pricing?",
    answer: "Yes! We offer special pricing for startups and educational institutions. Contact us to learn more."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, just let us know and we'll process your refund."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-gradient-to-b from-indigo-50/50 to-white py-20">
      {/* Tag label */}
      <div className="w-full flex justify-center mb-4">
        <div className="bg-white px-4 py-1 rounded-full text-sm font-medium text-indigo-600 inline-flex items-center shadow-sm">
          FAQ
        </div>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a29] text-center mb-16">
        We&apos;ve got you covered
      </h2>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-[#0a0a29]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="pb-6">
                <p className="text-gray-600">
                  {faq.answer.replace(/'/g, "&apos;")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection; 