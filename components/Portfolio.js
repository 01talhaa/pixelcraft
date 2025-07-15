"use client"

import { useState, useEffect, useRef } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
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

  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop&crop=center",
      description: "Complete brand identity for luxury fashion brand",
      client: "Elegance Fashion House",
      year: "2024",
      duration: "6 weeks",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      tags: ["Logo Design", "Brand Identity", "Packaging"],
      team: ["Brand Designer", "Creative Director", "Graphic Designer"],
      challenge: "Create a sophisticated brand identity that appeals to high-end fashion customers while maintaining timeless elegance and modern appeal.",
      solution: "Developed a minimalist yet luxurious brand identity with custom typography, sophisticated color palette, and premium packaging design that reflects the brand's values.",
      results: ["40% increase in brand recognition", "25% boost in premium sales", "Featured in 3 major fashion magazines"],
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop&crop=center", title: "Logo Design" },
        { type: "image", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center", title: "Brand Guidelines" },
        { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", title: "Brand Animation", poster: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop&crop=center" },
        { type: "image", src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center", title: "Packaging Design" },
        { type: "image", src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center", title: "Business Cards" },
        { type: "image", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center", title: "Letterhead Design" }
      ]
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      description: "Modern e-commerce platform design",
      client: "TechStore Pro",
      year: "2024",
      duration: "8 weeks",
      technologies: ["Figma", "Adobe XD", "React", "Tailwind CSS"],
      tags: ["Web Design", "UI/UX", "Responsive"],
      team: ["UX Designer", "UI Designer", "Front-end Developer"],
      challenge: "Design an intuitive e-commerce platform that increases conversion rates and provides seamless shopping experience across all devices.",
      solution: "Created a user-centric design with streamlined checkout process, advanced search functionality, and mobile-first approach.",
      results: ["65% increase in conversion rate", "45% reduction in cart abandonment", "98% mobile usability score"],
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center", title: "Homepage Design" },
        { type: "image", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center", title: "Product Pages" },
        { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", title: "User Journey Demo", poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center" },
        { type: "image", src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop&crop=center", title: "Mobile Design" },
        { type: "image", src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center", title: "Checkout Process" }
      ]
    },
    {
      id: 3,
      title: "Fashion Photography",
      category: "photo",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop&crop=center",
      description: "Professional fashion photo editing",
      client: "Style Magazine",
      year: "2024",
      duration: "3 weeks",
      technologies: ["Adobe Photoshop", "Adobe Lightroom", "Capture One"],
      tags: ["Photo Editing", "Retouching", "Color Grading"],
      team: ["Photo Editor", "Retoucher", "Color Specialist"],
      challenge: "Transform raw fashion photography into magazine-ready images while maintaining natural look and editorial quality.",
      solution: "Applied advanced retouching techniques, color grading, and mood enhancement to create stunning editorial images.",
      results: ["Featured in 2 major fashion magazines", "95% client satisfaction", "Increased photographer bookings by 30%"],
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop&crop=center", title: "Before & After" },
        { type: "image", src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop&crop=center", title: "Color Grading" },
        { type: "image", src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop&crop=center", title: "Skin Retouching" },
        { type: "image", src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&crop=center", title: "Final Results" }
      ]
    },
    {
      id: 4,
      title: "Corporate Brochure",
      category: "print",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      description: "Professional corporate brochure design",
      client: "Global Solutions Inc.",
      year: "2024",
      duration: "4 weeks",
      technologies: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
      tags: ["Print Design", "Layout", "Typography"],
      team: ["Print Designer", "Copywriter", "Production Manager"],
      challenge: "Create a professional corporate brochure that effectively communicates company values and services to potential clients.",
      solution: "Designed a clean, professional layout with strategic use of whitespace, compelling imagery, and clear information hierarchy.",
      results: ["50% increase in lead generation", "Improved brand perception", "Award-winning design recognition"],
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center", title: "Cover Design" },
        { type: "image", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center", title: "Inside Spreads" },
        { type: "image", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center", title: "Typography" },
        { type: "image", src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center", title: "Print Production" }
      ]
    },
    {
      id: 5,
      title: "Tech Startup Branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
      description: "Modern tech startup brand identity",
      client: "InnovateAI",
      year: "2024",
      duration: "5 weeks",
      technologies: ["Adobe Illustrator", "Adobe After Effects", "Figma"],
      tags: ["Logo Design", "Brand Strategy", "Digital Assets"],
      team: ["Brand Strategist", "Logo Designer", "Digital Designer"],
      challenge: "Create a modern, tech-forward brand identity that appeals to both investors and tech-savvy customers.",
      solution: "Developed a dynamic brand identity with innovative logo design, vibrant color palette, and flexible brand system.",
      results: ["Successfully raised $2M in funding", "300% increase in website traffic", "Featured in TechCrunch"],
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center", title: "Logo Variations" },
        { type: "image", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center", title: "Brand Guidelines" },
        { type: "image", src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop&crop=center", title: "Digital Assets" },
        { type: "image", src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center", title: "Brand Applications" }
      ]
    },
    {
      id: 6,
      title: "Mobile App Interface",
      category: "web",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop&crop=center",
      description: "Intuitive mobile app UI design",
      client: "FitTrack Pro",
      year: "2024",
      duration: "7 weeks",
      technologies: ["Figma", "Principle", "Adobe XD", "Marvel"],
      tags: ["Mobile Design", "UI/UX", "Prototyping"],
      team: ["UX Researcher", "UI Designer", "Prototype Developer"],
      challenge: "Design an intuitive fitness tracking app that motivates users to maintain healthy habits and achieve their goals.",
      solution: "Created a user-friendly interface with gamification elements, progress tracking, and social features.",
      results: ["4.8/5 App Store rating", "100K+ downloads in first month", "Featured as App of the Week"],
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop&crop=center", title: "App Screens" },
        { type: "image", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center", title: "Wireframes" },
        { type: "image", src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center", title: "Prototype" },
        { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center", title: "Final Design" }
      ]
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    setCurrentImageIndex(0)
    setIsGalleryOpen(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setIsGalleryOpen(false)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }

  const openGallery = (index) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.media.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length)
    }
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isGalleryOpen) {
          closeGallery()
        } else if (isModalOpen) {
          closeModal()
        }
      }
      if (e.key === 'ArrowRight' && isGalleryOpen) {
        nextImage()
      }
      if (e.key === 'ArrowLeft' && isGalleryOpen) {
        prevImage()
      }
    }

    if (isModalOpen || isGalleryOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen, isGalleryOpen, selectedProject])

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
            className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="badge-primary mb-4">
              <span>Our Portfolio</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Featured
              <span className="text-gradient-primary">
                {" "}
                Projects
              </span>
            </h2>

            <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
              Explore our latest work and see how we've helped brands transform their visual identity and digital
              presence.
            </p>
          </div>

          {/* Modern Infinite Scroll Portfolio */}
          <div className={`relative mb-12 transition-all duration-800 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Infinite Scroll Container */}
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
              
              {/* Scrolling Content */}
              <div className="flex animate-infinite-scroll sm:animate-infinite-scroll-desktop">
                {/* First Set of Projects */}
                {projects.map((project, index) => (
                  <div 
                    key={`first-${project.id}`}
                    className="flex-shrink-0 mx-4 w-80 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100"
                    onClick={() => openModal(project)}
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                          project.category === 'branding' ? 'bg-purple-500' :
                          project.category === 'web' ? 'bg-blue-500' :
                          project.category === 'photo' ? 'bg-green-500' :
                          'bg-orange-500'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      {/* Year Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-brand-primary px-2 py-1 rounded-full text-xs font-semibold">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div>
                        <h4 className="font-bold text-brand-primary text-lg">{project.title}</h4>
                        <p className="text-brand-accent font-semibold text-sm">{project.client}</p>
                      </div>
                    </div>
                    
                    <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-muted">⏱️ {project.duration}</span>
                      <span className="text-xs text-blue-600 font-semibold">View Details →</span>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate Set for Seamless Loop */}
                {projects.map((project, index) => (
                  <div 
                    key={`second-${project.id}`}
                    className="flex-shrink-0 mx-4 w-80 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100"
                    onClick={() => openModal(project)}
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                          project.category === 'branding' ? 'bg-purple-500' :
                          project.category === 'web' ? 'bg-blue-500' :
                          project.category === 'photo' ? 'bg-green-500' :
                          'bg-orange-500'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      {/* Year Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-brand-primary px-2 py-1 rounded-full text-xs font-semibold">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div>
                        <h4 className="font-bold text-brand-primary text-lg">{project.title}</h4>
                        <p className="text-brand-accent font-semibold text-sm">{project.client}</p>
                      </div>
                    </div>
                    
                    <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-muted">⏱️ {project.duration}</span>
                      <span className="text-xs text-blue-600 font-semibold">View Details →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="btn-primary">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal()
            }
          }}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    selectedProject.category === 'branding' ? 'bg-purple-500' :
                    selectedProject.category === 'web' ? 'bg-blue-500' :
                    selectedProject.category === 'photo' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`}>
                    {selectedProject.category}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary">{selectedProject.title}</h2>
                  <p className="text-brand-accent font-semibold">{selectedProject.client} • {selectedProject.year}</p>
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

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Project Overview</h3>
                <p className="text-brand-secondary leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Duration</h4>
                  <p className="text-brand-secondary">{selectedProject.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Year</h4>
                  <p className="text-brand-secondary">{selectedProject.year}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">The Challenge</h3>
                <p className="text-brand-secondary leading-relaxed mb-4">{selectedProject.challenge}</p>
                
                <h3 className="text-xl font-bold text-brand-primary mb-4">Our Solution</h3>
                <p className="text-brand-secondary leading-relaxed">{selectedProject.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Results & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-brand-secondary text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Gallery */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Project Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.media.map((media, index) => (
                    <div 
                      key={index}
                      className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity group"
                      onClick={() => openGallery(index)}
                    >
                      <img
                        src={media.type === 'video' ? media.poster || media.src : media.src}
                        alt={media.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Video Indicator */}
                      {media.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/70 rounded-full p-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-xs text-white bg-black/50 px-2 py-1 rounded text-center truncate">
                          {media.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-brand-primary px-3 py-1 rounded-full text-sm">
                      {tech}
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

      {/* Full-Screen Gallery Modal */}
      {isGalleryOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeGallery()
            }
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeGallery()
              }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div 
              className="max-w-5xl max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.media[currentImageIndex].type === 'video' ? (
                <video
                  src={selectedProject.media[currentImageIndex].src}
                  poster={selectedProject.media[currentImageIndex].poster}
                  controls
                  className="max-w-full max-h-full object-contain rounded-lg"
                  autoPlay
                  muted
                />
              ) : (
                <img
                  src={selectedProject.media[currentImageIndex].src}
                  alt={selectedProject.media[currentImageIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              )}
              {/* Fallback for broken images */}
              <div className="hidden w-64 h-64 bg-gray-200 rounded-lg items-center justify-center">
                <span className="text-gray-500">Image not available</span>
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedProject.media[currentImageIndex].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {currentImageIndex + 1} / {selectedProject.media.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
              {selectedProject.media.map((media, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(index)
                  }}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 ${
                    index === currentImageIndex ? 'border-white' : 'border-gray-500'
                  }`}
                >
                  <img
                    src={media.type === 'video' ? media.poster || media.src : media.src}
                    alt={media.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Video Indicator for thumbnails */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 rounded-full p-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Mobile Scroll Speed */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes infinite-scroll-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 15s linear infinite;
        }
        
        .animate-infinite-scroll-desktop {
          animation: infinite-scroll-desktop 30s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-infinite-scroll {
            animation: infinite-scroll 5s linear infinite;
          }
        }
      `}</style>
    </>
  )
}
