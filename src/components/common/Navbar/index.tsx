'use client'
import { useState } from 'react'
import MobileNav from './MobileNav'
import TopNav from './TopNav'

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>
      <TopNav setIsOpen={setIsMobileNavOpen} />
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
    </>
  )
}
