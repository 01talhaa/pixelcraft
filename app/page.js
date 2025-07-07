"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import UpcomingProjects from "@/components/UpcomingProjects"
import Team from "@/components/Team"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-spin border-t-white mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-yellow-400 mx-auto"></div>
          </div>
          <h2 className="text-2xl font-bold text-white animate-pulse">PixelCraft Studio</h2>
          <p className="text-white/70 mt-2">Loading amazing designs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <UpcomingProjects />
      <Team />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}
