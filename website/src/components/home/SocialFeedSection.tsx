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
            tag="Professional Social Feed"
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
                      className={`w-11 h-11 rounded-full bg-gradient-to-tr ${post.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow-sm`}
                    >
                      {post.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-slate-900 text-sm">{post.author}</h4>
                        {post.verified && <ShieldCheck className="w-4 h-4 text-primary" />}
                      </div>
                      <p className="text-xs text-slate-500">{post.profession}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{post.time}</span>
                </div>

                {/* Post Visual Media Simulation */}
                <div className={`relative h-64 bg-gradient-to-br ${post.gradient} p-4 flex flex-col justify-between overflow-hidden group cursor-pointer`}>
                  {/* Category / Tag Pill */}
                  <div className="flex items-center justify-between z-10">
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                      {post.tag}
                    </span>
                    <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {post.priceEstimate}
                    </span>
                  </div>

                  {/* Inner Creative Graphic Elements */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-40 h-40 rounded-full border-4 border-dashed border-white animate-spin-slow" />
                  </div>

                  {post.visualType === 'before-after' && (
                    <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
                      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                        <span className="text-[10px] uppercase font-bold text-amber-300 block mb-1">Before</span>
                        <div className="h-16 rounded bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-200/80 text-xs font-mono">
                          Raw Slabs
                        </div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-3 text-center">
                        <span className="text-[10px] uppercase font-bold text-emerald-300 block mb-1">After</span>
                        <div className="h-16 rounded bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-200 text-xs font-mono font-bold">
                          Finished ✓
                        </div>
                      </div>
                    </div>
                  )}

                  {post.visualType === 'video-thumb' && (
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                      <span className="text-white text-xs font-semibold mt-2 drop-shadow">0:45 Watch Transformation</span>
                    </div>
                  )}

                  {post.visualType === 'card-showcase' && (
                    <div className="relative z-10 my-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3.5">
                      <div className="flex items-center gap-2 text-blue-300 text-xs font-semibold mb-1.5">
                        <Sparkles className="w-4 h-4" /> OBD-II Diagnostics Cleared
                      </div>
                      <div className="text-[11px] text-slate-200 font-mono">
                        Error Code P0700: Repaired & Recalibrated
                      </div>
                    </div>
                  )}

                  {/* Visual Footer watermark */}
                  <div className="flex items-center justify-between text-white/70 text-xs z-10">
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
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          post.isLiked ? 'text-rose-600' : 'text-slate-600 hover:text-rose-600'
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
