'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DownloadButtons from '@/components/ui/DownloadButtons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

interface DownloadCTAProps {
  title?: string;
  subtitle?: string;
}

export default function DownloadCTA({
  title = 'Your next service is closer than you think.',
  subtitle = 'Join thousands of satisfied customers and verified providers transforming the local service economy across Africa.',
}: DownloadCTAProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-extrabold text-white leading-tight text-balance">
              {title}
            </h2>

            <p className="mt-4 text-body-lg text-slate-300 max-w-2xl mx-auto text-balance">
              {subtitle}
            </p>
          </ScrollReveal>

          {/* Email Waitlist Form */}
          <ScrollReveal delay={0.1}>
            <div className="mt-10 max-w-md mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner"
                  />
                  <Button type="submit" variant="primary" size="lg" className="whitespace-nowrap shadow-glow">
                    Join Waitlist <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-sm font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  You&apos;re on the priority waitlist! We will notify you when WeLink launches in your area.
                </div>
              )}

              <p className="text-xs text-slate-400 mt-3">
                No spam ever. Early members receive exclusive \$20 promo credits on first booking.
              </p>
            </div>
          </ScrollReveal>

          {/* Dual CTAs for customer & provider */}
          <ScrollReveal delay={0.15}>
            <div className="mt-12 pt-10 border-t border-slate-800/80">
              <DownloadButtons size="lg" className="justify-center" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
