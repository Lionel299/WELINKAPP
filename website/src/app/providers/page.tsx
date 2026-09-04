'use client';

import type { ComponentType } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProfileMockup from '@/components/providers/ProfileMockup';
import BusinessTools from '@/components/providers/BusinessTools';
import DownloadCTA from '@/components/home/DownloadCTA';
import {
  Briefcase,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  UserCheck,
  MapPin,
  Inbox,
  Camera,
  Calendar,
  Wallet,
  MessageSquare,
  Star,
  Video,
  Megaphone,
  Receipt,
} from 'lucide-react';
import { PROVIDER_BENEFITS } from '@/lib/constants';

export default function ProvidersPage() {
  const benefitIcons: Record<string, ComponentType<{ className?: string }>> = {
    UserCheck,
    Camera,
    MapPin,
    Inbox,
    MessageSquare,
    Calendar,
    Wallet,
    Star,
    Video,
    Megaphone,
    TrendingUp,
    ShieldCheck,
  };

  return (
    <div className="pt-24 md:pt-28">
      {/* Provider Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display md:text-display-xl font-extrabold text-white leading-tight text-balance">
              Turn your skills into opportunities.
            </h1>
            <p className="mt-6 text-body-lg text-slate-300 leading-relaxed text-balance">
              Join the fastest-growing digital infrastructure for skilled artisans and local service entrepreneurs across Africa. Get discovered, accept bookings, manage clients, and get paid with zero stress.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/pricing" className="w-full sm:w-auto shadow-glow">
                Become a Verified Provider <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="#tools" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                Explore Business Tools
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* 11 Provider Benefits Grid */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Built specifically for your growth."
              subtitle="WeLink gives you the marketing power and enterprise workflow tools previously only available to large multinational corporations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {PROVIDER_BENEFITS.map((benefit, idx) => (
              <ScrollReveal key={benefit.title} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 hover:bg-blue-50/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4 shadow-sm">
                      {(() => {
                        const Icon = benefitIcons[benefit.icon];
                        return Icon ? <Icon className="w-5 h-5" /> : null;
                      })()}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Profile Showcase Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-bold text-slate-900 leading-tight">
                  Your skills deserve to be seen.
                </h2>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Your WeLink profile is your complete professional identity. Display your trade certifications, showcase real project video reels, collect 5-star customer reviews, and accept bookings 24/7 without answering midnight phone calls.
                </p>

                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/pricing">
                    Claim Your Profile Link
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="mx-auto w-full max-w-[360px] rounded-[3rem] bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-800">
                  <div className="relative h-[590px] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white">
                    <div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-slate-900" />
                    <div className="w-[440px] origin-top-left scale-[0.6] sm:w-[500px]">
                      <ProfileMockup />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 11 Business Tools Section Component */}
      <BusinessTools />

      {/* CTA Footer */}
      <DownloadCTA
        title="Ready to take your service business to the next level?"
        subtitle="Create your free profile today and join the premier network of top-rated service professionals."
      />
    </div>
  );
}
