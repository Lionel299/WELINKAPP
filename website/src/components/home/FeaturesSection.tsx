'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FEATURES } from '@/lib/constants';

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-background">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Features"
            title="Everything you need in one platform."
            subtitle="WeLink combines powerful tools for discovery, communication, booking, payments, and professional networking."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.05}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
