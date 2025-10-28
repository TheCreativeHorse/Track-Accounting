import AnimatedTestimonialsDemo from './animated-testimonials-demo'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-navy-dark">
            What Our Clients Say About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mx-auto px-4">
            Don&apos;t just take our word for it. Here&apos;s what business owners are saying about Track Accounting.
          </p>
        </div>

        <AnimatedTestimonialsDemo />
      </div>
    </section>
  )
}
