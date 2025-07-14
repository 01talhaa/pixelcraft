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
  Calendar,
  Tag,
  ExternalLink,
  Image,
  FileText,
  Save,
  X
} from "lucide-react"

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with advanced features",
      category: "Web Development",
      client: "Tech Solutions Inc.",
      status: "Completed",
      date: "2024-01-15",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application",
      category: "Mobile App",
      client: "Financial Corp",
      status: "In Progress",
      date: "2024-01-10",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Firebase"],
      featured: false
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Professional corporate website redesign",
      category: "Web Design",
      client: "Business Ltd",
      status: "Completed",
      date: "2024-01-05",
      image: "/placeholder.jpg",
      technologies: ["Next.js", "Tailwind CSS"],
      featured: true
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    client: "",
    status: "In Progress",
    date: "",
    image: "",
    technologies: "",
    featured: false
  })

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    if (isEditMode) {
      setProjects(prev => prev.map(project =>
        project.id === selectedProject.id
          ? { ...project, ...formData, technologies: formData.technologies.split(',').map(t => t.trim()) }
          : project
      ))
    } else {
      const newProject = {
        ...formData,
        id: Date.now(),
        technologies: formData.technologies.split(',').map(t => t.trim())
      }
      setProjects(prev => [...prev, newProject])
    }
    resetForm()
  }

  const handleEdit = (project) => {
    setSelectedProject(project)
    setFormData({
      ...project,
      technologies: project.technologies.join(', ')
    })
    setIsEditMode(true)
    setShowAddModal(true)
  }

  const handleDelete = (id) => {
    setProjects(prev => prev.filter(project => project.id !== id))
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      client: "",
      status: "In Progress",
      date: "",
      image: "",
      technologies: "",
      featured: false
    })
    setSelectedProject(null)
    setIsEditMode(false)
    setShowAddModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 border-green-200"
      case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200"
      case "On Hold": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-black flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>Projects Management</span>
              </CardTitle>
              <CardDescription className="text-gray-600">
                Manage your portfolio projects and showcase work
              </CardDescription>
            </div>
            <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white">
                <DialogHeader>
                  <DialogTitle className="text-black">
                    {isEditMode ? "Edit Project" : "Add New Project"}
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {isEditMode ? "Update project information" : "Create a new project for your portfolio"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title" className="text-black">Project Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-black">Category</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="client" className="text-black">Client</Label>
                      <Input
                        id="client"
                        value={formData.client}
                        onChange={(e) => handleInputChange("client", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="status" className="text-black">Status</Label>
                      <select
                        id="status"
                        value={formData.status}
                        onChange={(e) => handleInputChange("status", e.target.value)}
                        className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
                      >
                        <option>In Progress</option>
                        <option>Completed</option>
                        <option>On Hold</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-black">Description</Label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={3}
                      className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-black">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image" className="text-black">Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => handleInputChange("image", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="technologies" className="text-black">Technologies (comma separated)</Label>
                    <Input
                      id="technologies"
                      value={formData.technologies}
                      onChange={(e) => handleInputChange("technologies", e.target.value)}
                      placeholder="React, Node.js, MongoDB"
                      className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => handleInputChange("featured", e.target.checked)}
                      className="w-4 h-4 text-primary border-2 border-gray-200 rounded focus:ring-primary"
                    />
                    <Label htmlFor="featured" className="text-black">Featured Project</Label>
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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-black text-lg flex items-center space-x-2">
                    <span>{project.title}</span>
                    {project.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.category} • {project.client}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                
                <p className="text-gray-700 text-sm line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(project)}
                    className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
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

      {filteredProjects.length === 0 && (
        <Card className="bg-white border-2 border-gray-200 shadow-lg">
          <CardContent className="py-12 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black mb-2">No projects found</h3>
            <p className="text-gray-600">
              {searchTerm ? "No projects match your search." : "Start by adding your first project."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
