import { MagicCard } from '@/components/magicui/magic-card'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import AboutCardItem from './AboutCardItem'

export default function About() {
  const { about } = data
  return (
    <section className='container py-32'>
      <div className='max-2xl mx-auto text-center text-balance space-y-4 mb-16'>
        <h2 className='text-4xl font-bold'>
          About <span className='text-primary'>Rebel Force</span>
        </h2>
        <p className='text-muted-foreground text-xl'>
          We deliver cutting-edge technology solutions that drive real business results.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-x-12 gap-y-4 items-center'>
        <div className='space-y-5'>
          <p className='text-muted-foreground text-lg'>
            <span className='text-primary'>Rebel Force</span> is a leading technology company that transforms how
            businesses operate in the digital landscape. Since our inception, we&apos;ve helped over{' '}
            <span className='text-primary'>200+ clients</span> achieve their strategic goals through innovative
            technology solutions.
          </p>

          <p className='text-muted-foreground text-lg'>
            Our team combines creative thinking with technical expertise to deliver solutions that are not just
            functional but transformative. We don&apos;t just build technology; we build{' '}
            <span className='text-primary'>competitive advantages.</span>
          </p>

          <p className='text-muted-foreground text-lg'>
            Whether you&apos;re looking to optimize operations, enhance customer experiences, or disrupt your industry,
            we have the expertise and experience to help you succeed.
          </p>
          <Button>Learn More</Button>
        </div>

        <MagicCard className='rounded-md p-3'>
          <div className='grid grid-cols-2 gap-3'>
            {about.cardItems.map((item) => (
              <AboutCardItem key={item.id} item={item} />
            ))}
          </div>
        </MagicCard>
      </div>
    </section>
  )
}
