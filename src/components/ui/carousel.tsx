'use client'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, Transition, useMotionValue } from 'motion/react'
import { Children, createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react'

export type CarouselContextType = {
  index: number
  setIndex: (newIndex: number) => void
  itemsCount: number
  setItemsCount: (newItemsCount: number) => void
  disableDrag: boolean
  itemsToShow: number
  infiniteScroll: boolean
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider')
  }
  return context
}

export type CarouselProviderProps = {
  children: ReactNode
  initialIndex?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
  itemsToShow?: number
  infiniteScroll?: boolean
}

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  itemsToShow = 1,
  infiniteScroll = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex)
  const [itemsCount, setItemsCount] = useState<number>(0)

  const handleSetIndex = (newIndex: number) => {
    if (infiniteScroll) {
      if (newIndex < 0) {
        setIndex(itemsCount - 1)
        onIndexChange?.(itemsCount - 1)
        return
      }
      if (newIndex >= itemsCount) {
        setIndex(0)
        onIndexChange?.(0)
        return
      }
    }
    setIndex(newIndex)
    onIndexChange?.(newIndex)
  }

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        itemsToShow,
        infiniteScroll,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export type CarouselProps = {
  children: ReactNode
  className?: string
  initialIndex?: number
  index?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
  itemsToShow?: number
  infiniteScroll?: boolean
}

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  itemsToShow = 1,
  infiniteScroll = false,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex)
  const isControlled = externalIndex !== undefined
  const currentIndex = isControlled ? externalIndex : internalIndex

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex)
    }
    onIndexChange?.(newIndex)
  }

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
      itemsToShow={itemsToShow}
      infiniteScroll={infiniteScroll}
    >
      <div className={cn('group/hover relative', className)}>
        <div className='overflow-hidden'>{children}</div>
      </div>
    </CarouselProvider>
  )
}

export type CarouselNavigationProps = {
  className?: string
  classNameButton?: string
  alwaysShow?: boolean
}

function CarouselNavigation({ className, classNameButton, alwaysShow }: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, infiniteScroll } = useCarousel()

  return (
    <div className={cn('pointer-events-none flex justify-between px-2', className)}>
      <button
        type='button'
        aria-label='Previous slide'
        className={cn(
          'pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950',
          alwaysShow ? 'opacity-100' : 'opacity-0 group-hover/hover:opacity-100',
          alwaysShow ? 'disabled:opacity-40' : 'group-hover/hover:disabled:opacity-40',
          classNameButton,
        )}
        disabled={!infiniteScroll && index === 0}
        onClick={() => {
          setIndex(index - 1)
        }}
      >
        <ChevronLeft className='stroke-zinc-600 dark:stroke-zinc-50' size={16} />
      </button>
      <button
        type='button'
        className={cn(
          'pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950',
          alwaysShow ? 'opacity-100' : 'opacity-0 group-hover/hover:opacity-100',
          alwaysShow ? 'disabled:opacity-40' : 'group-hover/hover:disabled:opacity-40',
          classNameButton,
        )}
        aria-label='Next slide'
        disabled={!infiniteScroll && index + 1 === itemsCount}
        onClick={() => {
          setIndex(index + 1)
        }}
      >
        <ChevronRight className='stroke-zinc-600 dark:stroke-zinc-50' size={16} />
      </button>
    </div>
  )
}

export type CarouselIndicatorProps = {
  className?: string
  classNameButton?: string
}

function CarouselIndicator({ className, classNameButton }: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel()

  return (
    <div className={cn('absolute bottom-0 z-10 flex w-full items-center justify-center', className)}>
      <div className='flex space-x-2'>
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type='button'
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 w-2 rounded-full transition-opacity duration-300',
              index === i ? 'bg-zinc-950 dark:bg-zinc-50' : 'bg-zinc-900/50 dark:bg-zinc-100/50',
              classNameButton,
            )}
          />
        ))}
      </div>
    </div>
  )
}

export type CarouselContentProps = {
  children: ReactNode
  className?: string
  transition?: Transition
}

function CarouselContent({ children, className, transition }: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag, itemsToShow, infiniteScroll } = useCarousel()
  const dragX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsLength = Children.count(children)

  useEffect(() => {
    if (!itemsLength) {
      return
    }

    setItemsCount(itemsLength)
  }, [itemsLength, setItemsCount])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -10) {
      if (index < itemsLength - 1 || infiniteScroll) {
        setIndex(index + 1)
      }
    } else if (x >= 10) {
      if (index > 0 || infiniteScroll) {
        setIndex(index - 1)
      }
    }
  }

  return (
    <motion.div
      drag={disableDrag ? false : 'x'}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `-${index * (100 / itemsToShow)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: 'spring',
          duration: 0.2,
        }
      }
      className={cn('flex items-center', !disableDrag && 'cursor-grab active:cursor-grabbing', className)}
      ref={containerRef}
    >
      {children}
    </motion.div>
  )
}

export type CarouselItemProps = {
  children: ReactNode
  className?: string
}

function CarouselItem({ children, className }: CarouselItemProps) {
  const { itemsToShow } = useCarousel()

  return (
    <motion.div
      className={cn('min-w-0 shrink-0 grow-0 overflow-hidden', className)}
      style={{
        width: `${100 / itemsToShow}%`,
      }}
    >
      {children}
    </motion.div>
  )
}

export { Carousel, CarouselContent, CarouselIndicator, CarouselItem, CarouselNavigation, useCarousel }
