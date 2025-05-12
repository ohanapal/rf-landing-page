import Heading, { HeadingTitle } from '@/components/pages/homepage/common/Heading'
import ProjectCard from '@/components/pages/homepage/Projects/ProjectCard'
import data from '@/data/homepage.json'
import projectsData from '@/data/projects.json'

export default function ProjectsPage() {
  const { projects } = data
  const { projects: allProjects } = projectsData
  return (
    <section className='py-12 md:py-20 pt-16'>
      <div className='container'>
        <Heading title={projects.title as HeadingTitle[]} description={projects.description} />
      </div>

      <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto px-4'>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
