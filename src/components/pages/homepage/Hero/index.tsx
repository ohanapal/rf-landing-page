import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import Image from 'next/image'
import Link from 'next/link'
import Stripes from './Stripes'

export default function Hero() {
  const { hero } = data
  return (
    <header className='min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative overflow-hidden px-4 pt-12'>
      <Stripes />
      <div className='relative z-10'>
        <BackgroundBeamsWithCollision>
          <div className='flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center'>
            <h1 className='text-neutral-100 text-4xl md:text-5xl lg:text-7xl font-semibold'>{hero.title.text}</h1>
            <h1 className='text-primary text-4xl md:text-5xl lg:text-7xl font-semibold'>{hero.title.span}</h1>
            <p className='text-neutral-100 font-medium py-8'>{hero.description}</p>
            <div className='flex flex-wrap items-center justify-center gap-5'>
              <Link href={hero.scheduleBtn.link}>
                <Button>{hero.scheduleBtn.text}</Button>
              </Link>
              <Link href={hero.exploreBtn.link}>
                <Button variant='outline'>{hero.exploreBtn.text}</Button>
              </Link>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        <div className='pb-32'>
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
        </div>
      </div>
    </header>
  )
}
