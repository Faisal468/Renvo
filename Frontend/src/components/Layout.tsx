import { Outlet, useLocation } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff' }}>
      <Navbar />
      {/* Push content below fixed navbar on non-home pages */}
      {!isHome && <div style={{ height: 120 }} />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
