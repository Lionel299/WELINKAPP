import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  UserCheck,
  Camera,
  Briefcase,
  Calendar,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Wallet,
  BarChart3,
  Target,
  Crown,
  Sparkles,
} from 'lucide-react';
import { PROVIDER_TOOLS } from '@/lib/constants';

const toolIcons: Record<string, any> = {
  UserCheck,
  Camera,
  Briefcase,
  Calendar,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Wallet,
  BarChart3,
  Target,
  Crown,
};

export default function BusinessTools() {
  return (
    <section id="tools" className="section-padding bg-slate-50 border-t border-slate-200">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Integrated Suite"
            title="Everything you need to grow your service business."
            subtitle="WeLink replaces fragmented WhatsApp chats, paper receipt books, and guesswork with a single enterprise-grade app built for independent professionals."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {PROVIDER_TOOLS.map((tool, index) => {
            const Icon = toolIcons[tool.icon] || Briefcase;
            return (
              <ScrollReveal key={tool.title} delay={index * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-medium hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{tool.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{tool.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <span>Built-in Tool</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
