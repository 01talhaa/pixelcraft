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
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=300&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop&crop=center",
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

            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              What We
              <span className="text-gradient-primary"> Create</span>
            </h2>

            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive design services that bring your vision to life with
              creativity and precision.
            </p>
          </div>

          {/* Services Grid */}


          {/* Infinite Horizontal Scroll Section */}
          <div className={`relative mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            {/* Infinite Scroll Container */}
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
              
              {/* Scrolling Content */}
              <div className="flex animate-infinite-scroll sm:animate-infinite-scroll-desktop">
                {/* First Set */}
                {services.map((service, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-4 w-80 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100"
                    onClick={() => openModal(service)}
                  >
                    {/* Service Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <div className="text-3xl">{service.icon}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div>
                        <h4 className="font-bold text-brand-primary text-lg">{service.title}</h4>
                        <p className="text-brand-accent font-semibold text-sm">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-muted">⏱️ {service.deliveryTime}</span>
                      <span className="text-xs text-blue-600 font-semibold">Learn More →</span>
                    </div>
                  </div>
                ))}
                
                {/* Second Set (Duplicate for seamless loop) */}
                {services.map((service, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-4 w-80 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100"
                    onClick={() => openModal(service)}
                  >
                    {/* Service Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <div className="text-3xl">{service.icon}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div>
                        <h4 className="font-bold text-brand-primary text-lg">{service.title}</h4>
                        <p className="text-brand-accent font-semibold text-sm">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-muted">⏱️ {service.deliveryTime}</span>
                      <span className="text-xs text-blue-600 font-semibold">Learn More →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
