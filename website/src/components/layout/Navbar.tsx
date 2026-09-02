'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe, Menu } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import Button from '@/components/ui/Button';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { NAV_LINKS } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3 border-b border-slate-200/60'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors">
                Product
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'product' ? 'rotate-180 text-primary' : 'text-slate-400'
                  }`}
                />
              </button>

              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="bg-white rounded-2xl shadow-large border border-slate-100 p-3 grid gap-1">
                    {NAV_LINKS.product.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors block group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors">
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-primary' : 'text-slate-400'
                  }`}
                />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-white rounded-2xl shadow-large border border-slate-100 p-3 grid gap-1">
                    {NAV_LINKS.solutions.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors block group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/customers"
              className="hidden px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors"
            >
              For Customers
            </Link>

            <Link
              href="/providers"
              className="hidden px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors"
            >
              For Providers
            </Link>

            <Link
              href="/pricing"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors">
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180 text-primary' : 'text-slate-400'
                  }`}
                />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-white rounded-2xl shadow-large border border-slate-100 p-3 grid gap-1">
                    {NAV_LINKS.resources.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors block group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-wrap">
            <button
              className="p-2 text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-slate-100"
              aria-label="Language selector"
              title="English (FR available soon)"
            >
              <Globe className="w-4 h-4" />
            </button>
            <div className="flex gap-2 items-center">
              <DownloadButtons size="sm" />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full screen mobile drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
