'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import PricingCard from '@/components/ui/PricingCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DownloadCTA from '@/components/home/DownloadCTA';
import {
  Check,
} from 'lucide-react';
import { PRICING_PLANS, REVENUE_STREAMS } from '@/lib/constants';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'providers' | 'customers'>('providers');

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary-50/60 via-background to-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display md:text-display-xl font-extrabold text-slate-900 leading-tight text-balance">
              Simple plans. No hidden surprises.
            </h1>
            <p className="mt-6 text-body-lg text-slate-600 leading-relaxed text-balance">
              Whether you are discovering trusted help for your home or scaling a service enterprise, our pricing models are designed to align with your real success.
            </p>

            {/* Toggle Tabs */}
            <div className="mt-10 inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60">
              <button
                onClick={() => setActiveTab('providers')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'providers'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                For Service Providers
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'customers'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                For Customers
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards Display */}
      <section className="py-12 bg-background">
        <Container>
          {activeTab === 'providers' ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                {PRICING_PLANS.map((plan) => (
                  <PricingCard
                    key={plan.name}
                    name={plan.name}
                    price={plan.price}
                    period={plan.period}
                    description={plan.description}
                    features={plan.features}
                    highlighted={plan.highlighted}
                    cta={plan.cta}
                  />
                ))}
              </div>

            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-large text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-heading-3 font-bold text-slate-900">100% Free for Customers</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
                Customers never pay a monthly subscription fee to search, browse portfolios, watch videos, or message providers on WeLink.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Free Search & Map</h4>
                  <p className="text-[11px] text-slate-500">Discover all verified local artisans at \$0 cost.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Transparent Quotations</h4>
                  <p className="text-[11px] text-slate-500">Itemized pricing upfront before you confirm any job.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Protected Escrow</h4>
                  <p className="text-[11px] text-slate-500">Small platform processing fee applied only upon booking.</p>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="primary" size="lg" href="/customers">
                  Start Finding Providers
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Transparent Business Model Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="A sustainable ecosystem built on shared success."
              subtitle="We believe in total transparency regarding how WeLink operates and generates sustainable revenue."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {REVENUE_STREAMS.map((stream, i) => (
              <ScrollReveal key={stream} delay={i * 0.05}>
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                    0{i + 1}
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{stream}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      {/* CTA Footer */}
      <DownloadCTA
        title="Get started with WeLink today."
        subtitle="No long-term contracts. Upgrade, downgrade, or cancel anytime."
      />
    </div>
  );
}
