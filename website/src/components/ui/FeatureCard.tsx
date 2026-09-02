'use client';

import { ReactNode } from 'react';
import {
  Search, MapPin, ShieldCheck, UserCheck, MessageSquare,
  Calendar, CreditCard, Star, Camera, Heart, Play, Target,
  Briefcase, TrendingUp, BarChart3, Wallet, Settings, Crown,
  Lock, Flag, Eye, CheckCircle2, Zap, Globe, Users, Clock,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Search, MapPin, ShieldCheck, UserCheck, MessageSquare,
  Calendar, CreditCard, Star, Camera, Heart, Play, Target,
  Briefcase, TrendingUp, BarChart3, Wallet, Settings, Crown,
  Lock, Flag, Eye, CheckCircle2, Zap, Globe, Users, Clock,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export default function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  const IconComponent = iconMap[icon] || Zap;

  return (
    <div
      className={`group bg-surface rounded-2xl border border-gray-100 p-6 card-hover ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-body-sm text-text-secondary">{description}</p>
    </div>
  );
}
