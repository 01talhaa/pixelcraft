"use client"

import { useState, useEffect, useRef } from "react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)
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

  const services = [
    {
      icon: "📸",
      title: "Photo Editing",
      description: "Professional photo retouching, color correction, and enhancement services",
      features: ["Color Grading", "Retouching", "Background Removal", "HDR Processing"],
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Creative visual solutions for branding, marketing, and digital media",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
    },
    {
      icon: "🌐",
      title: "Web Graphics",
      description: "Stunning web-ready graphics and user interface design elements",
      features: ["UI/UX Design", "Web Banners", "Social Media", "Icon Design"],
    },
    {
      icon: "📱",
      title: "Mobile Design",
      description: "Mobile-first design approach for apps and responsive interfaces",
      features: ["App Design", "Mobile UI", "Responsive Design", "Prototyping"],
    },
    {
      icon: "🎬",
      title: "Motion Graphics",
      description: "Dynamic animations and motion graphics for digital platforms",
      features: ["2D Animation", "Video Graphics", "Logo Animation", "Transitions"],
    },
    {
      icon: "🖼️",
      title: "Brand Identity",
      description: "Complete brand identity packages and visual communication systems",
      features: ["Brand Strategy", "Visual Identity", "Style Guides", "Brand Assets"],
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full mb-6">
            <span className="text-amber-700 font-semibold">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"> Create</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design services that bring your vision to life with
            creativity and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl transition-opacity duration-300 ${
                  hoveredService === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-b-2xl transition-all duration-300 ${
                    hoveredService === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
