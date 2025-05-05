import data from '@/data/homepage.json'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import LeftItem from './LeftItem'

export default function CTOAsService() {
  const { ctoAsService } = data
  return (
    <section className='container py-24'>
      <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
        <h2 className='text-4xl font-bold'>
          {ctoAsService.title.text} <span className='text-primary'>{ctoAsService.title.span}</span>
        </h2>
        <p className='text-muted-foreground text-xl'>{ctoAsService.description}</p>
      </div>

      <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
        <div className='space-y-6'>
          <h3 className='text-3xl font-bold'>{ctoAsService.leftContent.title}</h3>
          <p className='text-muted-foreground text-lg'>{ctoAsService.leftContent.description}</p>

          <div className='space-y-5'>
            {ctoAsService.leftContent.items.map((item) => (
              <LeftItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className='rounded-md overflow-hidden border border-white/5'>
          <Image
            src={ctoAsService.rightContent.imageUrl}
            alt={ctoAsService.rightContent.title}
            width={600}
            height={200}
            className='w-full h-auto aspect-[3/1] object-cover'
          />

          <div className='p-6 space-y-5'>
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

            <div className='bg-[#121924] rounded-md p-5 space-y-2.5'>
              <p className='text-muted-foreground text-sm'>{ctoAsService.rightContent.quote.text}</p>
              <p className='text-sm font-bold'> — {ctoAsService.rightContent.quote.author}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
