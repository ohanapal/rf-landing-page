import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Props {
  cta: {
    title: string
    description: string
    btn1: {
      text: string
      link: string
    }
    btn2?: {
      text: string
      link: string
    }
    isGradientBg?: boolean
  }
}
export default function CTA({ cta }: Props) {
  return (
    <section className='py-20 px-4'>
      <div
        className={cn('container py-15 bg-[#0e1420] rounded-lg shadow-sm space-y-6', {
          'bg-gradient-to-r from-[#2563EB33] via-[#9333EA33] to-[#DC262633]': cta?.isGradientBg,
        })}
      >
        <div className='max-w-2xl mx-auto text-center space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-center'>{cta.title}</h2>
          <p className='text-muted-foreground'>{cta.description}</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Link href={cta.btn1.link}>
            <Button className='flex items-center gap-x-2'>
              {cta.btn1.text}
              <ArrowRight className='size-4' />
            </Button>
          </Link>
          {cta?.btn2?.link && (
            <Link href={cta.btn2.link}>
              <Button variant='outline'>{cta.btn2.text}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
