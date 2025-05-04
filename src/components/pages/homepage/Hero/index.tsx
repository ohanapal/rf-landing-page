import dashboardImg from '@/assets/images/homepage/hero/hero.jpg'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Stripes from './Stripes'

export default function Hero() {
  return (
    <section className='min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative overflow-hidden'>
      <Stripes />
      <div className='relative z-10'>
        <BackgroundBeamsWithCollision>
          <div className='flex flex-col items-center justify-center h-full max-w-3xl mx-auto text-center text-balance gap-8'>
            <h1 className='text-neutral-100 text-7xl font-semibold'>Deploy your website in seconds, not hours.</h1>
            <p className='text-neutral-100 font-medium'>
              With our state of the art, cutting edge, we are so back kinda hosting services, you can deploy your
              website in seconds.
            </p>
            <div className='flex items-center justify-center gap-5'>
              <Button>Get Started</Button>
              <Button variant='outline'>Learn More</Button>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        <div className='pb-32'>
          <div className='max-w-7xl mx-auto bg-gray-400 rounded-4xl border-2 p-2'>
            <div className='w-full h-full bg-gray-500 rounded-3xl p-2'>
              <div className='w-full h-full bg-gray-600 rounded-2xl p-2'>
                <div className='w-full h-full bg-gray-700 rounded-xl p-2'>
                  <div className='w-full h-full bg-gray-800 rounded-lg p-2'>
                    <Image src={dashboardImg} alt='dashboard' className='w-full h-full object-cover rounded-md' />
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
