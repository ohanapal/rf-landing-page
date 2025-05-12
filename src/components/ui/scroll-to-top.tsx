'use client'

import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './button'

interface ScrollToTopProps {
  className?: string
}

export function ScrollToTop({ className }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingUp = currentScrollY < lastScrollY
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Check if scrolled down at least 100vw
      if (currentScrollY > viewportWidth) {
        setScrolledDownEnough(true)
      }

      // Show button only when:
      // 1. Scrolling up AND
      // 2. Has scrolled down enough AND
      // 3. Is not in the first 100vh of the page
      setIsVisible(scrollingUp && scrolledDownEnough && currentScrollY > viewportHeight)

      // Update last scroll position
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, scrolledDownEnough])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!mounted) return null

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
      )}
    >
      <Button
        onClick={scrollToTop}
        variant='secondary'
        size='icon'
        className={cn('rounded-full shadow-lg size-12', className)}
        aria-label='Scroll to top'
      >
        <ChevronUp className='size-8' strokeWidth={1.8} />
      </Button>
    </div>
  )
}
