"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState(null)
  const sectionRef = useRef(null)
  const router = useRouter()

  const handleMemberClick = (member) => {
    router.push(`/team/${member.slug}`)
  }

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
      id: 1,
      name: "Sarah Johnson",
      slug: "sarahjohnson",
      role: "Creative Director",
      department: "Creative",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Award-winning designer with 10+ years of experience in brand identity and visual storytelling.",
      fullBio: "Sarah is an award-winning Creative Director with over a decade of experience in brand identity and visual storytelling. She has led creative teams at top agencies and has worked with Fortune 500 companies to create compelling brand experiences.",
      skills: ["Brand Strategy", "Creative Direction", "Team Leadership", "Visual Identity", "Campaign Development"],
      experience: "10+ years",
      location: "New York, NY",
      joinDate: "January 2020",
      education: [
        {
          degree: "Master of Fine Arts in Graphic Design",
          school: "Rhode Island School of Design",
          year: "2012"
        },
        {
          degree: "Bachelor of Arts in Visual Communication",
          school: "Parsons School of Design",
          year: "2010"
        }
      ],
      certifications: [
        "Adobe Certified Expert (ACE)",
        "Google Analytics Certified",
        "Brand Strategy Certificate - Northwestern Kellogg"
      ],
      achievements: [
        "Cannes Lions Gold Winner 2022",
        "D&AD Pencil Award 2021",
        "Webby Award for Best Visual Design 2020",
        "Featured in Design Week Top 50 Creative Directors"
      ],
      projectsLed: 150,
      clientsWorked: 85,
      social: { 
        linkedin: "https://linkedin.com/in/sarahjohnson", 
        behance: "https://behance.net/sarahjohnson", 
        instagram: "https://instagram.com/sarahjohnson_design",
        twitter: "https://twitter.com/sarahjohnson"
      },
      specialties: ["Brand Identity", "Visual Strategy", "Creative Leadership", "Art Direction"],
      languages: ["English", "Spanish", "French"]
    },
    {
      id: 2,
      name: "Michael Chen",
      slug: "michaelchen",
      role: "Senior Photo Editor",
      department: "Post-Production",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Master of digital artistry specializing in fashion and commercial photography retouching.",
      fullBio: "Michael is a master of digital artistry with expertise in fashion and commercial photography retouching. His keen eye for detail and technical proficiency have made him an indispensable part of our creative team.",
      skills: ["Photo Retouching", "Color Grading", "Digital Art", "Composite Imaging", "Beauty Retouching"],
      experience: "8+ years",
      location: "Los Angeles, CA",
      joinDate: "March 2021",
      education: [
        {
          degree: "Bachelor of Fine Arts in Photography",
          school: "Art Center College of Design",
          year: "2014"
        },
        {
          degree: "Certificate in Digital Imaging",
          school: "School of Visual Arts",
          year: "2015"
        }
      ],
      certifications: [
        "Adobe Certified Expert - Photoshop",
        "Capture One Certified Professional",
        "DaVinci Resolve Certified Colorist"
      ],
      achievements: [
        "Featured in Retouching Magazine",
        "Winner - International Photography Awards 2021",
        "Guest Speaker at Adobe Max 2022",
        "Mentor at Creative Live"
      ],
      projectsLed: 200,
      clientsWorked: 120,
      social: { 
        linkedin: "https://linkedin.com/in/michaelchen", 
        behance: "https://behance.net/michaelchen", 
        instagram: "https://instagram.com/michaelchen_art",
        flickr: "https://flickr.com/michaelchen"
      },
      specialties: ["Beauty Retouching", "Fashion Photography", "Commercial Imaging", "Color Theory"],
      languages: ["English", "Mandarin", "Japanese"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      slug: "emilyrodriguez",
      role: "UI/UX Designer",
      department: "Digital Design",
      image: "/placeholder.svg?height=400&width=400",
      bio: "User-centered design expert creating intuitive and beautiful digital experiences.",
      fullBio: "Emily is a user-centered design expert who creates intuitive and beautiful digital experiences. Her research-driven approach and innovative solutions have helped numerous clients improve their digital presence.",
      skills: ["UI Design", "UX Research", "Prototyping", "User Testing", "Information Architecture"],
      experience: "6+ years",
      location: "San Francisco, CA",
      joinDate: "July 2022",
      education: [
        {
          degree: "Master of Science in Human-Computer Interaction",
          school: "Stanford University",
          year: "2017"
        },
        {
          degree: "Bachelor of Arts in Psychology",
          school: "University of California, Berkeley",
          year: "2015"
        }
      ],
      certifications: [
        "Google UX Design Certificate",
        "Certified Usability Analyst (CUA)",
        "Figma Professional Certificate"
      ],
      achievements: [
        "UX Design Awards Winner 2023",
        "Featured in UX Magazine",
        "Speaker at Design+Research Conference",
        "Mentor at ADPList"
      ],
      projectsLed: 75,
      clientsWorked: 45,
      social: { 
        linkedin: "https://linkedin.com/in/emilyrodriguez", 
        behance: "https://behance.net/emilyrodriguez", 
        dribbble: "https://dribbble.com/emilyrodriguez",
        medium: "https://medium.com/@emilyrodriguez"
      },
      specialties: ["Mobile UX", "Design Systems", "User Research", "Accessibility Design"],
      languages: ["English", "Spanish", "Portuguese"]
    },
    {
      id: 4,
      name: "David Kim",
      slug: "davidkim",
      role: "Motion Graphics Artist",
      department: "Animation",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Bringing static designs to life through compelling animations and motion graphics.",
      fullBio: "David brings static designs to life through compelling animations and motion graphics. His creative vision and technical expertise in animation have elevated countless projects and campaigns.",
      skills: ["2D Animation", "Motion Graphics", "Video Editing", "3D Animation", "Visual Effects"],
      experience: "7+ years",
      location: "Austin, TX",
      joinDate: "September 2021",
      education: [
        {
          degree: "Bachelor of Fine Arts in Animation",
          school: "California Institute of the Arts",
          year: "2016"
        },
        {
          degree: "Certificate in Motion Graphics",
          school: "Gnomon School of Visual Effects",
          year: "2017"
        }
      ],
      certifications: [
        "Adobe Certified Expert - After Effects",
        "Cinema 4D Certified Professional",
        "Autodesk Maya Certified User"
      ],
      achievements: [
        "Vimeo Staff Pick 2022",
        "Motion Graphics Award Winner",
        "Featured in Motionographer",
        "Guest Lecturer at Art Institute"
      ],
      projectsLed: 90,
      clientsWorked: 65,
      social: { 
        linkedin: "https://linkedin.com/in/davidkim", 
        vimeo: "https://vimeo.com/davidkim", 
        instagram: "https://instagram.com/davidkim_motion",
        youtube: "https://youtube.com/davidkimanimation"
      },
      specialties: ["Brand Animation", "Explainer Videos", "UI Animation", "3D Motion Graphics"],
      languages: ["English", "Korean"]
    }
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-secondary"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="badge-primary mb-6">
            <span>Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Meet the
            <span className="text-gradient-primary">
              {" "}
              Creative Minds
            </span>
          </h2>

          <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
            Our talented team of designers, artists, and creative professionals work together to bring your vision to
            life with passion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative transition-all duration-1000 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => handleMemberClick(member)}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {member.department}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredMember === member.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* View Profile Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-brand-primary px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          View Profile
                        </span>
                      </button>
                    </div>

                    {/* Social Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          <span className="text-xs font-semibold">
                            {platform === "linkedin"
                              ? "Li"
                              : platform === "behance"
                                ? "Be"
                                : platform === "instagram"
                                  ? "Ig"
                                  : platform === "dribbble"
                                    ? "Dr"
                                    : platform === "vimeo"
                                      ? "Vi"
                                      : platform === "twitter"
                                        ? "Tw"
                                        : platform === "medium"
                                          ? "Me"
                                          : platform === "youtube"
                                            ? "Yt"
                                            : "Fl"}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center text-brand-accent text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Profile
                    </div>
                  </div>
                  
                  <p className="text-brand-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-brand-secondary text-sm mb-4 leading-relaxed line-clamp-2">{member.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-primary">{member.projectsLed}</div>
                      <div className="text-xs text-brand-muted">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-primary">{member.clientsWorked}</div>
                      <div className="text-xs text-brand-muted">Clients</div>
                    </div>
                  </div>

                  {/* Top Skills */}
                  <div className="space-y-2">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-xs text-brand-tertiary">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></div>
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-brand-muted">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {member.location}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                    hoveredMember === member.id ? "opacity-100" : "opacity-0"
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
          <p className="text-brand-secondary mb-6">Want to join our creative team?</p>
          <button className="btn-primary">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  )
}
