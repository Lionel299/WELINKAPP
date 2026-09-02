'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Globe, Sparkles } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import Button from '@/components/ui/Button';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { NAV_LINKS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Prevent background scrolling when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <Logo size="sm" />
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-2">
              {/* Product Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleSection('product')}
                  className="flex items-center justify-between w-full py-2.5 text-left font-bold text-sm text-slate-800"
                >
                  <span>Product</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedSection === 'product' ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedSection === 'product' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pb-2 pt-1 space-y-2">
                        {NAV_LINKS.product.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="block p-2 rounded-lg hover:bg-slate-50"
                          >
                            <div className="text-xs font-bold text-slate-900">{item.label}</div>
                            <div className="text-[10px] text-slate-500">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleSection('solutions')}
                  className="flex items-center justify-between w-full py-2.5 text-left font-bold text-sm text-slate-800"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedSection === 'solutions' ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedSection === 'solutions' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pb-2 pt-1 space-y-2">
                        {NAV_LINKS.solutions.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="block p-2 rounded-lg hover:bg-slate-50"
                          >
                            <div className="text-xs font-bold text-slate-900">{item.label}</div>
                            <div className="text-[10px] text-slate-500">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link
                href="/customers"
                onClick={onClose}
                className="block py-2.5 font-bold text-sm text-slate-800 hover:text-primary transition-colors border-b border-slate-100"
              >
                For Customers
              </Link>

              <Link
                href="/providers"
                onClick={onClose}
                className="block py-2.5 font-bold text-sm text-slate-800 hover:text-primary transition-colors border-b border-slate-100"
              >
                For Providers
              </Link>

              <Link
                href="/pricing"
                onClick={onClose}
                className="block py-2.5 font-bold text-sm text-slate-800 hover:text-primary transition-colors border-b border-slate-100"
              >
                Pricing
              </Link>

              {/* Resources Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => toggleSection('resources')}
                  className="flex items-center justify-between w-full py-2.5 text-left font-bold text-sm text-slate-800"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedSection === 'resources' ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedSection === 'resources' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pb-2 pt-1 space-y-2">
                        {NAV_LINKS.resources.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="block p-2 rounded-lg hover:bg-slate-50"
                          >
                            <div className="text-xs font-bold text-slate-900">{item.label}</div>
                            <div className="text-[10px] text-slate-500">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                onClick={onClose}
                className="block py-2.5 font-bold text-sm text-slate-800 hover:text-primary transition-colors"
              >
                About WeLink
              </Link>
            </div>

            {/* Bottom Actions Drawer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50">
              <DownloadButtons size="md" layout="vertical" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
