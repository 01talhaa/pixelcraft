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
    <section id="about" ref={sectionRef} className="section-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230084FC' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="badge-primary mb-6">
              <span>About PixelPrimp</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
              Crafting Digital
              <span className="text-gradient-primary">
                {" "}
                Excellence
              </span>
            </h2>

            <p className="text-lg text-brand-secondary mb-8 leading-relaxed">
              Founded in 2019, PixelPrimp has been at the forefront of digital creativity, transforming brands
              through innovative photo editing and graphic design solutions. Our passion for perfection drives us to
              deliver exceptional results that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Award-winning creative team",
                "Cutting-edge design technology",
                "Client-focused approach",
                "Rapid turnaround times",
              ].map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-brand-secondary group-hover:text-brand-accent transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg animate-pulse"></div>
                    <div
                      className="h-20 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                  <div
                    className="h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
