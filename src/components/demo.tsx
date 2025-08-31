'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'

const SpiralDemo = () => {
  const [startVisible, setStartVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Handle navigation to personal site
  const navigateToPersonalSite = () => {
    if (typeof window !== 'undefined') {
      window.open("https://xubh.top/", '_blank')
    }
  }
  
  // Fade in the start button after animation loads
  useEffect(() => {
    if (!mounted) return
    
    const timer = setTimeout(() => {
      setStartVisible(true)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [mounted])
  
  if (!mounted) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }
  
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      
      {/* Simple Elegant Text Button with Pulsing Effect */}
      <div 
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1500 ease-out cursor-pointer
          ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <button 
          onClick={navigateToPersonalSite}
          className="
            text-white text-2xl tracking-[0.2em] uppercase font-extralight
            transition-all duration-700 hover:scale-110
            hover:tracking-[0.3em] animate-pulse
            bg-transparent border-none outline-none cursor-pointer
          "
        >
          Enter
        </button>
      </div>
    </div>
  )
}

export {SpiralDemo} 