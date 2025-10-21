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

  const serviceOptions = [
    'Tax Preparation & Filing',
    'Bookkeeping & Reporting',
    'Payroll & Compliance',
    'Business Advisory',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
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
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
        <section className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden pt-16 pb-16 sm:pb-20">
      <div className="absolute inset-0 w-full h-full bg-navy-dark z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="container-custom relative z-30 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight px-4">
              Accounting That Lets You Focus on Growing Your Business
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4">
              Reliable tax filing, streamlined bookkeeping, and payroll support so you stay compliant and spend less time on numbers.
            </p>
            <div className="px-4 mb-6 sm:mb-8">
              <a 
                href="tel:+13653230557" 
                className="inline-flex items-center gap-2 text-white text-lg sm:text-xl md:text-2xl font-semibold hover:text-gold transition-colors"
              >
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
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

          {/* Right Column - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl max-w-md mx-auto lg:max-w-none lg:mx-0 mx-4 lg:mx-0 my-8 sm:my-12">
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-navy-dark-dark mb-4 sm:mb-6 text-center">
              Get Your Free Consultation
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold text-lg sm:text-xl text-navy-dark-dark mb-2">
                  Thanks — we&apos;ll reach out within 24 hours.
                </h4>
                <p className="text-gray text-sm sm:text-base">
                  We&apos;ve received your information and will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-dark-dark mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-navy-dark focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-navy-dark focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-navy-dark mb-1 sm:mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-navy-dark focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-navy-dark mb-1 sm:mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-navy-dark focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Enter your contact number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-dark mb-1 sm:mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-navy-dark focus:border-transparent transition-all text-sm sm:text-base"
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
                  className="btn-primary w-full text-sm sm:text-base py-3 sm:py-4"
                >
                  Get My Free Consultation
                </button>

                <p className="text-xs sm:text-sm text-gray text-center">
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