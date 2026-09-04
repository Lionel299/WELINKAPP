'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DownloadCTA from '@/components/home/DownloadCTA';
import { HelpCircle, Search, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

const FAQ_CATEGORIES = ['All', 'General', 'Customers', 'Providers', 'Payments', 'Platform'];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary-50/70 via-background to-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display md:text-display-xl font-extrabold text-slate-900 leading-tight text-balance">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-body-lg text-slate-600 leading-relaxed text-balance">
              Have questions about how WeLink works? Find quick, clear answers about bookings, verified providers, payments, advertising, and safety.
            </p>

            {/* Search Input */}
            <div className="mt-8 max-w-lg mx-auto relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, e.g. payments, cancellation, verification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm shadow-soft focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Accordions Section */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto bg-slate-50/70 p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-soft">
            {filteredFaqs.length > 0 ? (
              <div className="divide-y divide-slate-200">
                {filteredFaqs.map((faq) => (
                  <FAQAccordion
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-800">No matching questions found</h4>
                <p className="text-xs text-slate-500 mt-1">Try another search term or reach out to our team directly.</p>
              </div>
            )}
          </div>

          {/* Need More Help Box */}
          <div className="mt-12 max-w-xl mx-auto p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
            <h4 className="text-sm font-bold text-slate-900">Still have a question?</h4>
            <p className="text-xs text-slate-600 mt-1 mb-4">
              Our customer success and provider support teams are available 7 days a week.
            </p>
            <Button variant="primary" size="sm" href="/contact">
              Contact Support
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Footer */}
      <DownloadCTA />
    </div>
  );
}
