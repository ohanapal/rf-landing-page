import { TabsContent } from '@/components/ui/vertical-tabs'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import { ServiceTab } from './ServicesTabs'
export default function ServiceTabContent({ tab }: { tab: ServiceTab }) {
  return (
    <TabsContent key={tab.id} value={`tab-${tab.id}`} className='flex flex-col sm:flex-row gap-5 mt-0'>
      <Image
        src={tab.content.img}
        alt={tab.title}
        width={300}
        height={600}
        className='h-full w-full sm:w-1/3 max-w-full sm:max-w-[300px] aspect-[3/4] object-cover rounded-md'
      />
      <div className='flex flex-col gap-4 w-full sm:w-2/3'>
        <h3 className='text-2xl font-bold'>{tab.title}</h3>
        <p className='text-muted-foreground'>{tab.content.description}</p>
        <ul className='space-y-2'>
          {tab.content.listItems.map((item) => (
            <li key={item} className='flex items-center gap-2'>
              <CircleCheck className='size-5 text-primary' />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </TabsContent>
  )
}
