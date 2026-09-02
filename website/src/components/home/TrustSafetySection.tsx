'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Star,
  Flag,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Headphones,
} from 'lucide-react';

const TRUST_PILLARS = [
  {
    icon: UserCheck,
    title: 'Multi-Step Provider Verification',
    description: 'We review identity documents, trade certifications, past project proofs, and phone/address verification before granting verified pro status.',
  },
  {
    icon: Star,
    title: 'Authentic Customer Reviews',
    description: 'Reviews can only be submitted after a verified booking is marked completed and paid through WeLink. Zero fake reviews or paid bot ratings.',
  },
  {
    icon: Lock,
    title: 'Secure In-App Communications',
    description: 'Protect your phone number and personal details. All quotes, messages, work updates, and receipts remain securely logged in the WeLink workspace.',
  },
  {
    icon: CreditCard,
    title: 'Escrow-Protected Payments',
    description: 'Funds are safely held until the customer inspects and confirms satisfactory completion of the job, protecting both parties against fraud.',
  },
  {
    icon: Flag,
    title: 'Prompt Moderation & Resolution',
    description: 'Dedicated local safety and dispute resolution agents ready to mediate questions, guarantee standards, and ensure mutual satisfaction.',
  },
  {
    icon: Headphones,
    title: 'Customer Protection Commitment',
    description: 'Transparent policies, clear service cancellation guidelines, and real support teams based in our regional tech hubs.',
  },
];

export default function TrustSafetySection() {
  return (
    <section id="trust" className="section-padding bg-slate-50 border-t border-slate-200/80">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Trust & Integrity"
            title="Trust is engineered into every interaction."
            subtitle="We don't just connect people—we protect the entire service experience with identity verification, transparent reviews, and payment escrow safeguards."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-medium hover:border-blue-200 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2.5">{pillar.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" /> Active Safeguard
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Safety Note */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900">Safety First Culture</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We believe in continuous platform improvement and transparent accountability. Providers violating community guidelines or engaging in dishonest conduct are permanently removed from the WeLink network.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
