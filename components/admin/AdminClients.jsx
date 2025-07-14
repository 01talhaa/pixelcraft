"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Search,
  Calendar,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
  User,
  Users,
  DollarSign,
  Clock,
  Star,
  Eye,
  Save,
  X
} from "lucide-react"

export default function AdminClients() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "TechCorp Solutions",
      contactPerson: "John Smith",
      email: "john@techcorp.com",
      phone: "+1 (555) 123-4567",
      website: "https://techcorp.com",
      address: "123 Tech Street, Silicon Valley, CA 94016",
      industry: "Technology",
      status: "Active",
      projectCount: 3,
      totalRevenue: 45000,
      joinDate: "2023-01-15",
      lastContact: "2024-01-10",
      notes: "Great client, always pays on time. Looking for expansion opportunities.",
      priority: "High",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 2,
      name: "Creative Agency Inc",
      contactPerson: "Sarah Johnson",
      email: "sarah@creativeagency.com",
      phone: "+1 (555) 987-6543",
      website: "https://creativeagency.com",
      address: "456 Design Ave, New York, NY 10001",
      industry: "Marketing",
      status: "Active",
      projectCount: 5,
      totalRevenue: 78000,
      joinDate: "2023-03-20",
      lastContact: "2024-01-08",
      notes: "Frequent client with multiple ongoing projects. Very satisfied with our services.",
      priority: "High",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 3,
      name: "StartupX",
      contactPerson: "Mike Wilson",
      email: "mike@startupx.com",
      phone: "+1 (555) 456-7890",
      website: "https://startupx.com",
      address: "789 Innovation Blvd, Austin, TX 78701",
      industry: "Startup",
      status: "Inactive",
      projectCount: 1,
      totalRevenue: 12000,
      joinDate: "2023-08-10",
      lastContact: "2023-12-15",
      notes: "Completed initial project. May return for future work.",
      priority: "Medium",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 4,
      name: "Global Enterprises",
      contactPerson: "Emma Davis",
      email: "emma@globalent.com",
      phone: "+1 (555) 234-5678",
      website: "https://globalent.com",
      address: "321 Corporate Dr, Chicago, IL 60601",
      industry: "Corporate",
      status: "Active",
      projectCount: 2,
      totalRevenue: 32000,
      joinDate: "2023-06-05",
      lastContact: "2024-01-05",
      notes: "Large corporation with potential for big projects. Currently in negotiation phase.",
      priority: "High",
      avatar: "/placeholder-user.jpg"
    },
    {
      id: 5,
      name: "Local Business Co",
      contactPerson: "Alex Brown",
      email: "alex@localbiz.com",
      phone: "+1 (555) 345-6789",
      website: "https://localbiz.com",
      address: "654 Main St, Denver, CO 80202",
      industry: "Retail",
      status: "Pending",
      projectCount: 0,
      totalRevenue: 0,
      joinDate: "2024-01-12",
      lastContact: "2024-01-12",
      notes: "New prospect. Interested in branding package.",
      priority: "Medium",
      avatar: "/placeholder-user.jpg"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClient, setSelectedClient] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [editingClient, setEditingClient] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [newClient, setNewClient] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    industry: "",
    status: "Active",
    notes: "",
    priority: "Medium"
  })

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === "all" || client.status.toLowerCase() === filterStatus.toLowerCase()
    
    return matchesSearch && matchesStatus
  })

  const handleAddClient = () => {
    const client = {
      id: clients.length + 1,
      ...newClient,
      projectCount: 0,
      totalRevenue: 0,
      joinDate: new Date().toISOString().split('T')[0],
      lastContact: new Date().toISOString().split('T')[0],
      avatar: "/placeholder-user.jpg"
    }
    setClients([...clients, client])
    setNewClient({
      name: "",
      contactPerson: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      industry: "",
      status: "Active",
      notes: "",
      priority: "Medium"
    })
    setIsAddModalOpen(false)
  }

  const handleEditClient = (client) => {
    setEditingClient(client)
    setIsEditModalOpen(true)
  }

  const handleUpdateClient = () => {
    setClients(clients.map(client => 
      client.id === editingClient.id ? editingClient : client
    ))
    setIsEditModalOpen(false)
    setEditingClient(null)
  }

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id))
  }

  const handleViewDetails = (client) => {
    setSelectedClient(client)
    setIsDetailModalOpen(true)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800 border-green-200"
      case "inactive": return "bg-gray-100 text-gray-800 border-gray-200"
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high": return "text-red-600"
      case "medium": return "text-yellow-600"
      case "low": return "text-green-600"
      default: return "text-gray-600"
    }
  }

  const resetForm = () => {
    setNewClient({
      name: "",
      contactPerson: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      industry: "",
      status: "Active",
      notes: "",
      priority: "Medium"
    })
  }

  const handleSave = () => {
    handleAddClient()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle className="text-brand-primary flex items-center space-x-2">
            <Users className="w-5 h-5 text-brand-accent" />
            <span>Client Management</span>
          </CardTitle>
          <CardDescription className="text-brand-secondary">
            Manage your clients, contacts, and business relationships
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
              <Input
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-brand-primary border-2 border-gray-200 focus:border-brand-accent text-brand-primary"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Client
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-white">
                  <DialogHeader>
                    <DialogTitle>Add New Client</DialogTitle>
                    <DialogDescription>
                      Create a new client profile with all necessary details
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Company Name</Label>
                      <Input
                        id="name"
                        value={newClient.name}
                        onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input
                        id="contactPerson"
                        value={newClient.contactPerson}
                        onChange={(e) => setNewClient({...newClient, contactPerson: e.target.value})}
                        placeholder="Enter contact person"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newClient.email}
                        onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={newClient.phone}
                        onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={newClient.website}
                        onChange={(e) => setNewClient({...newClient, website: e.target.value})}
                        placeholder="Enter website URL"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={newClient.industry} onValueChange={(value) => setNewClient({...newClient, industry: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Retail">Retail</SelectItem>
                          <SelectItem value="Corporate">Corporate</SelectItem>
                          <SelectItem value="Startup">Startup</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={newClient.address}
                        onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                        placeholder="Enter full address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={newClient.status} onValueChange={(value) => setNewClient({...newClient, status: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={newClient.priority} onValueChange={(value) => setNewClient({...newClient, priority: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea
                        id="notes"
                        value={newClient.notes}
                        onChange={(e) => setNewClient({...newClient, notes: e.target.value})}
                        placeholder="Enter any additional notes..."
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <Button variant="outline" onClick={resetForm} className="btn-secondary">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="btn-primary">
                      <Save className="w-4 h-4 mr-2" />
                      Save Client
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="card-primary hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full flex items-center justify-center shadow-lg">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-brand-primary text-lg">{client.name}</CardTitle>
                    <p className="text-sm text-brand-muted">{client.contactPerson}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className={`w-4 h-4 ${getPriorityColor(client.priority)}`} />
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-brand-secondary">
                  <Mail className="w-4 h-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-secondary">
                  <Phone className="w-4 h-4" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-secondary">
                  <Building className="w-4 h-4" />
                  <span>{client.industry}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-brand-muted pt-2 border-t">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Joined: {client.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-3 h-3" />
                    <span>${client.totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(client)}
                    className="flex-1 btn-secondary"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditClient(client)}
                    className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClient(client.id)}
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

      {/* Client Details Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-3xl bg-white">
          {selectedClient && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full flex items-center justify-center shadow-lg">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span>{selectedClient.name}</span>
                    <p className="text-sm text-brand-muted font-normal">{selectedClient.contactPerson}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-brand-primary mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-brand-accent" />
                        <span className="text-sm text-gray-700">{selectedClient.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-brand-accent" />
                        <span className="text-sm text-gray-700">{selectedClient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-brand-accent" />
                        <span className="text-sm text-gray-700">{selectedClient.website}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-brand-accent mt-1" />
                        <span className="text-sm text-gray-700">{selectedClient.address}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-brand-primary mb-3">Business Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Industry:</span>
                        <span className="text-sm text-gray-700">{selectedClient.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Status:</span>
                        <Badge className={getStatusColor(selectedClient.status)}>
                          {selectedClient.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Priority:</span>
                        <span className={`text-sm font-medium ${getPriorityColor(selectedClient.priority)}`}>
                          {selectedClient.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-brand-primary mb-3">Project Statistics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Projects:</span>
                        <span className="text-sm text-gray-700">{selectedClient.projectCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Revenue:</span>
                        <span className="text-sm text-gray-700">${selectedClient.totalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Join Date:</span>
                        <span className="text-sm text-gray-700">{selectedClient.joinDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Last Contact:</span>
                        <span className="text-sm text-gray-700">{selectedClient.lastContact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-semibold text-brand-primary mb-3">Notes</h3>
                    <p className="text-sm text-gray-700">{selectedClient.notes}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Client Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl bg-white">
          {editingClient && (
            <>
              <DialogHeader>
                <DialogTitle>Edit Client</DialogTitle>
                <DialogDescription>
                  Update client information and details
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Company Name</Label>
                  <Input
                    id="edit-name"
                    value={editingClient.name}
                    onChange={(e) => setEditingClient({...editingClient, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-contactPerson">Contact Person</Label>
                  <Input
                    id="edit-contactPerson"
                    value={editingClient.contactPerson}
                    onChange={(e) => setEditingClient({...editingClient, contactPerson: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-email">Email</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editingClient.email}
                    onChange={(e) => setEditingClient({...editingClient, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-phone">Phone</Label>
                  <Input
                    id="edit-phone"
                    value={editingClient.phone}
                    onChange={(e) => setEditingClient({...editingClient, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-website">Website</Label>
                  <Input
                    id="edit-website"
                    value={editingClient.website}
                    onChange={(e) => setEditingClient({...editingClient, website: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-industry">Industry</Label>
                  <Select value={editingClient.industry} onValueChange={(value) => setEditingClient({...editingClient, industry: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Retail">Retail</SelectItem>
                      <SelectItem value="Corporate">Corporate</SelectItem>
                      <SelectItem value="Startup">Startup</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="edit-address">Address</Label>
                  <Input
                    id="edit-address"
                    value={editingClient.address}
                    onChange={(e) => setEditingClient({...editingClient, address: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-status">Status</Label>
                  <Select value={editingClient.status} onValueChange={(value) => setEditingClient({...editingClient, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-priority">Priority</Label>
                  <Select value={editingClient.priority} onValueChange={(value) => setEditingClient({...editingClient, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="edit-notes">Notes</Label>
                  <Textarea
                    id="edit-notes"
                    value={editingClient.notes}
                    onChange={(e) => setEditingClient({...editingClient, notes: e.target.value})}
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <Button variant="outline" onClick={() => setIsEditModalOpen(false)} className="btn-secondary">
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button onClick={handleUpdateClient} className="btn-primary">
                  <Save className="w-4 h-4 mr-2" />
                  Update Client
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
