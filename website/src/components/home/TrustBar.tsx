import Container from '@/components/ui/Container';
import { ShieldCheck, Lock, MapPin, Users } from 'lucide-react';
import { TRUST_STATS, TRUST_BADGES } from '@/lib/constants';

export default function TrustBar() {
  // Use default constants if not defined in TRUST_STATS
  const stats = TRUST_STATS || [
    { id: '1', value: '10,000+', label: 'Verified Professionals' },
    { id: '2', value: '50,000+', label: 'Services Completed' },
    { id: '3', value: '4.8/5', label: 'Average Rating' },
    { id: '4', value: '10+', label: 'Cities Covered' }
  ];

  const badges = TRUST_BADGES || [
    { id: '1', icon: ShieldCheck, label: 'Identity Verified' },
    { id: '2', icon: Lock, label: 'Secure Payments' },
    { id: '3', icon: MapPin, label: 'Local Experts' },
    { id: '4', icon: Users, label: 'Community Trusted' }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-12 lg:py-16">
      <Container>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat: any) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full max-w-2xl mx-auto h-px bg-slate-100 mb-12" />

        {/* Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge: any, index: number) => {
            // Re-map icon if the constants file returns strings instead of components
            let Icon = badge.icon;
            if (typeof badge.icon === 'string') {
              if (badge.icon === 'ShieldCheck') Icon = ShieldCheck;
              else if (badge.icon === 'Lock') Icon = Lock;
              else if (badge.icon === 'MapPin') Icon = MapPin;
              else if (badge.icon === 'Users') Icon = Users;
              else Icon = ShieldCheck; // Fallback
            }

            return (
              <div key={badge.id || index} className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-blue-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
