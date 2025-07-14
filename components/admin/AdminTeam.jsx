"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Search,
  Users,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Save,
  X,
  Star,
  User,
  Briefcase
} from "lucide-react"

export default function AdminTeam() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Smith",
      role: "Senior Full Stack Developer",
      bio: "Passionate developer with 8+ years of experience in web development",
      email: "john@pixelcraft.com",
      phone: "+1 234 567 8900",
      location: "New York, USA",
      image: "/placeholder-user.jpg",
      skills: ["React", "Node.js", "Python", "AWS"],
      experience: "8 years",
      education: "Computer Science, MIT",
      joinDate: "2020-01-15",
      featured: true,
      active: true,
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        github: "https://github.com/johnsmith",
        twitter: "https://twitter.com/johnsmith"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and modern aesthetics",
      email: "sarah@pixelcraft.com",
      phone: "+1 234 567 8901",
      location: "San Francisco, USA",
      image: "/placeholder-user.jpg",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      experience: "6 years",
      education: "Design, Stanford",
      joinDate: "2021-03-10",
      featured: true,
      active: true,
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        dribbble: "https://dribbble.com/sarahjohnson",
        behance: "https://behance.net/sarahjohnson"
      }
    },
    {
      id: 3,
      name: "Mike Wilson",
      role: "DevOps Engineer",
      bio: "Infrastructure specialist with expertise in cloud platforms and automation",
      email: "mike@pixelcraft.com",
      phone: "+1 234 567 8902",
      location: "Austin, USA",
      image: "/placeholder-user.jpg",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      experience: "7 years",
      education: "Systems Engineering, UT Austin",
      joinDate: "2020-08-20",
      featured: false,
      active: true,
      social: {
        linkedin: "https://linkedin.com/in/mikewilson",
        github: "https://github.com/mikewilson"
      }
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMember, setSelectedMember] = useState(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    image: "",
    skills: "",
    experience: "",
    education: "",
    joinDate: "",
    featured: false,
    active: true,
    social: {
      linkedin: "",
      github: "",
      twitter: "",
      dribbble: "",
      behance: ""
    }
  })

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleInputChange = (field, value) => {
    if (field.startsWith('social.')) {
      const socialField = field.split('.')[1]
      setFormData(prev => ({
        ...prev,
        social: {
          ...prev.social,
          [socialField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleSave = () => {
    if (isEditMode) {
      setTeamMembers(prev => prev.map(member =>
        member.id === selectedMember.id
          ? { ...member, ...formData, skills: formData.skills.split(',').map(s => s.trim()) }
          : member
      ))
    } else {
      const newMember = {
        ...formData,
        id: Date.now(),
        skills: formData.skills.split(',').map(s => s.trim())
      }
      setTeamMembers(prev => [...prev, newMember])
    }
    resetForm()
  }

  const handleEdit = (member) => {
    setSelectedMember(member)
    setFormData({
      ...member,
      skills: member.skills.join(', ')
    })
    setIsEditMode(true)
    setShowAddModal(true)
  }

  const handleDelete = (id) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id))
  }

  const toggleFeatured = (id) => {
    setTeamMembers(prev => prev.map(member =>
      member.id === id ? { ...member, featured: !member.featured } : member
    ))
  }

  const toggleActive = (id) => {
    setTeamMembers(prev => prev.map(member =>
      member.id === id ? { ...member, active: !member.active } : member
    ))
  }

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      bio: "",
      email: "",
      phone: "",
      location: "",
      image: "",
      skills: "",
      experience: "",
      education: "",
      joinDate: "",
      featured: false,
      active: true,
      social: {
        linkedin: "",
        github: "",
        twitter: "",
        dribbble: "",
        behance: ""
      }
    })
    setSelectedMember(null)
    setIsEditMode(false)
    setShowAddModal(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-black flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Team Management</span>
              </CardTitle>
              <CardDescription className="text-gray-600">
                Manage your team members and their profiles
              </CardDescription>
            </div>
            <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Team Member
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-white">
                <DialogHeader>
                  <DialogTitle className="text-black">
                    {isEditMode ? "Edit Team Member" : "Add New Team Member"}
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {isEditMode ? "Update team member information" : "Add a new member to your team"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 max-h-[70vh] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-black">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role" className="text-black">Role/Position</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio" className="text-black">Bio</Label>
                    <textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      rows={3}
                      className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-black">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-black">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className="text-black">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image" className="text-black">Profile Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => handleInputChange("image", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience" className="text-black">Experience</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="5 years"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="education" className="text-black">Education</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) => handleInputChange("education", e.target.value)}
                        placeholder="Computer Science, MIT"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="skills" className="text-black">Skills (comma separated)</Label>
                      <Input
                        id="skills"
                        value={formData.skills}
                        onChange={(e) => handleInputChange("skills", e.target.value)}
                        placeholder="React, Node.js, Python"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="joinDate" className="text-black">Join Date</Label>
                      <Input
                        id="joinDate"
                        type="date"
                        value={formData.joinDate}
                        onChange={(e) => handleInputChange("joinDate", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-black">Social Media Links</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedin" className="text-black text-sm">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={formData.social.linkedin}
                          onChange={(e) => handleInputChange("social.linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                        />
                      </div>
                      <div>
                        <Label htmlFor="github" className="text-black text-sm">GitHub</Label>
                        <Input
                          id="github"
                          value={formData.social.github}
                          onChange={(e) => handleInputChange("social.github", e.target.value)}
                          placeholder="https://github.com/username"
                          className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter" className="text-black text-sm">Twitter</Label>
                        <Input
                          id="twitter"
                          value={formData.social.twitter}
                          onChange={(e) => handleInputChange("social.twitter", e.target.value)}
                          placeholder="https://twitter.com/username"
                          className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dribbble" className="text-black text-sm">Dribbble</Label>
                        <Input
                          id="dribbble"
                          value={formData.social.dribbble}
                          onChange={(e) => handleInputChange("social.dribbble", e.target.value)}
                          placeholder="https://dribbble.com/username"
                          className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => handleInputChange("featured", e.target.checked)}
                        className="w-4 h-4 text-primary border-2 border-gray-200 rounded focus:ring-primary"
                      />
                      <Label htmlFor="featured" className="text-black">Featured Member</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="active"
                        checked={formData.active}
                        onChange={(e) => handleInputChange("active", e.target.checked)}
                        className="w-4 h-4 text-primary border-2 border-gray-200 rounded focus:ring-primary"
                      />
                      <Label htmlFor="active" className="text-black">Active</Label>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <Button variant="outline" onClick={resetForm} className="border-gray-300 text-black hover:bg-gray-100">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-white">
                      <Save className="w-4 h-4 mr-2" />
                      {isEditMode ? "Update" : "Create"}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className={`bg-white border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
            member.active ? 'border-gray-200' : 'border-gray-300 opacity-60'
          }`}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-black text-lg flex items-center space-x-2">
                    <span>{member.name}</span>
                    {member.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {member.role}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm line-clamp-2">{member.bio}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {member.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                      +{member.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                  <Badge className={member.active ? 
                    "bg-green-100 text-green-800 border-green-200" : 
                    "bg-gray-100 text-gray-800 border-gray-200"
                  }>
                    {member.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(member)}
                    className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFeatured(member.id)}
                    className={`border-yellow-300 hover:bg-yellow-50 ${
                      member.featured ? 'text-yellow-700 bg-yellow-50' : 'text-yellow-600'
                    }`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {member.featured ? 'Unfeature' : 'Feature'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(member.id)}
                    className="border-red-300 text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <Card className="bg-white border-2 border-gray-200 shadow-lg">
          <CardContent className="py-12 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black mb-2">No team members found</h3>
            <p className="text-gray-600">
              {searchTerm ? "No members match your search." : "Start by adding your first team member."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
