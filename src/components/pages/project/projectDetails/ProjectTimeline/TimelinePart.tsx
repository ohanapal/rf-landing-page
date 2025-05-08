import { ElementType, SVGProps } from 'react'

interface Props {
  icon: ElementType<SVGProps<SVGSVGElement>>
  title: string
  content: string
}

export default function TimelinePart({ icon: Icon, title, content }: Props) {
  return (
    <div className='space-y-2'>
      <div className='flex items-center gap-2'>
        <Icon className='size-5 text-primary' />
        <h3 className='font-medium'>{title}</h3>
      </div>
      <p className='text-muted-foreground'>{content}</p>
    </div>
  )
}
