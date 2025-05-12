import { IProject } from '@/app/projects/[id]/page'
import { Button } from '@/components/ui/button'
import data from '@/data/homepage.json'
import projectsData from '@/data/projects.json'
import Link from 'next/link'
import Heading, { HeadingTitle } from '../common/Heading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { projects } = data
  const { projects: allProjects } = projectsData
  const pinnedProjects = allProjects.filter((project: IProject) => project.isPinned)
  return (
    <section id='projects' className='pb-24 pt-16'>
      <div className='container'>
        <Heading title={projects.title as HeadingTitle[]} description={projects.description} />
      </div>

      <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto px-4'>
        {pinnedProjects.map((project) => (
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
