'use client'
import logoDark from '@/assets/logo/logo-dark.png'
import { cn } from '@/lib/utils'
import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function TopNav({ setIsOpen }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={cn('fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 delay-100', {
        'top-5 left-2 right-2': isScrolled,
      })}
    >
      <div
        className={cn(
          'container flex items-center justify-between h-full py-2 w-full transition-all duration-500 rounded-none delay-100',
          {
            'bg-neutral-800/40 max-w-3xl rounded-full px-5 backdrop-blur-xl': isScrolled,
          },
        )}
      >
        <Link href='/' className='h-full'>
          <Image src={logoDark} alt='logo' className='w-auto h-full' />
        </Link>

        <ul className='hidden items-center gap-4 md:flex'>
          <li>
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
          <li>
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
          <li>
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

        <div className='flex items-center gap-4'>
          {/* <div className='hidden md:flex items-center gap-4'>
            <Button variant='outline'>Login</Button>
            <Button>Sign Up</Button>
          </div> */}

          <AlignRight className='w-6 h-6 md:hidden cursor-pointer' onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
  )
}
