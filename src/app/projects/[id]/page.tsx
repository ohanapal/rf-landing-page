import ProjectHeader from '@/components/pages/project/projectDetails/ProjectHeader'
import ProjectTimeline from '@/components/pages/project/projectDetails/ProjectTimeline'
import data from '@/data/projects.json'

export interface IProject {
  id: number
  coverImageUrl: string
  tags: string[]
  title: string
  description: string
  projectUrl: string
  client: string
  date: string
  duration: string
  category: string
  theChallenge: string
  ourSolution: string
  gallery: string[]
  results: string[]
  quote: {
    text: string
    author: {
      name: string
      title: string
    }
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { projects } = data
  const { id } = await params
  const project: IProject = projects.find((project) => project.id === parseInt(id))!
  return (
    <div>
      <ProjectHeader project={project} />
      <div className='container'>
        <ProjectTimeline project={project} />
      </div>
    </div>
  )
}
