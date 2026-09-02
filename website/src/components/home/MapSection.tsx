'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  MapPin,
  Star,
  Navigation,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  Compass,
  CheckCircle2,
  Sparkles,
  Phone,
  Calendar,
} from 'lucide-react';

const CATEGORIES = [
  'All Services',
  'Plumbing',
  'Electrical',
  'Hair & Beauty',
  'Carpentry',
  'Auto Repair',
  'Cleaning',
];

const MOCK_PROVIDERS = [
  {
    id: 1,
    name: 'Kofi Mensah',
    profession: 'Master Electrician',
    rating: 4.9,
    reviews: 128,
    distance: '0.8 km away',
    verified: true,
    price: 'From $25/hr',
    avatarBg: 'from-blue-600 to-indigo-600',
    initials: 'KM',
    x: '38%',
    y: '32%',
    completedJobs: '340+',
    status: 'Available Now',
    tags: ['Wiring', 'Solar', 'Generators'],
  },
  {
    id: 2,
    name: 'Amina Diallo',
    profession: 'Hair Stylist & Braider',
    rating: 5.0,
    reviews: 215,
    distance: '1.2 km away',
    verified: true,
    price: 'From $30/session',
    avatarBg: 'from-pink-500 to-rose-600',
    initials: 'AD',
    x: '65%',
    y: '45%',
    completedJobs: '510+',
    status: 'Available Today',
    tags: ['Braids', 'Wigs', 'Treatments'],
  },
  {
    id: 3,
    name: 'Samuel Osei',
    profession: 'Licensed Plumber',
    rating: 4.8,
    reviews: 94,
    distance: '2.1 km away',
    verified: true,
    price: 'From $20/hr',
    avatarBg: 'from-cyan-500 to-blue-600',
    initials: 'SO',
    x: '25%',
    y: '68%',
    completedJobs: '190+',
    status: 'Available Now',
    tags: ['Pipes', 'Leaks', 'Installations'],
  },
  {
    id: 4,
    name: 'Fatou Ndiaye',
    profession: 'Interior Designer',
    rating: 4.9,
    reviews: 76,
    distance: '2.8 km away',
    verified: true,
    price: 'From $50/consult',
    avatarBg: 'from-amber-500 to-orange-600',
    initials: 'FN',
    x: '75%',
    y: '72%',
    completedJobs: '140+',
    status: 'Book in advance',
    tags: ['Residential', 'Modern', '3D Design'],
  },
];

export default function MapSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [activeProvider, setActiveProvider] = useState(MOCK_PROVIDERS[0]);
  const [radius, setRadius] = useState(5);

  return (
    <section id="map" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
              <Compass className="w-3.5 h-3.5" /> Real-Time Geolocation
            </span>
            <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-bold text-white text-balance">
              Your next professional could be just around the corner.
            </h2>
            <p className="mt-4 text-body-lg text-slate-300 max-w-2xl mx-auto text-balance">
              WeLink helps customers discover verified local talent within seconds based on real-time distance, ratings, and immediate availability.
            </p>
          </div>
        </ScrollReveal>

        {/* Map Container Mockup */}
        <ScrollReveal delay={0.1}>
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-xl">
            {/* Top Filter Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-slate-700/60">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-primary text-white shadow-md shadow-primary/30 font-semibold'
                        : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Radius Control */}
              <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-700/60">
                <SlidersHorizontal className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 whitespace-nowrap">
                  Search Radius: <strong className="text-white">{radius} km</strong>
                </span>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-24 accent-primary cursor-pointer"
                />
              </div>
            </div>

            {/* Map Area */}
            <div className="relative mt-6 h-[460px] md:h-[540px] rounded-2xl overflow-hidden bg-[#0f172a] border border-slate-700/50">
              {/* Grid / Roads Graphic Background */}
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
                {/* Simulated Roads / Highways */}
                <path d="M-50,120 Q300,180 800,100 T1600,200" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
                <path d="M-50,120 Q300,180 800,100 T1600,200" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6,6" />
                <path d="M200,-50 Q280,300 400,600" fill="none" stroke="#475569" strokeWidth="6" />
                <path d="M700,-50 Q650,250 850,600" fill="none" stroke="#475569" strokeWidth="6" />
                <path d="M100,450 Q500,400 1200,480" fill="none" stroke="#334155" strokeWidth="5" />
                {/* Water Body */}
                <path d="M-20,380 C150,360 300,420 450,400 C600,380 750,430 900,410 L900,600 L-20,600 Z" fill="#1e293b" opacity="0.5" />
              </svg>

              {/* User Center Pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-ping absolute" />
                <div className="w-8 h-8 rounded-full bg-blue-500/40 flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-white shadow-lg border-2 border-primary" />
                </div>
                <div className="absolute top-10 bg-slate-900/90 text-[10px] font-bold text-white px-2 py-0.5 rounded-md border border-slate-700 shadow whitespace-nowrap">
                  You are here
                </div>
              </div>

              {/* Radius Circle Graphic */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/40 bg-blue-500/5 pointer-events-none transition-all duration-300"
                style={{
                  width: `${radius * 24 + 180}px`,
                  height: `${radius * 24 + 180}px`,
                }}
              />

              {/* Provider Markers on Map */}
              {MOCK_PROVIDERS.map((provider) => {
                const isSelected = activeProvider.id === provider.id;
                return (
                  <div
                    key={provider.id}
                    className="absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: provider.x, top: provider.y }}
                    onClick={() => setActiveProvider(provider)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ repeat: isSelected ? Infinity : 0, duration: 2 }}
                      className={`relative flex items-center justify-center rounded-full p-1.5 shadow-xl transition-all ${
                        isSelected
                          ? 'bg-primary ring-4 ring-primary/40 ring-offset-2 ring-offset-slate-900'
                          : 'bg-slate-800 hover:bg-slate-700 border border-slate-600'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full bg-gradient-to-tr ${provider.avatarBg} flex items-center justify-center text-xs font-bold text-white shadow-inner`}
                      >
                        {provider.initials}
                      </div>

                      {/* Verified Badge Icon */}
                      {provider.verified && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-slate-900">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </motion.div>

                    {/* Floating mini-label */}
                    <div
                      className={`mt-1.5 text-center text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap shadow-md ${
                        isSelected
                          ? 'bg-primary text-white border-primary-light'
                          : 'bg-slate-900/90 text-slate-300 border-slate-700'
                      }`}
                    >
                      {provider.name} • {provider.rating} ★
                    </div>
                  </div>
                );
              })}

              {/* Active Provider Floating Preview Card */}
              {activeProvider && (
                <motion.div
                  key={activeProvider.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 rounded-2xl p-4 shadow-2xl z-30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${activeProvider.avatarBg} flex items-center justify-center text-sm font-bold text-white shadow-md flex-shrink-0`}
                      >
                        {activeProvider.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-white text-sm md:text-base">
                            {activeProvider.name}
                          </h4>
                          {activeProvider.verified && (
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          )}
                        </div>
                        <p className="text-xs text-blue-400 font-medium">{activeProvider.profession}</p>
                      </div>
                    </div>
                    <Badge variant="success" className="text-[10px] whitespace-nowrap">
                      {activeProvider.status}
                    </Badge>
                  </div>

                  {/* Provider Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800 text-center">
                    <div className="bg-slate-800/60 rounded-lg p-1.5">
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-bold">
                        <Star className="w-3 h-3 fill-amber-400" /> {activeProvider.rating}
                      </div>
                      <span className="text-[10px] text-slate-400">({activeProvider.reviews} reviews)</span>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-1.5">
                      <div className="flex items-center justify-center gap-1 text-blue-400 text-xs font-bold">
                        <Navigation className="w-3 h-3" /> {activeProvider.distance}
                      </div>
                      <span className="text-[10px] text-slate-400">Distance</span>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-1.5">
                      <div className="text-emerald-400 text-xs font-bold">
                        {activeProvider.completedJobs}
                      </div>
                      <span className="text-[10px] text-slate-400">Jobs Done</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {activeProvider.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800">
                    <Button variant="primary" size="sm" className="flex-1 text-xs" href="/customers">
                      Book Now • {activeProvider.price}
                    </Button>
                    <Button variant="secondary" size="sm" className="text-xs px-3" href="/customers">
                      View Profile
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom summary bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700/60">
              <div className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <strong>142</strong> verified pros active in your area
                </span>
                <span>•</span>
                <span>Average response time: <strong>&lt; 5 mins</strong></span>
              </div>
              <Button variant="primary" size="md" href="/customers" className="w-full sm:w-auto">
                Explore WeLink Map
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
