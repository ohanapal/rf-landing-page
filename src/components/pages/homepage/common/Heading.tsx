import { AuroraText } from '@/components/magicui/aurora-text'

export interface HeadingTitle {
  type: 'text' | 'span'
  content: string
}

interface Props {
  title: HeadingTitle[]
  description: string
}

export default function Heading({ title, description }: Props) {
  return (
    <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
        {title.map((t, i) => (
          <span key={t.content}>
            {t.type === 'text' ? t.content : <AuroraText>{t.content}</AuroraText>}
            {i !== title.length - 1 && ' '}
          </span>
        ))}
      </h2>
      <p className='text-muted-foreground text-xl mx-auto'>{description}</p>
    </div>
  )
}
