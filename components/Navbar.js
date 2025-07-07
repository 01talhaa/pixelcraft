"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-lg border-b border-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                PixelCraft
              </span>
              <span className={`ml-1 ${isScrolled ? 'text-white' : 'text-white'}`}>Studio</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-white hover:text-yellow-400' : 'text-white/80 hover:text-white'} transition-colors duration-300 relative group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 font-semibold">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${isScrolled ? 'text-white' : 'text-white'}`}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`${isScrolled ? 'bg-white' : 'bg-white'} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`${isScrolled ? 'bg-white' : 'bg-white'} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`${isScrolled ? 'bg-white' : 'bg-white'} block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block ${isScrolled ? 'text-white hover:text-yellow-400' : 'text-white/80 hover:text-white'} transition-colors duration-300`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 font-semibold">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
