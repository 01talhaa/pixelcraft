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
  Image,
  ExternalLink,
  Calendar,
  Tag,
  Save,
  X,
  Star,
  Eye
} from "lucide-react"

export default function AdminPortfolio() {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured e-commerce platform with advanced shopping cart functionality",
      category: "E-commerce",
      image: "/placeholder.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Tech Store Inc.",
      completedDate: "2024-01-15",
      featured: true,
      status: "Live"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management solution for hospitals and clinics",
      category: "Healthcare",
      image: "/placeholder.jpg",
      liveUrl: "https://healthcare.com",
      githubUrl: "",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      client: "MedCare Solutions",
      completedDate: "2024-01-10",
      featured: false,
      status: "Live"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management and content scheduling",
      category: "Dashboard",
      image: "/placeholder.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/social-dash",
      technologies: ["React", "D3.js", "Firebase"],
      client: "Social Media Co.",
      completedDate: "2024-01-05",
      featured: true,
      status: "Development"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    liveUrl: "",
    githubUrl: "",
    technologies: "",
    client: "",
    completedDate: "",
    featured: false,
    status: "Development"
  })

  const categories = ["E-commerce", "Healthcare", "Dashboard", "Mobile App", "Website", "SaaS", "Other"]
  const statusOptions = ["Development", "Live", "Maintenance", "Archived"]

  const filteredItems = portfolioItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.client.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    if (isEditMode) {
      setPortfolioItems(prev => prev.map(item =>
        item.id === selectedItem.id
          ? { ...item, ...formData, technologies: formData.technologies.split(',').map(t => t.trim()) }
          : item
      ))
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
        technologies: formData.technologies.split(',').map(t => t.trim())
      }
      setPortfolioItems(prev => [...prev, newItem])
    }
    resetForm()
  }

  const handleEdit = (item) => {
    setSelectedItem(item)
    setFormData({
      ...item,
      technologies: item.technologies.join(', ')
    })
    setIsEditMode(true)
    setShowAddModal(true)
  }

  const handleDelete = (id) => {
    setPortfolioItems(prev => prev.filter(item => item.id !== id))
  }

  const toggleFeatured = (id) => {
    setPortfolioItems(prev => prev.map(item =>
      item.id === id ? { ...item, featured: !item.featured } : item
    ))
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      image: "",
      liveUrl: "",
      githubUrl: "",
      technologies: "",
      client: "",
      completedDate: "",
      featured: false,
      status: "Development"
    })
    setSelectedItem(null)
    setIsEditMode(false)
    setShowAddModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800 border-green-200"
      case "Development": return "bg-blue-100 text-blue-800 border-blue-200"
      case "Maintenance": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Archived": return "bg-gray-100 text-gray-800 border-gray-200"
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
                <Image className="w-5 h-5 text-primary" />
                <span>Portfolio Management</span>
              </CardTitle>
              <CardDescription className="text-gray-600">
                Manage your portfolio showcases and case studies
              </CardDescription>
            </div>
            <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Portfolio Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-white">
                <DialogHeader>
                  <DialogTitle className="text-black">
                    {isEditMode ? "Edit Portfolio Item" : "Add New Portfolio Item"}
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {isEditMode ? "Update portfolio item information" : "Create a new portfolio showcase"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 max-h-[70vh] overflow-y-auto">
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
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
                      >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
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
                        {statusOptions.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="image" className="text-black">Image URL</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => handleInputChange("image", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="liveUrl" className="text-black">Live URL</Label>
                      <Input
                        id="liveUrl"
                        value={formData.liveUrl}
                        onChange={(e) => handleInputChange("liveUrl", e.target.value)}
                        placeholder="https://example.com"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="githubUrl" className="text-black">GitHub URL</Label>
                      <Input
                        id="githubUrl"
                        value={formData.githubUrl}
                        onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                        placeholder="https://github.com/username/repo"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div>
                      <Label htmlFor="completedDate" className="text-black">Completed Date</Label>
                      <Input
                        id="completedDate"
                        type="date"
                        value={formData.completedDate}
                        onChange={(e) => handleInputChange("completedDate", e.target.value)}
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => handleInputChange("featured", e.target.checked)}
                      className="w-4 h-4 text-primary border-2 border-gray-200 rounded focus:ring-primary"
                    />
                    <Label htmlFor="featured" className="text-black">Featured Portfolio Item</Label>
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
              placeholder="Search portfolio items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-black text-lg flex items-center space-x-2">
                    <span className="truncate">{item.title}</span>
                    {item.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.category} • {item.client}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                
                <p className="text-gray-700 text-sm line-clamp-2">{item.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {item.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                      {tech}
                    </Badge>
                  ))}
                  {item.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                      +{item.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.completedDate}</span>
                  </div>
                  <div className="flex space-x-2">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <Eye className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                    className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFeatured(item.id)}
                    className={`border-yellow-300 hover:bg-yellow-50 ${
                      item.featured ? 'text-yellow-700 bg-yellow-50' : 'text-yellow-600'
                    }`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {item.featured ? 'Unfeature' : 'Feature'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
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

      {filteredItems.length === 0 && (
        <Card className="bg-white border-2 border-gray-200 shadow-lg">
          <CardContent className="py-12 text-center">
            <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black mb-2">No portfolio items found</h3>
            <p className="text-gray-600">
              {searchTerm ? "No items match your search." : "Start by adding your first portfolio item."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
