import data from '@/data/homepage.json'
import Heading, { HeadingTitle } from '../common/Heading'
import ServicesTabs from './ServicesTabs'

export default function Services() {
  const { services } = data
  return (
    <section id='services' className='py-16 md:py-20 lg:py-24 bg-secondary-background'>
      <div className='container'>
        <Heading title={services.title as HeadingTitle[]} description={services.description} />
        <ServicesTabs tabs={services.tabs} />
      </div>
    </section>
  )
}
