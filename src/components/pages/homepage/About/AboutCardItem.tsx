import { getLucideIcon } from './utils'

export default function AboutCardItem({
  item,
}: {
  item: { id: number; title: string; description: string; icon: string }
}) {
  const Icon = getLucideIcon(item.icon)

  return (
    <div key={item.id} className='flex flex-col items-center justify-center gap-3 text-center text-balance'>
      <div className='bg-[#121924] rounded-md size-16 flex items-center justify-center'>
        <Icon className='size-8 text-primary' />
      </div>
      <h5 className='text-xl font-bold'>{item.title}</h5>
      <p className='text-muted-foreground'>{item.description}</p>
    </div>
  )
}
