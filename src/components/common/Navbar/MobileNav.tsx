import logoDark from '@/assets/logo/logo-dark.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileNav({ isOpen, setIsOpen }: Props) {
  return (
    <nav
      className={cn(
        'fixed top-0 w-80 bg-[#030712] h-screen z-50 px-5 transition-all duration-500 flex flex-col justify-between py-6',
        isOpen ? 'right-0' : '-right-80',
      )}
    >
      <div>
        <div className='flex items-center justify-between'>
          <Link href='/' className='h-12'>
            <Image src={logoDark} alt='logo' className='w-auto h-12' />
          </Link>

          <X onClick={() => setIsOpen(false)} className='cursor-pointer' />
        </div>

        <ul className='space-y-4 text-center mt-8'>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/about'>About</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-2 w-full'>
        <Button variant='outline' className='w-[calc(50%-4px)]'>
          Login
        </Button>
        <Button className='w-[calc(50%-4px)]'>Sign Up</Button>
      </div>
    </nav>
  )
}
