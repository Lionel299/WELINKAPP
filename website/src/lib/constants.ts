import {
  Search, MapPin, ShieldCheck, UserCheck, MessageSquare,
  Calendar, CreditCard, Star, Camera, Heart, Play, Target,
  Briefcase, TrendingUp, BarChart3, Wallet, Settings, Crown,
  Lock, Flag, Eye, CheckCircle2, Zap, Globe, Users, Clock,
  ChevronRight, ArrowRight, Sparkles, Building2, Phone, Mail
} from 'lucide-react';

// ===========================
// Navigation
// ===========================

export const NAV_LINKS = {
  product: [
    { label: 'Features', href: '/#features', description: 'Explore all WeLink features' },
    { label: 'Interactive Map', href: '/#map', description: 'Discover professionals nearby' },
    { label: 'Social Feed', href: '/#social', description: 'See what professionals can do' },
    { label: 'Messaging', href: '/#features', description: 'Communicate directly' },
    { label: 'Booking', href: '/#features', description: 'Schedule services easily' },
    { label: 'Payments', href: '/#features', description: 'Pay with confidence' },
  ],
  solutions: [
    { label: 'For Customers', href: '/customers', description: 'Find trusted professionals' },
    { label: 'For Providers', href: '/providers', description: 'Grow your business' },
    { label: 'Advertising', href: '/advertising', description: 'Promote your services' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { label: 'Help Center', href: '/contact', description: 'Get support' },
  ],
};

// ===========================
// Hero
// ===========================

export const HERO = {
  headline: 'Everything you need. Right around you.',
  subtitle: 'WeLink connects you with trusted local professionals, helps you book services, communicate securely, pay with confidence and discover professionals around you.',
  primaryCTA: 'Get Started',
  secondaryCTA: 'Become a Provider',
};

// ===========================
// Trust Stats (PLACEHOLDER values)
// ===========================

export const TRUST_STATS = [
  { value: '10,000+', label: 'Trusted Professionals', note: '<!-- PLACEHOLDER: Replace with real data -->' },
  { value: '50,000+', label: 'Completed Services', note: '<!-- PLACEHOLDER: Replace with real data -->' },
  { value: '4.8/5', label: 'Average Rating', note: '<!-- PLACEHOLDER: Replace with real data -->' },
  { value: '25+', label: 'Service Categories', note: '<!-- PLACEHOLDER: Replace with real data -->' },
];

// ===========================
// Trust Badges
// ===========================

export const TRUST_BADGES = [
  { label: 'Verified Providers', icon: 'ShieldCheck' },
  { label: 'Secure Payments', icon: 'Lock' },
  { label: 'Professionals Near You', icon: 'MapPin' },
  { label: 'Built for Local Communities', icon: 'Users' },
];

// ===========================
// Problem
// ===========================

export const PROBLEMS = [
  { title: 'Finding trustworthy professionals', description: 'You never know who you can really trust with your home, car, or personal services.' },
  { title: 'Scattered recommendations', description: 'Asking friends, scrolling social media, and hoping for the best is not reliable.' },
  { title: 'No way to compare', description: 'Without profiles, portfolios, and reviews, comparing providers is almost impossible.' },
  { title: 'Lack of transparent pricing', description: 'Hidden fees and surprise costs make every service feel like a gamble.' },
  { title: 'Slow communication', description: 'Phone tag, missed messages, and delayed responses waste everyone\'s time.' },
  { title: 'Hard to discover nearby talent', description: 'Talented professionals in your area remain invisible because they have no platform.' },
];

// ===========================
// How It Works Steps
// ===========================

export const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Find professionals by service, category, or location. Browse profiles, portfolios, and reviews.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'View detailed profiles, portfolios, reviews, and communicate directly with providers.',
    icon: 'MessageSquare',
  },
  {
    number: '03',
    title: 'Book',
    description: 'Send a request, receive a quotation, and schedule the service at a time that works for you.',
    icon: 'Calendar',
  },
  {
    number: '04',
    title: 'Pay',
    description: 'Pay securely through supported payment methods. Mobile Money, bank cards, or WeLink Wallet.',
    icon: 'CreditCard',
  },
  {
    number: '05',
    title: 'Review',
    description: 'Complete the service and share your experience to help the community make better decisions.',
    icon: 'Star',
  },
];

// ===========================
// Features
// ===========================

export const FEATURES = [
  {
    title: 'Smart Search',
    description: 'Find professionals by service, location, price, rating, and availability.',
    icon: 'Search',
  },
  {
    title: 'Interactive Map',
    description: 'Discover professionals around you in real time on an interactive map.',
    icon: 'MapPin',
  },
  {
    title: 'Verified Professionals',
    description: 'Build trust through verification badges and professional profiles.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Professional Profiles',
    description: 'View experience, services, portfolio, reviews, and availability.',
    icon: 'UserCheck',
  },
  {
    title: 'Secure Messaging',
    description: 'Communicate directly with providers through the platform.',
    icon: 'MessageSquare',
  },
  {
    title: 'Service Booking',
    description: 'Request and schedule services easily with built-in booking tools.',
    icon: 'Calendar',
  },
  {
    title: 'Secure Payments',
    description: 'Pay through supported payment methods with transaction protection.',
    icon: 'CreditCard',
  },
  {
    title: 'Reviews & Ratings',
    description: 'Make informed decisions through authentic community feedback.',
    icon: 'Star',
  },
  {
    title: 'Professional Social Feed',
    description: 'Discover services through photos, projects, and professional videos.',
    icon: 'Camera',
  },
  {
    title: 'Favorites',
    description: 'Save professionals and content you love for quick access later.',
    icon: 'Heart',
  },
];

// ===========================
// Social Feed Categories
// ===========================

export const FEED_CATEGORIES = [
  'Hair & Beauty',
  'Home Renovation',
  'Car Repair',
  'Photography',
  'Cleaning',
  'Graphic Design',
  'Construction',
  'Technology',
];

// ===========================
// Video Examples
// ===========================

export const VIDEO_EXAMPLES = [
  { title: 'Hair Transformation', category: 'Hair & Beauty', color: 'from-pink-400 to-purple-500' },
  { title: 'Car Engine Repair', category: 'Car Repair', color: 'from-orange-400 to-red-500' },
  { title: 'Kitchen Renovation', category: 'Home Renovation', color: 'from-amber-400 to-orange-500' },
  { title: 'Wedding Photography', category: 'Photography', color: 'from-blue-400 to-indigo-500' },
  { title: 'Deep Clean Session', category: 'Cleaning', color: 'from-emerald-400 to-teal-500' },
  { title: 'Brand Identity Design', category: 'Graphic Design', color: 'from-violet-400 to-purple-500' },
  { title: 'Wall Construction', category: 'Construction', color: 'from-yellow-400 to-amber-500' },
  { title: 'App Development', category: 'Technology', color: 'from-cyan-400 to-blue-500' },
];

// ===========================
// Customer Benefits
// ===========================

export const CUSTOMER_BENEFITS = [
  { title: 'Discover Nearby Professionals', description: 'Find verified providers close to you, ready to help.', icon: 'MapPin' },
  { title: 'Compare Providers', description: 'View profiles, portfolios, and reviews side by side.', icon: 'Users' },
  { title: 'View Portfolios', description: 'See actual work before making a decision.', icon: 'Camera' },
  { title: 'Communicate Directly', description: 'Message providers through secure in-app chat.', icon: 'MessageSquare' },
  { title: 'Request Quotations', description: 'Get clear pricing before committing.', icon: 'CreditCard' },
  { title: 'Book Services', description: 'Schedule at a time that works for you.', icon: 'Calendar' },
  { title: 'Pay Securely', description: 'Multiple payment options with transaction protection.', icon: 'Lock' },
  { title: 'Track Bookings', description: 'Monitor your service status in real time.', icon: 'Clock' },
  { title: 'Leave Reviews', description: 'Help the community by sharing your experience.', icon: 'Star' },
];

// ===========================
// Provider Benefits
// ===========================

export const PROVIDER_BENEFITS = [
  { title: 'Create a Professional Profile', description: 'Showcase your skills, services, and experience.', icon: 'UserCheck' },
  { title: 'Showcase Your Work', description: 'Build a visual portfolio that speaks for itself.', icon: 'Camera' },
  { title: 'Get Discovered Locally', description: 'Appear on the map and in search results near you.', icon: 'MapPin' },
  { title: 'Receive Service Requests', description: 'Get notified when customers need your services.', icon: 'Inbox' },
  { title: 'Communicate with Customers', description: 'Chat directly through secure messaging.', icon: 'MessageSquare' },
  { title: 'Manage Bookings', description: 'Organize your schedule with built-in tools.', icon: 'Calendar' },
  { title: 'Receive Payments', description: 'Get paid through supported payment methods.', icon: 'Wallet' },
  { title: 'Build Your Reputation', description: 'Collect reviews and build trust over time.', icon: 'Star' },
  { title: 'Publish Photos & Videos', description: 'Show your best work to attract customers.', icon: 'Video' },
  { title: 'Promote Services', description: 'Use advertising tools to reach more people.', icon: 'Megaphone' },
  { title: 'Grow Your Business', description: 'Access analytics and tools to scale.', icon: 'TrendingUp' },
  { title: 'Protect Your Business', description: 'Keep your work and customer relationships secure.', icon: 'ShieldCheck' },
];

// ===========================
// Provider Tools
// ===========================

export const PROVIDER_TOOLS = [
  { title: 'Professional Profile', description: 'Your digital storefront', icon: 'UserCheck' },
  { title: 'Portfolio', description: 'Showcase your best work', icon: 'Camera' },
  { title: 'Services', description: 'List and manage your services', icon: 'Briefcase' },
  { title: 'Calendar', description: 'Manage your availability', icon: 'Calendar' },
  { title: 'Booking Management', description: 'Handle requests and appointments', icon: 'CheckCircle2' },
  { title: 'Messaging', description: 'Chat with customers', icon: 'MessageSquare' },
  { title: 'Earnings', description: 'Track your revenue', icon: 'TrendingUp' },
  { title: 'Wallet', description: 'Manage your balance', icon: 'Wallet' },
  { title: 'Analytics', description: 'Understand your performance', icon: 'BarChart3' },
  { title: 'Advertising', description: 'Promote your services', icon: 'Target' },
  { title: 'Premium Membership', description: 'Unlock advanced features', icon: 'Crown' },
  { title: 'Invoices & Receipts', description: 'Keep every transaction organized', icon: 'Receipt' },
];

// ===========================
// Trust & Safety
// ===========================

export const TRUST_FEATURES = [
  { title: 'Provider Verification', description: 'Identity and credential verification for professionals.' },
  { title: 'Ratings & Reviews', description: 'Transparent community feedback system.' },
  { title: 'Secure Communication', description: 'All messages stay within the platform.' },
  { title: 'Secure Payments', description: 'Protected transactions through trusted methods.' },
  { title: 'Reporting System', description: 'Report inappropriate behavior or content.' },
  { title: 'Content Moderation', description: 'Proactive monitoring of platform content.' },
  { title: 'Customer Protection', description: 'Policies designed to protect your interests.' },
];

// ===========================
// Pricing
// ===========================

export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 'Free',
    period: '',
    description: 'Get started and build your presence.',
    features: [
      'Professional profile',
      'Up to 5 services',
      'Basic portfolio (5 photos)',
      'Receive service requests',
      'Messaging',
      'Reviews & ratings',
      'Standard search visibility',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$X', // <!-- PLACEHOLDER: Replace with real pricing -->
    period: '/month',
    description: 'Stand out and grow faster.',
    features: [
      'Everything in Free',
      'Unlimited services',
      'Full portfolio (photos + videos)',
      'Priority search visibility',
      'Verified badge',
      'Basic analytics',
      'Calendar management',
      'Promotions (limited)',
    ],
    highlighted: false,
    cta: 'Go Pro',
  },
  {
    name: 'Business',
    price: '$XX', // <!-- PLACEHOLDER: Replace with real pricing -->
    period: '/month',
    description: 'Full suite for serious professionals.',
    features: [
      'Everything in Pro',
      'Featured provider placement',
      'Advanced analytics',
      'Advertising dashboard',
      'Sponsored videos',
      'Multiple team members',
      'Dedicated support',
      'Custom business page',
    ],
    highlighted: false,
    cta: 'Go Business',
  },
];

// ===========================
// Revenue Streams
// ===========================

export const REVENUE_STREAMS = [
  'Transaction commissions',
  'Premium provider subscriptions',
  'Sponsored videos',
  'Sponsored posts',
  'Featured services',
  'Featured providers',
  'Business advertising',
  'Partnerships',
];

// ===========================
// FAQ
// ===========================

export const FAQ_ITEMS = [
  {
    question: 'What is WeLink?',
    answer: 'WeLink is a platform that connects customers with trusted local service providers. It combines discovery, communication, booking, payments, and a professional social feed into one ecosystem.',
    category: 'General',
  },
  {
    question: 'Who can use WeLink?',
    answer: 'Anyone can use WeLink to find and book services. Service providers across all categories can create profiles and offer their services through the platform.',
    category: 'General',
  },
  {
    question: 'How do I find a professional?',
    answer: 'You can search by service type, category, or location. Use the interactive map to discover professionals near you, or browse the social feed to see their work.',
    category: 'Customers',
  },
  {
    question: 'How do I become a provider?',
    answer: 'Sign up on WeLink, create your professional profile, add your services and portfolio, and start receiving service requests from customers in your area.',
    category: 'Providers',
  },
  {
    question: 'Are providers verified?',
    answer: 'WeLink offers a verification process for providers. Verified providers display a badge on their profile, which helps build trust with customers.',
    category: 'General',
  },
  {
    question: 'How do payments work?',
    answer: 'Payments are processed through supported methods including Mobile Money, bank cards, and WeLink Wallet. The available methods may vary by country.',
    category: 'Payments',
  },
  {
    question: 'How does WeLink make money?',
    answer: 'WeLink generates revenue through transaction commissions, premium subscriptions for providers, advertising (sponsored videos, posts, and featured placements), and business partnerships.',
    category: 'General',
  },
  {
    question: 'Can providers advertise their services?',
    answer: 'Yes. Providers can promote their services, videos, posts, and profiles through WeLink\'s advertising platform with targeting options for location, radius, and service category.',
    category: 'Providers',
  },
  {
    question: 'Can providers promote videos?',
    answer: 'Absolutely. Providers can create sponsored videos that showcase their real work and reach customers interested in their services, with detailed analytics on performance.',
    category: 'Providers',
  },
  {
    question: 'How does the map work?',
    answer: 'The interactive map shows you verified professionals near your location. You can filter by service category, view provider preview cards, and adjust the search radius.',
    category: 'Platform',
  },
  {
    question: 'Can I cancel a booking?',
    answer: 'Yes, bookings can be cancelled according to WeLink\'s cancellation policy. Details are provided during the booking process.',
    category: 'Customers',
  },
  {
    question: 'How do reviews work?',
    answer: 'After a service is completed, customers can rate their experience and leave a detailed review. Reviews are visible on the provider\'s profile to help future customers.',
    category: 'Platform',
  },
  {
    question: 'Is WeLink available in my country?',
    answer: 'WeLink is expanding across Africa and beyond. Check the app or website for current availability in your region.',
    category: 'General',
  },
];

// ===========================
// Contact Categories
// ===========================

export const CONTACT_CATEGORIES = [
  'General question',
  'Customer support',
  'Provider support',
  'Partnership',
  'Advertising',
  'Business inquiry',
];

// ===========================
// Footer Links
// ===========================

export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
  ],
  customers: [
    { label: 'Find Professionals', href: '/customers' },
    { label: 'Safety', href: '/#trust' },
  ],
  providers: [
    { label: 'Become a Provider', href: '/providers' },
    { label: 'Provider Tools', href: '/providers#tools' },
    { label: 'Advertising', href: '/advertising' },
    { label: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Help Center', href: '/contact' },
  ],
  legal: [
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};
