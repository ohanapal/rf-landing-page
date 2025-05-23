import { getLucideIcon } from '../About/utils'

export default function LeftItem({
  item,
}: {
  item: {
    id: number
    title: string
    description: string
    icon: string
  }
}) {
  const Icon = getLucideIcon(item.icon)
  return (
    <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
      <div className='bg-[#060d19] rounded-full min-w-12 size-12 flex items-center justify-center'>
        <Icon className='size-6 text-primary' />
      </div>
      <div className='space-y-2 text-center sm:text-left'>
        <h5 className='text-xl font-bold'>{item.title}</h5>
        <p className='text-muted-foreground text-base'>{item.description}</p>
      </div>
    </div>
  )
}
