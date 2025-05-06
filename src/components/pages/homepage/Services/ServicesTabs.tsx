'use client'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { getLucideIcon } from '../About/utils'

interface ServiceTabContent {
  img: string
  title: string
  description: string
  listItems: string[]
}

export interface ServiceTab {
  id: number
  title: string
  icon: string
  content: ServiceTabContent
}

interface Props {
  tabs: ServiceTab[]
}

export default function ServicesTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(`tab-1`)
  const [direction, setDirection] = useState(0)
  const [previousTabId, setPreviousTabId] = useState(1)

  // Constants for consistent sizing
  const TAB_HEIGHT = 44 // height in pixels
  const TAB_GAP = 8 // gap in pixels

  const handleTabChange = (value: string) => {
    // Extract the numeric ID from the tab value
    const newTabId = parseInt(value.split('-')[1])

    // Determine direction based on comparison with previous tab ID
    const newDirection = newTabId > previousTabId ? 1 : -1
    setDirection(newDirection)

    // Update state
    setPreviousTabId(newTabId)
    setActiveTab(value)
  }

  const currentTab = tabs.find((tab) => `tab-${tab.id}` === activeTab)
  const activeIndex = tabs.findIndex((tab) => `tab-${tab.id}` === activeTab)

  return (
    <div className='flex flex-col md:flex-row w-full max-w-4xl mx-auto gap-5'>
      {/* Tabs sidebar */}
      <div className='relative'>
        <div className='flex flex-col rounded-none bg-transparent p-0 min-w-[200px]'>
          {/* Animated background for active tab */}
          <motion.div
            className='absolute left-0 w-full z-0 bg-tartiary rounded-md after:absolute after:inset-y-0 after:start-0 after:w-0.5 after:bg-primary'
            initial={false}
            animate={{
              y: activeIndex * (TAB_HEIGHT + TAB_GAP),
              height: TAB_HEIGHT,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />

          {/* Tab buttons */}
          {tabs.map((tab) => {
            const Icon = getLucideIcon(tab.icon)
            const isActive = activeTab === `tab-${tab.id}`

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(`tab-${tab.id}`)}
                className={cn(
                  'relative z-10 w-full flex items-center justify-start rounded-md cursor-pointer text-sm font-medium px-4',
                  isActive ? 'text-foreground' : 'text-muted-foreground',
                )}
                style={{
                  height: `${TAB_HEIGHT}px`,
                  marginBottom: tab.id < tabs.length ? `${TAB_GAP}px` : 0,
                }}
              >
                <Icon className='size-5 mr-3' />
                {tab.title}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode='wait' initial={false}>
        {currentTab && (
          <motion.div
            key={`tab-content-${currentTab.id}`}
            className='flex flex-col sm:flex-row gap-5 bg-tartiary rounded-md p-4 grow'
            initial={{ opacity: 0, y: direction >= 0 ? 50 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction >= 0 ? -50 : 50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src={currentTab.content.img}
              alt={currentTab.title}
              width={300}
              height={600}
              className='h-full w-full sm:w-1/3 max-w-full sm:max-w-[300px] aspect-[3/4] object-cover rounded-md'
            />
            <div className='flex flex-col gap-4 w-full sm:w-2/3'>
              <h3 className='text-2xl font-bold'>{currentTab.title}</h3>
              <p className='text-muted-foreground'>{currentTab.content.description}</p>
              <ul className='space-y-2'>
                {currentTab.content.listItems.map((item) => (
                  <li key={item} className='flex items-center gap-2'>
                    <CircleCheck className='size-5 text-primary' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
