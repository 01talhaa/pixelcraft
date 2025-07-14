// Admin data management system
export const adminData = {
  // Site Configuration
  siteConfig: {
    siteName: "PixelCraft Studio",
    tagline: "Transforming Ideas into Visual Masterpieces",
    description: "We're a creative design studio specializing in photo editing and graphic design.",
    logo: "/placeholder-logo.svg",
    contactEmail: "hello@pixelcraft.studio",
    phone: "+1 (555) 123-4567",
    address: "123 Creative Street, Design City, DC 12345",
    socialMedia: {
      instagram: "https://instagram.com/pixelcraft_studio",
      behance: "https://behance.net/pixelcraft",
      dribbble: "https://dribbble.com/pixelcraft",
      linkedin: "https://linkedin.com/company/pixelcraft",
      twitter: "https://twitter.com/pixelcraft"
    }
  },

  // Hero Section
  hero: {
    title: "Transforming Ideas into Visual Masterpieces",
    subtitle: "We create stunning designs that captivate, inspire, and drive results for your business.",
    backgroundImage: "/placeholder.jpg",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    features: [
      "Award-winning design team",
      "Fast turnaround times",
      "Unlimited revisions",
      "24/7 support"
    ]
  },

  // Services
  services: [
    {
      id: 1,
      title: "Photo Editing",
      description: "Professional photo retouching and enhancement services",
      icon: "📸",
      price: "Starting at $50",
      features: ["Color correction", "Background removal", "Retouching", "HDR processing"],
      category: "Photography"
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Creative graphic design solutions for all your needs",
      icon: "🎨",
      price: "Starting at $100",
      features: ["Logo design", "Branding", "Print materials", "Digital assets"],
      category: "Design"
    },
    {
      id: 3,
      title: "Web Design",
      description: "Modern and responsive website design",
      icon: "💻",
      price: "Starting at $500",
      features: ["Responsive design", "UI/UX", "Prototyping", "Development"],
      category: "Web"
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Complete brand identity and strategy development",
      icon: "🏢",
      price: "Starting at $1000",
      features: ["Brand strategy", "Logo design", "Style guide", "Brand assets"],
      category: "Branding"
    },
    {
      id: 5,
      title: "Motion Graphics",
      description: "Engaging motion graphics and animation",
      icon: "🎬",
      price: "Starting at $200",
      features: ["2D animation", "Motion graphics", "Video editing", "Effects"],
      category: "Animation"
    },
    {
      id: 6,
      title: "Print Design",
      description: "High-quality print design and layout",
      icon: "📄",
      price: "Starting at $75",
      features: ["Brochures", "Business cards", "Posters", "Packaging"],
      category: "Print"
    }
  ],

  // Portfolio/Projects
  portfolio: [
    {
      id: 1,
      title: "TechCorp Brand Identity",
      description: "Complete brand identity redesign for a leading technology company",
      image: "/placeholder.jpg",
      category: "Branding",
      client: "TechCorp Solutions",
      year: "2024",
      tags: ["Branding", "Logo Design", "Identity"],
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Modern e-commerce platform with seamless user experience",
      image: "/placeholder.jpg",
      category: "Web Design",
      client: "Fashion Store",
      year: "2024",
      tags: ["Web Design", "E-commerce", "UX/UI"],
      status: "completed",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant Menu Design",
      description: "Elegant menu design for upscale dining establishment",
      image: "/placeholder.jpg",
      category: "Print Design",
      client: "Fine Dining Restaurant",
      year: "2023",
      tags: ["Print", "Menu Design", "Typography"],
      status: "completed",
      featured: false
    }
  ],

  // Team Members
  team: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "Leading creative vision with 8+ years of experience in brand strategy and design.",
      image: "/placeholder-user.jpg",
      skills: ["Brand Strategy", "Creative Direction", "Team Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        behance: "https://behance.net/sarah-johnson",
        dribbble: "https://dribbble.com/sarah-johnson"
      },
      active: true
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Senior Designer",
      bio: "Specialized in digital design and user experience with a passion for innovative solutions.",
      image: "/placeholder-user.jpg",
      skills: ["UI/UX Design", "Digital Design", "Prototyping"],
      social: {
        linkedin: "https://linkedin.com/in/mike-chen",
        behance: "https://behance.net/mike-chen",
        dribbble: "https://dribbble.com/mike-chen"
      },
      active: true
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Photo Editor",
      bio: "Expert in photo manipulation and retouching with an eye for detail.",
      image: "/placeholder-user.jpg",
      skills: ["Photo Editing", "Retouching", "Color Grading"],
      social: {
        linkedin: "https://linkedin.com/in/emma-davis",
        behance: "https://behance.net/emma-davis",
        instagram: "https://instagram.com/emma_edits"
      },
      active: true
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      company: "TechCorp Solutions",
      content: "PixelCraft Studio delivered exceptional results that exceeded our expectations. Their attention to detail and creative vision transformed our brand identity.",
      rating: 5,
      image: "/placeholder-user.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Lisa Martinez",
      role: "Marketing Director",
      company: "Fashion Forward",
      content: "Working with PixelCraft was a game-changer for our business. They understood our vision and brought it to life beautifully.",
      rating: 5,
      image: "/placeholder-user.jpg",
      featured: true
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Founder",
      company: "StartupTech",
      content: "The team at PixelCraft is incredibly talented and professional. They delivered high-quality work on time and within budget.",
      rating: 5,
      image: "/placeholder-user.jpg",
      featured: false
    }
  ],

  // Stats/Insights
  stats: {
    projectsCompleted: 156,
    happyClients: 89,
    yearsExperience: 8,
    teamMembers: 12,
    awards: 15,
    monthlyViews: 12456,
    conversionRate: 3.2,
    avgRating: 4.9
  },

  // Upcoming Projects
  upcomingProjects: [
    {
      id: 1,
      title: "Global Tech Summit 2024",
      description: "Complete visual identity and promotional materials for international technology conference",
      client: "Tech Summit Organization",
      startDate: "2024-03-01",
      endDate: "2024-04-15",
      status: "planning",
      progress: 15,
      budget: 25000,
      category: "Event Branding"
    },
    {
      id: 2,
      title: "Eco-Friendly Brand Launch",
      description: "Sustainable brand identity for environmental startup",
      client: "GreenTech Solutions",
      startDate: "2024-02-15",
      endDate: "2024-03-30",
      status: "in-progress",
      progress: 45,
      budget: 15000,
      category: "Brand Identity"
    }
  ],

  // Blog/News
  blog: [
    {
      id: 1,
      title: "The Future of Design Trends in 2024",
      excerpt: "Exploring upcoming design trends and how they'll shape the creative industry",
      content: "Full blog content here...",
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
      category: "Design Trends",
      tags: ["Design", "Trends", "2024"],
      featured: true,
      image: "/placeholder.jpg"
    }
  ],

  // Newsletter Subscribers
  newsletter: {
    subscribers: 1247,
    recentSubscribers: [
      { email: "john@example.com", date: "2024-01-15", name: "John Doe" },
      { email: "jane@example.com", date: "2024-01-14", name: "Jane Smith" }
    ]
  }
}

// Helper functions for data management
export const updateSiteConfig = (newConfig) => {
  adminData.siteConfig = { ...adminData.siteConfig, ...newConfig }
}

export const updateHero = (newHero) => {
  adminData.hero = { ...adminData.hero, ...newHero }
}

export const addService = (service) => {
  const newService = { ...service, id: Date.now() }
  adminData.services.push(newService)
  return newService
}

export const updateService = (id, updates) => {
  const index = adminData.services.findIndex(s => s.id === id)
  if (index !== -1) {
    adminData.services[index] = { ...adminData.services[index], ...updates }
  }
}

export const deleteService = (id) => {
  adminData.services = adminData.services.filter(s => s.id !== id)
}

export const addPortfolioItem = (item) => {
  const newItem = { ...item, id: Date.now() }
  adminData.portfolio.push(newItem)
  return newItem
}

export const updatePortfolioItem = (id, updates) => {
  const index = adminData.portfolio.findIndex(p => p.id === id)
  if (index !== -1) {
    adminData.portfolio[index] = { ...adminData.portfolio[index], ...updates }
  }
}

export const deletePortfolioItem = (id) => {
  adminData.portfolio = adminData.portfolio.filter(p => p.id !== id)
}

export const addTeamMember = (member) => {
  const newMember = { ...member, id: Date.now() }
  adminData.team.push(newMember)
  return newMember
}

export const updateTeamMember = (id, updates) => {
  const index = adminData.team.findIndex(t => t.id === id)
  if (index !== -1) {
    adminData.team[index] = { ...adminData.team[index], ...updates }
  }
}

export const deleteTeamMember = (id) => {
  adminData.team = adminData.team.filter(t => t.id !== id)
}

export const addTestimonial = (testimonial) => {
  const newTestimonial = { ...testimonial, id: Date.now() }
  adminData.testimonials.push(newTestimonial)
  return newTestimonial
}

export const updateTestimonial = (id, updates) => {
  const index = adminData.testimonials.findIndex(t => t.id === id)
  if (index !== -1) {
    adminData.testimonials[index] = { ...adminData.testimonials[index], ...updates }
  }
}

export const deleteTestimonial = (id) => {
  adminData.testimonials = adminData.testimonials.filter(t => t.id !== id)
}

export const updateStats = (newStats) => {
  adminData.stats = { ...adminData.stats, ...newStats }
}

export const addUpcomingProject = (project) => {
  const newProject = { ...project, id: Date.now() }
  adminData.upcomingProjects.push(newProject)
  return newProject
}

export const updateUpcomingProject = (id, updates) => {
  const index = adminData.upcomingProjects.findIndex(p => p.id === id)
  if (index !== -1) {
    adminData.upcomingProjects[index] = { ...adminData.upcomingProjects[index], ...updates }
  }
}

export const deleteUpcomingProject = (id) => {
  adminData.upcomingProjects = adminData.upcomingProjects.filter(p => p.id !== id)
}

// Data persistence (in a real app, this would connect to a database)
export const saveData = () => {
  localStorage.setItem('pixelcraft_admin_data', JSON.stringify(adminData))
}

export const loadData = () => {
  const saved = localStorage.getItem('pixelcraft_admin_data')
  if (saved) {
    const parsedData = JSON.parse(saved)
    Object.assign(adminData, parsedData)
  }
}

export default adminData
