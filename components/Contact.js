"use client"

import { useState, useEffect, useRef } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isWhatsAppChatOpen, setIsWhatsAppChatOpen] = useState(false)
  const [whatsAppMessage, setWhatsAppMessage] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactAction = (action, details) => {
    switch (action) {
      case 'whatsapp':
        setIsWhatsAppChatOpen(true)
        break
      case 'email':
        window.location.href = `mailto:${details}`
        break
      case 'phone':
        window.location.href = `tel:${details}`
        break
      default:
        break
    }
  }

  const sendWhatsAppMessage = async () => {
    if (!whatsAppMessage.trim() || !customerName.trim()) return
    
    // Simulate sending message to your system
    setIsSubmitting(true)
    
    try {
      // Store message data locally first
      const messageData = {
        name: customerName,
        email: customerEmail,
        message: whatsAppMessage,
        timestamp: new Date().toISOString(),
        id: Date.now()
      }
      
      // Store in localStorage (in real app, send to your backend)
      const existingMessages = JSON.parse(localStorage.getItem('whatsappMessages') || '[]')
      existingMessages.push(messageData)
      localStorage.setItem('whatsappMessages', JSON.stringify(existingMessages))
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // After storing, send to WhatsApp
      const whatsappNumber = '+880 1682-888934'
      const cleanNumber = whatsappNumber.replace(/\s|-|\+/g, '')
      
      // Create formatted message with customer info
      const formattedMessage = `New message from ${customerName}
${customerEmail ? `Email: ${customerEmail}` : ''}

Message: ${whatsAppMessage}

Sent from website chat`
      
      const encodedMessage = encodeURIComponent(formattedMessage)
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, '_blank')
      
      setIsMessageSent(true)
      setIsSubmitting(false)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setWhatsAppMessage('')
        setCustomerName('')
        setCustomerEmail('')
        setIsMessageSent(false)
        setIsWhatsAppChatOpen(false)
      }, 3000)
      
    } catch (error) {
      console.error('Error sending message:', error)
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@pixelpimp.com",
      description: "Send us an email anytime",
      color: "from-blue-500 to-blue-600",
      action: "email"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "from-blue-600 to-blue-700",
      action: "phone"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Creative Street, Design District",
      description: "New York, NY 10001",
      color: "from-blue-500 to-blue-600"
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-secondary"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-blue-600 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="badge-primary mb-6">
            <span>Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Let's Create
            <span className="text-gradient-primary">
              {" "}
              Something Amazing
            </span>
          </h2>

          <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with us today and let's discuss how we can help transform
            your brand with our creative expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {!isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary">Send us a message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-primary mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-brand-primary placeholder-gray-400 hover:border-blue-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-primary mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-brand-primary placeholder-gray-400 hover:border-blue-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-primary mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-brand-primary placeholder-gray-400 hover:border-blue-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-primary mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-brand-primary hover:border-blue-300"
                      >
                        <option value="">Select a service</option>
                        <option value="photo-editing">Photo Editing</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="web-design">Web Design</option>
                        <option value="branding">Brand Identity</option>
                        <option value="motion-graphics">Motion Graphics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-primary mb-2">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-brand-primary hover:border-blue-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-primary mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-brand-primary placeholder-gray-400 hover:border-blue-300"
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-brand-primary mb-4">Message Sent Successfully! 🎉</h3>

                <p className="text-brand-secondary mb-6">
                  Thank you for reaching out! We'll get back to you within 24 hours with a detailed response to your
                  inquiry.
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      budget: "",
                      message: "",
                    })
                  }}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-8">

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-primary">Office Hours</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                    <span className="text-brand-secondary">Monday - Friday</span>
                    <span className="text-brand-primary font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                    <span className="text-brand-secondary">Saturday</span>
                    <span className="text-brand-primary font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                    <span className="text-brand-secondary">Sunday</span>
                    <span className="text-brand-primary font-medium">Closed</span>
                  </div>
                </div>
              </div>
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 ${info.action ? 'cursor-pointer' : ''}`}
                    onClick={() => info.action && handleContactAction(info.action, info.details)}
                  >
                    <div className="text-center">
                      <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-3`}>
                        <span className="text-sm">{info.icon}</span>
                      </div>
                      <h4 className="font-semibold text-brand-primary mb-1 group-hover:text-brand-accent transition-colors duration-300 text-sm">{info.title}</h4>
                      <p className="text-brand-accent font-medium mb-1 text-xs">{info.details}</p>
                      <p className="text-brand-secondary text-xs">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Number & Quick Response Promise */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-brand-primary">WhatsApp Direct</h4>
                  </div>
                  <p className="text-brand-secondary text-sm leading-relaxed mb-3">
                    Chat with us instantly on WhatsApp for quick responses and direct communication.
                  </p>
                  <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                    <span className="text-brand-secondary font-medium">+880 1682-888934</span>
                    <button 
                      onClick={() => setIsWhatsAppChatOpen(true)}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Start Chat
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-brand-primary">Quick Response Promise</h4>
                  </div>
                  <p className="text-brand-secondary text-sm leading-relaxed">
                    We understand that time is valuable. That's why we guarantee a response to all inquiries within 24 hours, 
                    often much sooner. Our team is committed to providing you with the attention you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsWhatsAppChatOpen(true)}
          className="group bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          title="Chat with us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isWhatsAppChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">PixelPrimp Studio</h3>
                    <p className="text-sm text-white/80">Usually replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsWhatsAppChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 min-h-[300px] max-h-[400px] overflow-y-auto">
              {!isMessageSent ? (
                <>
                  {/* Welcome Message */}
                  <div className="mb-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 relative">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">
                            Hi there! 👋 Welcome to PixelPrimp Studio. How can we help you today?
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Info Form */}
                  <div className="mb-4 space-y-3">
                    <div>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="space-y-2 mb-4">
                    <button
                      onClick={() => setWhatsAppMessage("Hello! I'm interested in your photo editing services. Can you tell me more about your packages?")}
                      className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">📸</span>
                        <span className="text-sm text-gray-700">Photo Editing Services</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setWhatsAppMessage("Hi! I need help with graphic design for my business. What services do you offer?")}
                      className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">🎨</span>
                        <span className="text-sm text-gray-700">Graphic Design</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setWhatsAppMessage("Hello! I'm looking for web design services. Can we discuss my project requirements?")}
                      className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">💻</span>
                        <span className="text-sm text-gray-700">Web Design</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setWhatsAppMessage("Hi! I need a complete brand identity package. What's included in your branding services?")}
                      className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">🏷️</span>
                        <span className="text-sm text-gray-700">Brand Identity</span>
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                /* Success Message */
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Your message has been sent to WhatsApp. We'll respond to you directly there within 1 hour.
                  </p>
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Check your WhatsApp for our response!
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              {!isMessageSent ? (
                <>
                  <div className="flex items-end space-x-2">
                    <textarea
                      value={whatsAppMessage}
                      onChange={(e) => setWhatsAppMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      rows={2}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          sendWhatsAppMessage()
                        }
                      }}
                    />
                    <button
                      onClick={sendWhatsAppMessage}
                      disabled={!whatsAppMessage.trim() || !customerName.trim() || isSubmitting}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center min-w-[40px]"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Message will be sent to WhatsApp after submission
                  </p>
                </>
              ) : (
                <div className="text-center py-2">
                  <p className="text-sm text-green-600 font-medium">
                    ✅ Message sent to WhatsApp! Check your chat.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
