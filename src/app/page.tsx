import About from '@/components/pages/homepage/About'
import CTA from '@/components/pages/homepage/CTA'
import Hero from '@/components/pages/homepage/Hero'
import Services from '@/components/pages/homepage/Services'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CTA />
    </main>
  )
}
