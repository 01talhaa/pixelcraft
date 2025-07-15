"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pb-52">
      {/* Dynamic Background with Real Images */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop')`,
          }}
        ></div>
        
        {/* Overlay Images */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop')`,
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop')`,
          }}
        ></div>

        {/* Interactive Mouse Gradient */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, rgba(99, 102, 241, 0.2) 30%, transparent 70%)`,
          }}
        ></div>
        
        {/* Multi-layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-bounce animation-delay-2000"></div>
        
        {/* Floating Design Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {i % 4 === 0 && (
              <div className="w-6 h-6 border-2 border-blue-400/40 rounded-full"></div>
            )}
            {i % 4 === 1 && (
              <div className="w-4 h-4 bg-indigo-400/40 rounded-full"></div>
            )}
            {i % 4 === 2 && (
              <div className="w-5 h-5 bg-purple-400/40 transform rotate-45"></div>
            )}
            {i % 4 === 3 && (
              <svg className="w-5 h-5 text-blue-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto  mt-52">
        {/* Badge */}
        <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          </div>
          <span className="text-blue-300 font-semibold tracking-wide">Welcome to PixelPrimp</span>
        </div>

        {/* Main Heading */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white mb-4">Creative</span>
            <span className="text-gradient-primary">
              Design Studio
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We transform your vision into stunning visual experiences through{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-bold">
              photo editing
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-bold">
              graphic design
            </span>{" "}
            excellence
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Our Work
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>

          <button className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl transform hover:scale-105">
            <span className="flex items-center">
              <div className="relative mr-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              Watch Showreel
            </span>
          </button>
        </div>

        {/* Enhanced Stats */}
        <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: "🎨" },
              { number: "150+", label: "Happy Clients", icon: "😊" },
              { number: "5+", label: "Years Experience", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🚀" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
                
                {/* Stat Card Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="text-gray-400 text-sm mb-2 tracking-wider">SCROLL DOWN</div>
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center relative">
            <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
