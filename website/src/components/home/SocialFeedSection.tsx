'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  ShieldCheck,
  Sparkles,
  Send,
  Camera,
  Play,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

const FEED_POSTS = [
  {
    id: 1,
    author: 'Malik Mensah',
    profession: 'Custom Carpenter & Woodworker',
    avatar: 'MM',
    avatarBg: 'from-amber-600 to-yellow-600',
    verified: true,
    time: '2 hours ago',
    category: 'Home Renovation',
    caption: 'Handcrafted solid mahogany dining table for a client in downtown. Swipe to see the raw timber to finished polish! ✨🔨',
    tag: 'Project Showcase',
    likes: 342,
    comments: 28,
    isLiked: false,
    visualType: 'before-after',
    beforeLabel: 'Raw Timber',
    afterLabel: 'Finished Polish',
    gradient: 'from-amber-800 to-stone-900',
    priceEstimate: 'Custom Order',
  },
  {
    id: 2,
    author: 'Aïssatou Ba',
    profession: 'Bridal & Editorial Makeup Artist',
    avatar: 'AB',
    avatarBg: 'from-rose-500 to-pink-600',
    verified: true,
    time: '4 hours ago',
    category: 'Hair & Beauty',
    caption: 'Traditional bridal glam for our gorgeous bride Fatima. Waterproof, 18-hour hold guaranteed. Booking for wedding season now open! 💄👑',
    tag: 'Client Transformation',
    likes: 890,
    comments: 74,
    isLiked: true,
    visualType: 'video-thumb',
    gradient: 'from-rose-900 to-purple-950',
    priceEstimate: '$120 Bridal Package',
  },
  {
    id: 3,
    author: 'Tariq Al-Mansoor',
    profession: 'Auto Diagnostics & Tuning Specialist',
    avatar: 'TA',
    avatarBg: 'from-blue-600 to-cyan-700',
    verified: true,
    time: '6 hours ago',
    category: 'Car Repair',
    caption: 'Complete transmission overhaul on a 2021 SUV. Customer was quoted 3x elsewhere. Diagnosed faulty solenoid, replaced, calibrated and back on the road in 24h! 🚗💨',
    tag: 'Diagnosis & Fix',
    likes: 415,
    comments: 39,
    isLiked: false,
    visualType: 'card-showcase',
    gradient: 'from-slate-800 to-blue-950',
    priceEstimate: '$85 Diagnostic & Repair',
  },
];

export default function SocialFeedSection() {
  const [posts, setPosts] = useState(FEED_POSTS);

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? {
            ...p,
            isLiked: !p.isLiked,
            likes: p.isLiked ? p.likes - 1 : p.likes + 1,
          }
          : p
      )
    );
  };

  return (
    <section id="social" className="section-padding bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Discover what professionals can really do."
            subtitle="WeLink is more than a directory. Explore authentic projects, live transformations, before/after stories, and verified client testimonials before you hire."
          />
        </ScrollReveal>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-10">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Post Header */}
                <div className="p-5 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full bg-slate-300 flex items-center justify-center`}
                    >
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-24 h-3 bg-slate-200 rounded-full" />
                        {post.verified && <ShieldCheck className="w-4 h-4 text-primary" />}
                      </div>
                      <div className="w-16 h-2 bg-slate-100 rounded-full mt-2" />
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{post.time}</span>
                </div>

                {/* Post Visual Media Simulation */}
                <div className={`relative h-64 bg-slate-200 p-4 flex flex-col justify-between overflow-hidden group cursor-pointer`}>
                  {post.id === 1 && (
                    <img src="/dinning-table.jpg" alt="Dining Table" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {post.id === 2 && (
                    <img src="/bridal-glam.jpg" alt="Bridal Glam" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {post.id === 3 && (
                    <img src="/car.jpg" alt="Car Repair" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {/* Category / Tag Pill */}
                  <div className="flex items-center justify-between z-10 opacity-0">
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                      {post.tag}
                    </span>
                    <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {post.priceEstimate}
                    </span>
                  </div>

                  {/* Visual Footer watermark */}
                  <div className="flex items-center justify-between text-white/70 text-xs z-10 opacity-0">
                    <span className="flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5" /> Verified Project Media
                    </span>
                    <span className="hover:text-white transition-colors">Tap to view</span>
                  </div>
                </div>

                {/* Post Caption & Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate-700 leading-relaxed">{post.caption}</p>

                  {/* Actions Bar */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${post.isLiked ? 'text-rose-600' : 'text-slate-600 hover:text-rose-600'
                          }`}
                      >
                        <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-rose-600' : ''}`} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    <Button variant="primary" size="sm" className="text-xs" href="/customers">
                      Hire Pro
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Explore Social Feed Banner */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 bg-gradient-to-r from-primary-900 to-blue-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2 block">
                For Service Providers
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                Showcase your skills. Get discovered by thousands.
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-xl">
                Upload video transformations, showcase completed client jobs, and convert impressions into high-paying bookings.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="secondary" size="md" href="/providers" className="w-full md:w-auto whitespace-nowrap">
                Join as a Provider
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
