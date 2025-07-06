"use client"

import { useState, useEffect, useRef } from "react"

export default function UpcomingProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % upcomingProjects.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const upcomingProjects = [
    {
      title: "Global Fashion Campaign",
      client: "Luxury Fashion Brand",
      description:
        "Complete visual campaign for international fashion week including photo editing, graphic design, and digital assets.",
      timeline: "Q2 2024",
      status: "In Progress",
      progress: 75,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Fashion", "Photography", "Campaign"],
    },
    {
      title: "Tech Startup Rebrand",
      client: "InnovateTech Solutions",
      description:
        "Full brand identity redesign including logo, website, and marketing materials for emerging tech company.",
      timeline: "Q3 2024",
      status: "Starting Soon",
      progress: 25,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Branding", "Web Design", "Tech"],
    },
    {
      title: "E-commerce Platform",
      client: "RetailMax Corporation",
      description:
        "Comprehensive e-commerce platform design with focus on user experience and conversion optimization.",
      timeline: "Q4 2024",
      status: "Planning",
      progress: 10,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["E-commerce", "UI/UX", "Mobile"],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-purple-300 font-semibold">Coming Soon</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Big Projects
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get a sneak peek at the exciting projects we're working on. These upcoming collaborations showcase our
            commitment to innovation and excellence.
          </p>
        </div>

        {/* Project Showcase */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      upcomingProjects[currentProject].status === "In Progress"
                        ? "bg-green-500/20 text-green-300"
                        : upcomingProjects[currentProject].status === "Starting Soon"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {upcomingProjects[currentProject].status}
                  </span>
                  <span className="text-white/60 text-sm">{upcomingProjects[currentProject].timeline}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {upcomingProjects[currentProject].title}
                </h3>

                <p className="text-purple-300 text-lg mb-4">Client: {upcomingProjects[currentProject].client}</p>

                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {upcomingProjects[currentProject].description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm">Project Progress</span>
                    <span className="text-white font-semibold">{upcomingProjects[currentProject].progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${upcomingProjects[currentProject].progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {upcomingProjects[currentProject].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  Get Project Updates
                </button>
              </div>

              {/* Project Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <img
                    src={upcomingProjects[currentProject].image || "/placeholder.svg"}
                    alt={upcomingProjects[currentProject].title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />

                  {/* Overlay Effect */}
                  <div className="absolute inset-6 bg-gradient-to-t from-purple-900/50 to-transparent rounded-xl"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce opacity-80"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {upcomingProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentProject === index
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
