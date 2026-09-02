import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MapSection from '@/components/home/MapSection';
import SocialFeedSection from '@/components/home/SocialFeedSection';
import VideoSection from '@/components/home/VideoSection';
import ProviderCTASection from '@/components/home/ProviderCTASection';
import TrustSafetySection from '@/components/home/TrustSafetySection';
import DownloadCTA from '@/components/home/DownloadCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar & Key Stats */}
      <TrustBar />

      {/* 3. The Problem We Solve */}
      <ProblemSection />

      {/* 4. The Solution: Unified Ecosystem */}
      <SolutionSection />

      {/* 5. Core Features Grid */}
      <FeaturesSection />

      {/* 7. Interactive Map Showcase */}
      <MapSection />

      {/* 8. Professional Social Feed */}
      <SocialFeedSection />

      {/* 9. Video Reel Experience */}
      <VideoSection />

      {/* 10. Provider Growth & Tools CTA */}
      <ProviderCTASection />

      {/* 11. Trust, Safety & Verification */}
      <TrustSafetySection />

      {/* 12. Download / Waitlist CTA */}
      <DownloadCTA />
    </>
  );
}
