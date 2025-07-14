"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  Settings, 
  Globe,
  Palette,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Save,
  RefreshCw,
  Upload,
  Image,
  FileText,
  Shield,
  Eye,
  Code
} from "lucide-react"

export default function AdminSiteConfig() {
  const [activeTab, setActiveTab] = useState("general")
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "PixelCraft Studio",
    siteTagline: "Creative Design Agency",
    siteDescription: "We create stunning digital experiences for businesses worldwide",
    logo: "/placeholder-logo.png",
    favicon: "/favicon.ico",
    
    // Contact Information
    email: "info@pixelcraft.com",
    phone: "+880 1682-888934",
    whatsapp: "+880 1682-888934",
    address: "123 Creative Street, Design City, DC 12345",
    
    // Social Media
    social: {
      facebook: "https://facebook.com/pixelcraft",
      twitter: "https://twitter.com/pixelcraft",
      instagram: "https://instagram.com/pixelcraft",
      linkedin: "https://linkedin.com/company/pixelcraft",
      github: "https://github.com/pixelcraft",
      dribbble: "https://dribbble.com/pixelcraft",
      behance: "https://behance.net/pixelcraft"
    },
    
    // SEO Settings
    seo: {
      metaTitle: "PixelCraft Studio - Creative Design Agency",
      metaDescription: "Professional web design and development services",
      metaKeywords: "web design, development, ui/ux, branding",
      ogImage: "/og-image.jpg",
      twitterCard: "summary_large_image"
    },
    
    // Theme Settings
    theme: {
      primaryColor: "#0084FC",
      secondaryColor: "#000000",
      accentColor: "#FFFFFF",
      fontFamily: "Inter",
      borderRadius: "8px"
    },
    
    // Features
    features: {
      newsletter: true,
      whatsappChat: true,
      testimonials: true,
      darkMode: false,
      animations: true,
      lazyLoading: true,
      analytics: true
    },
    
    // Content
    content: {
      heroTitle: "Welcome to PixelCraft Studio",
      heroSubtitle: "We create amazing digital experiences",
      aboutTitle: "About Our Agency",
      aboutDescription: "We are a creative design agency...",
      servicesTitle: "Our Services",
      servicesDescription: "What we offer to our clients",
      portfolioTitle: "Our Portfolio",
      portfolioDescription: "Check out our latest work",
      teamTitle: "Meet Our Team",
      teamDescription: "The people behind the magic",
      contactTitle: "Get In Touch",
      contactDescription: "Let's work together"
    }
  })

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleDirectChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    console.log("Settings saved:", settings)
    // Here you would typically save to your backend
  }

  const handleReset = () => {
    // Reset to default values
    console.log("Settings reset")
  }

  const settingsTabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "social", label: "Social Media", icon: Globe },
    { id: "seo", label: "SEO", icon: Eye },
    { id: "theme", label: "Theme", icon: Palette },
    { id: "features", label: "Features", icon: Code },
    { id: "content", label: "Content", icon: FileText },
  ]

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Site Information</CardTitle>
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
                onChange={(e) => handleDirectChange("siteName", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="siteTagline" className="text-black">Site Tagline</Label>
              <Input
                id="siteTagline"
                value={settings.siteTagline}
                onChange={(e) => handleDirectChange("siteTagline", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="siteDescription" className="text-black">Site Description</Label>
            <textarea
              id="siteDescription"
              value={settings.siteDescription}
              onChange={(e) => handleDirectChange("siteDescription", e.target.value)}
              rows={3}
              className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="logo" className="text-black">Logo URL</Label>
              <Input
                id="logo"
                value={settings.logo}
                onChange={(e) => handleDirectChange("logo", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="favicon" className="text-black">Favicon URL</Label>
              <Input
                id="favicon"
                value={settings.favicon}
                onChange={(e) => handleDirectChange("favicon", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContactSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Contact Information</CardTitle>
          <CardDescription className="text-gray-600">
            Your business contact details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-black">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => handleDirectChange("email", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-black">Phone Number</Label>
              <Input
                id="phone"
                value={settings.phone}
                onChange={(e) => handleDirectChange("phone", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="whatsapp" className="text-black">WhatsApp Number</Label>
            <Input
              id="whatsapp"
              value={settings.whatsapp}
              onChange={(e) => handleDirectChange("whatsapp", e.target.value)}
              className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-black">Address</Label>
            <textarea
              id="address"
              value={settings.address}
              onChange={(e) => handleDirectChange("address", e.target.value)}
              rows={2}
              className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSocialSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Social Media Links</CardTitle>
          <CardDescription className="text-gray-600">
            Your social media presence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="facebook" className="text-black flex items-center space-x-2">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </Label>
              <Input
                id="facebook"
                value={settings.social.facebook}
                onChange={(e) => handleInputChange("social", "facebook", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="twitter" className="text-black flex items-center space-x-2">
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </Label>
              <Input
                id="twitter"
                value={settings.social.twitter}
                onChange={(e) => handleInputChange("social", "twitter", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="instagram" className="text-black flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </Label>
              <Input
                id="instagram"
                value={settings.social.instagram}
                onChange={(e) => handleInputChange("social", "instagram", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="linkedin" className="text-black flex items-center space-x-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Label>
              <Input
                id="linkedin"
                value={settings.social.linkedin}
                onChange={(e) => handleInputChange("social", "linkedin", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="github" className="text-black flex items-center space-x-2">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Label>
              <Input
                id="github"
                value={settings.social.github}
                onChange={(e) => handleInputChange("social", "github", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="dribbble" className="text-black">Dribbble</Label>
              <Input
                id="dribbble"
                value={settings.social.dribbble}
                onChange={(e) => handleInputChange("social", "dribbble", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSEOSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">SEO Settings</CardTitle>
          <CardDescription className="text-gray-600">
            Search engine optimization settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="metaTitle" className="text-black">Meta Title</Label>
            <Input
              id="metaTitle"
              value={settings.seo.metaTitle}
              onChange={(e) => handleInputChange("seo", "metaTitle", e.target.value)}
              className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
          <div>
            <Label htmlFor="metaDescription" className="text-black">Meta Description</Label>
            <textarea
              id="metaDescription"
              value={settings.seo.metaDescription}
              onChange={(e) => handleInputChange("seo", "metaDescription", e.target.value)}
              rows={3}
              className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
            />
          </div>
          <div>
            <Label htmlFor="metaKeywords" className="text-black">Meta Keywords</Label>
            <Input
              id="metaKeywords"
              value={settings.seo.metaKeywords}
              onChange={(e) => handleInputChange("seo", "metaKeywords", e.target.value)}
              className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
          <div>
            <Label htmlFor="ogImage" className="text-black">Open Graph Image</Label>
            <Input
              id="ogImage"
              value={settings.seo.ogImage}
              onChange={(e) => handleInputChange("seo", "ogImage", e.target.value)}
              className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderThemeSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Theme Customization</CardTitle>
          <CardDescription className="text-gray-600">
            Customize the look and feel of your website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="primaryColor" className="text-black">Primary Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  type="color"
                  value={settings.theme.primaryColor}
                  onChange={(e) => handleInputChange("theme", "primaryColor", e.target.value)}
                  className="w-12 h-10 p-1 border-2 border-gray-200"
                />
                <Input
                  value={settings.theme.primaryColor}
                  onChange={(e) => handleInputChange("theme", "primaryColor", e.target.value)}
                  className="flex-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="secondaryColor" className="text-black">Secondary Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  type="color"
                  value={settings.theme.secondaryColor}
                  onChange={(e) => handleInputChange("theme", "secondaryColor", e.target.value)}
                  className="w-12 h-10 p-1 border-2 border-gray-200"
                />
                <Input
                  value={settings.theme.secondaryColor}
                  onChange={(e) => handleInputChange("theme", "secondaryColor", e.target.value)}
                  className="flex-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="accentColor" className="text-black">Accent Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  type="color"
                  value={settings.theme.accentColor}
                  onChange={(e) => handleInputChange("theme", "accentColor", e.target.value)}
                  className="w-12 h-10 p-1 border-2 border-gray-200"
                />
                <Input
                  value={settings.theme.accentColor}
                  onChange={(e) => handleInputChange("theme", "accentColor", e.target.value)}
                  className="flex-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderFeaturesSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Site Features</CardTitle>
          <CardDescription className="text-gray-600">
            Enable or disable site features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(settings.features).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <Label className="text-black capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                <p className="text-sm text-gray-600">
                  {key === 'newsletter' && 'Enable newsletter subscription'}
                  {key === 'whatsappChat' && 'Enable WhatsApp chat widget'}
                  {key === 'testimonials' && 'Show testimonials section'}
                  {key === 'darkMode' && 'Enable dark mode toggle'}
                  {key === 'animations' && 'Enable site animations'}
                  {key === 'lazyLoading' && 'Enable image lazy loading'}
                  {key === 'analytics' && 'Enable analytics tracking'}
                </p>
              </div>
              <Switch
                checked={value}
                onCheckedChange={(checked) => handleInputChange("features", key, checked)}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )

  const renderContentSettings = () => (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-black">Content Settings</CardTitle>
          <CardDescription className="text-gray-600">
            Manage site content and text
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="heroTitle" className="text-black">Hero Title</Label>
              <Input
                id="heroTitle"
                value={settings.content.heroTitle}
                onChange={(e) => handleInputChange("content", "heroTitle", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="heroSubtitle" className="text-black">Hero Subtitle</Label>
              <Input
                id="heroSubtitle"
                value={settings.content.heroSubtitle}
                onChange={(e) => handleInputChange("content", "heroSubtitle", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="aboutTitle" className="text-black">About Title</Label>
              <Input
                id="aboutTitle"
                value={settings.content.aboutTitle}
                onChange={(e) => handleInputChange("content", "aboutTitle", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
            <div>
              <Label htmlFor="servicesTitle" className="text-black">Services Title</Label>
              <Input
                id="servicesTitle"
                value={settings.content.servicesTitle}
                onChange={(e) => handleInputChange("content", "servicesTitle", e.target.value)}
                className="mt-1 bg-white border-2 border-gray-200 focus:border-primary text-black"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="aboutDescription" className="text-black">About Description</Label>
            <textarea
              id="aboutDescription"
              value={settings.content.aboutDescription}
              onChange={(e) => handleInputChange("content", "aboutDescription", e.target.value)}
              rows={3}
              className="mt-1 w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-md focus:border-primary text-black"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "general": return renderGeneralSettings()
      case "contact": return renderContactSettings()
      case "social": return renderSocialSettings()
      case "seo": return renderSEOSettings()
      case "theme": return renderThemeSettings()
      case "features": return renderFeaturesSettings()
      case "content": return renderContentSettings()
      default: return renderGeneralSettings()
    }
  }

  return (
    <div className="space-y-6">
      {/* Settings Navigation */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
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

      {/* Save Actions */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4" />
              <span>Changes are saved automatically</span>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleReset}
                className="border-gray-300 text-black hover:bg-gray-100"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset to Default
              </Button>
              <Button
                onClick={handleSave}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
