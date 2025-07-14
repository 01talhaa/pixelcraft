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
      <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-blue-400 mx-auto"></div>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 animate-pulse">PixelPrimp</h2>
          <p className="text-blue-700 mt-2">Loading amazing designs...</p>
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
