'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Wallet,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Smartphone,
} from 'lucide-react';

const HIGHLIGHTED_BENEFITS = [
  {
    icon: Users,
    title: 'Instant Local Exposure',
    desc: 'Reach thousands of homeowners and businesses looking for verified pros right now in your district.',
  },
  {
    icon: Calendar,
    title: 'Smart Booking & Calendar',
    desc: 'Eliminate scheduling headaches. Accept bookings, set your working hours, and manage repeat clients seamlessly.',
  },
  {
    icon: Wallet,
    title: 'Guaranteed On-Time Payouts',
    desc: 'Get paid directly through Mobile Money or direct bank deposit as soon as service completion is verified.',
  },
  {
    icon: Target,
    title: 'Hyper-Local Video Ads',
    desc: 'Target customers within a 5km radius with video ads showing your actual craftsmanship and before/after results.',
  },
];

export default function ProviderCTASection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-50 text-primary mb-4">
                <Briefcase className="w-3.5 h-3.5" /> For Skilled Professionals & Artisans
              </span>
              <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-bold text-slate-900 leading-tight text-balance">
                Turn your skills into daily opportunities.
              </h2>
              <p className="mt-4 text-body-lg text-slate-600 max-w-xl text-balance">
                Whether you are an independent electrician, hairstylist, builder, or creative studio, WeLink equips you with the complete digital infrastructure to run and scale your business.
              </p>
            </ScrollReveal>

            {/* Benefits 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {HIGHLIGHTED_BENEFITS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <ScrollReveal key={b.title} delay={i * 0.1}>
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{b.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* CTAs */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
                <Button variant="primary" size="lg" href="/providers" className="shadow-lg shadow-primary/25">
                  Become a Verified Provider <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="secondary" size="lg" href="/providers#tools">
                  Explore Provider Tools
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free to create profile
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Keep 100% of tips
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Payouts within 24h
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Provider App Workspace Mockup */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="relative mx-auto max-w-sm rounded-[36px] bg-slate-950 p-4 shadow-2xl ring-1 ring-slate-800">
                {/* Phone Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 h-4 w-28 rounded-full bg-slate-800" />

                {/* Inner Screen */}
                <div className="rounded-[28px] bg-slate-900 p-5 pt-8 text-white overflow-hidden">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Online & Accepting Jobs
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">Today&apos;s Earnings</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-emerald-400 font-mono">$380.00</span>
                      <span className="text-[10px] text-slate-400 block">4 jobs completed</span>
                    </div>
                  </div>

                  {/* Incoming Job Request Card */}
                  <div className="my-4 bg-slate-800/90 border border-primary/40 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary/20 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-400/30">
                        New Booking Request
                      </span>
                      <span className="text-[10px] text-amber-400 font-bold">2 mins ago</span>
                    </div>
                    <h5 className="text-xs font-bold text-white">Emergency Water Pipe Fix</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Client: Sarah K. • 1.4 km away (Valley View)</p>
                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-700">
                      <span className="font-bold text-white font-mono">$65.00 Est.</span>
                      <div className="flex gap-2">
                        <button className="bg-slate-700 hover:bg-slate-600 text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                          Decline
                        </button>
                        <button className="bg-primary hover:bg-primary-dark text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow">
                          Accept Job
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center my-3">
                    <div className="bg-slate-800/50 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-400 block">Profile Views</span>
                      <strong className="text-xs text-white">1,420</strong>
                    </div>
                    <div className="bg-slate-800/50 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-400 block">Rating</span>
                      <strong className="text-xs text-amber-400">4.9 ★</strong>
                    </div>
                    <div className="bg-slate-800/50 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-400 block">Repeat Rate</span>
                      <strong className="text-xs text-emerald-400">78%</strong>
                    </div>
                  </div>

                  {/* Active Ad Campaign */}
                  <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-300" />
                      <div>
                        <span className="text-[11px] font-bold text-white block">Video Ad Active</span>
                        <span className="text-[9px] text-slate-300">Targeting 5km radius</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-200 bg-blue-500/20 px-2 py-0.5 rounded">
                      +42 Leads
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
