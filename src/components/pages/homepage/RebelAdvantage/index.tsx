import data from '@/data/homepage.json'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import Heading, { HeadingTitle } from '../common/Heading'

export default function RebelAdvantage() {
  const { rebelAdvantage } = data
  return (
    <section id='rebeladvantage' className='pb-24 pt-16 container'>
      <Heading title={rebelAdvantage.title as HeadingTitle[]} description={rebelAdvantage.description} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 items-center'>
        <Image
          src={rebelAdvantage.imageUrl}
          alt={rebelAdvantage.title[1].content}
          width={800}
          height={700}
          className='w-full h-auto aspect-video object-cover rounded-md'
        />

        <div className='space-y-4'>
          {rebelAdvantage.items.map((item) => (
            <div key={item.id} className='space-y-2'>
              <div className='flex items-center gap-x-2'>
                <CircleCheck className='size-5 text-primary' />
                <h3 className='text-xl font-bold'>{item.title}</h3>
              </div>
              <p className='text-muted-foreground ml-8'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
