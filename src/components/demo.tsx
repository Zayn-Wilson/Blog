'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'

const SpiralDemo = ({ onComplete }: { onComplete: () => void }) => {
  const [startVisible, setStartVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleComplete = () => {
    if (onComplete) {
      onComplete()
    }
  }

  // Fade in the start button and listen for Enter key
  useEffect(() => {
    if (!mounted) return

    const timer = setTimeout(() => {
      setStartVisible(true)
    }, 2000)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleComplete()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mounted, onComplete])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full bg-black">
      <SpiralAnimation />
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1500 ease-out cursor-pointer
          ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        onClick={handleComplete}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white tracking-wider [text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
            START
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SpiralDemo