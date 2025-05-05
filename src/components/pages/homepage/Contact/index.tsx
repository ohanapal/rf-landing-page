'use client'

import data from '@/data/homepage.json'

export default function Contact() {
  const { contact } = data
  return (
    <section className='container py-24'>
      <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
        <h2 className='text-4xl font-bold'>
          {contact.title.text} <span className='text-primary'>{contact.title.span}</span>
        </h2>
        <p className='text-muted-foreground text-xl'>{contact.description}</p>
      </div>
    </section>
  )
}
