'use client'

import { useState } from 'react'

export default function Header() {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "About",
      link: "#process",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 sm:top-6 z-50 w-full px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-neutral-200/50 px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-10 sm:h-12">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Logo-Track.svg" 
                alt="Track Accounting Logo" 
                className="h-8 w-auto sm:h-10 md:h-12 mr-2 sm:mr-3"
              />
            </div>

            {/* Navigation Items */}
            <div className="flex space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={`desktop-link-${index}`}
                  href={item.link}
                  className="relative text-neutral-600 dark:text-neutral-300 hover:text-navy-dark transition-colors text-sm font-medium"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Call Button */}
            <div className="flex items-center">
              <button className="bg-navy-dark text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-navy transition-colors">
                <a href="tel:+13653230557" className="text-white hover:text-white">
                  Call +1 (365) 323-0557
                </a>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between h-10 sm:h-12">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src="/Logo-Track.svg" 
                  alt="Track Accounting Logo" 
                  className="h-8 w-auto mr-2"
                />
              </div>

              {/* Mobile Menu Button and Call Button */}
              <div className="flex items-center gap-3">
                <button className="bg-navy-dark text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-navy transition-colors">
                  <a href="tel:+13653230557" className="text-white hover:text-white">
                    Call Now
                  </a>
                </button>
                
                {/* Hamburger Menu */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-neutral-600 hover:text-navy-dark hover:bg-neutral-100 transition-colors"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-12 left-2 right-2 bg-white/95 backdrop-blur-md rounded-xl border border-neutral-200/50 shadow-lg z-50 mt-2">
                <div className="px-4 py-3 space-y-3">
                  {navItems.map((item, idx) => (
                    <a
                      key={`mobile-link-${idx}`}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-neutral-600 block py-2 hover:text-navy-dark transition-colors"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                  ))}
                  <div className="pt-4 border-t border-neutral-200">
                    <button className="w-full bg-navy-dark text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-navy transition-colors">
                      <a href="tel:+13653230557" className="text-white hover:text-white">
                        Call +1 (365) 323-0557
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
