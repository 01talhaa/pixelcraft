"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  MessageSquare, 
  Search, 
  Filter,
  Mail,
  Phone,
  Calendar,
  User,
  CheckCircle,
  Clock,
  AlertCircle,
  Trash2,
  Reply,
  Star
} from "lucide-react"

export default function AdminMessages() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const messages = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      subject: "Website Development Inquiry",
      message: "Hi, I'm interested in developing a new website for my business. Could you provide more information about your services and pricing?",
      date: "2024-01-15",
      time: "10:30 AM",
      status: "unread",
      priority: "high",
      source: "contact_form"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      phone: "+1 234 567 8901",
      subject: "Mobile App Development",
      message: "We need a mobile app for our e-commerce platform. What's your experience with React Native?",
      date: "2024-01-14",
      time: "2:15 PM",
      status: "read",
      priority: "medium",
      source: "whatsapp"
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@startup.com",
      phone: "+1 234 567 8902",
      subject: "UI/UX Design Project",
      message: "Looking for a designer to create UI/UX for our new SaaS platform. Can we schedule a call?",
      date: "2024-01-13",
      time: "4:45 PM",
      status: "replied",
      priority: "low",
      source: "contact_form"
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma@business.com",
      phone: "+1 234 567 8903",
      subject: "Branding Package",
      message: "We're launching a new brand and need complete branding package including logo, colors, and brand guidelines.",
      date: "2024-01-12",
      time: "11:20 AM",
      status: "unread",
      priority: "high",
      source: "whatsapp"
    },
    {
      id: 5,
      name: "Alex Brown",
      email: "alex@tech.com",
      phone: "+1 234 567 8904",
      subject: "E-commerce Platform",
      message: "Need help with developing a custom e-commerce platform with advanced features like inventory management and analytics.",
      date: "2024-01-11",
      time: "3:30 PM",
      status: "read",
      priority: "medium",
      source: "contact_form"
    }
  ]

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === "all" || message.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "unread": return "bg-red-100 text-red-800 border-red-200"
      case "read": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "replied": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "unread": return <AlertCircle className="w-4 h-4" />
      case "read": return <Clock className="w-4 h-4" />
      case "replied": return <CheckCircle className="w-4 h-4" />
      default: return <MessageSquare className="w-4 h-4" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "text-red-600"
      case "medium": return "text-yellow-600"
      case "low": return "text-green-600"
      default: return "text-gray-600"
    }
  }

  const getSourceIcon = (source) => {
    switch (source) {
      case "whatsapp": return "💬"
      case "contact_form": return "📧"
      default: return "📨"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle className="text-brand-primary flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-brand-accent" />
            <span>Messages</span>
          </CardTitle>
          <CardDescription className="text-brand-secondary">
            Manage customer inquiries and communications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-brand-primary border-2 border-gray-200 focus:border-brand-accent text-brand-primary"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                onClick={() => setFilterStatus("all")}
                className={filterStatus === "all" ? "btn-primary" : "btn-secondary"}
              >
                All
              </Button>
              <Button
                variant={filterStatus === "unread" ? "default" : "outline"}
                onClick={() => setFilterStatus("unread")}
                className={filterStatus === "unread" ? "btn-primary" : "btn-secondary"}
              >
                Unread
              </Button>
              <Button
                variant={filterStatus === "read" ? "default" : "outline"}
                onClick={() => setFilterStatus("read")}
                className={filterStatus === "read" ? "btn-primary" : "btn-secondary"}
              >
                Read
              </Button>
              <Button
                variant={filterStatus === "replied" ? "default" : "outline"}
                onClick={() => setFilterStatus("replied")}
                className={filterStatus === "replied" ? "btn-primary" : "btn-secondary"}
              >
                Replied
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messages List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMessages.map((message) => (
          <Card 
            key={message.id} 
            className={`card-primary hover:shadow-xl transition-all duration-300 cursor-pointer ${
              selectedMessage?.id === message.id ? "ring-2 ring-brand-accent" : ""
            }`}
            onClick={() => setSelectedMessage(message)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-brand-primary text-lg">{message.name}</CardTitle>
                    <p className="text-sm text-brand-muted">{message.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getSourceIcon(message.source)}</span>
                  <Badge className={getStatusColor(message.status)}>
                    {getStatusIcon(message.status)}
                    <span className="ml-1 capitalize">{message.status}</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-brand-primary">{message.subject}</h4>
                  <div className="flex items-center space-x-2">
                    <Star className={`w-4 h-4 ${getPriorityColor(message.priority)}`} />
                    <span className={`text-xs font-medium ${getPriorityColor(message.priority)}`}>
                      {message.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-brand-secondary text-sm line-clamp-3">{message.message}</p>
                
                <div className="flex items-center justify-between text-xs text-brand-muted pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{message.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{message.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="w-3 h-3" />
                    <span>{message.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <Card className="card-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-brand-primary text-xl">{selectedMessage.subject}</CardTitle>
                <CardDescription className="text-brand-secondary">
                  From: {selectedMessage.name} ({selectedMessage.email})
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedMessage(null)}
                className="btn-secondary"
              >
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-brand-secondary p-4 rounded-lg">
                <p className="text-brand-primary leading-relaxed">{selectedMessage.message}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-brand-secondary">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedMessage.date} at {selectedMessage.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{selectedMessage.phone}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(selectedMessage.status)}>
                  {getStatusIcon(selectedMessage.status)}
                  <span className="ml-1 capitalize">{selectedMessage.status}</span>
                </Badge>
              </div>
              
              <div className="flex space-x-3">
                <Button className="btn-primary">
                  <Reply className="w-4 h-4 mr-2" />
                  Reply
                </Button>
                <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark as Resolved
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
