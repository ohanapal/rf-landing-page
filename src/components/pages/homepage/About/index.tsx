import { MagicCard } from '@/components/magicui/magic-card'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import AboutCardItem from './AboutCardItem'
import Link from 'next/link'

export default function About() {
  const { about } = data
  return (
    <section className='container py-24'>
      <div className='max-2xl mx-auto text-center text-balance space-y-4 mb-16'>
        <h2 className='text-4xl font-bold'>
          About <span className='text-primary'>{about.title}</span>
        </h2>
        <p className='text-muted-foreground text-xl'>{about.description}</p>
      </div>

      <div className='grid grid-cols-2 gap-x-12 gap-y-4 items-center'>
        <div className='space-y-5'>
          {about.texts.map((txt) => (
            <p className='text-muted-foreground text-lg' key={txt.id}>
              {txt.text.map((t, i) => (
                <span key={i}>
                  {t.type === 'text' ? t.content : <span className='text-primary'>{`${t.content} `}</span>}
                </span>
              ))}
            </p>
          ))}

          <Link href={about.learnMoreBtn.link}>
            <Button>{about.learnMoreBtn.text}</Button>
          </Link>
        </div>

        <MagicCard className='rounded-md backdrop-blur-3xl'>
          <div className='grid grid-cols-2 gap-3 bg-[#0d0d0d70] p-3'>
            {about.cardItems.map((item) => (
              <AboutCardItem key={item.id} item={item} />
            ))}
          </div>
        </MagicCard>
      </div>
    </section>
  )
}
