export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for freelancers & startups",
      price: "$299",
      period: "per month",
      description: "Essential accounting services to get your business on track",
      features: [
        "Monthly bookkeeping",
        "Bank reconciliation",
        "Basic financial statements",
        "Email support",
        "Quarterly tax planning",
        "CRA correspondence"
      ],
      cta: "Choose Starter Plan",
      popular: false
    },
    {
      name: "Growth",
      subtitle: "For SMBs scaling operations",
      price: "$599",
      period: "per month",
      description: "Comprehensive accounting with payroll and advisory services",
      features: [
        "Everything in Starter",
        "Payroll processing (up to 10 employees)",
        "Monthly financial reports",
        "Priority phone support",
        "Annual tax preparation",
        "Business advisory sessions",
        "Cash flow management"
      ],
      cta: "Choose Growth Plan",
      popular: true
    },
    {
      name: "Pro",
      subtitle: "For established businesses",
      price: "$999",
      period: "per month",
      description: "Full-service accounting with dedicated support and strategic planning",
      features: [
        "Everything in Growth",
        "Unlimited payroll processing",
        "Advanced financial reporting",
        "Dedicated account manager",
        "Monthly advisory meetings",
        "Strategic planning",
        "Industry-specific expertise",
        "Priority response (24 hours)"
      ],
      cta: "Choose Pro Plan",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mx-auto px-4">
            Choose the plan that fits your business needs. All plans include our core accounting services with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative card ${
                plan.popular 
                  ? 'ring-2 ring-navy scale-105 shadow-2xl' 
                  : 'hover:scale-105'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-navy text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray text-xs sm:text-sm mb-4 sm:mb-6">
                  {plan.subtitle}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-navy">
                    {plan.price}
                  </span>
                  <span className="text-gray ml-1 sm:ml-2 text-sm sm:text-base">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-gray mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-navy mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 sm:py-4 rounded-xl font-heading font-semibold transition-all duration-300 text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-navy text-white hover:bg-opacity-90'
                    : 'bg-light-blue text-navy hover:bg-navy hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Need a custom solution? We can tailor our services to your specific requirements.
          </p>
          <button className="btn-primary">
            Get Custom Quote
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-12 sm:mt-16 bg-light-blue rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-navy mb-2 text-sm sm:text-base">No Setup Fees</h4>
              <p className="text-gray text-xs sm:text-sm">Get started immediately with no upfront costs or hidden fees.</p>
            </div>
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-navy mb-2 text-sm sm:text-base">30-Day Guarantee</h4>
              <p className="text-gray text-xs sm:text-sm">Not satisfied? Cancel within 30 days for a full refund.</p>
            </div>
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-navy mb-2 text-sm sm:text-base">Cancel Anytime</h4>
              <p className="text-gray text-xs sm:text-sm">Flexible month-to-month billing with no long-term contracts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
