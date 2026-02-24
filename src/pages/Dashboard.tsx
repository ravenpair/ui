import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react'

const stats = [
  { title: 'Total Revenue', value: '$45,231', change: '+20.1% from last month', icon: DollarSign },
  { title: 'Active Users', value: '+2,350', change: '+18.1% from last month', icon: Users },
  { title: 'New Signups', value: '+12,234', change: '+19% from last month', icon: Activity },
  { title: 'Growth Rate', value: '+573', change: '+201 since last hour', icon: TrendingUp },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['User Alice signed up', 'User Bob made a purchase', 'Server deployed successfully', 'New report generated'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: 'Page Views', value: '24,521' },
                { label: 'Bounce Rate', value: '42.3%' },
                { label: 'Avg. Session', value: '4m 32s' },
                { label: 'Conversion Rate', value: '3.6%' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
