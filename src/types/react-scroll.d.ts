declare module 'react-scroll' {
  import { ComponentType } from 'react'

  export interface Link extends React.FC<LinkProps> {}

  export interface LinkProps {
    to: string
    spy?: boolean
    smooth?: boolean
    offset?: number
    duration?: number
    delay?: number
    isDynamic?: boolean
    containerId?: string
    activeClass?: string
    className?: string
    style?: React.CSSProperties
    onSetActive?: (to: string) => void
    onSetInactive?: (to: string) => void
    ignoreCancelEvents?: boolean
    hashSpy?: boolean
    spyThrottle?: number
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    children?: React.ReactNode
  }

  export const Link: Link
  export const Element: ComponentType<any>
  export const Events: any
  export const scrollSpy: any
  export const scroller: any
  export const animateScroll: any
}
