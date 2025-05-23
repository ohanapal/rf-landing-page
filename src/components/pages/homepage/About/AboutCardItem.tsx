import { getLucideIcon } from './utils'

export default function AboutCardItem({
  item,
}: {
  item: { id: number; title: string; description: string; icon: string }
}) {
  const Icon = getLucideIcon(item.icon)

  return (
    <div
      key={item.id}
      className='flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-center text-balance my-2'
    >
      <div className='bg-[#121924] rounded-md size-12 sm:size-16 flex items-center justify-center'>
        <Icon className='size-6 sm:size-8 text-primary' />
      </div>
      <h5 className='text-lg sm:text-xl font-bold'>{item.title}</h5>
      <p className='text-muted-foreground text-xs sm:text-base'>{item.description}</p>
    </div>
  )
}
