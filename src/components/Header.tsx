'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 w-full overflow-hidden">
        <div className="container-custom w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm space-y-1 sm:space-y-0 w-full">
            <div className="flex flex-col xs:flex-row items-center space-y-1 xs:space-y-0 xs:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>(555) 123-FIT</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">123 Fitness St, Health City</span>
                <span className="xs:hidden">Health City</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <span>Mon-Fri: 5AM-10PM | Sat-Sun: 6AM-8PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 w-full overflow-hidden">
        <div className="container-custom w-full">
          <div className="flex items-center justify-between py-2 sm:py-3 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">FP</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold gradient-text truncate">FitLife Pro</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Premium Fitness</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="#contact" className="btn-secondary text-base px-6 py-3">
                Free Trial
              </Link>
              <Link href="#pricing" className="btn-primary text-base px-6 py-3">
                Join Now
              </Link>
            </div>

            {/* Mobile CTA Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link href="#pricing" className="btn-primary text-xs px-3 py-2">
                Join Now
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 w-full overflow-hidden">
              <nav className="flex flex-col space-y-3 w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-md hover:bg-gray-50 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 px-4">
                  <Link href="#contact" className="btn-secondary text-center text-sm py-2 w-full">
                    Free Trial
                  </Link>
                  <Link href="#pricing" className="btn-primary text-center text-sm py-2 w-full">
                    Join Now
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

