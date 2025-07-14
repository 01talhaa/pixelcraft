"use client"

import { useState, useEffect, useRef } from "react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const services = [
    {
      icon: "📸",
      title: "Photo Editing",
      description: "Professional photo retouching, color correction, and enhancement services",
      features: ["Color Grading", "Retouching", "Background Removal", "HDR Processing"],
      price: "Starting at $25",
      deliveryTime: "2-3 days",
      detailedDescription: "Transform your photos with our professional photo editing services. We specialize in color correction, retouching, background removal, and advanced HDR processing to make your images stand out.",
      process: [
        "Upload your photos through our secure platform",
        "Specify your requirements and preferences",
        "Our experts work on your images with precision",
        "Receive high-quality edited photos with revisions included"
      ],
      portfolio: [
        "Wedding photography enhancement",
        "Product photography for e-commerce",
        "Portrait retouching and beauty enhancement",
        "Real estate photo editing"
      ]
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Creative visual solutions for branding, marketing, and digital media",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
      price: "Starting at $50",
      deliveryTime: "3-5 days",
      detailedDescription: "Create stunning visual identities and marketing materials that capture your brand's essence. Our graphic design services cover everything from logos to complete brand packages.",
      process: [
        "Consultation to understand your brand vision",
        "Concept development and initial designs",
        "Refinement based on your feedback",
        "Final delivery with all necessary file formats"
      ],
      portfolio: [
        "Brand identity packages",
        "Marketing collateral design",
        "Packaging and label design",
        "Social media graphics"
      ]
    },
    {
      icon: "🌐",
      title: "Web Graphics",
      description: "Stunning web-ready graphics and user interface design elements",
      features: ["UI/UX Design", "Web Banners", "Social Media", "Icon Design"],
      price: "Starting at $75",
      deliveryTime: "4-7 days",
      detailedDescription: "Elevate your digital presence with custom web graphics, UI elements, and social media assets designed to engage your audience and drive conversions.",
      process: [
        "Analyze your website and brand requirements",
        "Design custom graphics optimized for web",
        "Create responsive designs for all devices",
        "Deliver optimized files ready for implementation"
      ],
      portfolio: [
        "Website hero banners and graphics",
        "Social media template designs",
        "Custom icon sets and illustrations",
        "UI/UX interface elements"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Design",
      description: "Mobile-first design approach for apps and responsive interfaces",
      features: ["App Design", "Mobile UI", "Responsive Design", "Prototyping"],
      price: "Starting at $100",
      deliveryTime: "5-10 days",
      detailedDescription: "Design beautiful and functional mobile experiences that users love. From app interfaces to responsive web designs, we ensure your digital products work flawlessly on all devices.",
      process: [
        "User research and wireframe creation",
        "Design system development",
        "Interactive prototype creation",
        "Testing and refinement for optimal UX"
      ],
      portfolio: [
        "iOS and Android app interfaces",
        "Mobile web responsive designs",
        "Interactive prototypes",
        "Mobile-first e-commerce solutions"
      ]
    },
    {
      icon: "🎬",
      title: "Motion Graphics",
      description: "Dynamic animations and motion graphics for digital platforms",
      features: ["2D Animation", "Video Graphics", "Logo Animation", "Transitions"],
      price: "Starting at $150",
      deliveryTime: "7-14 days",
      detailedDescription: "Bring your brand to life with engaging motion graphics and animations. Perfect for social media, marketing campaigns, and brand storytelling.",
      process: [
        "Concept development and storyboarding",
        "Animation design and asset creation",
        "Motion graphics production",
        "Final rendering and format optimization"
      ],
      portfolio: [
        "Animated logo reveals",
        "Social media video content",
        "Explainer video graphics",
        "Brand animation packages"
      ]
    },
    {
      icon: "🖼️",
      title: "Brand Identity",
      description: "Complete brand identity packages and visual communication systems",
      features: ["Brand Strategy", "Visual Identity", "Style Guides", "Brand Assets"],
      price: "Starting at $200",
      deliveryTime: "10-21 days",
      detailedDescription: "Build a cohesive brand identity that resonates with your audience. Our comprehensive brand packages include everything you need to establish a strong visual presence.",
      process: [
        "Brand discovery and strategy session",
        "Logo design and visual identity creation",
        "Brand guidelines and style guide development",
        "Complete brand asset package delivery"
      ],
      portfolio: [
        "Complete brand identity systems",
        "Logo design and brand marks",
        "Brand guidelines and style guides",
        "Marketing material templates"
      ]
    },
  ]

  const openModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="section-secondary"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="badge-primary mb-6">
              <span>Our Services</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              What We
              <span className="text-gradient-primary"> Create</span>
            </h2>

            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive design services that bring your vision to life with
              creativity and precision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => openModal(service)}
              >
                {/* Card Header with Gradient Background */}
                <div className="relative h-24 bg-gradient-to-br from-blue-500/10 to-blue-600/20 flex items-center justify-center">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="text-brand-accent text-sm font-semibold bg-white/80 px-3 py-1 rounded-full">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-secondary mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Delivery Time */}
                  <div className="flex items-center text-brand-muted text-sm mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.deliveryTime}
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-brand-secondary">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    View Details
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                    hoveredService === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="btn-primary">
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{selectedService.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary">{selectedService.title}</h2>
                  <p className="text-brand-accent font-semibold">{selectedService.price}</p>
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
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Service Overview</h3>
                <p className="text-brand-secondary leading-relaxed">{selectedService.detailedDescription}</p>
              </div>

              {/* Delivery Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Delivery Time</h4>
                  <p className="text-brand-secondary">{selectedService.deliveryTime}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Starting Price</h4>
                  <p className="text-brand-accent font-semibold">{selectedService.price}</p>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Our Process</h3>
                <div className="space-y-3">
                  {selectedService.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {index + 1}
                      </div>
                      <p className="text-brand-secondary">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Examples */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">What We've Created</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.portfolio.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-brand-secondary text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button className="flex-1 btn-primary">
                  Get Started
                </button>
                <button className="flex-1 btn-secondary">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
