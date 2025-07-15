"use client"

import { useState, useEffect, useRef } from "react"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "PixelCraft Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The team delivered exceptional results on time and within budget.",
      rating: 5,
      project: "Brand Identity Redesign",
    },
    {
      name: "Robert Thompson",
      role: "CEO",
      company: "Luxury Fashion House",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Working with PixelCraft was an absolute pleasure. Their photo editing skills are unmatched, and they brought our fashion campaign to life with stunning visual effects and professional retouching.",
      rating: 5,
      project: "Fashion Campaign",
    },
    {
      name: "Amanda Chen",
      role: "Product Manager",
      company: "StartupX",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The UI/UX design for our mobile app was phenomenal. PixelCraft Studio understood our vision perfectly and created an intuitive, beautiful interface that our users absolutely love.",
      rating: 5,
      project: "Mobile App Design",
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      company: "Global Media Corp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Their motion graphics work is simply outstanding. The animations they created for our promotional videos were engaging, professional, and perfectly aligned with our brand message.",
      rating: 5,
      project: "Motion Graphics",
    },
  ]

  return (
    <section ref={sectionRef} className="section-primary">
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230084FC' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-brand-primary/5 to-brand-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="badge-primary mb-4">
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            What Our
            <span className="text-gradient-primary">
              {" "}
              Clients Say
            </span>
          </h2>

          <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with PixelPrimp
            Studio.
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-3xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 relative overflow-hidden border border-gray-100 shadow-xl">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-4xl text-brand-primary/20 font-serif">"</div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-brand-primary text-center leading-relaxed mb-6 font-medium">
                  {testimonials[currentTestimonial].content}
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover mr-3 border-3 border-white shadow-lg"
                  />
                  <div className="text-center">
                    <h4 className="text-base font-bold text-brand-primary">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-brand-primary font-semibold text-sm">{testimonials[currentTestimonial].role}</p>
                    <p className="text-brand-secondary text-xs">{testimonials[currentTestimonial].company}</p>
                    <p className="text-brand-secondary text-xs mt-0.5">Project: {testimonials[currentTestimonial].project}</p>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-full opacity-50"></div>
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-full opacity-50"></div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-gradient-to-r from-brand-primary to-brand-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "150+", label: "Happy Clients" },
              { number: "500+", label: "Projects Delivered" },
              { number: "24h", label: "Average Response Time" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-brand-secondary text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
