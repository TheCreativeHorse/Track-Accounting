'use client'

import { useState } from 'react'

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Services",
      link: "#services",
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Logo-Track.svg" 
              alt="Track Accounting Logo" 
              className="h-32 w-auto min-w-[260px] max-w-[520px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={`desktop-link-${index}`}
                href={item.link}
                className="text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-navy-dark transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Number Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+13653230557" 
              className="bg-navy-dark text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy transition-colors inline-block"
            >
              Call +1 (365) 323-0557
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="tel:+13653230557" 
              className="bg-navy-dark text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-navy transition-colors inline-block"
            >
              Call Now
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-navy-dark hover:bg-gray-100 transition-colors"
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
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-navy-dark transition-colors text-sm font-medium uppercase tracking-wide py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:+13653230557" 
                  className="w-full bg-navy-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy transition-colors block text-center"
                >
                  Call +1 (365) 323-0557
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
