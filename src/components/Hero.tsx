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
    <section className="relative min-h-screen flex items-center bg-white pt-16 pb-16 sm:pb-20">
      
      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-navy-dark text-center lg:text-left">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Stay on track, <span className="text-navy-dark">stay ahead!</span>
            </h1>
            
            {/* Navy blue horizontal line */}
            <div className="w-20 h-1 bg-navy-dark mb-6 mx-auto lg:mx-0 rounded-full"></div>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 text-navy-dark leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help business owners simplify finances, stay tax-ready, and make smarter decisions — with reliable support, zero jargon, and modern tech-driven accounting solutions.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 text-navy-dark leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
                className="inline-flex items-center gap-2 text-navy-dark text-lg font-semibold hover:text-blue-600 transition-colors"
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
            <h3 className="font-heading font-semibold text-2xl text-navy-dark mb-6 text-center">
              Contact Us
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold text-xl text-navy-dark mb-2">
                  Thanks — we&apos;ll reach out within 24 hours.
                </h4>
                <p className="text-gray-600 text-sm">
                  We&apos;ve received your information and will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">
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
                  <label htmlFor="business" className="block text-sm font-medium text-navy-dark mb-2">
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
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-navy-dark mb-2">
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
                  <label htmlFor="service" className="block text-sm font-medium text-navy-dark mb-2">
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