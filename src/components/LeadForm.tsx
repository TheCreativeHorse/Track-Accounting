'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    services: [] as string[],
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const serviceOptions = [
    'Tax Preparation & Filing',
    'Bookkeeping & Reporting',
    'Payroll & Compliance',
    'Business Advisory',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleServiceChange = (service: string) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter(s => s !== service)
        : [...formData.services, service]
    })
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.business.trim()) {
      newErrors.business = 'Business name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }


    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

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
        setFormData({
          name: '',
          business: '',
          email: '',
          phone: '',
          service: '',
          services: [],
          message: ''
        })
        setErrors({})
      } else {
        // If main API fails, try the webhook backup
        console.log('Main API failed, trying webhook backup...')
        const webhookResponse = await fetch('/api/lead-webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        
        if (webhookResponse.ok) {
          setIsSubmitted(true)
          setFormData({
            name: '',
            business: '',
            email: '',
            phone: '',
            service: '',
            services: [],
            message: ''
          })
          setErrors({})
        } else {
          const errorData = await response.json()
          setSubmitError(errorData.error || 'Failed to submit form. Please try again.')
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      
      // Fallback: Try to send email directly via mailto
      try {
        const subject = `New Lead: ${formData.name} from ${formData.business}`
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
        const mailtoLink = `mailto:admin@trackaccounting.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        // Open mailto as fallback
        window.location.href = mailtoLink
        setIsSubmitted(true)
        setFormData({
          name: '',
          business: '',
          email: '',
          phone: '',
          service: '',
          services: [],
          message: ''
        })
        setErrors({})
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError)
        setSubmitError('Unable to submit form. Please call us directly at +1 (365) 323-0557 or email admin@trackaccounting.ca')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding pt-16 bg-navy-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Simplify Your Accounting?
            </h2>
            <p className="text-xl text-white/90">
              Get started today with a free consultation. Tell us about your business and we&apos;ll create a customized plan for your accounting needs.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Thanks — we&apos;ll reach out within 24 hours.
              </h3>
              <p className="text-gray mb-6">
                We&apos;ve received your information and our team will contact you soon to schedule your free consultation.
              </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Request
                </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Business Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-navy mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all ${
                        errors.business ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your business name"
                    />
                    {errors.business && (
                      <p className="text-red-500 text-sm mt-1">{errors.business}</p>
                    )}
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service Row */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                  )}
                </div>


                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Additional Comments / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your business and specific accounting needs..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-lg py-4 px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
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
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm mt-4">
                      {submitError}
                    </div>
                  )}
                  
                  {errors.submit && (
                    <p className="text-red-500 text-sm mt-4">{errors.submit}</p>
                  )}
                  
                  <p className="text-sm text-gray mt-6">
                    Your information is safe with us. We respect your privacy and will never share your data with third parties.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
