"use client"

import { useState, useEffect, useRef } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)
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

  const filters = ["all", "branding", "web", "photo", "print"]

  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete brand identity for luxury fashion brand",
      tags: ["Logo Design", "Brand Identity", "Packaging"],
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern e-commerce platform design",
      tags: ["Web Design", "UI/UX", "Responsive"],
    },
    {
      id: 3,
      title: "Fashion Photography",
      category: "photo",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional fashion photo editing",
      tags: ["Photo Editing", "Retouching", "Color Grading"],
    },
    {
      id: 4,
      title: "Corporate Brochure",
      category: "print",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional corporate brochure design",
      tags: ["Print Design", "Layout", "Typography"],
    },
    {
      id: 5,
      title: "Tech Startup Branding",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern tech startup brand identity",
      tags: ["Logo Design", "Brand Strategy", "Digital Assets"],
    },
    {
      id: 6,
      title: "Mobile App Interface",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "Intuitive mobile app UI design",
      tags: ["Mobile Design", "UI/UX", "Prototyping"],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full mb-6">
            <span className="text-amber-700 font-semibold">Our Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our latest work and see how we've helped brands transform their visual identity and digital
            presence.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>

              {/* Bottom Border Animation */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
