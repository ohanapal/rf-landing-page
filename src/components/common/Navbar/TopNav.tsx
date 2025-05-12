'use client'
import logoDark from '@/assets/logo/logo-dark.png'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { cn } from '@/lib/utils'
import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const navLinks = [
  {
    label: 'Home',
    href: 'home',
  },
  {
    label: 'About',
    href: 'about',
  },
  {
    label: 'Services',
    href: 'services',
  },
  {
    label: 'Projects',
    href: 'projects',
  },
  {
    label: 'Contact',
    href: 'contact',
  },
]

export default function TopNav({ setIsOpen }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

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

  // Handle hash navigation with smooth scrolling when on homepage
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust offset as needed
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }, [isHomePage, pathname])

  const handleNavClick = (href: string) => {
    if (!isHomePage) {
      router.push(`/#${href}`)
    }
  }

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
          {navLinks.map((link) => (
            <li key={link.href}>
              {isHomePage ? (
                <ScrollLink
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='cursor-pointer hover:text-primary transition-colors'
                  activeClass='text-primary font-medium'
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <Link
                  href={`/#${link.href}`}
                  className='cursor-pointer hover:text-primary transition-colors'
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div>
          <a
            href='https://calendly.com/abraranwar09'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden md:inline-block'
          >
            <RainbowButton variant='custom' className='bg-primary text-white'>
              Schedule a Call
            </RainbowButton>
          </a>
          <AlignRight className='w-6 h-6 md:hidden cursor-pointer' onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
  )
}
