"use client"

import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredLink, setHoveredLink] = useState(null)

  const footerLinks = {
    Services: ["Photo Editing", "Graphic Design", "Web Design", "Brand Identity", "Motion Graphics", "Print Design"],
    Company: ["About Us", "Our Team", "Careers", "Contact", "Blog", "Case Studies"],
    Resources: ["Design Tips", "Tutorials", "Free Assets", "Style Guide", "FAQ", "Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Refund Policy", "License"],
  }

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Behance", icon: "🎨", url: "#" },
    { name: "Dribbble", icon: "🏀", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
  ]

  const getServiceIcon = (service) => {
    const icons = {
      "Photo Editing": "📸",
      "Graphic Design": "🎨",
      "Web Design": "💻",
      "Brand Identity": "🏷️",
      "Motion Graphics": "🎬",
      "Print Design": "🖨️"
    }
    return icons[service] || "🎯"
  }

  const getCompanyIcon = (item) => {
    const icons = {
      "About Us": "ℹ️",
      "Our Team": "👥",
      "Careers": "💼",
      "Contact": "📞",
      "Blog": "📝",
      "Case Studies": "📊"
    }
    return icons[item] || "🏢"
  }

  const getResourceIcon = (resource) => {
    const icons = {
      "Design Tips": "💡",
      "Tutorials": "📚",
      "Free Assets": "🎁",
      "Style Guide": "📋",
      "FAQ": "❓",
      "Support": "🛠️"
    }
    return icons[resource] || "📖"
  }

  const getLegalIcon = (legal) => {
    const icons = {
      "Privacy Policy": "🔒",
      "Terms of Service": "📋",
      "Cookie Policy": "🍪",
      "GDPR": "🛡️",
      "Refund Policy": "💰",
      "License": "📄"
    }
    return icons[legal] || "⚖️"
  }

  const getCategoryIcon = (category) => {
    const icons = {
      Services: getServiceIcon,
      Company: getCompanyIcon,
      Resources: getResourceIcon,
      Legal: getLegalIcon
    }
    return icons[category] || (() => "📋")
  }

  return (
    <footer className="section-primary relative overflow-hidden">
      {/* Background Pattern - Same as Portfolio */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230084FC' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="mb-6">
                <div className="text-3xl font-bold">
                              <img src="/PixelprimpFinal.png" alt="PixelPrimp Logo" className="h-20 w-auto mr-2" />
                  {/* <span className="text-brand-primary ml-1">Studio</span> */}
                </div>
              </div>

              <p className="text-brand-secondary leading-relaxed mb-8 max-w-md">
                We're a creative design studio specializing in photo editing and graphic design. Our passion is
                transforming your vision into stunning visual experiences that captivate and inspire.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-brand-primary">Stay Creative</h4>
                <div className="flex group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-brand-primary placeholder-gray-500 transition-all duration-300 focus:bg-white"
                  />
                  <button className="btn-primary px-4 lg:px-6 py-3 rounded-r-lg rounded-l-none transform group-hover:scale-105 transition-transform duration-300 text-sm lg:text-base">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-brand-primary">Follow Us</h4>
                <div className="flex flex-wrap gap-3 lg:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-500 transform hover:scale-110 hover:rotate-12 border border-gray-200 hover:border-transparent hover:shadow-lg"
                      title={social.name}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-base lg:text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections - All in One Row */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <div key={category} className="transform hover:scale-105 transition-all duration-500" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                  <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-brand-primary flex items-center">
                    <span className="mr-2 text-lg lg:text-xl">
                      {category === 'Services' ? '🎯' : category === 'Company' ? '🏢' : category === 'Resources' ? '📚' : '⚖️'}
                    </span>
                    <span className="text-sm lg:text-base">{category}</span>
                  </h4>
                  <ul className="space-y-2 lg:space-y-3">
                    {links.map((link, linkIndex) => {
                      const iconGetter = getCategoryIcon(category)
                      const icon = iconGetter(link)
                      return (
                        <li key={linkIndex}>
                          <a
                            href="#"
                            className="group flex items-center text-brand-secondary hover:text-brand-accent transition-all duration-300 relative text-sm lg:text-base"
                            onMouseEnter={() => setHoveredLink(`${category}-${linkIndex}`)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            <span className="mr-2 lg:mr-3 text-xs lg:text-sm transform group-hover:scale-110 transition-transform duration-300">
                              {icon}
                            </span>
                            <span className="relative flex-1">
                              {link}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <svg 
                              className={`w-3 h-3 lg:w-4 lg:h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                                hoveredLink === `${category}-${linkIndex}` ? 'text-brand-accent' : 'text-brand-secondary'
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-brand-secondary text-xs lg:text-sm transform hover:scale-105 transition-transform duration-300 text-center md:text-left">
              © {currentYear} PixelPrimp Studio. All rights reserved.
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6 text-xs lg:text-sm text-brand-secondary">
              <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/abu-bakar-siddique-talha-802417215/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-brand-muted hover:text-brand-accent transition-all duration-300 transform hover:scale-105"
              >
                <span>Developed By ABS Talha</span>
                <span className="text-blue-500">💼</span>
              </a>
              {/* <div className="hidden md:flex items-center space-x-2 text-brand-muted">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>by PixelPrimp</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
