'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DownloadCTA from '@/components/home/DownloadCTA';
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Tag,
  ShieldCheck,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import { RESOURCE_ARTICLES, RESOURCE_CATEGORIES } from '@/lib/constants';

const EXTENDED_ARTICLES = [
  ...RESOURCE_ARTICLES,
  {
    title: '5 Red Flags to Avoid When Hiring Local Contractors',
    excerpt: 'Key precautions to take when scheduling major electrical or plumbing home overhauls.',
    category: 'Customer Guides',
    readTime: '4 min read',
  },
  {
    title: 'How Video Reels Increase Your Monthly Booking Rate by 3x',
    excerpt: 'Step-by-step lighting, angles, and storytelling advice for smartphone video recording.',
    category: 'Provider Tips',
    readTime: '6 min read',
  },
  {
    title: 'Understanding WeLink Escrow: How Your Funds Are Protected',
    excerpt: 'A comprehensive walkthrough of payment security, release triggers, and refunds.',
    category: 'Safety',
    readTime: '5 min read',
  },
  {
    title: 'Digital Bookkeeping & Invoicing Basics for Independent Artisans',
    excerpt: 'How to track expenses, manage client history, and qualify for business micro-loans.',
    category: 'Business Resources',
    readTime: '9 min read',
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles =
    activeCategory === 'All'
      ? EXTENDED_ARTICLES
      : EXTENDED_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary-50/70 via-background to-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6">
              <BookOpen className="w-3.5 h-3.5" /> Resource Center & Guides
            </span>
            <h1 className="text-display md:text-display-xl font-extrabold text-slate-900 leading-tight text-balance">
              Knowledge to help you hire smart and grow fast.
            </h1>
            <p className="mt-6 text-body-lg text-slate-600 leading-relaxed text-balance">
              Practical guides, provider growth playbooks, safety checklists, and business masterclasses crafted for our community.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {RESOURCE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.05}>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-medium hover:border-primary/40 hover:bg-blue-50/20 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{article.excerpt}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Footer */}
      <DownloadCTA />
    </div>
  );
}
