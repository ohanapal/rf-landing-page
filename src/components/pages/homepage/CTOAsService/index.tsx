import { GlowingEffect } from '@/components/ui/glowing-effect'
import data from '@/data/homepage.json'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import Heading, { HeadingTitle } from '../common/Heading'
import LeftItem from './LeftItem'

export default function CTOAsService() {
  const { ctoAsService } = data
  return (
    <section id='ctoasservice' className='container py-16 md:py-20 lg:py-24'>
      <Heading title={ctoAsService.title as HeadingTitle[]} description={ctoAsService.description} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 items-center'>
        <div className='space-y-6'>
          <h3 className='text-2xl md:text-3xl font-bold'>{ctoAsService.leftContent.title}</h3>
          <p className='text-muted-foreground text-lg'>{ctoAsService.leftContent.description}</p>

          <div className='space-y-8 sm:space-y-5'>
            {ctoAsService.leftContent.items.map((item) => (
              <LeftItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className='rounded-md overflow-hidden border border-white/5 bg-[#0d0d0d]'>
          <div className='relative h-full border rounded-md'>
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Image
              src={ctoAsService.rightContent.imageUrl}
              alt={ctoAsService.rightContent.title}
              width={600}
              height={200}
              className='w-full h-auto aspect-video object-top object-cover'
            />
            <div className='p-4 sm:p-6 space-y-5'>
              <h3 className='text-2xl font-bold'>{ctoAsService.rightContent.title}</h3>
              <div className='space-y-3'>
                {ctoAsService.rightContent.items.map((item) => (
                  <div key={item.id} className='flex gap-x-3'>
                    <CircleCheck className='size-6 text-primary mt-1' />
                    <p className='text-base'>
                      <span className='font-bold'>{item.title}</span> {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className='bg-[#121924] rounded-md p-3 sm:p-5 space-y-2.5'>
                <p className='text-muted-foreground text-sm'>{ctoAsService.rightContent.quote.text}</p>
                <p className='text-sm font-bold'> — {ctoAsService.rightContent.quote.author}</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
