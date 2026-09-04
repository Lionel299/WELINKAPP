'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { HERO } from '@/lib/constants';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Gemini_Generated_Image_t5opbvt5opbvt5op.jpg"
          alt="WeLink Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Blue gradient overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-slate-900/80" />
        {/* Additional subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.5) 0%, transparent 50%)' }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Everything you need. <br className="hidden sm:block" />
            <span className="text-blue-300">Right around you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto"
          >
            {HERO?.subtitle || "Discover, book, and review top-rated local professionals. The easiest way to get anything done in your neighborhood."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <DownloadButtons size="lg" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

