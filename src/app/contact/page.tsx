'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';
import PageLayout from '@/components/PageLayout';
import { FadeUp } from '@/components/ui/fade-up';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout>
      <main>
        <FadeUp>
          <div className="w-full flex justify-center pt-20 sm:pt-32 pb-4 px-4">
            <div className="bg-white px-4 py-1 rounded-full text-sm font-medium text-indigo-600 inline-flex items-center shadow-sm">
              CONTACT
            </div>
          </div>
        </FadeUp>

        {/* Title and subtitle */}
        <FadeUp delay={0.1}>
          <div className="text-center max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0a0a29] mb-4">
              Sign up for beta?
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Have a question, suggestion, or just want to learn more? Get in touch!
            </p>
          </div>
        </FadeUp>

        {/* Contact Form */}
        <FadeUp delay={0.2}>
          <div className="max-w-xl mx-auto px-4 pb-20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  placeholder="Tell us who you are, why you want the beta and if you are open to giving feedback!"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Footer/>
        </FadeUp>
      </main>
    </PageLayout>
  );
} 