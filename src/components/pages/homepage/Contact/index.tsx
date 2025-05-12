'use client'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Button } from '@/components/ui/button'
import { contactApi } from '@/configs'
import data from '@/data/homepage.json'
import { Loader2 } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import Heading, { HeadingTitle } from '../common/Heading'
import InputGroup from './InputGroup'

export default function Contact() {
  const { contact } = data

  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const [formData, setformData] = useState(initialFormData)

  const [isLoading, setisLoading] = useState(false)

  const handleOnchangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill all the fields')
      return
    }
    setisLoading(true)
    toast.loading('Sending message...')
    try {
      await fetch(contactApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setisLoading(false)
      toast.dismiss()
      toast.success('Message sent successfully!')
      setformData(initialFormData)
    } catch (error) {
      setformData(initialFormData)
      setisLoading(false)
      toast.dismiss()
      toast.error((error as Error).message)
    }
  }

  return (
    <section id='contact' className='container py-16 md:py-20 lg:py-24'>
      <Heading title={contact.title as HeadingTitle[]} description={contact.description} />

      <form
        className='max-w-2xl mx-auto p-4 sm:p-6 bg-[#0d0d0d] rounded-md border border-border relative'
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <InputGroup
            id='name'
            label='Name'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleOnchangeInput}
          />
          <InputGroup
            id='email'
            label='Email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleOnchangeInput}
          />
        </div>
        <InputGroup
          className='mt-6'
          id='subject'
          label='Subject'
          placeholder='Enter your subject'
          name='subject'
          value={formData.subject}
          onChange={handleOnchangeInput}
        />
        <InputGroup
          className='mt-6'
          id='message'
          label='Message'
          placeholder='Enter your message'
          name='message'
          value={formData.message}
          onChange={handleOnchangeInput}
          isTextarea
          rows={5}
          textareaClassName='resize-none min-h-28'
        />
        <Button type='submit' className='w-full mt-6' disabled={isLoading}>
          {isLoading ? <Loader2 className='size-4 animate-spin' /> : 'Send Message'}
        </Button>

        <BorderBeam duration={8} size={100} />
      </form>
    </section>
  )
}
