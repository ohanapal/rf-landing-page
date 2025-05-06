import { MagicCard } from '@/components/magicui/magic-card'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import Link from 'next/link'
import Heading, { HeadingTitle } from '../common/Heading'
import AboutCardItem from './AboutCardItem'

export default function About() {
  const { about } = data
  return (
    <section className='container py-24'>
      <Heading title={about.title as HeadingTitle[]} description={about.description} />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center'>
        <div className='space-y-5 order-2 lg:order-1'>
          {about.texts.map((txt) => (
            <p className='text-muted-foreground text-lg' key={txt.id}>
              {txt.text.map((t, i) => (
                <span key={i}>
                  {t.type === 'text' ? t.content : <span className='text-primary'>{t.content}</span>}
                  {i !== txt.text.length - 1 && ' '}
                </span>
              ))}
            </p>
          ))}

          <Link href={about.learnMoreBtn.link}>
            <Button>{about.learnMoreBtn.text}</Button>
          </Link>
        </div>

        <MagicCard className='rounded-md backdrop-blur-3xl max-w-2xl mx-auto order-1 lg:order-2 lg:mx-0'>
          <div className='grid grid-cols-2 gap-1 sm:gap-3 bg-[#0d0d0d70] p-1.5 sm:p-3'>
            {about.cardItems.map((item) => (
              <AboutCardItem key={item.id} item={item} />
            ))}
          </div>
        </MagicCard>
      </div>
    </section>
  )
}
