import About from '@/components/pages/homepage/About'
import CTA from '@/components/pages/homepage/CTA'
import CTOAsService from '@/components/pages/homepage/CTOAsService'
import Hero from '@/components/pages/homepage/Hero'
import Projects from '@/components/pages/homepage/Projects'
import RebelAdvantage from '@/components/pages/homepage/RebelAdvantage'
import Services from '@/components/pages/homepage/Services'
import Team from '@/components/pages/homepage/Team'
import Testimonials from '@/components/pages/homepage/Testimonials'
import data from '@/data/homepage.json'

export default function Home() {
  const { cta, cta2 } = data
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CTA cta={cta} />
      <Projects />
      <RebelAdvantage />
      <CTOAsService />
      <CTA cta={cta2} />
      <Team />
      <Testimonials />
    </main>
  )
}
