import data from '@/data/homepage.json'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

export default function RebelAdvantage() {
  const { rebelAdvantage } = data
  return (
    <section className='pb-24 pt-16 container'>
      <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
        <h2 className='text-3xl font-bold'>
          {rebelAdvantage.title.map((title, i) => (
            <span key={title.content}>
              {title.type === 'text' ? title.content : <span className='text-primary'>{title.content}</span>}{' '}
              {i !== rebelAdvantage.title.length - 1 && ' '}
            </span>
          ))}
        </h2>
        <p className='text-muted-foreground text-xl mx-auto'>{rebelAdvantage.description}</p>
      </div>

      <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
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
