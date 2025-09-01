'use client';

import { useState, useEffect } from 'react';
import SpiralDemo from '@/components/demo';
import { HeroSection } from '@/components/sections/hero-section';
import { SkillsSection } from '@/components/home/skills-section';
import { FeaturedPosts } from '@/components/sections/featured-posts';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  if (!mounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!showContent) {
    return (
      <div className="fixed inset-0 z-50">
        <SpiralDemo onComplete={handleLoadingComplete} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* 背景层 */}
      <div className="fixed inset-0 z-0">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      
      {/* 内容层 */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <FeaturedPosts />
        <FeaturedProjects />
      </div>
    </div>
  );
}