"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BarChart3, 
  Users, 
  Mail, 
  Settings, 
  FileText, 
  Image, 
  MessageSquare, 
  Calendar,
  LogOut,
  Globe,
  Zap,
  Wrench
} from "lucide-react"

// Import admin components
import AdminStats from './AdminStats'
import AdminMessages from './AdminMessages'
import AdminSettings from './AdminSettings'
import AdminProjects from './AdminProjects'
import AdminServices from './AdminServices'
import AdminPortfolio from './AdminPortfolio'
import AdminTeam from './AdminTeam'
import AdminClients from './AdminClients'
import AdminSiteConfig from './AdminSiteConfig'

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("overview")

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "projects", label: "Projects", icon: FileText },
    { id: "services", label: "Services", icon: Wrench },
    { id: "portfolio", label: "Portfolio", icon: Image },
    { id: "team", label: "Team", icon: Users },
    { id: "clients", label: "Clients", icon: Users },
    // { id: "messages", label: "Messages", icon: MessageSquare },
    // { id: "site-config", label: "Site Config", icon: Globe },
    // { id: "settings", label: "Settings", icon: Settings },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminStats />
      case "projects":
        return <AdminProjects />
      case "services":
        return <AdminServices />
      case "portfolio":
        return <AdminPortfolio />
      case "team":
        return <AdminTeam />
      case "clients":
        return <AdminClients />
    //   case "messages":
    //     return <AdminMessages />
    //   case "site-config":
    //     return <AdminSiteConfig />
    //   case "settings":
    //     return <AdminSettings />
      default:
        return <AdminStats />
    }
  }

  return (
    <div className="min-h-screen bg-brand-primary">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-brand-secondary border-r border-gray-200 min-h-screen shadow-lg flex flex-col">
          <div className="p-6 flex-1">
                <img src="/PixelprimpFinal.png" alt="PixelPrimp Logo" className="h-16 w-auto mb-6 ml-10" />
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-brand-accent text-brand-primary font-semibold shadow-lg"
                        : "text-brand-primary hover:bg-brand-accent/50 hover:text-brand-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
          
          {/* Logout Button */}
          <div className="p-6 border-t border-gray-200">
            <Button
              onClick={onLogout}
              variant="outline"
              className="w-full btn-secondary !border-red-200 !text-red-600 hover:!bg-red-50 hover:!border-red-400 hover:!text-red-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-brand-primary">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-brand-primary mb-2">
                Welcome back, Admin
              </h1>
              <p className="text-brand-secondary">
                Manage your PixelCraft Studio portfolio and business operations
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}