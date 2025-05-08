import { IProject } from '@/app/projects/[id]/page'
import { Calendar, Clock, Tag, Users } from 'lucide-react'
import TimelinePart from './TimelinePart'

export default function ProjectTimeline({ project }: { project: IProject }) {
  return (
    <div className='bg-tartiary p-3 md:p-5 lg:p-8 rounded-md border border-border grid grid-cols-1 min-[300px]:grid-cols-2 md:grid-cols-4 gap-4 my-12'>
      <TimelinePart icon={Users} title='Client' content={project.client} />
      <TimelinePart icon={Calendar} title='Date' content={project.date} />
      <TimelinePart icon={Clock} title='Duration' content={project.duration} />
      <TimelinePart icon={Tag} title='Category' content={project.category} />
    </div>
  )
}
