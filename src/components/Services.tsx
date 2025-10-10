'use client'

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Bookkeeping & Reporting",
      description: "Accurate, reliable records to keep your business on track. Monthly financial statements, expense tracking, and comprehensive reporting.",
      features: ["Monthly financial statements", "Expense categorization", "Bank reconciliation", "Financial reporting", "Account reconciliation"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tax Preparation & Filing",
      description: "Stay compliant and file on time without the stress. Professional tax preparation for individuals and businesses.",
      features: ["Individual tax returns", "Corporate tax filing", "Tax planning", "CRA correspondence", "Tax optimization"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Payroll & Compliance",
      description: "Smooth payroll management and government compliance. Handle employee payments, deductions, and statutory remittances.",
      features: ["Payroll processing", "Statutory remittances", "T4 preparation", "ROE management", "Employee benefits"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Business Advisory",
      description: "Actionable insights to guide smarter business decisions. Strategic financial planning, growth consulting, and performance analysis.",
      features: ["Financial planning", "Business strategy", "Cash flow management", "Growth consulting", "Performance analysis"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4 sm:mb-6">
            Our Core Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mx-auto px-4">
            We provide comprehensive accounting solutions tailored to your business needs. 
            From bookkeeping to strategic advisory, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy-dark rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-dark mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                {service.description}
              </p>
              <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-gray">
                    <svg className="w-3 h-3 text-navy-dark mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 mt-auto"
                onClick={() => window.open('https://trackaccounting.ca/service/', '_blank')}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="btn-primary"
            onClick={() => window.open('https://trackaccounting.ca/service/', '_blank')}
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}
