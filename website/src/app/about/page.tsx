import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DownloadCTA from '@/components/home/DownloadCTA';
import {
  Globe,
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  Users,
  Sparkles,
  Building2,
  Compass,
  ArrowRight,
} from 'lucide-react';

const VALUES = [
  {
    icon: Users,
    title: 'Local Empowerment',
    desc: 'We champion the informal economy, providing skilled electricians, braiders, builders, and mechanics with the digital tools to build generational wealth.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Trust',
    desc: 'Trust is not a marketing slogan; it is verified identity, transparent ratings, escrow protection, and continuous platform moderation.',
  },
  {
    icon: Globe,
    title: 'Digital Inclusion',
    desc: 'We design mobile-first interfaces accessible to everyone, integrating seamlessly with regional realities such as Mobile Money and low-bandwidth environments.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Acceleration',
    desc: 'When local talent thrives, neighborhood economies grow. We facilitate reliable micro-transactions that directly stimulate communities.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary-50/70 via-background to-background overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display md:text-display-xl font-extrabold text-slate-900 leading-tight text-balance">
              Connecting local talent with local demand.
            </h1>
            <p className="mt-6 text-body-lg text-slate-600 leading-relaxed text-balance">
              WeLink is building the modern digital infrastructure to connect skilled service providers with households and businesses across growing African urban hubs.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Split */}
      <section className="section-padding bg-white border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 md:p-10 rounded-3xl bg-blue-950 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block">
                  Our Mission
                </span>
                <h3 className="text-heading-3 md:text-heading-2 font-bold leading-snug">
                  &ldquo;Make trusted services easier to discover, access, and grow.&rdquo;
                </h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  Every day, millions of skilled professionals go unnoticed, while millions of customers struggle to find trustworthy service providers. WeLink bridges this gap through verifiable credentials, video proof, and intuitive mobile technology.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-blue-300 font-semibold">
                <Sparkles className="w-4 h-4" /> Everyday Problem Solving
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-slate-900 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                  Our Vision
                </span>
                <h3 className="text-heading-3 md:text-heading-2 font-bold leading-snug">
                  &ldquo;Build the digital operating system for Africa&apos;s local service economy.&rdquo;
                </h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  We envision a future where any skilled artisan or independent provider can run their entire enterprise from a smartphone—from discovery and client booking to automated invoicing, advertising, and credit readiness.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                <Globe className="w-4 h-4" /> Scalable Technology
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="The principles that guide every feature we ship."
              subtitle="We build with empathy for the local context and an uncompromising commitment to engineering excellence."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.title} delay={idx * 0.08}>
                  <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-soft h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">{val.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Story & Narrative */}
      <section className="section-padding bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block text-center">
              The WeLink Story
            </span>
            <h2 className="text-heading-2 font-bold text-slate-900 text-center mb-8">
              Why We Are Building WeLink
            </h2>

            <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                In rapidly expanding metropolitan centers across Africa, finding a reliable plumber when a pipe bursts, a certified electrician to install solar inverters, or a talented hairstylist for a major event usually meant asking five different WhatsApp groups and hoping for the best.
              </p>
              <p>
                At the same time, thousands of remarkably talented artisans and technicians lacked an effective, professional way to showcase their skills, collect verified testimonials, and get discovered by clients willing to pay for quality work.
              </p>
              <p>
                We founded WeLink to replace this fragmentation with a modern, transparent, video-first marketplace. By combining real-time GPS discovery, verified credentials, and escrow payments with business tools like targeted video ads, we are unlocking dignity, safety, and scalable opportunity for local service entrepreneurs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Footer */}
      <DownloadCTA
        title="Be part of the WeLink journey."
        subtitle="Join our community of verified professionals and satisfied customers today."
      />
    </div>
  );
}
