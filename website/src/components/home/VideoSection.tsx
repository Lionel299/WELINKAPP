'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Play,
  Sparkles,
  Eye,
  Heart,
  ShieldCheck,
  Volume2,
  Share2,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

const REEL_VIDEOS = [
  {
    id: 1,
    creator: 'Chef Kwaku',
    title: '5-Course Wedding Banquet Prep',
    profession: 'Private Catering & Events',
    views: '18.4K',
    likes: '2.1K',
    duration: '0:58',
    gradient: 'from-amber-600 via-orange-600 to-red-700',
    category: 'Catering & Events',
    badge: 'Trending Pro',
    quote: 'Crafting signature West African fusion for 200 guests.',
  },
  {
    id: 2,
    creator: 'Zainab Toure',
    title: 'Zero-Frizz Silk Press & Trim',
    profession: 'Natural Hair Care Specialist',
    views: '34.2K',
    likes: '4.8K',
    duration: '0:42',
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-700',
    category: 'Hair & Beauty',
    badge: 'Top Rated',
    quote: 'Heat protectant routine for deep hydration and glass shine.',
  },
  {
    id: 3,
    creator: 'David Mensah',
    title: 'Custom Solar Inverter Setup',
    profession: 'Renewable Energy Tech',
    views: '12.9K',
    likes: '1.4K',
    duration: '1:12',
    gradient: 'from-blue-600 via-cyan-600 to-teal-700',
    category: 'Solar & Electrical',
    badge: 'Verified Master',
    quote: '10kVA hybrid lithium backup system installed in 6 hours.',
  },
  {
    id: 4,
    creator: 'Ibrahim Conde',
    title: 'Smart Home Automation Wiring',
    profession: 'IoT & Security Systems',
    views: '9.8K',
    likes: '980',
    duration: '0:49',
    gradient: 'from-indigo-700 via-purple-700 to-blue-800',
    category: 'Technology',
    badge: 'New & Popular',
    quote: 'Automated biometric access & 4K CCTV integration.',
  },
  {
    id: 5,
    creator: 'Grace Adebayo',
    title: 'Luxury Terrazzo Floor Polishing',
    profession: 'Floor Restoration & Tile',
    views: '22.1K',
    likes: '2.9K',
    duration: '0:38',
    gradient: 'from-emerald-700 via-teal-700 to-cyan-800',
    category: 'Home Renovation',
    badge: 'Staff Pick',
    quote: 'Diamond grinding 40-year old terrazzo to mirror reflection.',
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(REEL_VIDEOS[0]);

  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-bold text-white text-balance">
              Work, Post, Boost.
            </h2>
            <p className="mt-4 text-body-lg text-slate-300 text-balance">
              Showcase your craft through authentic video reels. Post your projects, gain visibility, and boost your business to reach more customers in your neighborhood.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Reel Horizontal Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {REEL_VIDEOS.map((video, idx) => {
            const isActive = activeVideo.id === video.id;
            return (
              <ScrollReveal key={video.id} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  onClick={() => setActiveVideo(video)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-[9/16] shadow-xl border transition-all duration-300 ${isActive
                    ? 'border-primary ring-2 ring-primary/50 scale-[1.02]'
                    : 'border-slate-700/80 hover:border-slate-500'
                    }`}
                >
                  {/* Background Mock Video Gradient & Visual Details */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${video.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                  {/* Top Bar on Reel */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <div />
                    <span className="text-[11px] font-mono text-white/80 bg-black/40 px-1.5 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Button Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-3 inset-x-3 z-10">
                    <span className="text-[11px] font-semibold text-blue-300 block mb-0.5">
                      {video.category}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow">
                      {video.title}
                    </h4>

                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/15 text-[11px] text-slate-300">
                      <div className="w-16 h-2 bg-white/20 rounded-full" />
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5 text-rose-400">
                          <Heart className="w-3 h-3 fill-rose-400" /> {video.likes}
                        </span>
                        <span className="flex items-center gap-0.5 text-slate-300">
                          <Eye className="w-3 h-3" /> {video.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Video CTA Footer */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" href="/advertising" className="shadow-glow">
              Promote Your Skills with Video Ads <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

