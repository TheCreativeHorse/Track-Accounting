import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-custom">
        <div className="py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {/* Navigation Links */}
            <div className="text-center sm:text-left">
              <h4 className="font-heading font-semibold text-lg mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-white/80 hover:text-white/80 transition-colors">
                    Bookkeeping & Reporting
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-white/80 transition-colors">
                    Tax Preparation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-white/80 transition-colors">
                    Payroll & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-white/80 transition-colors">
                    Business Advisory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="text-center sm:text-left">
              <h4 className="font-heading font-semibold text-lg mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-white/80 hover:text-white/80 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white/80 hover:text-white/80 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-white/80 hover:text-white/80 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-white/80 hover:text-white/80 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-center sm:text-left">
              <h4 className="font-heading font-semibold text-lg mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start justify-center sm:justify-start space-x-3">
                  <svg className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <a href="mailto:admin@trackaccounting.ca" className="text-white/80 hover:text-white transition-colors">
                      admin@trackaccounting.ca
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start justify-center sm:justify-start space-x-3">
                    <svg className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+13653230557" className="text-white/80 hover:text-white transition-colors">
                      +1 (365) 323-0557
                    </a>
                  </div>
                  <div className="flex items-start justify-center sm:justify-start space-x-3">
                    <svg className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+16478198483" className="text-white/80 hover:text-white transition-colors">
                      +1 (647) 819-8483
                    </a>
                  </div>
                </div>
                <div className="flex items-start justify-center sm:justify-start space-x-3">
                  <svg className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white/80">
                      6725 Millcreek Dr<br />
                      Mississauga, ON L5N 5V3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-4 sm:py-6">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <p className="text-white/60 text-sm">
              © 2025 Track Accounting. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Powered by: The Creative Horse 
              <span className="inline-block animate-bounce text-red-400 ml-1">❤️</span>
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-white/80 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white/80 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
