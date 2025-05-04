// lib/getLucideIcon.ts or utils/getLucideIcon.ts
import * as Icons from 'lucide-react'

export function getLucideIcon(iconName: string) {
  const icon = iconName.split(':')[1] // e.g., "rocket" from "lucide:rocket"
  const iconKey = (icon?.charAt(0).toUpperCase() + icon?.slice(1)) as keyof typeof Icons
  const IconComponent = Icons[iconKey] as React.ElementType

  return IconComponent || Icons.HelpCircle // fallback icon
}
