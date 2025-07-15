"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [exitingMembers, setExitingMembers] = useState([])
  const [enteringMembers, setEnteringMembers] = useState([])
  const sectionRef = useRef(null)
  const router = useRouter()

  const handleMemberClick = (member) => {
    router.push(`/team/${member.slug}`)
  }

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      slug: "sarahjohnson",
      role: "Creative Director",
      department: "Creative",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
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
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
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
    },
    {
      id: 5,
      name: "Jessica Martinez",
      slug: "jessicamartinez",
      role: "Brand Strategist",
      department: "Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic thinker who crafts compelling brand narratives that resonate with target audiences.",
      fullBio: "Jessica is a strategic thinker who crafts compelling brand narratives that resonate with target audiences. Her analytical approach and creative insights have helped numerous brands find their unique voice in competitive markets.",
      skills: ["Brand Strategy", "Market Research", "Content Planning", "Campaign Strategy", "Consumer Psychology"],
      experience: "9+ years",
      location: "Chicago, IL",
      joinDate: "June 2020",
      education: [
        {
          degree: "Master of Business Administration",
          school: "Northwestern Kellogg",
          year: "2018"
        },
        {
          degree: "Bachelor of Arts in Marketing",
          school: "University of Illinois",
          year: "2015"
        }
      ],
      certifications: [
        "Google Analytics Certified",
        "HubSpot Content Marketing Certified",
        "Facebook Blueprint Certified"
      ],
      achievements: [
        "Marketing Excellence Award 2022",
        "Brand Strategy Leader of the Year",
        "Featured in Marketing Magazine",
        "TEDx Speaker on Brand Psychology"
      ],
      projectsLed: 125,
      clientsWorked: 95,
      social: { 
        linkedin: "https://linkedin.com/in/jessicamartinez", 
        twitter: "https://twitter.com/jessicamartinez", 
        instagram: "https://instagram.com/jessicamartinez_brand",
        medium: "https://medium.com/@jessicamartinez"
      },
      specialties: ["Brand Positioning", "Market Analysis", "Strategic Planning", "Brand Development"],
      languages: ["English", "Spanish", "Italian"]
    },
    {
      id: 6,
      name: "Alex Thompson",
      slug: "alexthompson",
      role: "Web Developer",
      department: "Development",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer who builds responsive, user-friendly web applications with modern technologies.",
      fullBio: "Alex is a full-stack developer who builds responsive, user-friendly web applications with modern technologies. His expertise spans both frontend and backend development, creating seamless digital experiences.",
      skills: ["React", "Node.js", "TypeScript", "Next.js", "Database Design"],
      experience: "5+ years",
      location: "Seattle, WA",
      joinDate: "February 2023",
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University of Washington",
          year: "2019"
        },
        {
          degree: "Full-Stack Web Development Bootcamp",
          school: "Lambda School",
          year: "2020"
        }
      ],
      certifications: [
        "AWS Certified Developer",
        "React Developer Certification",
        "MongoDB Certified Developer"
      ],
      achievements: [
        "Developer of the Year 2023",
        "Open Source Contributor",
        "Tech Talk Speaker",
        "Hackathon Winner 2022"
      ],
      projectsLed: 85,
      clientsWorked: 55,
      social: { 
        linkedin: "https://linkedin.com/in/alexthompson", 
        github: "https://github.com/alexthompson", 
        twitter: "https://twitter.com/alexthompson_dev",
        stackoverflow: "https://stackoverflow.com/users/alexthompson"
      },
      specialties: ["Frontend Development", "Backend APIs", "Performance Optimization", "Mobile Development"],
      languages: ["English", "German"]
    }
  ]

  const membersPerSlide = 4
  const totalSlides = Math.ceil(teamMembers.length / membersPerSlide)

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

  // Auto-rotate carousel with smooth transitions
  useEffect(() => {
    if (!isPaused && isVisible && !isTransitioning) {
      const interval = setInterval(() => {
        handleSlideChange((currentSlide + 1) % totalSlides)
      }, 4000) // Change slides every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused, isVisible, isTransitioning, currentSlide, totalSlides])

  const handleSlideChange = (newSlide) => {
    if (isTransitioning || newSlide === currentSlide) return
    
    setIsTransitioning(true)
    
    // Simple slide transition for grid layout
    setTimeout(() => {
      setCurrentSlide(newSlide)
      setIsTransitioning(false)
    }, 600) // Short transition for grid layout
  }

  const getCurrentMembers = () => {
    const startIndex = currentSlide * membersPerSlide
    return teamMembers.slice(startIndex, startIndex + membersPerSlide)
  }

  const getSlideMembers = (slideIndex) => {
    const startIndex = slideIndex * membersPerSlide
    return teamMembers.slice(startIndex, startIndex + membersPerSlide)
  }

  const goToSlide = (slideIndex) => {
    handleSlideChange(slideIndex)
  }

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-secondary min-h-screen relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-bounce"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            // Use seeded values based on index for consistent SSR/client rendering
            const positions = [
              { left: 12, top: 18 }, { left: 67, top: 34 }, { left: 89, top: 72 }, { left: 23, top: 45 },
              { left: 45, top: 67 }, { left: 78, top: 23 }, { left: 34, top: 89 }, { left: 56, top: 12 },
              { left: 90, top: 56 }, { left: 21, top: 78 }, { left: 65, top: 34 }, { left: 43, top: 90 },
              { left: 87, top: 21 }, { left: 19, top: 65 }, { left: 76, top: 43 }, { left: 32, top: 87 },
              { left: 54, top: 19 }, { left: 81, top: 76 }, { left: 28, top: 32 }, { left: 72, top: 54 }
            ];
            const delays = [0.2, 1.1, 2.3, 0.8, 1.9, 3.1, 0.5, 2.7, 1.5, 4.2, 0.9, 2.1, 3.8, 1.6, 2.9, 0.3, 1.7, 2.5, 3.4, 0.6];
            const durations = [3.5, 5.2, 4.1, 6.3, 3.8, 4.7, 5.9, 3.3, 4.5, 5.6, 6.1, 3.9, 4.3, 5.4, 3.7, 4.9, 5.8, 3.6, 4.2, 5.3];
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
                style={{
                  left: `${positions[i].left}%`,
                  top: `${positions[i].top}%`,
                  animationDelay: `${delays[i]}s`,
                  animationDuration: `${durations[i]}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-medium tracking-wide text-sm">Meet Our Team</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-brand-primary mb-4 leading-tight">
            <span className="inline-block">The</span>
            <span className="text-gradient-primary ml-4 mr-2">
              Creative
            </span>
            <span className="text-gradient-primary">
              Powerhouse
            </span>
          </h2>

          <p className="text-lg text-brand-secondary max-w-2xl mx-auto leading-relaxed">
            Talented visionaries crafting extraordinary experiences with passion, innovation, and unmatched expertise.
          </p>
        </div>

        {/* Team Layout - Modern Grid Animation */}
        <div className="relative">
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {getCurrentMembers().map((member, index) => (
              <div
                key={member.id}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => handleMemberClick(member)}
              >
                {/* Floating Card */}
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-xl border border-white/20 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-white/95 group-hover:to-blue-50/50">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                  
                  {/* Profile Section */}
                  <div className="relative z-10 text-center mb-5">
                    {/* Profile Image with Glow Effect */}
                    <div className="relative mx-auto mb-3 w-20 h-20">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden ring-3 ring-white/50 group-hover:ring-blue-500/30 transition-all duration-500">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Online Status */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg font-bold text-brand-primary mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs text-brand-accent font-medium mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {member.role}
                    </p>

                    {/* Department Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-xs font-medium shadow-lg group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></div>
                      {member.department}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3 relative z-10">
                    <div className="text-center p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                      <div className="text-base font-bold text-brand-primary group-hover:text-blue-600 transition-colors duration-300">
                        {member.projectsLed}
                      </div>
                      <div className="text-xs text-brand-muted">Projects</div>
                    </div>
                    <div className="text-center p-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                      <div className="text-base font-bold text-brand-primary group-hover:text-purple-600 transition-colors duration-300">
                        {member.clientsWorked}
                      </div>
                      <div className="text-xs text-brand-muted">Clients</div>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="space-y-1 mb-3 relative z-10">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-xs text-brand-tertiary group-hover:text-brand-secondary transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-2 group-hover:shadow-md transition-shadow duration-300"></div>
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 group-hover:shadow-xl">
                    View Profile
                  </button>

                  {/* Hover Social Links */}
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 transition-all duration-300 ${
                    hoveredMember === member.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    {Object.entries(member.social).slice(0, 3).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-primary hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                      >
                        <span className="text-xs font-bold">
                          {platform.charAt(0).toUpperCase()}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 15}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => handleSlideChange((currentSlide - 1 + totalSlides) % totalSlides)}
              disabled={isTransitioning}
              className={`group relative w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-primary hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125 shadow-lg"
                      : "bg-white/50 hover:bg-white/80 hover:scale-110"
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handleSlideChange((currentSlide + 1) % totalSlides)}
              disabled={isTransitioning}
              className={`group relative w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-primary hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
                  isPaused 
                    ? "bg-gray-400 text-white hover:bg-gray-500" 
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {isPaused ? (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <span className="text-xs text-brand-secondary">
                {isPaused ? "Paused" : "Auto-play"}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-sm mx-auto">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-brand-muted mt-2">
              <span>Slide {currentSlide + 1}</span>
              <span>of {totalSlides}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1200 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 inline-block">
            <p className="text-brand-secondary mb-6 text-lg">Ready to join our creative journey?</p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Explore Opportunities
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideOutDown {
          0% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% { 
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
        }
        
        @keyframes cardHover {
          0% { 
            transform: translateY(0) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
          100% { 
            transform: translateY(-8px) scale(1.05);
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        @keyframes fadeInScale {
          0% { 
            opacity: 0;
            transform: scale(0.8);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes buttonPulse {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.05);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-slide-out-down {
          animation: slideOutDown 0.6s ease-in forwards;
        }
        
        .animate-card-hover {
          animation: cardHover 0.3s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        
        .animate-button-pulse {
          animation: buttonPulse 0.2s ease-in-out;
        }
        
        .group:hover .animate-card-hover {
          animation-play-state: running;
        }
        
        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .transition-bounce {
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .backdrop-blur-glass {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .shadow-glow {
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  )
}
