'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import logoDark from '@/assets/logo/logo-dark.png'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Navbar() {
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
        'top-5': isScrolled,
      })}
    >
      <div
        className={cn(
          'container flex items-center justify-between h-full py-2 w-full transition-all duration-500 backdrop-blur-lg rounded-none px-0 delay-100',
          {
            'bg-neutral-300/20 max-w-3xl rounded-full px-5': isScrolled,
          },
        )}
      >
        <Link href='/' className='h-full'>
          <Image src={logoDark} alt='logo' className='w-auto h-full' />
        </Link>

        <ul className='flex items-center gap-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <Button variant='outline'>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}
