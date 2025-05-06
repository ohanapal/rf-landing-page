import logoDark from '@/assets/logo/logo-dark.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { Link as ScrollLink } from 'react-scroll'

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
            <ScrollLink
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer hover:text-primary transition-colors'
              activeClass='text-primary font-medium'
            >
              Home
            </ScrollLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <ScrollLink
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer hover:text-primary transition-colors'
              activeClass='text-primary font-medium'
            >
              About
            </ScrollLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer hover:text-primary transition-colors'
              activeClass='text-primary font-medium'
            >
              Contact
            </ScrollLink>
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
