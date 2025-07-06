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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
              <span className="text-purple-600 font-semibold">About PixelCraft Studio</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Visual
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2019, PixelCraft Studio has been at the forefront of digital creativity, transforming brands
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
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-20 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg animate-pulse"></div>
                    <div
                      className="h-20 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                  <div
                    className="h-32 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-lg animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
