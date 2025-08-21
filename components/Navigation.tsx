'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-custom shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo1.png" 
              alt="W&B TECHNOLOGIES" 
              className="h-14 lg:h-20 w-auto object-contain filter brightness-125 contrast-150 hover:scale-105 transition-transform duration-200 rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-african-teal ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-custom border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-african-teal transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="btn-primary block text-center"
                onClick={() => setIsOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 