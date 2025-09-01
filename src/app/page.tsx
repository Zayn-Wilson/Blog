'use client'

import SpiralDemo from "@/components/demo";
import { useState } from "react";
import { EtheralBackground } from "@/components/ui/etheral-background";

// A placeholder for your future blog content
const BlogHome = () => {
  return (
    <EtheralBackground
      animation={{ scale: 100, speed: 90 }}
      noise={{ opacity: 0.5, scale: 1.2 }}
      sizing="fill"
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">My Blog</h1>
        <p className="text-lg">This is where the blog posts will go.</p>
        <p className="mt-4 text-sm text-gray-400">You can start editing your blog content here.</p>
      </div>
    </EtheralBackground>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <main className="relative h-screen w-screen">
        <SpiralDemo onComplete={() => setIsLoading(false)} />
      </main>
    );
  }

  return (
    <main className="relative h-screen w-screen">
      <BlogHome />
    </main>
  );
}