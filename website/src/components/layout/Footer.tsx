import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import { FOOTER_LINKS } from '@/lib/constants';

const COLUMN_TITLES: Record<keyof typeof FOOTER_LINKS, string> = {
  company: 'Company',
  product: 'Product',
  customers: 'For Customers',
  providers: 'For Providers',
  resources: 'Resources',
  legal: 'Legal',
};

export default function Footer() {
  const footerEntries = Object.entries(FOOTER_LINKS) as [
    keyof typeof FOOTER_LINKS,
    { label: string; href: string }[]
  ][];

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerEntries.map(([key, links]) => (
            <div key={key}>
              <h3 className="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
                {COLUMN_TITLES[key] || key}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand & Social Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size="sm" white={true} />
            <span className="text-slate-500 text-xs">|</span>
            <p className="text-slate-400 text-xs">
              Building Africa&apos;s digital operating system for local services.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <p className="text-slate-500 text-xs">
              © 2026 WeLink. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
