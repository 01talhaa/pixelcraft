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
      className="section-secondary"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230084FC' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
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
                <div className="badge-primary mb-6">
                  <span>Stay Updated</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                  Join Our
                  <span className="text-gradient-primary">
                    {" "}
                    Creative Newsletter
                  </span>
                </h2>

                <p className="text-xl text-brand-secondary max-w-2xl mx-auto leading-relaxed">
                  Get exclusive design tips, behind-the-scenes content, and be the first to know about our latest
                  projects and special offers.
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-full text-brand-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary px-8 py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Subscribe
                      </>
                    )}
                  </button>
                </form>

                <p className="text-brand-secondary text-sm mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
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
                  <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <h3 className="text-brand-primary font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-brand-secondary text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Success State */
            <div className="py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-4xl font-bold text-brand-primary mb-4">Welcome to the Family! 🎉</h2>

              <p className="text-xl text-brand-secondary mb-8">
                Thank you for subscribing! Check your inbox for a welcome email with exclusive design resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="btn-secondary"
                >
                  Subscribe Another Email
                </button>
                <button className="btn-primary">
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
