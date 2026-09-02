'use client';

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
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Camera,
  Calendar,
  Wallet,
  MessageSquare,
  Star,
  Target,
  Crown,
} from 'lucide-react';
import { PROVIDER_BENEFITS } from '@/lib/constants';

export default function ProvidersPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Provider Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
                <Sparkles className="w-3.5 h-3.5" /> For Independent Pros & Studios
              </span>
              <h1 className="text-display md:text-display-xl font-extrabold text-white leading-tight text-balance">
                Turn your skills into opportunities.
              </h1>
              <p className="mt-6 text-body-lg text-slate-300 leading-relaxed text-balance">
                Join the fastest-growing digital infrastructure for skilled artisans and local service entrepreneurs across Africa. Get discovered, accept bookings, manage clients, and get paid with zero stress.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button variant="primary" size="lg" href="/pricing" className="w-full sm:w-auto shadow-glow">
                  Become a Verified Provider <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" href="#tools" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                  Explore Business Tools
                </Button>
              </div>

              {/* Trust checkmarks */}
              <div className="flex flex-wrap items-center gap-4 mt-8 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free to create profile
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct Mobile Money payouts
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Keep 100% of tips
                </span>
              </div>
            </div>

            {/* Quick Stats Metric Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <span className="text-2xl md:text-3xl font-extrabold text-blue-400 font-mono">+180%</span>
                <h4 className="text-sm font-bold text-white mt-1">Average Client Growth</h4>
                <p className="text-xs text-slate-400 mt-1">Reported by verified WeLink providers in their first 90 days.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-mono">&lt; 24h</span>
                <h4 className="text-sm font-bold text-white mt-1">Guaranteed Payouts</h4>
                <p className="text-xs text-slate-400 mt-1">Directly to your Mobile Money or local bank account.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <span className="text-2xl md:text-3xl font-extrabold text-amber-400 font-mono">10,000+</span>
                <h4 className="text-sm font-bold text-white mt-1">Active Professionals</h4>
                <p className="text-xs text-slate-400 mt-1">Across 25+ essential service categories and expanding.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <span className="text-2xl md:text-3xl font-extrabold text-purple-400 font-mono">5.2x</span>
                <h4 className="text-sm font-bold text-white mt-1">Video Ad ROI</h4>
                <p className="text-xs text-slate-400 mt-1">Average return on sponsored local video campaigns.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 11 Provider Benefits Grid */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              tag="Provider Advantages"
              title="Built specifically for your growth."
              subtitle="WeLink gives you the marketing power and enterprise workflow tools previously only available to large multinational corporations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {PROVIDER_BENEFITS.map((benefit, idx) => (
              <ScrollReveal key={benefit.title} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 hover:bg-blue-50/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center mb-4 shadow-sm">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Included in WeLink Pro
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
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                  Your Digital Storefront
                </span>
                <h2 className="text-heading-2 md:text-heading-1 font-bold text-slate-900 leading-tight">
                  Your skills deserve to be seen.
                </h2>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Your WeLink profile is your complete professional identity. Display your trade certifications, showcase real project video reels, collect 5-star customer reviews, and accept bookings 24/7 without answering midnight phone calls.
                </p>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Official verified master badge boosts conversions by 65%</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Camera className="w-4 h-4 text-primary" />
                    <span>High-definition video portfolio & before/after sliders</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Star className="w-4 h-4 text-primary" />
                    <span>Portability: share your profile link on WhatsApp, Instagram & TikTok</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/pricing">
                    Claim Your Profile Link
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <ProfileMockup />
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
