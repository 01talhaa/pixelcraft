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
  Wrench,
  Code,
  Paintbrush,
  Globe,
  Save,
  X,
  Star
} from "lucide-react"

export default function AdminServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "Code",
      price: "$2,500",
      duration: "4-6 weeks",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Security Features"],
      category: "Development",
      featured: true,
      active: true
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "Globe",
      price: "$5,000",
      duration: "8-12 weeks",
      features: ["Cross-platform", "Native Performance", "App Store Publishing", "Push Notifications"],
      category: "Development",
      featured: true,
      active: true
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience",
      icon: "Paintbrush",
      price: "$1,500",
      duration: "2-4 weeks",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      category: "Design",
      featured: false,
      active: true
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
      icon: "Wrench",
      price: "$800/month",
      duration: "Ongoing",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      category: "Marketing",
      featured: false,
      active: true
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedService, setSelectedService] = useState(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Code",
    price: "",
    duration: "",
    features: "",
    category: "Development",
    featured: false,
    active: true
  })

  const iconOptions = ["Code", "Globe", "Paintbrush", "Wrench", "Star"]

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    if (isEditMode) {
      setServices(prev => prev.map(service =>
        service.id === selectedService.id
          ? { ...service, ...formData, features: formData.features.split(',').map(f => f.trim()) }
          : service
      ))
    } else {
      const newService = {
        ...formData,
        id: Date.now(),
        features: formData.features.split(',').map(f => f.trim())
      }
      setServices(prev => [...prev, newService])
    }
    resetForm()
  }

  const handleEdit = (service) => {
    setSelectedService(service)
    setFormData({
      ...service,
      features: service.features.join(', ')
    })
    setIsEditMode(true)
    setShowAddModal(true)
  }

  const handleDelete = (id) => {
    setServices(prev => prev.filter(service => service.id !== id))
  }

  const toggleFeatured = (id) => {
    setServices(prev => prev.map(service =>
      service.id === id ? { ...service, featured: !service.featured } : service
    ))
  }

  const toggleActive = (id) => {
    setServices(prev => prev.map(service =>
      service.id === id ? { ...service, active: !service.active } : service
    ))
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "Code",
      price: "",
      duration: "",
      features: "",
      category: "Development",
      featured: false,
      active: true
    })
    setSelectedService(null)
    setIsEditMode(false)
    setShowAddModal(false)
  }

  const getIconComponent = (iconName) => {
    const icons = {
      Code: Code,
      Globe: Globe,
      Paintbrush: Paintbrush,
      Wrench: Wrench,
      Star: Star
    }
    const IconComponent = icons[iconName] || Code
    return <IconComponent className="w-8 h-8 text-primary" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-black flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-primary" />
                <span>Services Management</span>
              </CardTitle>
              <CardDescription className="text-gray-600">
                Manage your service offerings and pricing
              </CardDescription>
            </div>
            <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white">
                <DialogHeader>
                  <DialogTitle className="text-black">
                    {isEditMode ? "Edit Service" : "Add New Service"}
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {isEditMode ? "Update service information" : "Create a new service offering"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title" className="text-black">Service Title</Label>
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
                        <option>Development</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Consulting</option>
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="icon" className="text-black">Icon</Label>
                      <select
                        id="icon"
                        value={formData.icon}
                        onChange={(e) => handleInputChange("icon", e.target.value)}
                        className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
                      >
                        {iconOptions.map(icon => (
                          <option key={icon} value={icon}>{icon}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="price" className="text-black">Price</Label>
                      <Input
                        id="price"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        placeholder="$2,500"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="duration" className="text-black">Duration</Label>
                      <Input
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                        placeholder="4-6 weeks"
                        className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="features" className="text-black">Features (comma separated)</Label>
                    <Input
                      id="features"
                      value={formData.features}
                      onChange={(e) => handleInputChange("features", e.target.value)}
                      placeholder="Feature 1, Feature 2, Feature 3"
                      className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                    />
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
                      <Label htmlFor="featured" className="text-black">Featured Service</Label>
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
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className={`bg-white border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
            service.active ? 'border-gray-200' : 'border-gray-300 opacity-60'
          }`}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {getIconComponent(service.icon)}
                  </div>
                  <div>
                    <CardTitle className="text-black text-lg flex items-center space-x-2">
                      <span>{service.title}</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.category}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  {service.featured && (
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      Featured
                    </Badge>
                  )}
                  <Badge className={service.active ? 
                    "bg-green-100 text-green-800 border-green-200" : 
                    "bg-gray-100 text-gray-800 border-gray-200"
                  }>
                    {service.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">{service.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-black">{service.price}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Duration: <span className="font-semibold text-black">{service.duration}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-black">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(service)}
                    className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFeatured(service.id)}
                    className={`border-yellow-300 hover:bg-yellow-50 ${
                      service.featured ? 'text-yellow-700 bg-yellow-50' : 'text-yellow-600'
                    }`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {service.featured ? 'Unfeature' : 'Feature'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(service.id)}
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

      {filteredServices.length === 0 && (
        <Card className="bg-white border-2 border-gray-200 shadow-lg">
          <CardContent className="py-12 text-center">
            <Wrench className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black mb-2">No services found</h3>
            <p className="text-gray-600">
              {searchTerm ? "No services match your search." : "Start by adding your first service."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
