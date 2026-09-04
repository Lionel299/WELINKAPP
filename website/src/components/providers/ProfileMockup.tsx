'use client';

import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Calendar,
  Phone,
  MessageSquare,
  CheckCircle2,
  Share2,
  Heart,
  Award,
  Sparkles,
  Camera,
  Play,
  Briefcase,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ProfileMockup() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-2xl mx-auto">
      {/* Cover Banner */}
      <div className="h-36 bg-gradient-to-r from-blue-600 via-indigo-600 to-primary-700 relative p-4 flex items-end justify-end">
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Profile Header Bar */}
      <div className="px-6 pb-6 pt-0 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-14 mb-4 gap-4">
          {/* Avatar with Verified Ring */}
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gray-200 border-4 border-white shadow-xl"></div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white shadow">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Button variant="primary" size="sm" href="#book">
              Book Service
            </Button>
            <Button variant="secondary" size="sm" href="#contact">
              <MessageSquare className="w-4 h-4 mr-1.5" /> Message
            </Button>
          </div>
        </div>

        {/* Identity & Main Info */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-32 bg-gray-300 rounded border border-gray-400"></div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-primary border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Verified Master Pro
            </span>
          </div>
          <div className="h-4 w-64 bg-gray-200 rounded border border-gray-300 mt-2"></div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" /> <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Available Today
            </span>
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <Award className="w-3.5 h-3.5 text-primary" /> <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </span>
          </div>
        </div>

        {/* Services & Pricing Tab Preview */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Offered Services & Upfront Estimates
          </h4>
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex-1">
                <div className="h-4 w-48 bg-gray-300 rounded border border-gray-400 mb-1"></div>
                <div className="h-3 w-32 bg-gray-200 rounded border border-gray-300"></div>
              </div>
              <div className="h-4 w-16 bg-primary/20 rounded"></div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex-1">
                <div className="h-4 w-56 bg-gray-300 rounded border border-gray-400 mb-1"></div>
                <div className="h-3 w-40 bg-gray-200 rounded border border-gray-300"></div>
              </div>
              <div className="h-4 w-16 bg-primary/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* Portfolio & Video Grid Preview */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Recent Projects & Video Proof
            </h4>
            <span className="text-xs font-semibold text-primary">View all</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-amber-600 to-slate-900 relative overflow-hidden flex items-center justify-center">
              <span className="text-[10px] text-white font-bold px-2 py-0.5 bg-black/50 rounded absolute top-1.5 left-1.5">
                Project
              </span>
            </div>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-700 to-indigo-950 relative overflow-hidden flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
              <span className="text-[10px] text-white font-bold px-2 py-0.5 bg-black/50 rounded absolute bottom-1.5 right-1.5">
                0:45
              </span>
            </div>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-600 to-slate-900 relative overflow-hidden flex items-center justify-center">
              <span className="text-[10px] text-white font-bold px-2 py-0.5 bg-black/50 rounded absolute top-1.5 left-1.5">
                Project
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
