"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Team member data (in a real app, this would come from a database or API)
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    slug: "sarahjohnson",
    role: "Creative Director",
    department: "Creative",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning designer with 10+ years of experience in brand identity and visual storytelling.",
    fullBio: "Sarah is an award-winning Creative Director with over a decade of experience in brand identity and visual storytelling. She has led creative teams at top agencies and has worked with Fortune 500 companies to create compelling brand experiences. Her innovative approach to design thinking and brand strategy has earned her recognition in the industry.",
    skills: ["Brand Strategy", "Creative Direction", "Team Leadership", "Visual Identity", "Campaign Development"],
    experience: "10+ years",
    location: "New York, NY",
    joinDate: "January 2020",
    email: "sarah.johnson@pixelpimp.com",
    phone: "+1 (555) 123-4567",
    education: [
      {
        degree: "Master of Fine Arts in Graphic Design",
        school: "Rhode Island School of Design",
        year: "2012",
        description: "Specialized in brand identity and visual communication systems"
      },
      {
        degree: "Bachelor of Arts in Visual Communication",
        school: "Parsons School of Design",
        year: "2010",
        description: "Magna Cum Laude, President of Design Society"
      }
    ],
    workHistory: [
      {
        position: "Creative Director",
        company: "PixelPrimp Design Agency",
        duration: "2020 - Present",
        description: "Leading creative vision and strategy for a diverse portfolio of clients. Managing a team of 15+ designers and overseeing all creative output.",
        responsibilities: [
          "Lead creative strategy and vision for 50+ client projects annually",
          "Manage and mentor a team of 15+ designers and creative professionals",
          "Oversee all creative output ensuring brand consistency and quality",
          "Collaborate with clients to understand their vision and translate it into compelling designs",
          "Develop and implement creative processes and standards across the agency",
          "Present creative concepts and strategies to C-level executives"
        ],
        achievements: [
          "Increased client retention rate by 40% through improved creative processes",
          "Won 5 major industry awards for outstanding creative work",
          "Expanded creative team by 60% to meet growing client demands",
          "Implemented new design system that reduced project delivery time by 30%"
        ],
        technologies: ["Adobe Creative Suite", "Figma", "Sketch", "InVision", "Miro"],
        teamSize: "15+ designers",
        keyProjects: [
          "Global rebranding for Fortune 500 tech company",
          "Multi-platform campaign for luxury fashion brand",
          "Complete digital transformation for healthcare startup"
        ]
      },
      {
        position: "Senior Art Director",
        company: "Brand Innovators Inc.",
        duration: "2017 - 2020",
        description: "Developed brand identities for Fortune 500 companies. Led creative campaigns that increased brand awareness by 45% on average.",
        responsibilities: [
          "Developed comprehensive brand identities for Fortune 500 companies",
          "Led creative campaigns across multiple channels and platforms",
          "Collaborated with strategy teams to align creative with business objectives",
          "Mentored junior designers and provided creative guidance",
          "Presented creative work to senior stakeholders and clients"
        ],
        achievements: [
          "Increased average brand awareness by 45% across all campaigns",
          "Led rebranding project that resulted in 25% increase in client sales",
          "Developed award-winning campaign featured in Cannes Lions",
          "Reduced campaign development time by 20% through improved workflows"
        ],
        technologies: ["Adobe Creative Suite", "Cinema 4D", "After Effects", "Principle"],
        teamSize: "8 designers",
        keyProjects: [
          "Complete rebrand for international airline",
          "Product launch campaign for consumer electronics brand",
          "Corporate identity design for financial services firm"
        ]
      },
      {
        position: "Art Director",
        company: "Creative Solutions Studio",
        duration: "2014 - 2017",
        description: "Created visual concepts for advertising campaigns. Collaborated with cross-functional teams to deliver integrated marketing solutions.",
        responsibilities: [
          "Created visual concepts for advertising campaigns across various industries",
          "Collaborated with copywriters, strategists, and account teams",
          "Developed creative briefs and guided project execution",
          "Ensured brand consistency across all creative materials",
          "Managed multiple projects simultaneously while meeting tight deadlines"
        ],
        achievements: [
          "Delivered 100+ successful advertising campaigns",
          "Improved client satisfaction scores by 35%",
          "Reduced creative revision cycles by 25%",
          "Mentored 5 junior designers who were later promoted"
        ],
        technologies: ["Adobe Creative Suite", "Sketch", "InDesign", "Illustrator"],
        teamSize: "5 designers",
        keyProjects: [
          "National advertising campaign for restaurant chain",
          "Digital campaign for automotive brand",
          "Print and outdoor advertising for retail client"
        ]
      },
      {
        position: "Junior Designer",
        company: "Design Collective",
        duration: "2012 - 2014",
        description: "Worked on various design projects including logo design, print materials, and digital assets.",
        responsibilities: [
          "Designed logos, print materials, and digital assets for various clients",
          "Assisted senior designers with complex projects",
          "Participated in creative brainstorming sessions",
          "Maintained design files and project documentation",
          "Collaborated with production teams to ensure quality output"
        ],
        achievements: [
          "Completed 200+ design projects with 95% client satisfaction",
          "Developed efficient file organization system adopted company-wide",
          "Received 'Rising Star' award in second year",
          "Successfully transitioned from print to digital design focus"
        ],
        technologies: ["Adobe Creative Suite", "InDesign", "Photoshop", "Illustrator"],
        teamSize: "3 designers",
        keyProjects: [
          "Logo design for local business association",
          "Annual report design for nonprofit organization",
          "Website graphics for e-commerce platform"
        ]
      }
    ],
    certifications: [
      {
        name: "Adobe Certified Expert (ACE)",
        issuer: "Adobe",
        year: "2021",
        description: "Advanced certification in Adobe Creative Suite applications"
      },
      {
        name: "Google Analytics Certified",
        issuer: "Google",
        year: "2020",
        description: "Proficiency in web analytics and performance measurement"
      },
      {
        name: "Brand Strategy Certificate",
        issuer: "Northwestern Kellogg",
        year: "2019",
        description: "Comprehensive program covering brand positioning and strategy"
      }
    ],
    achievements: [
      {
        title: "Cannes Lions Gold Winner",
        year: "2022",
        description: "Awarded for outstanding creative excellence in brand identity campaign"
      },
      {
        title: "D&AD Pencil Award",
        year: "2021",
        description: "Recognition for innovative approach to visual communication"
      },
      {
        title: "Webby Award for Best Visual Design",
        year: "2020",
        description: "Honored for exceptional web design and user experience"
      },
      {
        title: "Featured in Design Week Top 50 Creative Directors",
        year: "2021",
        description: "Named among the industry's most influential creative leaders"
      }
    ],
    projectsLed: 150,
    clientsWorked: 85,
    yearsExperience: 10,
    social: { 
      linkedin: "https://linkedin.com/in/sarahjohnson", 
      behance: "https://behance.net/sarahjohnson", 
      instagram: "https://instagram.com/sarahjohnson_design",
      twitter: "https://twitter.com/sarahjohnson"
    },
    specialties: ["Brand Identity", "Visual Strategy", "Creative Leadership", "Art Direction"],
    languages: ["English", "Spanish", "French"],
    interests: ["Photography", "Contemporary Art", "Sustainable Design", "Traveling"],
    portfolio: [
      {
        title: "Global Tech Rebrand",
        client: "TechCorp International",
        year: "2023",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
        description: "Complete brand identity overhaul for Fortune 500 tech company",
        fullDescription: "A comprehensive brand identity overhaul for TechCorp International, a Fortune 500 technology company. This project involved creating a modern, scalable brand system that would work across all touchpoints and markets globally.",
        role: "Creative Director & Lead Designer",
        duration: "6 months",
        teamSize: "12 team members",
        challenge: "The client needed a complete rebrand that would modernize their image while maintaining trust and recognition in the enterprise market. The challenge was to create something fresh yet professional that would resonate with both technical and business audiences.",
        solution: "We developed a modular brand system based on the concept of 'Connected Intelligence.' The new identity features a dynamic logo that adapts to different contexts, a modern color palette, and a comprehensive typography system.",
        results: [
          "40% increase in brand recognition within 6 months",
          "25% improvement in brand perception scores",
          "Successful rollout across 15 international markets",
          "Award for Best Brand Transformation at Design Excellence Awards"
        ],
        technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Principle"],
        deliverables: [
          "Brand Strategy & Positioning",
          "Logo Design & Identity System",
          "Brand Guidelines (200+ pages)",
          "Website Design & Development",
          "Marketing Collateral",
          "Digital Asset Library"
        ],
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
        ]
      },
      {
        title: "Luxury Fashion Campaign",
        client: "Elite Fashion House",
        year: "2022",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=300&fit=crop",
        description: "Seasonal campaign design for high-end fashion brand",
        fullDescription: "A sophisticated seasonal campaign for Elite Fashion House, focusing on their premium collection launch. The project required creating a luxurious visual language that would appeal to discerning fashion enthusiasts.",
        role: "Creative Director",
        duration: "4 months",
        teamSize: "8 team members",
        challenge: "Creating a campaign that would stand out in the highly competitive luxury fashion market while maintaining the brand's heritage and exclusivity. The challenge was to appeal to both traditional luxury consumers and younger, digitally-native audiences.",
        solution: "We developed a campaign concept around 'Timeless Elegance Reimagined,' featuring a sophisticated color palette, premium photography, and elegant typography that bridged classic and contemporary aesthetics.",
        results: [
          "30% increase in campaign engagement",
          "20% boost in seasonal sales",
          "Featured in 5 major fashion publications",
          "Viral social media moment with 2M+ impressions"
        ],
        technologies: ["Adobe Creative Suite", "Capture One", "Cinema 4D"],
        deliverables: [
          "Campaign Strategy & Concept",
          "Photography Art Direction",
          "Print Advertisement Design",
          "Digital Marketing Assets",
          "Social Media Content",
          "In-store Visual Merchandising"
        ],
        images: [
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
        ]
      },
      {
        title: "Sustainable Packaging Design",
        client: "Green Products Co.",
        year: "2022",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
        description: "Eco-friendly packaging solution with award-winning design",
        fullDescription: "An innovative sustainable packaging design for Green Products Co., combining environmental responsibility with premium aesthetics. This project challenged conventional packaging norms while maintaining product protection and shelf appeal.",
        role: "Lead Designer",
        duration: "5 months",
        teamSize: "6 team members",
        challenge: "Creating packaging that was both environmentally sustainable and visually compelling enough to compete with traditional packaging in retail environments. The challenge was to balance sustainability goals with practical requirements and cost constraints.",
        solution: "We developed a modular packaging system using 100% recyclable materials with a minimalist design approach. The solution featured innovative folding techniques that eliminated the need for adhesives and a sophisticated color-coding system for product differentiation.",
        results: [
          "50% reduction in packaging material usage",
          "Award for Best Sustainable Design at Packaging Innovation Awards",
          "15% increase in product sales",
          "Case study featured in Design for Sustainability publication"
        ],
        technologies: ["Adobe Creative Suite", "KeyShot", "Rhino 3D"],
        deliverables: [
          "Packaging Design System",
          "Sustainability Report",
          "Manufacturing Guidelines",
          "Brand Integration Strategy",
          "Consumer Testing Report",
          "Production Cost Analysis"
        ],
        images: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
        ]
      }
    ]
  },
  // Add other team members here (Michael Chen, Emily Rodriguez, David Kim)
  // For brevity, I'll include just Sarah Johnson's full data
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
    email: "michael.chen@pixelpimp.com",
    phone: "+1 (555) 234-5678",
    education: [
      {
        degree: "Bachelor of Fine Arts in Photography",
        school: "Art Center College of Design",
        year: "2014",
        description: "Specialized in commercial photography and digital imaging"
      }
    ],
    workHistory: [
      {
        position: "Senior Photo Editor",
        company: "PixelPrimp Design Agency",
        duration: "2021 - Present",
        description: "Leading post-production team and handling high-profile retouching projects",
        responsibilities: [
          "Lead post-production team of 8 specialists",
          "Handle high-profile fashion and commercial retouching projects",
          "Develop and maintain color grading standards",
          "Collaborate with photographers and creative directors",
          "Manage project timelines and quality control",
          "Mentor junior retouchers and provide technical guidance"
        ],
        achievements: [
          "Reduced post-production time by 35% through workflow optimization",
          "Increased client satisfaction scores by 40%",
          "Developed proprietary retouching techniques adopted company-wide",
          "Won 3 industry awards for exceptional retouching work"
        ],
        technologies: ["Adobe Photoshop", "Capture One", "DaVinci Resolve", "Lightroom"],
        teamSize: "8 specialists",
        keyProjects: [
          "High-end fashion campaign for luxury brand",
          "Commercial product photography for Fortune 500 company",
          "Beauty campaign retouching for international cosmetics brand"
        ]
      }
    ],
    certifications: [
      {
        name: "Adobe Certified Expert - Photoshop",
        issuer: "Adobe",
        year: "2020",
        description: "Advanced Photoshop skills certification"
      }
    ],
    achievements: [
      {
        title: "Featured in Retouching Magazine",
        year: "2022",
        description: "Showcase of exceptional retouching work"
      }
    ],
    projectsLed: 200,
    clientsWorked: 120,
    yearsExperience: 8,
    social: { 
      linkedin: "https://linkedin.com/in/michaelchen", 
      behance: "https://behance.net/michaelchen", 
      instagram: "https://instagram.com/michaelchen_art"
    },
    specialties: ["Beauty Retouching", "Fashion Photography", "Commercial Imaging", "Color Theory"],
    languages: ["English", "Mandarin", "Japanese"],
    interests: ["Photography", "Digital Art", "Technology", "Martial Arts"],
    portfolio: [
      {
        title: "High-End Fashion Retouching",
        client: "Luxury Fashion Brand",
        year: "2023",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=300&fit=crop",
        description: "Premium beauty retouching for luxury fashion campaign",
        fullDescription: "Professional beauty retouching for a high-end luxury fashion campaign, focusing on skin perfection, color harmony, and maintaining natural beauty while enhancing the overall aesthetic appeal.",
        role: "Lead Retoucher",
        duration: "3 months",
        teamSize: "4 retouchers",
        challenge: "Achieving flawless skin retouching while maintaining natural texture and avoiding the over-processed look that's common in fashion photography.",
        solution: "Developed a custom retouching workflow using frequency separation and advanced masking techniques to preserve skin texture while removing imperfections.",
        results: [
          "Client satisfaction rate of 98%",
          "Featured in top fashion magazines",
          "Reduced revision requests by 60%",
          "Award for Best Beauty Retouching 2023"
        ],
        technologies: ["Adobe Photoshop", "Capture One", "Wacom Cintiq"],
        deliverables: [
          "Retouched Campaign Images",
          "Before/After Comparisons",
          "Color Grading Standards",
          "Workflow Documentation"
        ],
        images: [
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
        ]
      },
      {
        title: "Commercial Product Photography",
        client: "Tech Product Company",
        year: "2023",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
        description: "Product photography retouching for tech company launch",
        fullDescription: "Comprehensive product photography retouching for a major tech company's product launch, involving complex composite work and precise color matching.",
        role: "Senior Photo Editor",
        duration: "2 months",
        teamSize: "3 editors",
        challenge: "Creating perfect product shots with consistent lighting and color across multiple product variants while maintaining realistic shadows and reflections.",
        solution: "Implemented advanced compositing techniques and created custom lighting setups in post-production to achieve consistency across all product images.",
        results: [
          "Successfully launched 50+ product images",
          "Achieved 100% color accuracy across variants",
          "Reduced photography costs by 40%",
          "Client extended contract for future products"
        ],
        technologies: ["Adobe Photoshop", "Lightroom", "Phase One"],
        deliverables: [
          "Product Image Library",
          "Color Matching Guide",
          "Composite Templates",
          "Quality Control Standards"
        ],
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
        ]
      }
    ]
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
    email: "emily.rodriguez@pixelpimp.com",
    phone: "+1 (555) 345-6789",
    education: [
      {
        degree: "Master of Science in Human-Computer Interaction",
        school: "Stanford University",
        year: "2017",
        description: "Focus on user experience research and design methodology"
      }
    ],
    workHistory: [
      {
        position: "UI/UX Designer",
        company: "PixelPrimp Design Agency",
        duration: "2022 - Present",
        description: "Creating user-centered digital experiences for diverse clients",
        responsibilities: [
          "Design user-centered digital experiences for diverse client portfolio",
          "Conduct user research and usability testing",
          "Create wireframes, prototypes, and high-fidelity designs",
          "Collaborate with development teams for seamless implementation",
          "Develop and maintain design systems and style guides",
          "Present design concepts to stakeholders and clients"
        ],
        achievements: [
          "Improved user engagement by 50% across all client projects",
          "Reduced design-to-development handoff time by 30%",
          "Created comprehensive design system used across 15+ projects",
          "Received UX Design Excellence Award for innovative mobile app design"
        ],
        technologies: ["Figma", "Sketch", "Adobe XD", "Principle", "InVision"],
        teamSize: "6 designers",
        keyProjects: [
          "Mobile app redesign for fintech startup",
          "E-commerce platform UX optimization",
          "Corporate website design for healthcare company"
        ]
      }
    ],
    certifications: [
      {
        name: "Google UX Design Certificate",
        issuer: "Google",
        year: "2021",
        description: "Comprehensive UX design methodology certification"
      }
    ],
    achievements: [
      {
        title: "UX Design Awards Winner",
        year: "2023",
        description: "Recognition for outstanding user experience design"
      }
    ],
    projectsLed: 75,
    clientsWorked: 45,
    yearsExperience: 6,
    social: { 
      linkedin: "https://linkedin.com/in/emilyrodriguez", 
      behance: "https://behance.net/emilyrodriguez", 
      dribbble: "https://dribbble.com/emilyrodriguez"
    },
    specialties: ["Mobile UX", "Design Systems", "User Research", "Accessibility Design"],
    languages: ["English", "Spanish", "Portuguese"],
    interests: ["User Psychology", "Accessibility", "Design Systems", "Hiking"],
    portfolio: [
      {
        title: "Fintech Mobile App Redesign",
        client: "Digital Banking Startup",
        year: "2023",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
        description: "Complete UX/UI redesign for mobile banking application",
        fullDescription: "A comprehensive UX/UI redesign for a digital banking startup's mobile application, focusing on improving user onboarding, transaction flows, and overall user experience.",
        role: "Lead UX/UI Designer",
        duration: "4 months",
        teamSize: "5 designers",
        challenge: "Creating an intuitive banking experience that builds trust while simplifying complex financial processes for users of all technical backgrounds.",
        solution: "Conducted extensive user research and usability testing to redesign the information architecture and create a more intuitive navigation system with clear visual hierarchy.",
        results: [
          "Increased user engagement by 65%",
          "Reduced support tickets by 40%",
          "Improved app store rating from 3.2 to 4.7",
          "Won UX Design Excellence Award 2023"
        ],
        technologies: ["Figma", "Principle", "Maze", "Hotjar"],
        deliverables: [
          "User Research Report",
          "Wireframes & Prototypes",
          "Design System",
          "Usability Testing Results",
          "Developer Handoff Documentation"
        ],
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
        ]
      },
      {
        title: "E-commerce Platform Optimization",
        client: "Fashion E-commerce Company",
        year: "2022",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        description: "UX optimization for online fashion retail platform",
        fullDescription: "UX optimization project for a major fashion e-commerce platform, focusing on improving conversion rates, reducing cart abandonment, and enhancing the overall shopping experience.",
        role: "Senior UX Designer",
        duration: "3 months",
        teamSize: "4 designers",
        challenge: "Improving conversion rates and reducing cart abandonment while maintaining the brand's premium aesthetic and user experience standards.",
        solution: "Redesigned the checkout process, implemented progressive disclosure techniques, and created a more intuitive product discovery system based on user behavior analysis.",
        results: [
          "Increased conversion rate by 45%",
          "Reduced cart abandonment by 30%",
          "Improved average session duration by 25%",
          "Generated additional $2M in annual revenue"
        ],
        technologies: ["Figma", "Adobe XD", "Google Analytics", "Optimizely"],
        deliverables: [
          "Conversion Rate Analysis",
          "User Journey Maps",
          "A/B Testing Results",
          "Redesigned Checkout Flow",
          "Product Discovery System"
        ],
        images: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
        ]
      }
    ]
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
    email: "david.kim@pixelpimp.com",
    phone: "+1 (555) 456-7890",
    education: [
      {
        degree: "Bachelor of Fine Arts in Animation",
        school: "California Institute of the Arts",
        year: "2016",
        description: "Comprehensive animation and motion graphics training"
      }
    ],
    workHistory: [
      {
        position: "Motion Graphics Artist",
        company: "PixelPrimp Design Agency",
        duration: "2021 - Present",
        description: "Creating compelling animations and motion graphics for various campaigns",
        responsibilities: [
          "Create compelling animations and motion graphics for client campaigns",
          "Develop brand animations and explainer videos",
          "Collaborate with creative directors on visual storytelling",
          "Manage multiple animation projects simultaneously",
          "Provide technical expertise in 2D and 3D animation",
          "Mentor junior animators and provide creative guidance"
        ],
        achievements: [
          "Delivered 50+ successful animation projects with 95% client satisfaction",
          "Reduced animation production time by 25% through workflow improvements",
          "Created viral animated content with 2M+ views",
          "Won Motion Graphics Excellence Award for innovative animation work"
        ],
        technologies: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro", "Lottie"],
        teamSize: "4 animators",
        keyProjects: [
          "Brand animation for tech startup launch",
          "Explainer video series for educational platform",
          "Motion graphics for national advertising campaign"
        ]
      }
    ],
    certifications: [
      {
        name: "Adobe Certified Expert - After Effects",
        issuer: "Adobe",
        year: "2020",
        description: "Advanced After Effects animation certification"
      }
    ],
    achievements: [
      {
        title: "Vimeo Staff Pick",
        year: "2022",
        description: "Featured animation work on Vimeo's curated showcase"
      }
    ],
    projectsLed: 90,
    clientsWorked: 65,
    yearsExperience: 7,
    social: { 
      linkedin: "https://linkedin.com/in/davidkim", 
      vimeo: "https://vimeo.com/davidkim", 
      instagram: "https://instagram.com/davidkim_motion"
    },
    specialties: ["Brand Animation", "Explainer Videos", "UI Animation", "3D Motion Graphics"],
    languages: ["English", "Korean"],
    interests: ["Animation", "3D Modeling", "Gaming", "Technology"],
    portfolio: [
      {
        title: "Tech Startup Brand Animation",
        client: "AI Technology Startup",
        year: "2023",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
        description: "Brand animation suite for tech startup launch",
        fullDescription: "Comprehensive brand animation suite for an AI technology startup's launch, including logo animations, explainer videos, and social media motion graphics.",
        role: "Lead Motion Designer",
        duration: "3 months",
        teamSize: "3 animators",
        challenge: "Creating engaging animations that explain complex AI concepts in an accessible way while maintaining the brand's professional image.",
        solution: "Developed a cohesive animation style guide with clean, modern animations that use metaphors and visual storytelling to simplify complex technical concepts.",
        results: [
          "Viral explainer video with 5M+ views",
          "Increased brand awareness by 200%",
          "Client secured Series A funding",
          "Featured on TechCrunch and Wired"
        ],
        technologies: ["After Effects", "Cinema 4D", "Premiere Pro", "Lottie"],
        deliverables: [
          "Logo Animation Suite",
          "Explainer Video Series",
          "Social Media Assets",
          "Web Animation Components",
          "Animation Style Guide"
        ],
        images: [
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
        ]
      },
      {
        title: "Educational Platform Explainer Series",
        client: "Online Learning Platform",
        year: "2022",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
        description: "Animated explainer video series for online education",
        fullDescription: "Created an animated explainer video series for an online learning platform, making complex educational concepts accessible and engaging for students of all ages.",
        role: "Senior Motion Graphics Artist",
        duration: "4 months",
        teamSize: "2 animators",
        challenge: "Creating educational animations that are both informative and entertaining while maintaining consistency across multiple subjects and age groups.",
        solution: "Developed a flexible animation system with character-based storytelling and interactive elements that could be adapted for different subjects and learning levels.",
        results: [
          "Produced 50+ educational videos",
          "Increased student engagement by 80%",
          "Reduced learning time by 25%",
          "Won Educational Media Award 2022"
        ],
        technologies: ["After Effects", "Blender", "Premiere Pro", "Audition"],
        deliverables: [
          "Educational Video Series",
          "Character Animation Library",
          "Interactive Learning Modules",
          "Animation Templates",
          "Voice-over Integration"
        ],
        images: [
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
        ]
      }
    ]
  }
]

export default function TeamMemberPage() {
  const params = useParams()
  const router = useRouter()
  const [member, setMember] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false)
  const [selectedPortfolio, setSelectedPortfolio] = useState(null)

  useEffect(() => {
    const foundMember = teamMembers.find(m => m.slug === params.slug)
    if (foundMember) {
      setMember(foundMember)
    }
    setLoading(false)
  }, [params.slug])

  // Modal handlers
  const openExperienceModal = (experience) => {
    setSelectedExperience(experience)
    setIsExperienceModalOpen(true)
  }

  const closeExperienceModal = () => {
    setIsExperienceModalOpen(false)
    setSelectedExperience(null)
  }

  const openPortfolioModal = (portfolio) => {
    setSelectedPortfolio(portfolio)
    setIsPortfolioModalOpen(true)
  }

  const closePortfolioModal = () => {
    setIsPortfolioModalOpen(false)
    setSelectedPortfolio(null)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isExperienceModalOpen) {
          closeExperienceModal()
        }
        if (isPortfolioModalOpen) {
          closePortfolioModal()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isExperienceModalOpen, isPortfolioModalOpen])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto mb-4"></div>
          <p className="text-brand-secondary">Loading team member...</p>
        </div>
      </div>
    )
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">Team Member Not Found</h1>
          <p className="text-brand-secondary mb-8">The team member you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/#team')}
            className="btn-primary"
          >
            Back to Team
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white mt-28">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Member Info */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  {member.department}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                {member.name}
              </h1>
              
              <p className="text-xl text-brand-accent font-semibold mb-4">
                {member.role}
              </p>
              
              <p className="text-lg text-brand-secondary mb-8 leading-relaxed">
                {member.fullBio}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary">{member.projectsLed}</div>
                  <div className="text-sm text-brand-muted">Projects Led</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary">{member.clientsWorked}</div>
                  <div className="text-sm text-brand-muted">Clients Worked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary">{member.yearsExperience}+</div>
                  <div className="text-sm text-brand-muted">Years Experience</div>
                </div>
              </div>

              {/* Contact & Social */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`mailto:${member.email}`}
                  className="btn-primary flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>
                
                <div className="flex gap-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <span className="text-sm font-semibold text-brand-primary">
                        {platform === "linkedin" ? "Li" : platform === "behance" ? "Be" : platform === "instagram" ? "Ig" : platform === "dribbble" ? "Dr" : platform === "vimeo" ? "Vi" : platform === "twitter" ? "Tw" : "Yt"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Member Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {member.experience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - All displayed sequentially */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* About Section */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-brand-primary mb-4">About {member.name}</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            
            {/* Skills & Specialties */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-brand-primary mb-6">Skills & Expertise</h4>
                <div className="space-y-3">
                  {member.skills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-brand-secondary font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-brand-primary mb-6">Specialties</h4>
                <div className="grid grid-cols-2 gap-3">
                  {member.specialties.map((specialty, index) => (
                    <div key={index} className="bg-gray-100 text-brand-primary px-4 py-2 rounded-lg text-sm font-medium text-center">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="font-semibold text-brand-primary mb-4">Location</h5>
                <p className="text-brand-secondary flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {member.location}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="font-semibold text-brand-primary mb-4">Languages</h5>
                <div className="space-y-2">
                  {member.languages.map((language, index) => (
                    <div key={index} className="text-brand-secondary text-sm">{language}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="font-semibold text-brand-primary mb-4">Interests</h5>
                <div className="space-y-2">
                  {member.interests.map((interest, index) => (
                    <div key={index} className="text-brand-secondary text-sm">{interest}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-brand-primary mb-4">Work Experience</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {member.workHistory.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-blue-200"
                  onClick={() => openExperienceModal(job)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                        {job.position}
                      </h4>
                      <p className="text-brand-accent font-semibold">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.duration}
                      </span>
                      <div className="flex items-center text-brand-accent text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Details
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-secondary leading-relaxed mb-4">{job.description}</p>
                  
                  {/* Quick Stats */}
                  <div className="flex items-center gap-6 text-sm text-brand-muted">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Team: {job.teamSize}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Projects: {job.keyProjects.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-brand-primary mb-4">Education & Certifications</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-brand-primary mb-8">Education</h4>
              <div className="space-y-6">
                {member.education.map((edu, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h5 className="text-xl font-bold text-brand-primary">{edu.degree}</h5>
                        <p className="text-brand-accent font-semibold">{edu.school}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-brand-secondary">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-brand-primary mb-8">Certifications</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {member.certifications.map((cert, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-xl">
                    <h5 className="font-bold text-brand-primary mb-2">{cert.name}</h5>
                    <p className="text-brand-accent text-sm mb-2">{cert.issuer} • {cert.year}</p>
                    <p className="text-brand-secondary text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-brand-primary mb-4">Featured Work</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            {member.portfolio.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {member.portfolio.map((project, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:-translate-y-1"
                    onClick={() => openPortfolioModal(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white text-brand-primary px-4 py-2 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-all duration-300">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Details
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                          {project.title}
                        </h4>
                        <div className="flex items-center text-brand-accent text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Details
                        </div>
                      </div>
                      <p className="text-brand-accent text-sm mb-3">{project.client} • {project.year}</p>
                      <p className="text-brand-secondary text-sm line-clamp-2">{project.description}</p>
                      
                      {/* Role Badge */}
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {project.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-brand-secondary">Portfolio coming soon...</p>
              </div>
            )}
          </div>

          {/* Achievements Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-brand-primary mb-4">Awards & Recognition</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              {member.achievements.map((achievement, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-brand-primary">{achievement.title}</h4>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-brand-secondary">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Detail Modal */}
      {isExperienceModalOpen && selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {selectedExperience.duration}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary">{selectedExperience.position}</h2>
                  <p className="text-brand-secondary">{selectedExperience.company}</p>
                </div>
              </div>
              <button
                onClick={closeExperienceModal}
                className="text-brand-muted hover:text-brand-primary transition-colors duration-300 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Role Overview</h3>
                <p className="text-brand-secondary leading-relaxed">{selectedExperience.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Duration</h4>
                  <p className="text-brand-secondary">{selectedExperience.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Team Size</h4>
                  <p className="text-brand-secondary">{selectedExperience.teamSize}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Key Projects</h4>
                  <p className="text-brand-secondary">{selectedExperience.keyProjects.length} major projects</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Key Responsibilities</h3>
                <div className="space-y-3">
                  {selectedExperience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-brand-secondary">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-brand-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Key Projects */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-brand-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Notable Projects</h3>
                  <div className="space-y-2">
                    {selectedExperience.keyProjects.map((project, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-brand-secondary text-sm">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Detail Modal */}
      {isPortfolioModalOpen && selectedPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {selectedPortfolio.year}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary">{selectedPortfolio.title}</h2>
                  <p className="text-brand-secondary">{selectedPortfolio.client} • {selectedPortfolio.role}</p>
                </div>
              </div>
              <button
                onClick={closePortfolioModal}
                className="text-brand-muted hover:text-brand-primary transition-colors duration-300 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Project Hero Image */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={selectedPortfolio.image}
                  alt={selectedPortfolio.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Project Overview</h3>
                <p className="text-brand-secondary leading-relaxed">{selectedPortfolio.fullDescription}</p>
              </div>

              {/* Project Info Grid */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Duration</h4>
                  <p className="text-brand-secondary">{selectedPortfolio.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Team Size</h4>
                  <p className="text-brand-secondary">{selectedPortfolio.teamSize}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">My Role</h4>
                  <p className="text-brand-secondary">{selectedPortfolio.role}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-brand-primary mb-2">Year</h4>
                  <p className="text-brand-secondary">{selectedPortfolio.year}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">The Challenge</h3>
                  <p className="text-brand-secondary leading-relaxed">{selectedPortfolio.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Our Solution</h3>
                  <p className="text-brand-secondary leading-relaxed">{selectedPortfolio.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Results & Impact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedPortfolio.results.map((result, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-brand-secondary text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Project Deliverables</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedPortfolio.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-brand-secondary">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPortfolio.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-brand-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Gallery */}
              {selectedPortfolio.images && selectedPortfolio.images.length > 1 && (
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Project Gallery</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedPortfolio.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedPortfolio.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-brand-primary mb-4">
            Ready to Work with {member.name}?
          </h3>
          <p className="text-xl text-brand-secondary mb-8">
            Get in touch to discuss your next project or collaboration opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${member.email}`}
              className="btn-primary"
            >
              Send Message
            </a>
            <button
              onClick={() => router.push('/#team')}
              className="btn-secondary"
            >
              Back to Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
