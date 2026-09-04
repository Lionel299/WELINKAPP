'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Lock,
  UserCheck,
  Star,
  Flag,
  CreditCard,
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
            title="Trust is engineered into every interaction."
            subtitle="We don't just connect people—we protect the entire service experience with identity verification, transparent reviews, and payment escrow safeguards."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full bg-white p-7 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-medium hover:border-blue-200 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
