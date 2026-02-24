import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Track your metrics and performance.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center text-muted-foreground text-sm">
              Chart placeholder
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center text-muted-foreground text-sm">
              Chart placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
