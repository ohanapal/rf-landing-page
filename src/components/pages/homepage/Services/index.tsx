import data from '@/data/homepage.json'
import ServicesTabs from './ServicesTabs'

export default function Services() {
  const { services } = data
  return (
    <section className='py-24 bg-secondary-background'>
      <div className='container'>
        <div className='max-2xl mx-auto text-center text-balance space-y-4 mb-16'>
          <h2 className='text-3xl font-bold'>
            {services.title.text} <span className='text-primary'>{services.title.span}</span>
          </h2>
          <p className='text-muted-foreground text-xl'>{services.description}</p>
        </div>
        <ServicesTabs tabs={services.tabs} />
      </div>
    </section>
  )
}
