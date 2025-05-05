import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import Image from 'next/image'
import Link from 'next/link'
import Stripes from './Stripes'

export default function Hero() {
  const { hero } = data
  return (
    <section className='min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative overflow-hidden'>
      <Stripes />
      <div className='relative z-10'>
        <BackgroundBeamsWithCollision>
          <div className='flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center gap-8'>
            <h1 className='text-neutral-100 text-7xl font-semibold'>{hero.title.text}</h1>
            <h1 className='text-primary text-7xl font-semibold'>{hero.title.span}</h1>
            <p className='text-neutral-100 font-medium'>{hero.description}</p>
            <div className='flex items-center justify-center gap-5'>
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
          <div className='max-w-7xl mx-auto bg-gray-400 rounded-4xl border-2 p-2'>
            <div className='w-full h-full bg-gray-500 rounded-3xl p-2'>
              <div className='w-full h-full bg-gray-600 rounded-2xl p-2'>
                <div className='w-full h-full bg-gray-700 rounded-xl p-2'>
                  <div className='w-full h-full bg-gray-800 rounded-lg p-2'>
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
    </section>
  )
}
