'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, MapPin, Search, Wrench, User, MapPin as MapPinIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { HERO } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-slate-50/50 to-blue-50/80 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>The future of local services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Everything you need. <br className="hidden lg:block" />
              <span className="text-blue-600">Right around you.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              {HERO?.subtitle || "Discover, book, and review top-rated local professionals. The easiest way to get anything done in your neighborhood."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center lg:justify-start mb-10"
            >
              <DownloadButtons size="lg" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500"
            >
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2" />
                10,000+ professionals
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2" />
                50,000+ services
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                4.8 rating
              </div>
            </motion.div>
          </div>
          
          {/* Right Side: Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Phone Mockup */}
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl z-10 border-4 border-slate-800">
              <div className="absolute top-0 inset-x-0 h-7 bg-slate-900 rounded-t-[3rem] flex justify-center pt-2">
                <div className="w-20 h-5 bg-black rounded-full" />
              </div>
              
              {/* Internal Screen Content */}
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative flex flex-col pt-10">
                {/* Search Bar */}
                <div className="px-4 mb-4">
                  <div className="bg-white rounded-full p-3 shadow-sm border border-slate-100 flex items-center text-slate-400">
                    <Search className="w-4 h-4 mr-2" />
                    <span className="text-xs">Find services near you...</span>
                  </div>
                </div>
                
                {/* Map View */}
                <div className="relative flex-1 bg-blue-50/50">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  {/* Map Pins */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 border-2 border-white"
                  >
                    <User className="w-4 h-4" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                    className="absolute top-1/2 right-1/4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/30 border-2 border-white"
                  >
                    <Wrench className="w-4 h-4" />
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ repeat: Infinity, duration: 2.2, delay: 1 }}
                    className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 border-2 border-white"
                  >
                    <MapPinIcon className="w-4 h-4" />
                  </motion.div>
                </div>
                
                {/* Bottom Sheet Service Cards */}
                <div className="bg-white rounded-t-[1.5rem] p-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] absolute bottom-0 inset-x-0">
                  <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />
                  <div className="space-y-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-12 bg-slate-200 rounded" />
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-16 bg-slate-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 lg:top-20 -left-10 lg:-left-20 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 w-64"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-bold text-slate-900 mr-1">Sarah M.</span>
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-center text-xs text-amber-500 mt-1">
                    <Star className="w-3 h-3 fill-amber-500 mr-0.5" />
                    <Star className="w-3 h-3 fill-amber-500 mr-0.5" />
                    <Star className="w-3 h-3 fill-amber-500 mr-0.5" />
                    <Star className="w-3 h-3 fill-amber-500 mr-0.5" />
                    <Star className="w-3 h-3 fill-amber-500" />
                    <span className="text-slate-500 ml-1">(120)</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-4 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 w-56"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Plumbing Service</h4>
                  <p className="text-xs text-slate-500 mt-1">Starting at <span className="font-bold text-slate-900">₦5,000</span></p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [-5, 5, -5] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-6 lg:-right-16 bg-white px-4 py-2 rounded-full shadow-lg shadow-slate-200/50 border border-slate-100 z-20 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">0.5 km away</span>
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-10 left-0 lg:-left-12 bg-white p-3 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 z-20 w-48"
            >
              <div className="flex text-amber-500 mb-1">
                <Star className="w-3 h-3 fill-amber-500" />
                <Star className="w-3 h-3 fill-amber-500" />
                <Star className="w-3 h-3 fill-amber-500" />
                <Star className="w-3 h-3 fill-amber-500" />
                <Star className="w-3 h-3 fill-amber-500" />
              </div>
              <p className="text-xs text-slate-600 italic">"Arrived in 15 mins! Great job."</p>
            </motion.div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
