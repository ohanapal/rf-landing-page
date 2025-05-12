import logoDark from '@/assets/logo/logo-dark.png'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { navLinks } from './TopNav'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileNav({ isOpen, setIsOpen }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

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
    setIsOpen(false)
    if (!isHomePage) {
      router.push(`/#${href}`)
    }
  }

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

        <ul className='space-y-6 text-center mt-8'>
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
                  onClick={() => setIsOpen(false)}
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
      </div>
    </nav>
  )
}
