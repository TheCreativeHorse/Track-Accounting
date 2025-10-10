'use client'

import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation & Discovery",
      description: "We start with a comprehensive consultation to understand your business, current financial situation, and specific needs.",
      icon: (
        <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Setup & Onboarding",
      description: "We help you gather and organize your financial documents, set up accounting systems, and establish processes.",
      icon: (
        <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Monthly Bookkeeping & Payroll",
      description: "Ongoing monthly bookkeeping services, payroll processing, and regular financial reporting to keep you informed.",
      icon: (
        <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Tax Preparation & Ongoing Support",
      description: "Annual tax preparation and filing, plus year-round support for any financial questions or strategic planning needs.",
      icon: (
        <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section id="process" className="py-16 bg-navy-dark">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Our streamlined process ensures you get the support you need without the complexity. 
            Here's how we work together to grow your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile, visible on desktop */}
          <div className="hidden xl:block absolute top-20 left-0 right-0 h-0.5 bg-navy/20 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Icon Container with Number Badge Overlay */}
                <div className="relative mx-auto mb-4 sm:mb-6">
                  {/* Step Number Badge - Responsive sizing */}
                  <motion.div 
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 bg-white text-navy-dark rounded-full text-xs sm:text-sm font-heading font-bold flex items-center justify-center z-30 shadow-lg"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon Container - Responsive sizing */}
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="text-navy-dark w-6 h-6 sm:w-8 sm:h-8"
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Content - Responsive typography */}
                <div className="flex flex-col flex-grow">
                  <motion.h3 
                    className="font-heading font-semibold text-base sm:text-lg lg:text-xl text-white mb-3 sm:mb-4 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center px-2"
                    whileHover={{ 
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/80 text-xs sm:text-sm leading-relaxed flex-grow px-2"
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-navy-dark mb-3 sm:mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray mb-4 sm:mb-6 text-sm sm:text-base">
              Book your free consultation today and let's discuss how we can help streamline your accounting and grow your business.
            </p>
            <div className="flex justify-center">
              <motion.button 
                className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#contact'}
              >
                Book Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
