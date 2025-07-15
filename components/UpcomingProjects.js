"use client"

import { useState, useEffect, useRef } from "react"

export default function UpcomingProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % upcomingProjects.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  // Modal handlers
  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  const upcomingProjects = [
    {
      id: 1,
      title: "Global Fashion Campaign",
      client: "Luxury Fashion Brand",
      description: "Complete visual campaign for international fashion week including photo editing, graphic design, and digital assets.",
      fullDescription: "An extensive visual campaign designed for a prestigious luxury fashion brand's international fashion week debut. This project encompasses comprehensive photo editing, innovative graphic design, and a full suite of digital assets tailored for global audiences.",
      timeline: "Q2 2024",
      duration: "4 months",
      status: "In Progress",
      progress: 75,
      startDate: "March 2024",
      expectedLaunch: "June 2024",
      budget: "$75,000",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=300&fit=crop&crop=center",
      tags: ["Fashion", "Photography", "Campaign", "Digital Assets"],
      team: [
        "Creative Director - Sarah Johnson",
        "Lead Designer - Michael Chen",
        "Photo Editor - Emma Rodriguez",
        "Digital Specialist - James Wilson"
      ],
      deliverables: [
        "Brand Campaign Strategy",
        "Photo Editing & Retouching",
        "Graphic Design Assets",
        "Digital Marketing Materials",
        "Social Media Content",
        "Print Advertisement Designs"
      ],
      challenges: "Creating cohesive visual identity across multiple international markets while maintaining brand consistency and cultural sensitivity.",
      objectives: [
        "Increase brand awareness by 40%",
        "Drive 25% increase in engagement",
        "Establish presence in 5 new markets",
        "Generate 15% sales growth"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Cinema 4D", "After Effects"],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop&crop=center', title: 'Campaign Mockup' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&crop=center', title: 'Design Process' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop&crop=center', title: 'Final Assets' }
      ]
    },
    {
      id: 2,
      title: "Tech Startup Rebrand",
      client: "InnovateTech Solutions",
      description: "Full brand identity redesign including logo, website, and marketing materials for emerging tech company.",
      fullDescription: "A complete brand transformation for an innovative technology startup, including comprehensive logo redesign, modern website development, and strategic marketing materials designed to position them as industry leaders.",
      timeline: "Q3 2024",
      duration: "6 months",
      status: "Starting Soon",
      progress: 25,
      startDate: "July 2024",
      expectedLaunch: "December 2024",
      budget: "$95,000",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
      tags: ["Branding", "Web Design", "Tech", "Identity"],
      team: [
        "Brand Strategist - Alex Thompson",
        "UI/UX Designer - Lisa Park",
        "Web Developer - David Kim",
        "Marketing Specialist - Rachel Green"
      ],
      deliverables: [
        "Brand Identity System",
        "Logo Design & Variations",
        "Website Development",
        "Marketing Collateral",
        "Brand Guidelines",
        "Digital Style Guide"
      ],
      challenges: "Differentiating the brand in a saturated tech market while maintaining professional credibility and innovative appeal.",
      objectives: [
        "Establish strong brand recognition",
        "Increase website conversions by 50%",
        "Improve market positioning",
        "Enhance investor confidence"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Figma", "Adobe Creative Suite"],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center', title: 'Brand Concept' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop&crop=center', title: 'Logo Development' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center', title: 'Website Preview' }
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      client: "RetailMax Corporation",
      description: "Comprehensive e-commerce platform design with focus on user experience and conversion optimization.",
      fullDescription: "A sophisticated e-commerce platform redesign focused on maximizing user experience and conversion rates. This project includes comprehensive UX research, modern interface design, and performance optimization for a major retail corporation.",
      timeline: "Q4 2024",
      duration: "8 months",
      status: "Planning",
      progress: 10,
      startDate: "October 2024",
      expectedLaunch: "May 2025",
      budget: "$150,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      tags: ["E-commerce", "UI/UX", "Mobile", "Optimization"],
      team: [
        "UX Research Lead - Maria Santos",
        "Senior UI Designer - Tom Anderson",
        "Frontend Developer - Sophie Zhang",
        "Backend Developer - Carlos Rodriguez",
        "QA Specialist - Jennifer Lee"
      ],
      deliverables: [
        "UX Research & Analysis",
        "User Journey Mapping",
        "Responsive Design System",
        "Mobile App Interface",
        "Performance Optimization",
        "Analytics Integration"
      ],
      challenges: "Balancing complex product catalog navigation with streamlined checkout process while ensuring mobile-first responsive design.",
      objectives: [
        "Increase conversion rates by 35%",
        "Reduce cart abandonment by 40%",
        "Improve mobile experience",
        "Enhance search functionality"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Figma"],
      media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center', title: 'Platform Overview' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop&crop=center', title: 'Mobile Design' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center', title: 'User Flow' }
      ]
    }
  ]

  return (
    <>
      <section ref={sectionRef} className="section-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-bounce"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              >
                <div className={`w-2 h-2 bg-blue-500/30 ${Math.random() > 0.5 ? 'rounded-full' : 'rotate-45'}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-blue-600 font-semibold tracking-wide">Coming Soon</span>
            </div>

            <h2 className="text-3xl md:text-6xl lg:text-4xl font-bold text-brand-primary mb-6 leading-tight">
              <span className="inline-block mr-2">Ongoing </span>
              <span className="text-gradient-primary">
                Projects
              </span>
            </h2>

            <p className="text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              Get an exclusive preview of our upcoming innovations. These cutting-edge projects represent the future of creative excellence.
            </p>
          </div>

          {/* Featured Project Spotlight */}
          <div className={`mb-20 transition-all duration-1200 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 animate-gradient-shift"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Content */}
                <div className="space-y-6">
                  {/* Status and Timeline */}
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      upcomingProjects[currentProject].status === "In Progress"
                        ? "bg-green-500/20 text-green-700 border border-green-500/30"
                        : upcomingProjects[currentProject].status === "Starting Soon"
                          ? "bg-yellow-500/20 text-yellow-700 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-700 border border-blue-500/30"
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          upcomingProjects[currentProject].status === "In Progress"
                            ? "bg-green-500"
                            : upcomingProjects[currentProject].status === "Starting Soon"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                        }`}></div>
                        {upcomingProjects[currentProject].status}
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-brand-primary border border-white/40">
                      {upcomingProjects[currentProject].timeline}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
                    {upcomingProjects[currentProject].title}
                  </h3>

                  {/* Client */}
                  <div className="flex items-center gap-2 text-brand-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 3h10M7 3v18M7 3l10 18" />
                    </svg>
                    <span className="text-lg font-medium">{upcomingProjects[currentProject].client}</span>
                  </div>

                  {/* Description */}
                  <p className="text-brand-secondary text-lg leading-relaxed">
                    {upcomingProjects[currentProject].description}
                  </p>

                  {/* Progress Section */}
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-brand-primary font-semibold">Project Progress</span>
                      <span className="text-brand-primary text-2xl font-bold">{upcomingProjects[currentProject].progress}%</span>
                    </div>
                    <div className="relative w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${upcomingProjects[currentProject].progress}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {upcomingProjects[currentProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm text-blue-700 text-sm font-medium rounded-full border border-blue-500/20 hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button 
                      onClick={() => openModal(upcomingProjects[currentProject])}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                    <button className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-brand-primary px-6 py-3 rounded-xl font-semibold border border-white/40 transition-all duration-300 hover:bg-white hover:shadow-lg transform hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
                      </svg>
                      Get Updates
                    </button>
                  </div>
                </div>

                {/* Project Visual - PC Monitor */}
                <div className="relative group">
                  <div className="relative">
                    {/* Monitor Stand */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        {/* Monitor Base */}
                        <div className="w-32 h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-lg"></div>
                        
                        {/* Monitor Neck */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-4 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-lg shadow-md"></div>
                      </div>
                    </div>

                    {/* Monitor Screen */}
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl border border-gray-700">
                      {/* Screen Bezel */}
                      <div className="relative bg-black rounded-xl overflow-hidden shadow-inner">
                        {/* Screen Content */}
                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                          <img
                            src={upcomingProjects[currentProject].image || "/placeholder.svg"}
                            alt={upcomingProjects[currentProject].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          
                          {/* Screen Reflection Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                          
                          {/* Screen Glare */}
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 ease-in-out"></div>
                          
                        </div>
                      </div>

                      {/* Monitor Power Button */}
                      <div className="absolute bottom-1 right-4 w-2 h-2 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
                    </div>

                    {/* Floating Tech Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg rotate-12 animate-bounce opacity-80 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-bounce opacity-80 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    
                    <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg rotate-45 animate-bounce opacity-70 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center" style={{ animationDelay: "1s" }}>
                      <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    {/* Keyboard */}
                    <div className="flex justify-center mt-4">
                      <div className="w-48 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-md relative">
                        {/* Keyboard Keys */}
                        <div className="absolute inset-x-2 top-1 flex justify-between">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-500 rounded-sm"></div>
                          ))}
                        </div>
                        <div className="absolute inset-x-3 top-3 flex justify-between">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-500 rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
              {upcomingProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                  }`}
                >
                  {currentProject === index && (
                    <div className="w-full h-full rounded-full bg-white/30 animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}

        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          
          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 8s ease infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .backdrop-blur-glass {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        `}</style>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal()
            }
          }}
        >
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                    selectedProject.status === "In Progress"
                      ? "bg-green-500 text-white"
                      : selectedProject.status === "Starting Soon"
                        ? "bg-yellow-500 text-white"
                        : "bg-blue-500 text-white"
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary">{selectedProject.title}</h2>
                  <p className="text-brand-secondary">{selectedProject.client} • {selectedProject.timeline}</p>
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

            {/* Project Hero Image */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Progress Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-sm">Project Progress</span>
                    <span className="text-white font-semibold">{selectedProject.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedProject.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Project Overview</h3>
                <p className="text-brand-secondary leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Project Info Grid */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Duration</h4>
                  <p className="text-brand-secondary">{selectedProject.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Start Date</h4>
                  <p className="text-brand-secondary">{selectedProject.startDate}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Launch</h4>
                  <p className="text-brand-secondary">{selectedProject.expectedLaunch}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Budget</h4>
                  <p className="text-brand-secondary">{selectedProject.budget}</p>
                </div>
              </div>

              {/* Challenge & Objectives */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Challenge</h3>
                  <p className="text-brand-secondary leading-relaxed">{selectedProject.challenges}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Objectives</h3>
                  <div className="space-y-2">
                    {selectedProject.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-brand-secondary text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Project Deliverables</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-brand-secondary">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team & Technologies */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Project Team</h3>
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

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button className="flex-1 btn-primary">
                  Get Project Updates
                </button>
                <button className="flex-1 btn-secondary">
                  Similar Project Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
