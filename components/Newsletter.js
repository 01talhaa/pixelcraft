"use client"

import { useState, useEffect, useRef } from "react"

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail("")
    }, 2000)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {!isSubscribed ? (
            <>
              {/* Header */}
              <div className="mb-12">
                <div className="inline-block bg-yellow-100/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-yellow-400/20">
                  <span className="text-yellow-300 font-semibold">Stay Updated</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Join Our
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    {" "}
                    Creative Newsletter
                  </span>
                </h2>

                <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                  Get exclusive design tips, behind-the-scenes content, and be the first to know about our latest
                  projects and special offers.
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>

                <p className="text-white/60 text-sm mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: "🎨",
                    title: "Design Tips",
                    description: "Weekly design insights and tutorials",
                  },
                  {
                    icon: "📸",
                    title: "Behind the Scenes",
                    description: "Exclusive project breakdowns and process",
                  },
                  {
                    icon: "🎁",
                    title: "Special Offers",
                    description: "Early access to discounts and promotions",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Success State */
            <div className="py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">Welcome to the Family! 🎉</h2>

              <p className="text-xl text-white/80 mb-8">
                Thank you for subscribing! Check your inbox for a welcome email with exclusive design resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="bg-gray-700/50 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-gray-600 hover:bg-gray-700 transition-all duration-300"
                >
                  Subscribe Another Email
                </button>
                <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                  Explore Our Work
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
