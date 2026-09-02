import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'WeLink — Everything you need. Right around you.',
  description:
    'WeLink connects customers with trusted, verified local service providers. Discover professionals on the interactive map, watch authentic video transformations, book securely, and pay with confidence.',
  keywords: [
    'local services',
    'find artisans',
    'verified providers',
    'electrician',
    'plumber',
    'hair stylist',
    'home renovation',
    'Africa tech startup',
    'service marketplace',
  ],
  authors: [{ name: 'WeLink Technologies Inc.' }],
  openGraph: {
    title: 'WeLink — The Modern Marketplace for Local Services',
    description:
      'Find trusted professionals right around you. Book with confidence, pay securely, and watch real skills in action.',
    url: 'https://welink.app',
    siteName: 'WeLink',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
