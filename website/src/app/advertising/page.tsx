'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DownloadCTA from '@/components/home/DownloadCTA';
import {
  Target,
  Sparkles,
  TrendingUp,
  BarChart3,
  Play,
  MapPin,
  Calendar,
  DollarSign,
  Eye,
  MousePointer,
  Users,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Layers,
  Zap,
} from 'lucide-react';

const AD_TYPES = [
  {
    title: 'Sponsored Video Reels',
    desc: 'Promote vertical video transformations to people actively searching in your neighborhood.',
    icon: Play,
    metric: '3.4x higher conversion vs static ads',
  },
  {
    title: 'Featured Search Placement',
    desc: 'Appear at the very top of category search results and map views when customers look for your skills.',
    icon: Target,
    metric: 'Top 3 ranking guaranteed during campaign',
  },
  {
    title: 'Sponsored Feed Posts',
    desc: 'Place high-engagement before-and-after project photos natively in the customer community social feed.',
    icon: Layers,
    metric: 'Native engagement with instant quote CTA',
  },
  {
    title: 'Promoted Profile Badges',
    desc: 'Highlight your business with priority discovery tags and spotlight banners across the city.',
    icon: Zap,
    metric: 'Boosts profile click-throughs by 120%',
  },
];

const ANALYTICS_METRICS = [
  { label: 'Impressions Delivered', value: '48,250', change: '+32%', icon: Eye },
  { label: 'Video Views (3s+)', value: '29,800', change: '+41%', icon: Play },
  { label: 'Profile Clicks', value: '3,120', change: '+18%', icon: MousePointer },
  { label: 'Service Inquiries & Leads', value: '412', change: '+54%', icon: Users },
  { label: 'Direct Bookings Closed', value: '98', change: '+29%', icon: CheckCircle2 },
  { label: 'Estimated Return on Ad Spend (ROAS)', value: '6.4x', change: '+1.2x', icon: TrendingUp },
];

export default function AdvertisingPage() {
  const [budget, setBudget] = useState(50);
  const [radius, setRadius] = useState(8);
  const [duration, setDuration] = useState(7);

  const estimatedReach = Math.round(budget * 240 * (radius / 5));
  const estimatedLeads = Math.round(budget * 2.8);

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> High-Performance Local Ads
            </span>
            <h1 className="text-display md:text-display-xl font-extrabold text-white leading-tight text-balance">
              Put your services in front of the right customers.
            </h1>
            <p className="mt-6 text-body-lg text-slate-300 leading-relaxed text-balance">
              WeLink Advertising turns your best craftsmanship into high-intent local customer leads. Promote videos, boost search placement, and geo-target clients ready to book today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#builder" className="w-full sm:w-auto shadow-glow">
                Launch a Campaign <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="#analytics" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                View Live Analytics
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Promotable Formats Grid */}
      <section className="section-padding bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              tag="Ad Formats"
              title="Four ways to dominate your local market."
              subtitle="Choose the campaign format that fits your business objectives and budget."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {AD_TYPES.map((ad, i) => {
              const Icon = ad.icon;
              return (
                <ScrollReveal key={ad.title} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 hover:bg-blue-50/20 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{ad.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{ad.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-600">
                      ★ {ad.metric}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Sponsored Videos Flow & Spotlight */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                  Video First Performance
                </span>
                <h2 className="text-heading-2 md:text-heading-1 font-bold text-slate-900 leading-tight">
                  Turn your best work into your best advertisement.
                </h2>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Static flyers don&apos;t build trust. Customers want to see the real sparks, the neat piping, the before/after makeover. Upload a 30-second phone clip and let WeLink deliver it directly to users within 5 kilometers of your workshop.
                </p>

                {/* Funnel Pipeline Steps */}
                <div className="mt-8 space-y-3">
                  {[
                    { step: '1', title: 'Video Upload', desc: 'Upload raw work footage from your smartphone' },
                    { step: '2', title: 'Hyper-Local Geo Targeting', desc: 'Select neighborhood radius & matching service categories' },
                    { step: '3', title: 'Direct Customer Inquiries', desc: 'Customers watch video and tap 1-click quote button' },
                    { step: '4', title: 'Bookings & Repeat Revenue', desc: 'Close jobs, earn 5-star reviews, and grow automatically' },
                  ].map((f) => (
                    <div key={f.step} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                      <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {f.step}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{f.title}</h4>
                        <p className="text-[11px] text-slate-500">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Campaign Simulator Card */}
            <div id="builder" className="lg:col-span-6">
              <ScrollReveal direction="left">
                <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-blue-400">Campaign Simulator</span>
                      <h3 className="text-base font-bold text-white mt-0.5">Quick Ad Estimator</h3>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
                      High Intent
                    </span>
                  </div>

                  {/* Slider Controls */}
                  <div className="space-y-5 my-6">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">Total Campaign Budget</span>
                        <strong className="text-blue-400 font-mono text-sm">${budget}.00</strong>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="300"
                        step="10"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">Targeting Radius</span>
                        <strong className="text-blue-400 font-mono text-sm">{radius} km</strong>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="25"
                        value={radius}
                        onChange={(e) => setRadius(Number(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">Campaign Duration</span>
                        <strong className="text-blue-400 font-mono text-sm">{duration} Days</strong>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max="30"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Estimated Forecast Results */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">Est. Local Reach</span>
                      <strong className="text-xl font-bold text-white font-mono">{estimatedReach.toLocaleString()}</strong>
                      <span className="text-[10px] text-slate-400 block">nearby customers</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">Est. Quote Leads</span>
                      <strong className="text-xl font-bold text-emerald-400 font-mono">~{estimatedLeads}</strong>
                      <span className="text-[10px] text-slate-400 block">direct inquiries</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="primary" size="lg" className="w-full shadow-glow" href="/pricing">
                      Start \$ {budget} Campaign
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Live Analytics Mockup Section */}
      <section id="analytics" className="section-padding bg-slate-900 text-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              tag="Transparent Analytics"
              title="Real-time visibility into every marketing dollar."
              subtitle="Track views, clicks, direct service inquiries, and real revenue closed from your ads dashboard."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ANALYTICS_METRICS.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <ScrollReveal key={metric.label} delay={idx * 0.06}>
                  <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-slate-600 transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                        <MetricIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {metric.change}
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{metric.value}</span>
                      <h4 className="text-xs font-semibold text-slate-300 mt-1">{metric.label}</h4>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Footer */}
      <DownloadCTA
        title="Ready to supercharge your local client pipeline?"
        subtitle="Create a targeted video ad campaign in under 3 minutes directly from your phone."
      />
    </div>
  );
}
