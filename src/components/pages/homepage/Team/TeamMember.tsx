import { BorderBeam } from '@/components/magicui/border-beam'
import Image from 'next/image'
import { getLucideIcon } from '../About/utils'

interface Props {
  member: {
    id: number
    name: string
    title: string
    description: string
    imageUrl: string
    socials: {
      id: number
      name: string
      url: string
      icon: string
    }[]
  }
}
export default function TeamMember({ member }: Props) {
  return (
    <div className='rounded-md overflow-hidden border border-white/5 bg-[#111827] relative'>
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={300}
        height={300}
        className='w-full h-auto aspect-square object-cover'
      />
      <div className='p-4 pt-8 space-y-2'>
        <h6 className='text-lg font-bold'>{member.name}</h6>
        <p className='text-primary text-sm font-medium'>{member.title}</p>
        <p className='text-muted-foreground text-sm'>{member.description}</p>
        <div className='flex items-center gap-x-3 mt-4'>
          {member.socials.map((social) => {
            const Icon = getLucideIcon(social.icon)
            return (
              <a href={social.url} target='_blank' rel='noopener noreferrer' key={social.id}>
                <Icon
                  className='size-5 text-muted-foreground hover:rotate-y-360 transition-all duration-300'
                  strokeWidth={1.5}
                />
              </a>
            )
          })}
        </div>
      </div>

      <BorderBeam duration={6} size={400} className='from-transparent via-red-500 to-transparent' />
      <BorderBeam duration={6} delay={3} size={400} className='from-transparent via-blue-500 to-transparent' />
    </div>
  )
}
