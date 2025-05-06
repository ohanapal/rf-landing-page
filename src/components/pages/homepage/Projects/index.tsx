import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { projects } = data
  return (
    <section className='pb-24 pt-16'>
      <div className='container'>
        <div className='max-w-3xl mx-auto text-center text-balance space-y-4 mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold'>
            {projects.title.text} <span className='text-primary'>{projects.title.span}</span>
          </h2>
          <p className='text-muted-foreground text-xl'>{projects.description}</p>
        </div>
      </div>

      <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto px-4'>
        {projects.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className='flex justify-center mt-5'>
        <Link href={projects.viewAllBtn.link}>
          <Button size='lg'>{projects.viewAllBtn.text}</Button>
        </Link>
      </div>
    </section>
  )
}
