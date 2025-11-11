'use client'

import { useState } from 'react'
import { Boxes } from './ui/background-boxes'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    contactNumber: '',
    service: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const serviceOptions = [
    'Tax Preparation & Filing',
    'Bookkeeping & Reporting',
    'Payroll & Compliance',
    'Business Advisory',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Try the main API route first
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', business: '', contactNumber: '', service: '' })
      } else {
        // If main API fails, try the alternative email service
        console.log('Main API failed, trying alternative email service...')
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        
        if (emailResponse.ok) {
          setIsSubmitted(true)
          setFormData({ name: '', email: '', business: '', contactNumber: '', service: '' })
        } else {
          // If alternative email fails, try the webhook backup
          console.log('Alternative email failed, trying webhook backup...')
          const webhookResponse = await fetch('/api/lead-webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          
          if (webhookResponse.ok) {
            setIsSubmitted(true)
            setFormData({ name: '', email: '', business: '', contactNumber: '', service: '' })
          } else {
            const errorData = await response.json()
            setSubmitError(errorData.error || 'Failed to submit form. Please try again.')
          }
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      
      // Fallback: Try to send email directly via mailto
      try {
        const subject = `New Lead: ${formData.name} from ${formData.business}`
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nContact Number: ${formData.contactNumber}\nService Needed: ${formData.service}`
        const mailtoLink = `mailto:admin@trackaccounting.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        // Open mailto as fallback
        window.location.href = mailtoLink
        setIsSubmitted(true)
        setFormData({ name: '', email: '', business: '', contactNumber: '', service: '' })
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError)
        setSubmitError('Unable to submit form. Please call us directly at +1 (365) 323-0557 or email admin@trackaccounting.ca')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (submitError) {
      setSubmitError('')
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col bg-white pb-16 sm:pb-20">
      {/* Navigation Bar with Logo */}
      <nav className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo - Extreme Left */}
          <div className="flex-shrink-0">
            <a
              href="https://trackaccounting.ca"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Track Accounting Home"
            >
              <img
                src="/Logo-Track.svg"
                alt="Track Accounting Logo"
                className="w-[168px] h-[108px] sm:w-[180px] sm:h-[115px] md:w-[240px] md:h-[154px] lg:w-[300px] lg:h-[192px]"
              />
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a
              href="#"
              className="text-base font-semibold text-gray-800 hover:text-navy-dark transition-colors duration-200 px-4 py-2"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-base font-semibold text-gray-800 hover:text-navy-dark transition-colors duration-200 px-4 py-2"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-base font-semibold text-gray-800 hover:text-navy-dark transition-colors duration-200 px-4 py-2"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-base font-semibold text-gray-800 hover:text-navy-dark transition-colors duration-200 px-4 py-2"
            >
              Contact Us
            </a>
          </div>

          {/* Phone Number - Extreme Right */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="tel:+13653230557"
              className="flex items-center gap-2 bg-navy-dark text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-navy hover:shadow-lg transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 (365) 323-0557
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy-dark hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-navy-dark hover:bg-gray-50 transition-colors duration-200 px-4 py-3 rounded-md"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-navy-dark hover:bg-gray-50 transition-colors duration-200 px-4 py-3 rounded-md"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-navy-dark hover:bg-gray-50 transition-colors duration-200 px-4 py-3 rounded-md"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-navy-dark hover:bg-gray-50 transition-colors duration-200 px-4 py-3 rounded-md"
              >
                Contact Us
              </a>
              <a
                href="tel:+13653230557"
                className="flex items-center justify-center gap-2 bg-navy-dark text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-navy transition-colors duration-200 mt-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (365) 323-0557
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="container-custom flex-1 flex items-center py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-black text-center lg:text-left">
            <h1 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-black">
              Stay on track, <span className="text-black">stay ahead!</span>
            </h1>
            
            {/* Navy blue horizontal line */}
            <div className="w-20 h-1 bg-navy-dark mb-6 mx-auto lg:mx-0 rounded-full"></div>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 text-black leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help business owners simplify finances, stay tax-ready, and make smarter decisions — with reliable support, zero jargon, and modern tech-driven accounting solutions.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 text-black leading-relaxed max-w-2xl mx-auto lg:mx-0">
              As a new-age firm, we leverage cloud platforms and automation to keep your books accurate, compliant, and always accessible.
            </p>
            
            <div className="mb-8">
              <a 
                href="#contact" 
                className="inline-flex items-center bg-navy-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </a>
            </div>
            
            {/* Contact Number */}
            <div className="mb-8">
              <a 
                href="tel:+13653230557" 
                className="inline-flex items-center gap-2 text-black text-lg font-semibold hover:text-gray-700 transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span>+1 (365) 323-0557</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg max-w-md mx-auto lg:max-w-none lg:mx-0">
            <h3 className="font-sans font-normal text-2xl text-black mb-6 text-center">
              Contact Us
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-sans font-normal text-xl text-black mb-2">
                  Thanks — we&apos;ll reach out within 24 hours.
                </h4>
                <p className="text-gray-600 text-sm">
                  We&apos;ve received your information and will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-navy-dark transition-all hover:border-navy-dark/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-navy-dark transition-all hover:border-navy-dark/50"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-black mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-navy-dark transition-all hover:border-navy-dark/50"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-black mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-navy-dark transition-all hover:border-navy-dark/50"
                    placeholder="Enter your contact number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-navy-dark transition-all hover:border-navy-dark/50"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-dark text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Get My Free Consultation'
                  )}
                </button>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                    {submitError}
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Your information is safe with us. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}