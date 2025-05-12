'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ScrollableImageProps extends Omit<ImageProps, 'className'> {
  alt: string
  containerClassName?: string
  imageClassName?: string
  scrollDuration?: number
  returnDuration?: number
}

export default function ScrollableImage({
  containerClassName = '',
  imageClassName = '',
  scrollDuration = 5,
  returnDuration = 0.5,
  alt = 'Project Image',
  ...props
}: ScrollableImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrollable, setIsScrollable] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [scrollAmount, setScrollAmount] = useState(0)

  // Check if image needs scrolling
  useEffect(() => {
    const checkImageSize = () => {
      if (imageRef.current && containerRef.current) {
        const imageHeight = imageRef.current.naturalHeight
        const containerHeight = containerRef.current.clientHeight

        console.log(`Image height: ${imageHeight}, Container height: ${containerHeight}`)

        // Only enable scrolling if image is significantly taller than container
        const needsScroll = imageHeight > containerHeight * 1.2
        setIsScrollable(needsScroll)

        console.log(`Image needs scroll: ${needsScroll}`)

        if (needsScroll) {
          // Calculate how much to scroll (stop at 80% of the way down)
          const amount = Math.min(imageHeight - containerHeight, imageHeight * 0.8)

          setScrollAmount(amount)
          console.log(`Scroll amount set to: ${amount}px`)
        }
      }
    }

    // Check after image loads
    const image = imageRef.current
    if (image) {
      if (image.complete) {
        checkImageSize()
      } else {
        image.onload = checkImageSize
      }
    }

    // Cleanup
    return () => {
      if (image) {
        image.onload = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        style={{
          transform: isScrollable && isHovering ? `translateY(-${scrollAmount}px)` : 'translateY(0)',
          transition: `transform ${isHovering ? scrollDuration : returnDuration}s ease-out`,
          width: '100%',
          height: '100%',
        }}
      >
        <Image ref={imageRef} className={`w-full h-auto object-cover ${imageClassName}`} alt={alt} {...props} />
      </div>
    </div>
  )
}
