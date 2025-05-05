import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { ChangeEvent } from 'react'

export default function InputGroup({
  id,
  label,
  isTextarea = false,
  className,
  ...rest
}: {
  id: string
  label: string
  placeholder: string
  className?: string
  isTextarea?: boolean
  name?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {
  return (
    <div className={cn('space-y-3', className)}>
      <Label htmlFor={id}>{label}</Label>
      {isTextarea ? <Textarea id={id} {...rest} /> : <Input id={id} {...rest} />}
    </div>
  )
}
