"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Users, 
  Mail, 
  Calendar,
  TrendingUp,
  Target,
  Star,
  MessageSquare,
  FileText,
  Globe,
  Zap
} from "lucide-react"

export default function AdminStats() {
  const stats = [
    {
      title: "Total Projects",
      value: "156",
      change: "+12%",
      icon: FileText,
      color: "from-brand-blue to-brand-blue-dark",
      trending: "up"
    },
    {
      title: "Active Clients",
      value: "89",
      change: "+8%",
      icon: Users,
      color: "from-green-500 to-green-600",
      trending: "up"
    },
    {
      title: "Pending Tasks",
      value: "23",
      change: "-5%",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      trending: "down"
    },
    {
      title: "Messages",
      value: "342",
      change: "+18%",
      icon: MessageSquare,
      color: "from-purple-500 to-purple-600",
      trending: "up"
    },
    {
      title: "Website Views",
      value: "12.8K",
      change: "+24%",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      trending: "up"
    },
    {
      title: "Client Rating",
      value: "4.9",
      change: "+0.2",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
      trending: "up"
    }
  ]

//   const recentActivity = [
//     {
//       id: 1,
//       type: "project",
//       title: "New project 'E-commerce Platform' started",
//       time: "2 hours ago",
//       client: "Tech Solutions Inc."
//     },
//     {
//       id: 2,
//       type: "message",
//       title: "Message from John Doe",
//       time: "4 hours ago",
//       content: "Inquiry about web development services"
//     },
//     {
//       id: 3,
//       type: "completion",
//       title: "Project 'Mobile App UI' completed",
//       time: "1 day ago",
//       client: "StartupXYZ"
//     },
//     {
//       id: 4,
//       type: "review",
//       title: "5-star review received",
//       time: "2 days ago",
//       client: "Creative Agency"
//     }
//   ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-purple-500/5 rounded-3xl"></div>
        <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-purple-600 bg-clip-text text-transparent">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 mt-2 text-lg">Welcome back! Here's what's happening with your business today.</p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.title}</p>
                    <p className="text-4xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors duration-300">{stat.value}</p>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={stat.trending === "up" ? "default" : "secondary"}
                        className={`${
                          stat.trending === "up" 
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200 shadow-sm"
                            : "bg-red-100 text-red-800 border-red-200 shadow-sm"
                        } px-3 py-1 font-medium`}
                      >
                        <TrendingUp className={`w-3 h-3 mr-1 ${stat.trending === "up" ? "rotate-0" : "rotate-180"}`} />
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-9 h-9 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-brand-blue to-purple-600 text-white border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <span>Monthly Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Projects Completed</span>
                  <span className="text-sm">28/30</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '93%'}}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Revenue Target</span>
                  <span className="text-sm">$45K/$50K</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Client Satisfaction</span>
                  <span className="text-sm">4.9/5.0</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">100+ Active Clients</p>
                  <p className="text-xs text-white/80">Milestone reached this month</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">15K+ Website Visitors</p>
                  <p className="text-xs text-white/80">Monthly record broken</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">4.9 Average Rating</p>
                  <p className="text-xs text-white/80">Client satisfaction at peak</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      {/* <Card className="card-primary">
        <CardHeader>
          <CardTitle className="text-brand-primary flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-brand-accent" />
            <span>Recent Activity</span>
          </CardTitle>
          <CardDescription className="text-brand-secondary">
            Latest updates and activities from your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg bg-brand-secondary hover:bg-brand-accent/20 transition-colors">
                <div className="w-2 h-2 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full mt-3 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-brand-primary">{activity.title}</p>
                  {activity.client && (
                    <p className="text-xs text-brand-muted mt-1">Client: {activity.client}</p>
                  )}
                  {activity.content && (
                    <p className="text-xs text-brand-muted mt-1">{activity.content}</p>
                  )}
                  <p className="text-xs text-brand-muted mt-2">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* Quick Actions */}
      {/* <Card className="card-primary">
        <CardHeader>
          <CardTitle className="text-brand-primary flex items-center space-x-2">
            <Zap className="w-5 h-5 text-brand-accent" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription className="text-brand-secondary">
            Frequently used actions for quick access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-br from-primary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 group">
              <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">New Project</span>
            </button>
            <button className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 group">
              <Users className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Add Client</span>
            </button>
            <button className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 group">
              <MessageSquare className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">View Messages</span>
            </button>
            <button className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 group">
              <Calendar className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Schedule</span>
            </button>
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}