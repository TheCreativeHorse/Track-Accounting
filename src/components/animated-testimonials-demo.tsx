import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "My go to guys for corporate accounting. Always clear and transparent providing me with proper understanding of everything along the way. Highly recommend.",
      name: "Mohammad Lokhandwala",
      designation: "Client",
      src: "",
    },
    {
      quote:
        "Professional and reliable firm. They have been handling our corporate taxing and bookkeeping and our always precise and detailed in their work.",
      name: "Anmol Sahni",
      designation: "Client",
      src: "",
    },
    {
      quote: "They helped me with my GST/HST filing. Process was super smooth & fast. Highly recommended",
      name: "Shamik Vinay",
      designation: "Client",
      src: "",
    },
    {
      quote:
        "Great personal tax and complete Bookkeeping; Invoicing; Financial & Corporate Services. Trusted & Recommended",
      name: "Ali Asghar",
      designation: "Client",
      src: "",
    },
    {
      quote:
        "Very professional and reliable firm. They handled my corporate accounting with great attention to detail and provided the right advice and direction for my business. Highly recommend their services",
      name: "Mustafa Pettiwala",
      designation: "Client",
      src: "",
    },
    {
      quote:
        "Really happy with their service! They helped me sort out my bookkeeping and taxes without any stress, and I always feel confident my finances are in good hands. :)",
      name: "Kiran Kaur",
      designation: "Client",
      src: "",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
