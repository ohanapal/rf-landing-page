'use client'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import { ChangeEvent, useState } from 'react'
import Heading, { HeadingTitle } from '../common/Heading'
import InputGroup from './InputGroup'

export default function Contact() {
  const { contact } = data

  const [formData, setformData] = useState({
    name: '',
    email: '',
  })

  const handleOnchangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className='container py-24'>
      <Heading title={contact.title as HeadingTitle[]} description={contact.description} />

      <form
        className='max-w-2xl mx-auto p-4 sm:p-6 bg-[#0d0d0d] rounded-md border border-border relative'
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <InputGroup id='name' label='Name' placeholder='Enter your name' name='name' onChange={handleOnchangeInput} />
          <InputGroup
            id='email'
            label='Email'
            placeholder='Enter your email'
            name='email'
            onChange={handleOnchangeInput}
          />
        </div>
        <InputGroup
          className='mt-6'
          id='subject'
          label='Subject'
          placeholder='Enter your subject'
          name='subject'
          onChange={handleOnchangeInput}
        />
        <InputGroup
          className='mt-6'
          id='message'
          label='Message'
          placeholder='Enter your message'
          name='message'
          onChange={handleOnchangeInput}
          isTextarea
          rows={5}
          textareaClassName='resize-none min-h-28'
        />
        <Button type='submit' className='w-full mt-6'>
          Send Message
        </Button>

        <BorderBeam duration={8} size={100} />
      </form>
    </section>
  )
}
