"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isShrinked, setIsShrinked] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState(null)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout)
      setServicesTimeout(null)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300) // 300ms delay before closing
    setServicesTimeout(timeout)
  }

  const openServiceModal = (service) => {
    setSelectedService(service)
    setIsServiceModalOpen(true)
    setIsServicesOpen(false) // Close dropdown
    document.body.style.overflow = 'hidden'
  }

  const closeServiceModal = () => {
    setIsServiceModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isServiceModalOpen) {
        closeServiceModal()
      }
    }

    if (isServiceModalOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isServiceModalOpen])

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
      ],
      href: "#services"
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
      ],
      href: "#services"
    },
    {
      icon: "💻",
      title: "Web Design",
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
      ],
      href: "#services"
    },
    {
      icon: "🏷️",
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
      ],
      href: "#services"
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
      ],
      href: "#services"
    },
    {
      icon: "🖨️",
      title: "Print Design",
      description: "Professional print design services for marketing and business materials",
      features: ["Brochures", "Business Cards", "Flyers", "Posters"],
      price: "Starting at $40",
      deliveryTime: "3-7 days",
      detailedDescription: "Create impactful print materials that represent your brand professionally. From business cards to large format posters, we ensure your printed materials make a lasting impression.",
      process: [
        "Discuss your print requirements and specifications",
        "Design concepts with print optimization in mind",
        "Review and refine designs for perfect output",
        "Deliver print-ready files with specifications"
      ],
      portfolio: [
        "Corporate brochure designs",
        "Business card and stationery sets",
        "Event poster and flyer designs",
        "Product catalog layouts"
      ],
      href: "#services"
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      setIsShrinked(scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsShrinked(false) // Force header to expand when clicked
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
    { name: "Admin", href: "/admin" },
  ]

  const handleNavClick = (e, item) => {
    e.preventDefault()
    
    // If it's the admin page, navigate directly
    if (item.href === "/admin") {
      router.push("/admin")
      return
    }
    
    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push("/")
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      // If we're already on the home page, just scroll to section
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200" : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Hide when shrinked */}
        <div className={`flex items-center justify-between text-sm border-b border-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
          isShrinked ? "py-0 max-h-0 opacity-0" : "py-2 sm:py-3 max-h-20 opacity-100"
        }`}>
          {/* Mobile: Show only essential info */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-gray-600 text-xs sm:text-sm">
            <span className="flex items-center">
              <span className="mr-1 sm:mr-2">📧</span>
              <span className="hidden sm:inline">hello@pixelprimp.com</span>
              <span className="sm:hidden text-xs">hello@pixelprimp.com</span>
            </span>
            <span className="flex items-center">
              <span className="mr-1 sm:mr-2">📞</span>
              {/* <span className="hidden sm:inline">+1 (555) 123-4567</span> */}
              <span className=" sm:inline text-2xs">555-123-4567</span>
            </span>
          </div>
          
          {/* Mobile: Compact right section */}
          <div className="flex items-center space-x-1 sm:space-x-4 text-gray-600 text-xs sm:text-sm">
            <Link href="#contact" className="hover:text-blue-600 transition-colors hidden sm:inline">
              Help
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors hidden xs:inline sm:inline text-xs">
              Contact
            </Link>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-xs hidden sm:inline">Follow us:</span>
              <span className="text-xs xs:hidden">Follow:</span>
              <div className="flex space-x-1">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">📷</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">🎨</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">💼</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
          isShrinked ? "py-3" : "py-6"
        }`}>
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/PixelprimpFinal.png" 
                alt="PixelPrimp Logo" 
                className={`w-auto group-hover:scale-110 transition-all duration-700 ease-in-out ${
                  isShrinked ? "h-10" : "h-16"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.filter(item => item.name !== "Admin").map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            
            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, { name: "Services", href: "#services" })}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Services
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Services Dropdown */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="p-6">
                    <div className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="mr-2">🎯</span>
                      Our Services
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => openServiceModal(service)}
                          className="flex flex-col items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group cursor-pointer"
                        >
                          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                            {service.icon}
                          </span>
                          <span className="font-medium text-sm text-center leading-tight">
                            {service.title}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, { name: "Services", href: "#services" })}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        View All Services
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Admin Link */}
            <a
              href="/admin"
              onClick={(e) => handleNavClick(e, { name: "Admin", href: "/admin" })}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Admin
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50">
                Login
              </button>
              <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
                Sign Up
              </button>
            </div>

            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, { name: "Services", href: "#services" })}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Services
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <button className="w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 border border-gray-300">
                    Login
                  </button>
                  <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>

    {/* Service Detail Modal */}
    {isServiceModalOpen && selectedService && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={closeServiceModal}
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
              onClick={closeServiceModal}
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
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="flex-1 bg-white border border-gray-300 text-brand-primary py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
