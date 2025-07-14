"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  User,
  Mail,
  Phone,
  Globe,
  Shield,
  Bell,
  Palette,
  Database,
  Key,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff
} from "lucide-react"

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general")
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "PixelCraft Studio",
    siteDescription: "Creative Design Agency",
    contactEmail: "info@pixelcraft.com",
    contactPhone: "+880 1682-888934",
    whatsappNumber: "+880 1682-888934",
    
    // Security Settings
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    
    // Notification Settings
    emailNotifications: true,
    whatsappNotifications: true,
    projectUpdates: true,
    clientMessages: true,
    
    // Theme Settings
    primaryColor: "#0084FC",
    secondaryColor: "#000000",
    darkMode: false,
    animationsEnabled: true
  })

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved:", settings)
  }

  const settingsTabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "backup", label: "Backup", icon: Database },
  ]

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Globe className="w-5 h-5 text-primary" />
            <span>Site Information</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Basic information about your website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="siteName" className="text-black">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleInputChange("siteName", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="siteDescription" className="text-black">Site Description</Label>
              <Input
                id="siteDescription"
                value={settings.siteDescription}
                onChange={(e) => handleInputChange("siteDescription", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Phone className="w-5 h-5 text-primary" />
            <span>Contact Information</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Contact details for your business
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactEmail" className="text-black">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="contactPhone" className="text-black">Contact Phone</Label>
              <Input
                id="contactPhone"
                value={settings.contactPhone}
                onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="whatsappNumber" className="text-black">WhatsApp Number</Label>
            <Input
              id="whatsappNumber"
              value={settings.whatsappNumber}
              onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
              className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Key className="w-5 h-5 text-primary" />
            <span>Password Settings</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Change your admin password
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="currentPassword" className="text-black">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                value={settings.currentPassword}
                onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="newPassword" className="text-black">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={settings.newPassword}
                onChange={(e) => handleInputChange("newPassword", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="text-black">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>Security Options</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Additional security features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">Two-Factor Authentication</Label>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <Switch
              checked={settings.twoFactorEnabled}
              onCheckedChange={(checked) => handleInputChange("twoFactorEnabled", checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Bell className="w-5 h-5 text-primary" />
            <span>Notification Preferences</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Choose how you want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">Email Notifications</Label>
              <p className="text-sm text-gray-600">Receive notifications via email</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">WhatsApp Notifications</Label>
              <p className="text-sm text-gray-600">Receive notifications via WhatsApp</p>
            </div>
            <Switch
              checked={settings.whatsappNotifications}
              onCheckedChange={(checked) => handleInputChange("whatsappNotifications", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">Project Updates</Label>
              <p className="text-sm text-gray-600">Get notified about project status changes</p>
            </div>
            <Switch
              checked={settings.projectUpdates}
              onCheckedChange={(checked) => handleInputChange("projectUpdates", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">Client Messages</Label>
              <p className="text-sm text-gray-600">Get notified about new client messages</p>
            </div>
            <Switch
              checked={settings.clientMessages}
              onCheckedChange={(checked) => handleInputChange("clientMessages", checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Palette className="w-5 h-5 text-primary" />
            <span>Theme Settings</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Customize the appearance of your admin panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="primaryColor" className="text-black">Primary Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  id="primaryColor"
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                  className="w-12 h-10 p-1 border-2 border-gray-200"
                />
                <Input
                  value={settings.primaryColor}
                  onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                  className="flex-1 bg-white border-2 border-gray-200 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="secondaryColor" className="text-black">Secondary Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  id="secondaryColor"
                  type="color"
                  value={settings.secondaryColor}
                  onChange={(e) => handleInputChange("secondaryColor", e.target.value)}
                  className="w-12 h-10 p-1 border-2 border-gray-200"
                />
                <Input
                  value={settings.secondaryColor}
                  onChange={(e) => handleInputChange("secondaryColor", e.target.value)}
                  className="flex-1 bg-white border-2 border-gray-200 focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">Dark Mode</Label>
              <p className="text-sm text-gray-600">Enable dark theme for the admin panel</p>
            </div>
            <Switch
              checked={settings.darkMode}
              onCheckedChange={(checked) => handleInputChange("darkMode", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-black">Animations</Label>
              <p className="text-sm text-gray-600">Enable smooth animations and transitions</p>
            </div>
            <Switch
              checked={settings.animationsEnabled}
              onCheckedChange={(checked) => handleInputChange("animationsEnabled", checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderBackupSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-black flex items-center space-x-2">
            <Database className="w-5 h-5 text-primary" />
            <span>Backup & Restore</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            Manage your data backups and restoration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Last Backup</h4>
              <p className="text-sm text-gray-600 mb-3">January 15, 2024 at 10:30 AM</p>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Success
              </Badge>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Backup Status</h4>
              <p className="text-sm text-gray-600 mb-3">Automatic backups enabled</p>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                <RefreshCw className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-primary hover:bg-primary/90">
              <Database className="w-4 h-4 mr-2" />
              Create Backup
            </Button>
            <Button variant="outline" className="border-gray-300 hover:bg-gray-100">
              <RefreshCw className="w-4 h-4 mr-2" />
              Restore from Backup
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings()
      case "security":
        return renderSecuritySettings()
      case "notifications":
        return renderNotificationSettings()
      case "appearance":
        return renderAppearanceSettings()
      case "backup":
        return renderBackupSettings()
      default:
        return renderGeneralSettings()
    }
  }

  return (
    <div className="space-y-6">
      {/* Settings Navigation */}
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border-gray-300 hover:bg-gray-100 text-black"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Settings Content */}
      {renderContent()}

      {/* Save Button */}
      <Card className="bg-white/95 border-2 border-gray-200 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <AlertCircle className="w-4 h-4" />
              <span>Remember to save your changes</span>
            </div>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-white">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}