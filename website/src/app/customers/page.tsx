'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DownloadCTA from '@/components/home/DownloadCTA';
import {
  MapPin,
  Users,
  Star,
  Camera,
  MessageSquare,
  CreditCard,
  Calendar,
  Lock,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { CUSTOMER_BENEFITS } from '@/lib/constants';

const iconMap: Record<string, any> = {
  MapPin,
  Users,
  Star,
  Camera,
  MessageSquare,
  CreditCard,
  Calendar,
  Lock,
  Clock,
};

const JOURNEY_STEPS = [
  {
    num: '1',
    title: 'Explore & Search',
    desc: 'Use geolocation, service filters, and pricing criteria to discover skilled artisans near your doorstep.',
    icon: Search,
  },
  {
    num: '2',
    title: 'Compare & Vet',
    desc: 'Examine verified badges, customer rating histories, portfolios of completed projects, and video demonstrations.',
    icon: Star,
  },
  {
    num: '3',
    title: 'Instant Chat & Quote',
    desc: 'Communicate directly via encrypted in-app messaging. Send photos of the problem and get transparent itemized estimates.',
    icon: MessageSquare,
  },
  {
    num: '4',
    title: 'Schedule & Book',
    desc: 'Choose a convenient date and time window that suits your personal schedule.',
    icon: Calendar,
  },
  {
    num: '5',
    title: 'Escrow Protected Payment',
    desc: 'Pay with Mobile Money, card, or WeLink Wallet. Funds are released only when the service is satisfactorily completed.',
    icon: Lock,
  },
  {
    num: '6',
    title: 'Review & Build Community',
    desc: 'Rate your pro, upload proof of great work, and support local entrepreneurs with authentic recommendations.',
    icon: CheckCircle2,
  },
];

export default function CustomersPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary-50/70 via-background to-background overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display md:text-display-xl font-extrabold text-slate-900 leading-tight text-balance">
              Find the right professional with confidence.
            </h1>
            <p className="mt-6 text-body-lg text-slate-600 leading-relaxed text-balance">
              No more relying on word-of-mouth guesswork or unverified contacts. WeLink connects you with trusted, vetted professionals equipped to solve any home, automotive, creative, or personal service need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/#map" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                Find a Professional Nearby <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="secondary" size="lg" href="#how-it-works" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Journey Walkthrough */}
      <section id="how-it-works" className="section-padding bg-white border-y border-slate-200/80">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="From discovering talent to a job well done."
              subtitle="We designed every step of the WeLink customer experience to be frictionless, transparent, and completely risk-free."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {JOURNEY_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <ScrollReveal key={step.num} delay={idx * 0.08}>
                  <div className="relative p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 hover:bg-blue-50/20 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-9 h-9 rounded-xl bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                          {step.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary">
                          <StepIcon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-primary">
                      <span>Step {step.num} of 6</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 10 Customer Benefits Grid */}
      <section className="section-padding bg-slate-50">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Why thousands choose WeLink."
              subtitle="Everything you need to get quality services done quickly, affordably, and safely."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-12">
            {CUSTOMER_BENEFITS.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] || CheckCircle2;
              return (
                <ScrollReveal key={benefit.title} delay={i * 0.04}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-medium hover:border-blue-200 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-3.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{benefit.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Interactive App Mockup Showcase */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-heading-2 md:text-heading-1 font-bold text-white leading-tight">
                  Your entire neighborhood&apos;s best talent right in your pocket.
                </h2>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  Book emergency repairs with 1 tap, track arrival times with real-time GPS routing, and chat directly with verified experts without sharing personal phone numbers.
                </p>

                <div className="space-y-3.5 mt-6">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Background-checked and certified technicians</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>100% Escrow protected transactions with dispute resolution</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/#waitlist">
                    Join Early Access
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Phone Mockup */}
            <div className="flex justify-center">
              <ScrollReveal direction="left">
                <div className="relative w-full max-w-[280px] rounded-[3rem] bg-slate-950 p-3 shadow-2xl ring-1 ring-slate-800">
                  <div className="relative flex aspect-[9/19] items-center justify-center overflow-hidden rounded-[2.25rem] border border-slate-700 bg-slate-900">
                    <div className="absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-slate-950" />
                    <div className="relative flex items-center justify-center">
                      <div className="absolute bottom-0 h-3 w-16 translate-y-5 rounded-[50%] bg-blue-950/80 blur-md" />
                      <MapPin className="relative z-10 h-20 w-20 fill-blue-600 text-blue-600 drop-shadow-[0_14px_6px_rgba(0,0,0,0.55)]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Footer */}
      <DownloadCTA
        title="Ready to experience hassle-free services?"
        subtitle="Download WeLink or sign up today to discover verified professionals around your neighborhood."
      />
    </div>
  );
}
