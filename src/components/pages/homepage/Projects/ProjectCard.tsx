import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  project: {
    id: number
    tags: string[]
    category: string
    pinned: boolean
    images: string[]
    title: string
    description: string
    link: string
  }
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='rounded-md bg-tartiary overflow-hidden flex flex-col h-full'>
      <Image
        src={project.images[0]}
        width={600}
        height={400}
        alt={project.title}
        className='object-cover aspect-video'
      />
      <div className='p-4 flex flex-col flex-1'>
        <div className='flex-1'>
          <div className='flex items-center gap-2 flex-wrap'>
            {project.tags.map((tag) => (
              <div key={tag} className='text-[#60A5FA] bg-[#15233c] px-2 py-1 rounded-full text-xs font-medium'>
                {tag}
              </div>
            ))}
          </div>
          <h3 className='text-xl font-bold mt-2 mb-1'>{project.title}</h3>
          <p className='text-sm text-muted-foreground'>{project.description}</p>
        </div>
        <Link
          href={project.link}
          className='text-[#60A5FA] tex-sm font-medium mt-2 inline-flex items-center gap-x-3 w-auto'
        >
          View Project
          <ArrowRightIcon className='size-4' strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  )
}
