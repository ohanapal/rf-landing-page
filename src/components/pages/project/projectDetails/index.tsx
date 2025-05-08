import CTA from '@/components/pages/homepage/CTA'
import ProjectHeader from '@/components/pages/project/projectDetails/ProjectHeader'
import ProjectTimeline from '@/components/pages/project/projectDetails/ProjectTimeline'
import data from '@/data/projects.json'
import { CircleCheck, Quote } from 'lucide-react'
import Image from 'next/image'

const cta = {
  title: 'Ready to start your next project?',
  description: 'Contact us today to discuss your project and how we can help you achieve your goals.',
  btn1: {
    text: 'Get in touch',
    link: '/contact',
  },
  btn2: {
    text: 'View our portfolio',
    link: '/projects',
  },
}

export default function ProjectDetails({ id }: { id: string }) {
  const { projects } = data
  const project = projects.find((project) => project.id === parseInt(id))
  if (!project) {
    return <div>Project not found</div>
  }
  return (
    <div className='pt-16'>
      <ProjectHeader project={project} />
      <div className='container'>
        <ProjectTimeline project={project} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-6'>
          <div className='space-y-5'>
            <h2 className='text-2xl md:text-3xl font-bold'>The Challenge</h2>
            <p className='text-[#D1D5DB]'>{project.theChallenge}</p>
          </div>
          <div className='space-y-5'>
            <h2 className='text-2xl md:text-3xl font-bold'>Our Solution</h2>
            <p className='text-[#D1D5DB]'>{project.ourSolution}</p>
          </div>
        </div>

        <div className='my-12 md:my-24 space-y-5'>
          <h2 className='text-2xl md:text-3xl font-bold'>Gallery</h2>
          <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-4'>
            {project.gallery.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={project.title}
                width={500}
                height={400}
                className='aspect-video object-cover'
              />
            ))}
          </div>
        </div>

        <div className='my-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-5'>Results</h2>
          <div className='bg-tartiary p-3 md:p-5 lg:p-8 rounded-md border border-border grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8'>
            {project.results.map((result, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div className='flex items-center justify-center bg-[#192d50] size-8 rounded-full'>
                  <CircleCheck className='size-4 text-primary' />
                </div>
                <p className='text-[#D1D5DB]'>{result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-tartiary p-3 md:p-5 lg:p-8 rounded-md border border-border space-y-6 text-center text-balance mt-12 md:mt-24 mb-0 md:mb-12'>
          <div className='size-16 rounded-full bg-[#192d50] flex items-center justify-center mx-auto'>
            <Quote className='size-5 text-primary' />
          </div>
          <p className='italic text-xl text-[##D1D5DB]'>{project.quote.text}</p>
          <div className='mx-auto space-y-1'>
            <p className='text-lg font-bold'>{project.quote.author.name}</p>
            <p className='text-muted-foreground'>{project.quote.author.title}</p>
          </div>
        </div>

        <CTA cta={cta} className='mt-0 mb-12 px-0' />
      </div>
    </div>
  )
}
