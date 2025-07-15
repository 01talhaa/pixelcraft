"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AdminLogin from "@/components/admin/AdminLogin"
import AdminDashboard from "@/components/admin/AdminDashboard"

interface Credentials {
  username: string
  password: string
}

interface TokenData {
  user: string
  expiry: number
  timestamp: number
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem("admin_token")
    if (token) {
      try {
        // Verify token (in a real app, you'd validate with your backend)
        const tokenData: TokenData = JSON.parse(token)
        const currentTime = Date.now()
        
        if (currentTime < tokenData.expiry) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem("admin_token")
        }
      } catch (error) {
        localStorage.removeItem("admin_token")
      }
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (credentials: Credentials): boolean => {
    // Demo authentication - in production, use proper authentication
    if (credentials.username === "admin" && credentials.password === "pixelprimp2024") {
      const token: TokenData = {
        user: "admin",
        expiry: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
        timestamp: Date.now()
      }
      localStorage.setItem("admin_token", JSON.stringify(token))
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const handleLogout = (): void => {
    localStorage.removeItem("admin_token")
    setIsAuthenticated(false)
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-brand-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-brand-secondary">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-primary">
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </div>
  )
}
