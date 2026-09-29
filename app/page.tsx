import React from 'react';
import {
  Navbar,
  HeroSection,
  QuickLinks,
  MapBanner,
  RecommendedSection,
  VirtualTourSection,
  ToolsSection,
  EditorialSection,
  TestimonialsSection,
  ConsumerNotice,
  MegaFooter,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* 1. Global Header / Navbar (Navy Bar & White Sub-bar) */}
      <Navbar />

      {/* Main Vertical Content Flow */}
      <main className="flex-1 space-y-4 sm:space-y-6">
        {/* 2. Hero Section with Carousel & Floating Search Overlay */}
        <HeroSection />

        {/* 3. 8 Action Circular Nodes */}
        <QuickLinks />

        {/* 4. Interactive Jakarta Map Banner */}
        <MapBanner />

        {/* 5. Recommended Properties Module (Standard Variant 4-Col Grid) */}
        <RecommendedSection />

        {/* 6. 360 Virtual Tour & New Properties Module (Action Variant 4-Col Grid) */}
        <VirtualTourSection />

        {/* 7. Rumah123 Tools Module (Light Blue Container with 3-Col Grid) */}
        <ToolsSection />

        {/* 8. Editorial & Property Knowledge Base (4-Col Grid) */}
        <EditorialSection />

        {/* 9. Verified Customer Testimonials Module (3-Col Grid) */}
        <TestimonialsSection />

        {/* 10. Official Consumer Notice (Kementerian Perdagangan PKTN & BPKN) */}
        <ConsumerNotice />
      </main>

      {/* 11. Mega Footer (3 Tiers: SEO Directory, Corporate & App Badges, Legal Copyright) */}
      <MegaFooter />
    </div>
  );
}
