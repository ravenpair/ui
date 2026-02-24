import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BarChart2, Settings, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { to: '/dashboard/preferences', label: 'Preferences', icon: Settings },
]

interface SidebarProps {
  open: boolean
}

export default function Sidebar({ open }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col border-r bg-card transition-all duration-300',
        open ? 'w-60' : 'w-16'
      )}
    >
      <div className={cn('flex h-16 items-center border-b px-4', open ? 'justify-start gap-2' : 'justify-center')}>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
          A
        </div>
        {open && <span className="font-semibold text-lg">Acme Inc.</span>}
      </div>

      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  !open && 'justify-center px-2'
                )
              }
              title={!open ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {open && <span>{item.label}</span>}
              {open && item.to.includes('analytics') && (
                <ChevronRight className="ml-auto h-3 w-3 opacity-50" />
              )}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
