'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from '@/components/ui/carousel'
import data from '@/data/homepage.json'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const { testimonials } = data
  return (
    <div className='container py-24'>
      <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          {testimonials.title.text} <span className='text-primary'>{testimonials.title.span}</span>
        </h2>
        <p className='text-muted-foreground text-xl'>{testimonials.description}</p>
      </div>
      <div className='max-w-3xl mx-auto bg-[#0d0d0d] rounded-md p-4 sm:p-8'>
        <Carousel infiniteScroll itemsToShow={1}>
          <CarouselContent className='-ml-4'>
            {testimonials.testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className='pl-4'>
                <div className='flex flex-col items-center justify-center space-y-6 mb-8'>
                  <p className='bg-[#17253d] rounded-full px-4 py-1.5 text-primary font-semibold text-sm sm:text-base'>
                    {testimonial.credits}
                  </p>

                  <div className='flex gap-0.5'>
                    {Array.from({ length: testimonial.starCount }).map((_, index) => (
                      <Star key={index} className='size-5 text-[#eab308]' fill='currentColor' />
                    ))}
                  </div>

                  <p className='text-lg sm:text-2xl text-balance text-center'>{`"${testimonial.text}"`}</p>

                  <div className='flex items-center gap-x-3'>
                    <Image
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      width={48}
                      height={48}
                      className='size-10 sm:size-12 rounded-full border-2 border-primary'
                    />

                    <div className='flex flex-col'>
                      <p className='text-base sm:text-lg font-bold'>{testimonial.author.name}</p>
                      <p className='text-primary text-sm sm:text-base'>{testimonial.author.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            className=' -bottom-20 left-auto top-auto w-full justify-center gap-2'
            classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  )
}
