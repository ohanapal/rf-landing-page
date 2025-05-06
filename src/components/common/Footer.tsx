'use client'
import logo from '@/assets/logo/logo-dark.png'
import data from '@/data/homepage.json'
import Image from 'next/image'
import Link from 'next/link'

interface ILink {
  id: number
  text: string
  link?: string
  url?: string
  icon?: string
}

export default function Footer() {
  const { footer } = data
  return (
    <footer className='bg-background text-foreground border-t border-border py-14'>
      <div className='container flex flex-col md:flex-row gap-x-10 gap-y-8'>
        <div className='flex flex-col gap-y-2 w-full md:w-2/5'>
          <div className='h-14'>
            <Image src={logo} alt='logo' className='w-auto h-full' />
          </div>
          <p className='text-[#9CA3AF] text-sm'>{footer.text}</p>
          <p className='text-[#6B7280] text-xs'>
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>

        <div className='flex flex-wrap justify-between md:justify-start md:flex-nowrap gap-8 w-full md:w-3/5'>
          {footer.links.map((link) => (
            <div key={link.type} className='space-y-4 w-auto md:w-1/3'>
              <h3 className='text-sm font-bold'>{link.type}</h3>
              <ul className='flex flex-col gap-y-2'>
                {link.links.map((link: ILink) => (
                  <li key={link.id}>
                    {link?.link ? (
                      <Link href={link.link} className='text-[#6B7280] hover:underline underline-offset-2'>
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[#6B7280] hover:underline underline-offset-2'
                      >
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
