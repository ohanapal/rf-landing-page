import ServicesTabs from './ServicesTabs'
import data from '@/data/homepage.json'

export default function Services() {
  const { services } = data
  return (
    <section className='py-24 bg-secondary-background'>
      <div className='container'>
        <div className='max-2xl mx-auto text-center text-balance space-y-4 mb-16'>
          <h2 className='text-3xl font-bold'>
            Our <span className='text-primary'>Services</span>
          </h2>
          <p className='text-muted-foreground text-xl'>
            We offer a wide range of technology solutions to help your business thrive in the digital galaxy.
          </p>
        </div>
        <ServicesTabs tabs={services.tabs} />
      </div>
    </section>
  )
}
