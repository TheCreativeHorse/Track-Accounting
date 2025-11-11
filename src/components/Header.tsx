'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Services', link: '#services' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'Contact', link: '#contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white border-b border-gray-200'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo Section - Extreme Left */}
            <div className="flex-shrink-0">
              <a
                href="https://trackaccounting.ca"
                className="block transition-transform duration-200 hover:scale-105"
                aria-label="Track Accounting Home"
              >
                <img
                  src="/Logo-Track.svg"
                  alt="Track Accounting Logo"
                  className="w-[120px] h-[77px] sm:w-[180px] sm:h-[115px] md:w-[240px] md:h-[154px] lg:w-[300px] lg:h-[192px]"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="relative text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-navy-dark transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy-dark transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+13653230557"
                className="bg-navy-dark text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-navy hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Call +1 (365) 323-0557
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href="tel:+13653230557"
                className="bg-navy-dark text-white px-3 py-2 rounded-md text-xs font-semibold hover:bg-navy transition-colors duration-200 whitespace-nowrap"
              >
                Call Now
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-navy-dark hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-navy-dark"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-50 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-navy-dark hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-navy-dark hover:bg-gray-50 rounded-md transition-colors duration-200 uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu CTA */}
            <div className="mt-6 px-4">
              <a
                href="tel:+13653230557"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-navy-dark text-white px-4 py-3 rounded-lg text-center text-sm font-semibold hover:bg-navy transition-colors duration-200"
              >
                Call +1 (365) 323-0557
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
