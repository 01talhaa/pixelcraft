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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
            <span className="text-purple-600 font-semibold">Client Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with PixelCraft
            Studio.
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-6xl text-purple-200 font-serif">"</div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                  {testimonials[currentTestimonial].content}
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-purple-600 font-semibold">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].company}</p>
                    <p className="text-gray-500 text-xs mt-1">Project: {testimonials[currentTestimonial].project}</p>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-50"></div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "150+", label: "Happy Clients" },
              { number: "500+", label: "Projects Delivered" },
              { number: "24h", label: "Average Response Time" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
