'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { STEPS } from '@/lib/constants';
import { Search, Star, CheckCircle2 } from 'lucide-react';

const DEFAULT_STEPS = [
  { id: '01', title: 'Discover', description: 'Search and find top-rated professionals near you.' },
  { id: '02', title: 'Connect', description: 'Discuss details, get quotes, and align on expectations.' },
  { id: '03', title: 'Book', description: 'Schedule the service at a time that works for you.' },
  { id: '04', title: 'Pay', description: 'Secure payments released only when you are satisfied.' },
  { id: '05', title: 'Review', description: 'Share your experience to help the community.' },
];

export default function HowItWorksSection() {
  const stepsToRender = (typeof STEPS !== 'undefined' && STEPS?.length > 0) ? STEPS : DEFAULT_STEPS;

  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <Container>
        <SectionHeading
          title="Simple. Fast. Reliable."
          subtitle="A seamless end-to-end experience designed to give you peace of mind."
          centered={true}
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {stepsToRender.map((step: any, index: number) => {
            const isEven = index % 2 !== 0;
            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                {/* Text Content */}
                <div className={`flex-1 order-2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <ScrollReveal direction={isEven ? 'right' : 'left'}>
                    <div className="relative">
                      <span className="absolute -top-16 -left-6 text-8xl font-bold text-blue-600/10 pointer-events-none select-none">
                        0{index + 1}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">{step.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-md relative z-10">{step.description}</p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Visual Content */}
                <div className={`flex-1 w-full order-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.2}>
                    <div className="relative max-w-sm mx-auto">
                      {/* Phone Frame */}
                      <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl relative z-10 border border-gray-800 mx-auto w-full max-w-[280px]">
                        <div className="bg-white rounded-[2.25rem] overflow-hidden aspect-[9/19] relative flex flex-col border border-gray-200">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-3xl z-20"></div>

                          {/* App Content based on index */}
                          <div className="flex-1 bg-gray-50 flex flex-col pt-12 relative z-10">
                            {index === 0 && <DiscoverMockup />}
                            {index === 1 && <ConnectMockup />}
                            {index === 2 && <BookMockup />}
                            {index === 3 && <PayMockup />}
                            {index === 4 && <ReviewMockup />}
                          </div>
                        </div>
                      </div>

                      {/* Background decorations */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 z-0 ${isEven ? 'bg-blue-400 -left-12' : 'bg-indigo-400 -right-12'}`}></div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// Mobile Mockups
function DiscoverMockup() {
  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center gap-2">
        <Search className="w-4 h-4 text-gray-400" />
        <div className="h-3 w-32 bg-gray-200 rounded"></div>
      </div>
      <div className="flex gap-2 overflow-hidden pb-1">
        {['Plumbers', 'Cleaners', 'Electric'].map(cat => (
          <div key={cat} className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded-full whitespace-nowrap">
            {cat}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-3 mt-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex gap-3">
            <div className="w-14 h-14 bg-gray-200 rounded-lg shrink-0"></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="h-2.5 w-3/4 bg-gray-800 rounded mb-2"></div>
              <div className="h-2 w-1/2 bg-gray-400 rounded mb-2"></div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectMockup() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b border-gray-100 flex items-center gap-3 shadow-sm z-10">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div>
          <div className="h-2.5 w-20 bg-gray-800 rounded mb-1"></div>
          <div className="h-1.5 w-12 bg-green-400 rounded"></div>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-50 text-[10px]">
        <div className="self-start bg-white p-3 rounded-2xl rounded-tl-sm border border-gray-100 max-w-[85%] shadow-sm">
          <div className="h-1.5 w-32 bg-gray-400 rounded mb-2"></div>
          <div className="h-1.5 w-20 bg-gray-400 rounded"></div>
        </div>
        <div className="self-end bg-blue-600 p-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
          <div className="h-1.5 w-36 bg-white/90 rounded mb-2"></div>
          <div className="h-1.5 w-24 bg-white/90 rounded"></div>
        </div>
        <div className="self-start bg-white p-3 rounded-2xl rounded-tl-sm border border-gray-100 max-w-[85%] shadow-sm">
          <div className="h-1.5 w-28 bg-gray-400 rounded"></div>
        </div>
      </div>
      <div className="p-3 border-t border-gray-100 bg-white">
        <div className="bg-gray-100 h-8 rounded-full w-full"></div>
      </div>
    </div>
  );
}

function BookMockup() {
  return (
    <div className="p-4 flex flex-col h-full bg-white">
      <div className="h-3 w-24 bg-gray-800 rounded mb-6"></div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="h-2.5 w-16 bg-gray-800 rounded"></div>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded bg-gray-100"></div>
            <div className="w-4 h-4 rounded bg-gray-100"></div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {[1, 2, 3, 4, 5, 6, 7].map(i => <div key={i} className="h-1 bg-gray-200 rounded"></div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className={`aspect-square rounded flex items-center justify-center ${i === 15 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50'}`}>
              <div className={`h-1 w-1 rounded-full ${i === 15 ? 'bg-white' : 'bg-gray-300'}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-2.5 w-20 bg-gray-800 rounded mb-4"></div>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'].map((time, i) => (
          <div key={i} className={`p-1.5 rounded-lg text-center text-[9px] font-medium ${i === 3 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 border border-gray-200 text-gray-500'}`}>
            {time}
          </div>
        ))}
      </div>

      <div className="mt-auto h-10 bg-blue-600 rounded-xl w-full flex items-center justify-center shadow-md">
        <div className="h-2 w-16 bg-white/90 rounded"></div>
      </div>
    </div>
  );
}

function PayMockup() {
  return (
    <div className="p-4 flex flex-col h-full bg-slate-50">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4 flex flex-col items-center">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <div className="h-2 w-16 bg-gray-400 rounded mb-2"></div>
        <div className="h-5 w-24 bg-gray-900 rounded mb-4"></div>
        <div className="w-full h-px bg-gray-100 mb-3"></div>
        <div className="w-full flex justify-between mb-2">
          <div className="h-1.5 w-12 bg-gray-400 rounded"></div>
          <div className="h-1.5 w-10 bg-gray-800 rounded"></div>
        </div>
        <div className="w-full flex justify-between">
          <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
          <div className="h-1.5 w-10 bg-gray-800 rounded"></div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="bg-white p-3 rounded-xl border-2 border-blue-600 shadow-sm flex items-center gap-2 relative">
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-600 rounded-bl flex items-center justify-center">
            <CheckCircle2 className="w-2 h-2 text-white" />
          </div>
          <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center">
            <div className="h-0.5 w-3 bg-white rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-16 bg-gray-800 rounded mb-1"></div>
            <div className="h-1 w-12 bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
          <div className="w-8 h-5 bg-gray-200 rounded"></div>
          <div className="flex-1">
            <div className="h-1.5 w-16 bg-gray-800 rounded mb-1"></div>
            <div className="h-1 w-12 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>

      <div className="mt-auto h-10 bg-gray-900 rounded-xl w-full flex items-center justify-center shadow-lg">
        <div className="h-2 w-20 bg-white rounded"></div>
      </div>
    </div>
  );
}

function ReviewMockup() {
  return (
    <div className="p-4 flex flex-col items-center h-full bg-white">
      <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 shadow-sm border-2 border-white ring-1 ring-gray-100 mt-4"></div>
      <div className="h-3 w-24 bg-gray-900 rounded mb-2"></div>
      <div className="h-2 w-32 bg-gray-400 rounded mb-6 text-center"></div>

      <div className="flex gap-1.5 mb-6">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} className={`w-6 h-6 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
        ))}
      </div>

      <div className="w-full bg-gray-50 rounded-xl border border-gray-200 p-3 h-24 mb-4 shadow-inner">
        <div className="h-1.5 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-1.5 w-full bg-gray-300 rounded mb-2"></div>
        <div className="h-1.5 w-3/4 bg-gray-300 rounded"></div>
      </div>

      <div className="mt-auto w-full flex gap-2">
        <div className="flex-1 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-medium">
          <div className="h-2 w-12 bg-gray-500 rounded"></div>
        </div>
        <div className="flex-[2] h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
          <div className="h-2 w-16 bg-white/90 rounded"></div>
        </div>
      </div>
    </div>
  );
}
