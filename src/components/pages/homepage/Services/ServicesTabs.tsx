import { Tabs, TabsList, TabsTrigger } from '@/components/ui/vertical-tabs'
import { getLucideIcon } from '../About/utils'
import ServiceTabContent from './ServiceTabContent'

interface ServiceTabContent {
  img: string
  title: string
  description: string
  listItems: string[]
}

export interface ServiceTab {
  id: number
  title: string
  icon: string
  content: ServiceTabContent
}

interface Props {
  tabs: ServiceTab[]
}

export default function ServicesTabs({ tabs }: Props) {
  return (
    <Tabs defaultValue='tab-1' orientation='vertical' className='flex w-full max-w-4xl mx-auto gap-5'>
      <TabsList className='flex-col rounded-none bg-transparent p-0'>
        {tabs.map((tab) => {
          const Icon = getLucideIcon(tab.icon)
          return (
            <TabsTrigger
              key={tab.id}
              value={`tab-${tab.id}`}
              className='relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-[#111827] data-[state=active]:shadow-none data-[state=active]:after:bg-primary cursor-pointer text-sm font-medium h-11'
            >
              <Icon className='size-5 mr-3' />
              {tab.title}
            </TabsTrigger>
          )
        })}
      </TabsList>
      <div className='grow rounded-lg border border-border text-start bg-[#111827] p-4'>
        {tabs.map((tab) => (
          <ServiceTabContent key={tab.id} tab={tab} />
        ))}
      </div>
    </Tabs>
  )
}
