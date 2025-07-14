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
      image: "/placeholder.svg?height=300&width=500",
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
        { type: 'image', src: '/placeholder.svg', title: 'Campaign Mockup' },
        { type: 'image', src: '/placeholder.svg', title: 'Design Process' },
        { type: 'image', src: '/placeholder.svg', title: 'Final Assets' }
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
      image: "/placeholder.svg?height=300&width=500",
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
        { type: 'image', src: '/placeholder.svg', title: 'Brand Concept' },
        { type: 'image', src: '/placeholder.svg', title: 'Logo Development' },
        { type: 'image', src: '/placeholder.svg', title: 'Website Preview' }
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
      image: "/placeholder.svg?height=300&width=500",
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
        { type: 'image', src: '/placeholder.svg', title: 'Platform Overview' },
        { type: 'image', src: '/placeholder.svg', title: 'Mobile Design' },
        { type: 'image', src: '/placeholder.svg', title: 'User Flow' }
      ]
    }
  ]

  return (
    <>
      <section ref={sectionRef} className="section-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230084FC' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="badge-primary mb-6">
              <span>Coming Soon</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Upcoming
              <span className="text-gradient-primary">
                {" "}
                Projects
              </span>
            </h2>

            <p className="text-xl text-brand-secondary max-w-3xl mx-auto mb-12">
              Get a sneak peek at the exciting projects we're working on. These upcoming collaborations showcase our commitment to innovation and excellence.
            </p>
          </div>

          {/* Featured Project Showcase */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        upcomingProjects[currentProject].status === "In Progress"
                          ? "bg-green-100 text-green-700"
                          : upcomingProjects[currentProject].status === "Starting Soon"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {upcomingProjects[currentProject].status}
                    </span>
                    <span className="text-brand-muted text-sm">{upcomingProjects[currentProject].timeline}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                    {upcomingProjects[currentProject].title}
                  </h3>

                  <p className="text-brand-accent text-lg mb-4">
                    Client: {upcomingProjects[currentProject].client}
                  </p>

                  <p className="text-brand-secondary text-lg leading-relaxed mb-8">
                    {upcomingProjects[currentProject].description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-brand-secondary text-sm">Project Progress</span>
                      <span className="text-brand-primary font-semibold">{upcomingProjects[currentProject].progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${upcomingProjects[currentProject].progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {upcomingProjects[currentProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => openModal(upcomingProjects[currentProject])}
                      className="btn-primary"
                    >
                      View Details
                    </button>
                    <button className="btn-secondary">
                      Get Updates
                    </button>
                  </div>
                </div>

                {/* Project Visual */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                    <img
                      src={upcomingProjects[currentProject].image || "/placeholder.svg"}
                      alt={upcomingProjects[currentProject].title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />

                    {/* Overlay Effect */}
                    <div className="absolute inset-6 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-bounce opacity-80"></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce opacity-80"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center mb-12 space-x-3">
              {upcomingProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
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

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "In Progress"
                        ? "bg-green-500 text-white"
                        : project.status === "Starting Soon"
                          ? "bg-yellow-500 text-white"
                          : "bg-blue-500 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Timeline Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs">Progress</span>
                      <span className="text-white text-xs font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div
                        className="bg-white h-1 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* View Details Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-brand-primary px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Details
                        </span>
                      </button>
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
