'use client'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import data from '@/data/homepage.json'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import Stripes from './Stripes'

export default function Hero() {
  const { hero } = data
  return (
    <header
      id='home'
      className='min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative overflow-hidden px-4 pt-12'
    >
      <Stripes />
      <div className='relative z-10'>
        <BackgroundBeamsWithCollision>
          <motion.div
            className='flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center'
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <motion.h1
              className='text-neutral-100 text-4xl md:text-5xl lg:text-7xl font-semibold'
              initial={{ opacity: 0.0, y: 40, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              {hero.title.text}
            </motion.h1>
            <motion.h1
              className='text-primary text-4xl md:text-5xl lg:text-7xl font-semibold'
              initial={{ opacity: 0.0, y: 40, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              {hero.title.span}
            </motion.h1>
            <motion.p
              className='text-neutral-100 font-medium py-8'
              initial={{ opacity: 0.0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              {hero.description}
            </motion.p>
            <motion.div
              className='flex flex-wrap items-center justify-center gap-5'
              initial={{ opacity: 0.0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              <Link href={hero.scheduleBtn.link}>
                <RainbowButton variant='custom' className='bg-primary text-white'>
                  {hero.scheduleBtn.text}
                </RainbowButton>
              </Link>
              <Link href={hero.exploreBtn.link}>
                <RainbowButton>{hero.exploreBtn.text}</RainbowButton>
              </Link>
            </motion.div>
          </motion.div>
        </BackgroundBeamsWithCollision>
        <motion.div
          className='pb-32'
          initial={{ opacity: 0, y: 60, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            delay: 1.0,
            duration: 1.2,
            ease: 'easeInOut',
          }}
        >
          <div className='max-w-7xl mx-auto bg-gray-400 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border-2 p-0.5 sm:p-1 md:p-2'>
            <div className='w-full h-full bg-gray-500 rounded-[10px] sm:rounded-[12px] md:rounded-[14px] p-0.5 sm:p-1 md:p-2'>
              <div className='w-full h-full bg-gray-600 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] p-0.5 sm:p-1 md:p-2'>
                <div className='w-full h-full bg-gray-700 rounded-[6px] sm:rounded-[8px] md:rounded-[10px] p-0.5 sm:p-1 md:p-2'>
                  <div className='w-full h-full bg-gray-800 rounded-[4px] sm:rounded-[6px] md:rounded-[8px] p-0.5 sm:p-1 md:p-2'>
                    <Image
                      src={hero.heroImgUrl}
                      width={1400}
                      height={1200}
                      alt='dashboard'
                      className='w-full h-full object-cover rounded-md'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
