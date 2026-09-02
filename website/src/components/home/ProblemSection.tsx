import React from 'react';
import { AlertTriangle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import { PROBLEMS } from '@/lib/constants';

const DEFAULT_PROBLEMS = [
  { title: 'Unreliable Reviews', description: 'Scattered recommendations and unverified reviews make it hard to trust service providers.' },
  { title: 'Payment Insecurity', description: 'Lack of secure payment options leads to disputes and financial risks for both parties.' },
  { title: 'Poor Communication', description: 'Switching between multiple apps for chat, calls, and sharing details causes confusion.' },
  { title: 'Scheduling Conflicts', description: 'Back-and-forth messaging to find a suitable time wastes valuable time.' },
  { title: 'Hidden Costs', description: 'Unclear pricing structures often result in surprise charges after the job is done.' },
  { title: 'Limited Accountability', description: 'Without a central platform, there is no one to mediate if things go wrong.' }
];

export default function ProblemSection() {
  const problemsList = (typeof PROBLEMS !== 'undefined' && PROBLEMS?.length > 0) ? PROBLEMS : DEFAULT_PROBLEMS;

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern for visual storytelling */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      
      <Container className="relative z-10">
        <SectionHeading
          tag="The Problem"
          title="Finding the right professional shouldn't be difficult."
          subtitle="Relying on scattered recommendations, unverified reviews, and lack of secure payments creates unnecessary stress and trust issues."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {problemsList.map((problem: any, index: number) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 opacity-50 group-hover:scale-110 transition-transform"></div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6 relative z-10">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{problem.title}</h3>
              <p className="text-gray-500 leading-relaxed relative z-10">{problem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
