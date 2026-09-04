'use client';

import Container from '@/components/ui/Container';
import DownloadButtons from '@/components/ui/DownloadButtons';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProviderCTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/right.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-12">
            <ScrollReveal>
              <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-bold text-slate-900 leading-tight text-balance">
                Turn your skills into daily opportunities.
              </h2>
              <p className="mt-4 text-body-lg text-slate-600 max-w-xl text-balance">
                Whether you are an independent electrician, hairstylist, builder, or creative studio, WeLink equips you with the complete digital infrastructure to run and scale your business.
              </p>
            </ScrollReveal>

            {/* Download Buttons */}
            <ScrollReveal delay={0.1}>
              <div className="mt-8">
                <DownloadButtons size="lg" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

