"use client"

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
