import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import Link from 'next/link'
export default function CTA() {
  const { cta } = data
  return (
    <section className='py-20'>
      <div className='container bg-[#07122c] py-15 rounded-lg shadow-sm space-y-6'>
        <div className='max-w-2xl mx-auto text-center text-balance space-y-4'>
          <h2 className='text-3xl font-bold text-center'>{cta.title}</h2>
          <p className='text-muted-foreground'>{cta.description}</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Link href={cta.getStartedBtn.link}>
            <Button>{cta.getStartedBtn.text}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
