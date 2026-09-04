'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Calendar, CreditCard, CheckCircle2, Star, ArrowRight, ArrowDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import Image from 'next/image';

const FLOW_STEPS = [
  { id: 1, title: 'Discover', icon: Search },
  { id: 2, title: 'Connect', icon: MessageSquare },
  { id: 3, title: 'Book', icon: Calendar },
  { id: 4, title: 'Pay', icon: CreditCard },
  { id: 5, title: 'Get it done', icon: CheckCircle2 },
  { id: 6, title: 'Review', icon: Star },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <SectionHeading
          title="One platform. Every service."
          subtitle="WeLink brings discovery, communication, booking, payments, reviews and professional discovery into one ecosystem."
          centered={true}
        />

        <motion.div
          className="mt-16 mb-24 flex flex-col md:flex-row items-center justify-between relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FLOW_STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div variants={itemVariants} className="flex flex-col items-center relative z-10 w-24">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <step.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-900 text-center">{step.title}</span>
              </motion.div>

              {index < FLOW_STEPS.length - 1 && (
                <motion.div variants={itemVariants} className="hidden md:flex text-gray-300">
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
              {index < FLOW_STEPS.length - 1 && (
                <motion.div variants={itemVariants} className="md:hidden text-gray-300 my-4">
                  <ArrowDown className="w-6 h-6" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Dashboard Mockup - CSS Only Illustration */}
        <div className="max-w-4xl mx-auto relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[2.5rem] transform rotate-1 scale-105 blur-xl"></div>
          <div className="bg-white border-8 border-gray-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/3] md:aspect-[16/10] flex flex-col">
            {/* Header */}
            <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center relative">
                  <Image
                    src="/logo-size.png"
                    alt="WeLink"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="font-semibold text-gray-800 text-sm hidden sm:block">Dashboard</div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 md:p-6 grid grid-cols-12 gap-6 bg-slate-50">
              {/* Sidebar */}
              <div className="hidden md:flex col-span-3 flex-col gap-4">
                <div className="h-10 bg-white rounded-lg border border-gray-100 flex items-center px-4 shadow-sm">
                  <div className="w-4 h-4 rounded-full bg-blue-100 mr-3"></div>
                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="h-10 bg-white rounded-lg border border-gray-100 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full bg-gray-100 mr-3"></div>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="h-10 bg-white rounded-lg border border-gray-100 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full bg-gray-100 mr-3"></div>
                  <div className="w-14 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-4 md:gap-6">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 mb-3 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="w-1/2 h-2 md:h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/3 h-3 md:h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-green-50 mb-3 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="w-1/2 h-2 md:h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/3 h-3 md:h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="hidden sm:block flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 mb-3 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="w-1/2 h-2 md:h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/3 h-3 md:h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-32 h-3 md:h-4 bg-gray-300 rounded"></div>
                    <div className="w-16 h-5 md:h-6 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300"></div>
                          <div>
                            <div className="w-20 md:w-24 h-2 md:h-3 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-12 md:w-16 h-1.5 md:h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="w-16 md:w-20 h-6 md:h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                          <div className="w-6 md:w-8 h-1.5 md:h-2 bg-blue-300 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
