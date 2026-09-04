'use client';

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
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
} from 'lucide-react';

const AD_TYPES = [
  {
    title: 'Sponsored Video Reels',
    desc: 'Promote vertical video transformations to people actively searching in your neighborhood.',
    icon: Play,
  },
  {
    title: 'Featured Search Placement',
    desc: 'Appear at the very top of category search results and map views when customers look for your skills.',
    icon: Target,
  },
  {
    title: 'Sponsored Feed Posts',
    desc: 'Place high-engagement before-and-after project photos natively in the customer community social feed.',
    icon: Layers,
  },
  {
    title: 'Promoted Profile Badges',
    desc: 'Highlight your business with priority discovery tags and spotlight banners across the city.',
    icon: Zap,
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

function AdPhone({ type }: { type: 'feed' | 'reels' }) {
  const isFeed = type === 'feed';

  return (
    <div className={`relative w-[calc((100vw-3rem)/2)] max-w-[220px] rounded-[2.5rem] bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800 ${isFeed ? 'z-10' : 'z-20 mt-20'}`}>
      <div className="relative aspect-[9/18] overflow-hidden rounded-[2rem] bg-white">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
        {isFeed ? (
          <>
            <div className="flex items-center justify-between border-b border-slate-100 px-3 pb-2 pt-7">
              <span className="text-[10px] font-extrabold text-slate-900">Feed</span>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600" />
                <div><div className="h-2 w-20 rounded bg-slate-800" /><div className="mt-1 h-1.5 w-12 rounded bg-slate-200" /></div>
              </div>
              <img src="/dinning-table.jpg" alt="Handcrafted dining table project" className="mt-3 aspect-square w-full rounded-xl object-cover" />
              <p className="mt-3 text-[10px] leading-relaxed text-slate-700">Handcrafted solid mahogany dining table for a client downtown. ✨🔨</p>
              <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-2 text-[10px] text-slate-500">
                <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> 342
                <MessageCircle className="h-3.5 w-3.5" /> 28
                <Bookmark className="ml-auto h-3.5 w-3.5" />
              </div>
            </div>
          </>
        ) : (
          <div className="relative flex h-full flex-col justify-end overflow-hidden bg-gradient-to-b from-amber-600 via-orange-600 to-red-700 p-3 text-white">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex items-center justify-between pt-8 text-[10px] font-bold"><span>Reels</span><span>0:58</span></div>
            <div className="relative z-10 mb-2 mt-auto">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20"><Play className="h-4 w-4 fill-white" /></div>
              <span className="text-[9px] font-semibold text-blue-200">Catering & Events</span>
              <h4 className="mt-1 text-sm font-bold leading-tight">5-Course Wedding Banquet Prep</h4>
              <div className="mt-3 flex items-center gap-3 border-t border-white/20 pt-2 text-[10px]"><span>♥ 2.1K</span><span>◉ 18.4K</span><Share2 className="ml-auto h-3.5 w-3.5" /></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdvertisingPage() {

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
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
                    { step: '2', title: 'Direct Customer Inquiries', desc: 'Customers watch video and tap 1-click quote button' },
                    { step: '3', title: 'Bookings & Repeat Revenue', desc: 'Close jobs, earn 5-star reviews, and grow automatically' },
                  ].map((f) => (
                    <div key={f.step} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                      <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-700 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 ring-4 ring-primary/10">
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

            {/* Feed and Reels Phone Mockups */}
            <div id="builder" className="lg:col-span-6">
              <ScrollReveal direction="left">
                <div className="relative flex min-h-[560px] items-start justify-center gap-2 sm:gap-6">
                  <AdPhone type="feed" />
                  <AdPhone type="reels" />
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
            <div className="mb-12 md:mb-16 text-center">
              <h2 className="text-heading-2 md:text-heading-1 lg:text-display text-white text-balance">
                Real-time visibility into every marketing dollar.
              </h2>
              <p className="mt-4 md:mt-6 text-body-lg text-slate-300 max-w-3xl mx-auto text-balance">
                Track views, clicks, direct service inquiries, and real revenue closed from your ads dashboard.
              </p>
            </div>
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
