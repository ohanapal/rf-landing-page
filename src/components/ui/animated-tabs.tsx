'use client'

import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { motion } from 'motion/react'
import * as React from 'react'

const Tabs = TabsPrimitive.Root

// Animated tab indicator that follows the active tab
const TabIndicator = React.forwardRef<
  HTMLDivElement,
  {
    orientation?: 'horizontal' | 'vertical'
    className?: string
    activeValue?: string
  }
>(({ className, orientation = 'horizontal', activeValue }, ref) => {
  const [activeBounds, setActiveBounds] = React.useState<{
    top: number
    left: number
    height: number
    width: number
  } | null>(null)

  React.useEffect(() => {
    // Find the active tab element by its value and get its position
    if (activeValue) {
      const activeElement = document.querySelector(`[data-state="active"][data-value="${activeValue}"]`)
      if (activeElement) {
        const { top, left, height, width } = activeElement.getBoundingClientRect()
        setActiveBounds({ top, left, height, width })
      }
    }
  }, [activeValue])

  if (!activeBounds) return null

  return (
    <motion.div
      ref={ref}
      layoutId='tab-indicator'
      className={cn(
        'absolute bg-tartiary z-0',
        orientation === 'vertical'
          ? 'w-full h-11 left-0 after:absolute after:inset-y-0 after:start-0 after:w-0.5 after:bg-primary'
          : 'h-full bottom-0 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary',
        className,
      )}
      style={
        orientation === 'vertical'
          ? { top: 0, height: activeBounds.height, y: activeBounds.top }
          : { left: 0, width: activeBounds.width, x: activeBounds.left }
      }
      animate={
        orientation === 'vertical'
          ? { top: activeBounds.top, height: activeBounds.height }
          : { left: activeBounds.left, width: activeBounds.width }
      }
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    />
  )
})
TabIndicator.displayName = 'TabIndicator'

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    orientation?: 'horizontal' | 'vertical'
  }
>(({ className, orientation = 'horizontal', ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg bg-muted p-0.5 text-muted-foreground/70',
        orientation === 'vertical' && 'flex-col',
        className,
      )}
      {...props}
    />
  )
})
TabsList.displayName = 'AnimatedTabsList'

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = 'AnimatedTabsTrigger'

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    direction?: number
  }
>(({ className, direction = 1, ...props }, ref) => (
  <TabsPrimitive.Content asChild ref={ref} {...props}>
    <motion.div
      initial={{ opacity: 0, y: direction >= 0 ? 50 : -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: direction >= 0 ? -50 : 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('mt-2 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70', className)}
    >
      {props.children}
    </motion.div>
  </TabsPrimitive.Content>
))
TabsContent.displayName = 'AnimatedTabsContent'

export { TabIndicator, Tabs, TabsContent, TabsList, TabsTrigger }
