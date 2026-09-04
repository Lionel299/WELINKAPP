import Container from '@/components/ui/Container';
import { ShieldCheck, Lock, MapPin, Users } from 'lucide-react';
import { TRUST_BADGES } from '@/lib/constants';

export default function TrustBar() {
  const badges = TRUST_BADGES || [
    { id: '1', icon: ShieldCheck, label: 'Identity Verified' },
    { id: '2', icon: Lock, label: 'Secure Payments' },
    { id: '3', icon: MapPin, label: 'Local Experts' },
    { id: '4', icon: Users, label: 'Community Trusted' }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-12 lg:py-16">
      <Container>
        {/* Badges Row - No stats */}
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

