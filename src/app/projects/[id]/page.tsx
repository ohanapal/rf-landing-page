import ProjectDetails from '@/components/pages/project/projectDetails'
import { Suspense } from 'react'

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
  const { id } = await params
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetails id={id} />
    </Suspense>
  )
}
