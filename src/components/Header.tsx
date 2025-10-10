'use client'

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './ui/resizable-navbar'
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
    <Navbar>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">
              <a href="tel:+13653230557" className="text-white hover:text-white">
                Call +1 (365) 323-0557
              </a>
            </NavbarButton>
          </div>
        </NavBody>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              <NavbarButton variant="primary">
                <a href="tel:+13653230557" className="text-white hover:text-white">
                  Call Now
                </a>
              </NavbarButton>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 block py-2 hover:text-navy-dark transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-sm"
              >
                <a href="tel:+13653230557" className="text-white hover:text-white">
                  Call +1 (365) 323-0557
                </a>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </div>
    </Navbar>
  )
}
