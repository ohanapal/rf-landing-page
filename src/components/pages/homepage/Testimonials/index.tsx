'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from '@/components/ui/carousel'
import data from '@/data/homepage.json'

export default function Testimonials() {
  const { testimonials } = data
  return (
    <div className='container py-24'>
      <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
        <h2 className='text-4xl font-bold'>
          {testimonials.title.text} <span className='text-primary'>{testimonials.title.span}</span>
        </h2>
        <p className='text-muted-foreground text-xl'>{testimonials.description}</p>
      </div>

      <div className='max-w-3xl mx-auto relative bg-[#0d0d0d] rounded-md p-5'>
        <Carousel>
          <CarouselContent className='-ml-4'>
            {testimonials.testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  {testimonial.text}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            className='absolute -bottom-20 left-auto top-auto w-full justify-center gap-2'
            classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  )
}
