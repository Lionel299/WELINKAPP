'use client';

import { useRef, useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES } from '@/lib/constants';
import {
  Search, MapPin, ShieldCheck, UserCheck, MessageSquare,
  Calendar, CreditCard, Star, Camera, Heart
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
  Search,
  MapPin,
  ShieldCheck,
  UserCheck,
  MessageSquare,
  Calendar,
  CreditCard,
  Star,
  Camera,
  Heart,
};

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate overall scroll progress through the section
      const sectionStart = sectionTop - windowHeight * 0.3;
      const sectionEnd = sectionTop + sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-background"
      style={{
        // Only enough space for header + one card height + stacking distance
        minHeight: `${120 + (FEATURES.length - 1) * 40}vh`
      }}
    >
      {/* Header */}
      <div className="py-20">
        <Container>
          <SectionHeading
            title="Everything you need in one platform."
            subtitle="WeLink combines powerful tools for discovery, communication, booking, payments, and professional networking."
          />
        </Container>
      </div>

      {/* Stacking Cards Container */}
      <div ref={cardsRef} className="relative pb-32">
        {FEATURES.map((feature, index) => {
          const IconComponent = iconMap[feature.icon];

          // Each card's individual progress
          const cardProgress = Math.max(0, Math.min(1, (scrollProgress * FEATURES.length) - index));

          // Calculate z-index so LATER cards appear ON TOP but stay below navbar
          const zIndex = 10 + index;

          // Visual effects - no opacity reduction for stacked cards
          const scale = 1 - (index * 0.015);
          const yOffset = index * 8;

          return (
            <div
              key={feature.title}
              className="sticky"
              style={{
                top: `${120 + yOffset}px`,
                zIndex,
              }}
            >
              <Container>
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
                  style={{
                    transform: `scale(${scale}) translateY(${(1 - cardProgress) * 100}px)`,
                    opacity: cardProgress > 0 ? 1 : 0,
                    boxShadow: `0 ${10 + index * 3}px ${40 + index * 5}px rgba(0,0,0,${0.08 + index * 0.02})`,
                  }}
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                        {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Card number */}
                    <div className="flex-shrink-0 ml-auto">
                      <div className="feature-number relative w-16 h-16 rounded-2xl border-2 border-primary-200 dark:border-primary-700 bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/40 flex items-center justify-center shadow-sm">
                        <span className="text-xl font-black tracking-tight text-primary-600 dark:text-primary-300">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}
