'use client';

import React from 'react';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import { Navigation } from './navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

export function MainLayout({ children, showBackground = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background Layer */}
      {showBackground && (
        <div className="fixed inset-0 z-0">
          <EtheralShadow
            color="rgba(100, 116, 139, 0.8)"
            animation={{ scale: 80, speed: 60 }}
            noise={{ opacity: 0.3, scale: 1.5 }}
            sizing="fill"
          />
        </div>
      )}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}