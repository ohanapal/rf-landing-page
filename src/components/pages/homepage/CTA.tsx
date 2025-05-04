import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className='py-20'>
      <div className='container bg-[#07122c] py-15 rounded-lg shadow-sm space-y-6'>
        <div className='max-w-2xl mx-auto text-center text-balance space-y-4'>
          <h2 className='text-3xl font-bold text-center'>Ready to Transform Your Business?</h2>
          <p className='text-muted-foreground'>
            Our expert team can help you implement cutting-edge technology solutions that drive real results.
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Button>Get Started</Button>
          <Button variant='outline'>Learn More</Button>
        </div>
      </div>
    </section>
  )
}
