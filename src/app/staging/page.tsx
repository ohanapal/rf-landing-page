import About from '@/components/pages/homepage/About'
import Contact from '@/components/pages/homepage/Contact'
import CTA from '@/components/pages/homepage/CTA'
import CTOAsService from '@/components/pages/homepage/CTOAsService'
import Hero from '@/components/pages/homepage/Hero'
import Projects from '@/components/pages/homepage/Projects'
import RebelAdvantage from '@/components/pages/homepage/RebelAdvantage'
import Services from '@/components/pages/homepage/Services'
import Team from '@/components/pages/homepage/Team'
import Testimonials from '@/components/pages/homepage/Testimonials'
import data from '@/data/homepage.json'

export default function StagingPage() {
  const { cta, cta2, cta3, hero } = data
  return (
    <main className='overflow-x-hidden'>
      <Hero hero={hero} />
      <About />
      <Services />
      <CTA cta={cta} />
      <Projects />
      <RebelAdvantage />
      <CTOAsService />
      <CTA cta={cta2} />
      <Team />
      <Testimonials />
      <Contact />
      <CTA cta={cta3} />
    </main>
  )
}
