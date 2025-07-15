"use client"

import { useState, useEffect, useRef } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              We design the future
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              A global creative studio that transforms brands through thoughtful design and innovative solutions.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Content Column */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-12">
              {/* Mission Statement */}
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  We believe great design should be accessible to everyone. Our team works with brands of all sizes to create meaningful experiences that connect with people around the world.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 gap-8">
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Innovation First</h4>
                      <p className="text-gray-600 font-light">We push creative boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Global Impact</h4>
                      <p className="text-gray-600 font-light">Our work spans continents, creating designs that resonate across cultures and languages.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Human-Centered</h4>
                      <p className="text-gray-600 font-light">Every design decision is made with the end user in mind, creating experiences that truly matter.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Global creative team collaboration"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">150+</div>
                  <div className="text-sm text-gray-500 font-medium">Global Clients</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-500 font-medium">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">2019</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">99%</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900">Ready to transform your brand?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200">
                Start a Project
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-400 transition-colors duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
