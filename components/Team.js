"use client"

import { useState, useEffect, useRef } from "react"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState(null)
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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Award-winning designer with 10+ years of experience in brand identity and visual storytelling.",
      skills: ["Brand Strategy", "Creative Direction", "Team Leadership"],
      social: { linkedin: "#", behance: "#", instagram: "#" },
    },
    {
      name: "Michael Chen",
      role: "Senior Photo Editor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Master of digital artistry specializing in fashion and commercial photography retouching.",
      skills: ["Photo Retouching", "Color Grading", "Digital Art"],
      social: { linkedin: "#", behance: "#", instagram: "#" },
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "User-centered design expert creating intuitive and beautiful digital experiences.",
      skills: ["UI Design", "UX Research", "Prototyping"],
      social: { linkedin: "#", behance: "#", dribbble: "#" },
    },
    {
      name: "David Kim",
      role: "Motion Graphics Artist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Bringing static designs to life through compelling animations and motion graphics.",
      skills: ["2D Animation", "Motion Graphics", "Video Editing"],
      social: { linkedin: "#", vimeo: "#", instagram: "#" },
    },
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
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
            <span className="text-amber-700 font-semibold">Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {" "}
              Creative Minds
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented team of designers, artists, and creative professionals work together to bring your vision to
            life with passion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-700">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredMember === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Social Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          <span className="text-sm font-semibold">
                            {platform === "linkedin"
                              ? "Li"
                              : platform === "behance"
                                ? "Be"
                                : platform === "instagram"
                                  ? "Ig"
                                  : platform === "dribbble"
                                    ? "Dr"
                                    : "Vi"}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Skills */}
                  <div className="space-y-2">
                    {member.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mr-2"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-300 ${
                    hoveredMember === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-gray-300 mb-6">Want to join our creative team?</p>
          <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  )
}
