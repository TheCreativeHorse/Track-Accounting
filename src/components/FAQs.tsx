'use client'

import { useState } from 'react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We work with a wide range of industries including healthcare practices, restaurants, retail businesses, professional services, construction companies, and technology startups. Our team has experience across multiple sectors and can adapt our services to meet industry-specific requirements and regulations."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with businesses at all stages, from startups and freelancers to established enterprises. Our Starter plan is specifically designed for new businesses and freelancers, while our Growth and Pro plans scale with your business needs. We can help you set up proper accounting systems from day one."
    },
    {
      question: "What accounting software do you use?",
      answer: "We're proficient in all major accounting platforms including QuickBooks Online, Xero, Sage, and FreshBooks. We can work with your existing software or recommend and set up the best solution for your business. All our plans include software recommendations and setup assistance."
    },
    {
      question: "How do free consultations work?",
      answer: "Our free consultation is a 30-minute call where we discuss your business, current accounting situation, and specific needs. We'll provide insights into how we can help and answer any questions you have. There's no obligation to sign up, and we'll provide valuable advice regardless of whether you choose to work with us."
    },
    {
      question: "What makes Track Accounting different from other firms?",
      answer: "We focus on small to medium-sized businesses and provide personalized service with dedicated support. Unlike larger firms, you'll work directly with experienced accountants who understand your business. We use modern technology, provide transparent pricing, and offer flexible month-to-month contracts with no long-term commitments."
    },
    {
      question: "How quickly can you get started with my accounting?",
      answer: "We can typically get started within 1-2 weeks of our initial consultation. The setup process includes gathering your financial documents, setting up accounting systems, and establishing processes. For urgent needs like tax filing deadlines, we can expedite the onboarding process."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="section-padding pb-24 sm:pb-32 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray px-4">
              Have questions? We&apos;ve got answers. Here are some common questions we receive from business owners.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-navy-dark/5 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-inset transition-all duration-300"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-navy-dark pr-4 sm:pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-navy-dark transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                    <p className="text-gray leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <div className="bg-navy-dark/5 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy-dark mb-3 sm:mb-4">
                Still have questions?
              </h3>
              <p className="text-gray mb-4 sm:mb-6 text-sm sm:text-base">
                We&apos;re here to help. Schedule a free consultation to get personalized answers to your specific questions.
              </p>
              <button 
                className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
                onClick={() => window.location.href = '#contact'}
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
