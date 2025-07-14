"use client"

import { useState, useEffect, useRef } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
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
      client: "Elegance Fashion House",
      year: "2024",
      duration: "6 weeks",
      team: ["Brand Designer", "Creative Director", "Graphic Designer"],
      challenge: "Create a sophisticated brand identity that appeals to high-end fashion customers while maintaining timeless elegance and modern appeal.",
      solution: "Developed a minimalist yet luxurious brand identity with custom typography, sophisticated color palette, and premium packaging design that reflects the brand's values.",
      results: ["40% increase in brand recognition", "25% boost in premium sales", "Featured in 3 major fashion magazines"],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      media: [
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Logo Design" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Brand Guidelines" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Packaging Design" },
        { type: "video", src: "/placeholder-video.mp4", title: "Brand Animation", poster: "/placeholder.svg?height=600&width=800" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Business Cards" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Letterhead Design" }
      ]
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern e-commerce platform design",
      tags: ["Web Design", "UI/UX", "Responsive"],
      client: "TechStore Pro",
      year: "2024",
      duration: "8 weeks",
      team: ["UX Designer", "UI Designer", "Front-end Developer"],
      challenge: "Design an intuitive e-commerce platform that increases conversion rates and provides seamless shopping experience across all devices.",
      solution: "Created a user-centric design with streamlined checkout process, advanced search functionality, and mobile-first approach.",
      results: ["65% increase in conversion rate", "45% reduction in cart abandonment", "98% mobile usability score"],
      technologies: ["Figma", "Adobe XD", "React", "Tailwind CSS"],
      media: [
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Homepage Design" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Product Pages" },
        { type: "video", src: "/placeholder-video.mp4", title: "User Journey", poster: "/placeholder.svg?height=600&width=800" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Mobile Design" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Checkout Process" }
      ]
    },
    {
      id: 3,
      title: "Fashion Photography",
      category: "photo",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional fashion photo editing",
      tags: ["Photo Editing", "Retouching", "Color Grading"],
      client: "Style Magazine",
      year: "2024",
      duration: "3 weeks",
      team: ["Photo Editor", "Retoucher", "Color Specialist"],
      challenge: "Transform raw fashion photography into magazine-ready images while maintaining natural look and editorial quality.",
      solution: "Applied advanced retouching techniques, color grading, and mood enhancement to create stunning editorial images.",
      results: ["Featured in 2 major fashion magazines", "95% client satisfaction", "Increased photographer bookings by 30%"],
      technologies: ["Adobe Photoshop", "Adobe Lightroom", "Capture One"],
      media: [
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Before & After" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Color Grading" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Skin Retouching" },
        { type: "video", src: "/placeholder-video.mp4", title: "Editing Process", poster: "/placeholder.svg?height=600&width=800" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Final Results" }
      ]
    },
    {
      id: 4,
      title: "Corporate Brochure",
      category: "print",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional corporate brochure design",
      tags: ["Print Design", "Layout", "Typography"],
      client: "Global Solutions Inc.",
      year: "2024",
      duration: "4 weeks",
      team: ["Print Designer", "Copywriter", "Production Manager"],
      challenge: "Create a professional corporate brochure that effectively communicates company values and services to potential clients.",
      solution: "Designed a clean, professional layout with strategic use of whitespace, compelling imagery, and clear information hierarchy.",
      results: ["50% increase in lead generation", "Improved brand perception", "Award-winning design recognition"],
      technologies: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
      media: [
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Cover Design" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Inside Spreads" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Typography" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Print Production" },
        { type: "video", src: "/placeholder-video.mp4", title: "Brochure Walkthrough", poster: "/placeholder.svg?height=600&width=800" }
      ]
    },
    {
      id: 5,
      title: "Tech Startup Branding",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern tech startup brand identity",
      tags: ["Logo Design", "Brand Strategy", "Digital Assets"],
      client: "InnovateAI",
      year: "2024",
      duration: "5 weeks",
      team: ["Brand Strategist", "Logo Designer", "Digital Designer"],
      challenge: "Create a modern, tech-forward brand identity that appeals to both investors and tech-savvy customers.",
      solution: "Developed a dynamic brand identity with innovative logo design, vibrant color palette, and flexible brand system.",
      results: ["Successfully raised $2M in funding", "300% increase in website traffic", "Featured in TechCrunch"],
      technologies: ["Adobe Illustrator", "Adobe After Effects", "Figma"],
      media: [
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Logo Variations" },
        { type: "video", src: "/placeholder-video.mp4", title: "Logo Animation", poster: "/placeholder.svg?height=600&width=800" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Brand Guidelines" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Digital Assets" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Brand Applications" }
      ]
    },
    {
      id: 6,
      title: "Mobile App Interface",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "Intuitive mobile app UI design",
      tags: ["Mobile Design", "UI/UX", "Prototyping"],
      client: "FitTrack Pro",
      year: "2024",
      duration: "7 weeks",
      team: ["UX Researcher", "UI Designer", "Prototype Developer"],
      challenge: "Design an intuitive fitness tracking app that motivates users to maintain healthy habits and achieve their goals.",
      solution: "Created a user-friendly interface with gamification elements, progress tracking, and social features.",
      results: ["4.8/5 App Store rating", "100K+ downloads in first month", "Featured as App of the Week"],
      technologies: ["Figma", "Principle", "Adobe XD", "Marvel"],
      media: [
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "App Screens" },
        { type: "video", src: "/placeholder-video.mp4", title: "User Flow", poster: "/placeholder.svg?height=600&width=800" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Wireframes" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Prototype" },
        { type: "image", src: "/placeholder.svg?height=600&width=800", title: "Final Design" }
      ]
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    setCurrentMediaIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setCurrentMediaIndex(0)
    document.body.style.overflow = 'unset'
  }

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length)
    }
  }

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length)
    }
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    const handleKeyboard = (e) => {
      if (isModalOpen && selectedProject) {
        if (e.key === 'ArrowRight') {
          nextMedia()
        } else if (e.key === 'ArrowLeft') {
          prevMedia()
        }
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleKeyboard)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [isModalOpen, selectedProject])

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="section-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230084FC' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="badge-primary mb-6">
              <span>Our Portfolio</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Featured
              <span className="text-gradient-primary">
                {" "}
                Projects
              </span>
            </h2>

            <p className="text-xl text-brand-secondary max-w-3xl mx-auto mb-12">
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
                      ? "btn-primary"
                      : "btn-secondary"
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
                className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openModal(project)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-brand-primary px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Project
                        </span>
                      </button>
                    </div>

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-brand-muted text-sm">{project.duration}</span>
                  </div>
                  
                  <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-brand-muted text-sm">
                      Client: {project.client}
                    </span>
                    <div className="flex items-center text-brand-accent text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Details
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
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
            <button className="btn-primary">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {selectedProject.category}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary">{selectedProject.title}</h2>
                  <p className="text-brand-secondary">{selectedProject.client} • {selectedProject.year}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-brand-muted hover:text-brand-primary transition-colors duration-300 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Media Gallery */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {selectedProject.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={selectedProject.media[currentMediaIndex].src}
                    alt={selectedProject.media[currentMediaIndex].title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={selectedProject.media[currentMediaIndex].src}
                    poster={selectedProject.media[currentMediaIndex].poster}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-brand-primary p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-brand-primary p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Media Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentMediaIndex + 1} / {selectedProject.media.length}
                </div>

                {/* Media Title */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedProject.media[currentMediaIndex].title}
                </div>
              </div>

              {/* Media Thumbnails */}
              <div className="flex gap-2 p-4 overflow-x-auto">
                {selectedProject.media.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentMediaIndex ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={media.type === 'video' ? media.poster : media.src}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Project Info Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Duration</h4>
                  <p className="text-brand-secondary">{selectedProject.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Year</h4>
                  <p className="text-brand-secondary">{selectedProject.year}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Client</h4>
                  <p className="text-brand-secondary">{selectedProject.client}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">The Challenge</h3>
                  <p className="text-brand-secondary leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Our Solution</h3>
                  <p className="text-brand-secondary leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Results & Impact</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-brand-secondary text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team & Technologies */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Team</h3>
                  <div className="space-y-2">
                    {selectedProject.team.map((member, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-brand-secondary">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-brand-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button className="flex-1 btn-primary">
                  Start Similar Project
                </button>
                <button className="flex-1 btn-secondary">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
