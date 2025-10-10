import AnimatedTestimonialsDemo from './animated-testimonials-demo'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-navy-dark/10 via-white to-navy/10 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-navy-dark">
            What Our Clients Say About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners are saying about Track Accounting.
          </p>
        </div>

        <AnimatedTestimonialsDemo />
      </div>
    </section>
  )
}
