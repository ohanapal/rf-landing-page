import { IProject } from '@/app/projects/[id]/page'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  project: IProject
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='rounded-md bg-tartiary overflow-hidden h-full'>
      <div className='relative h-full border rounded-md flex flex-col'>
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <Image
          src={project.coverImageUrl}
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
            <p className='text-sm text-muted-foreground line-clamp-6'>{project.description}</p>
          </div>
          <Link
            href={`/projects/${project.id}`}
            className='text-[#60A5FA] tex-sm font-medium mt-2 inline-flex items-center gap-x-3 w-auto group'
          >
            View Project
            <ArrowRightIcon className='size-4 group-hover:translate-x-1 transition-all mt-1' strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  )
}
