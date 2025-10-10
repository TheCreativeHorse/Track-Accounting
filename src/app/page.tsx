'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import LeadForm from '@/components/LeadForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Process />
      <FAQs />
      <LeadForm />
      <Footer />
    </main>
  )
}
