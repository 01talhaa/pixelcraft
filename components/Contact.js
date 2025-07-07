"use client"

import { useState, useEffect, useRef } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
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
      details: "hello@pixelcraftstudio.com",
      description: "Send us an email anytime",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Creative Street, Design District",
      description: "New York, NY 10001",
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant support",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full mb-6">
            <span className="text-amber-700 font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {" "}
              Something Amazing
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with us today and let's discuss how we can help transform
            your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {!isSubmitted ? (
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white"
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
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white"
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
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully! 🎉</h3>

                <p className="text-gray-300 mb-6">
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
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
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
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're here to help bring your creative vision to life. Whether you need photo editing, graphic design,
                  or a complete brand makeover, our team is ready to deliver exceptional results.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-800 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-yellow-400 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 rounded-xl p-6 border border-gray-700">
                <h4 className="font-semibold text-white mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
