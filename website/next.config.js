/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for faster page transitions
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable optimized font loading
  optimizeFonts: true,
  // Reduce initial page load time
  reactStrictMode: true,
};

module.exports = nextConfig;
