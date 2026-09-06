import { useState, useEffect, ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { NAV_ITEMS } from './shared'
import Logo from '../assets/HOME IMPROVEMENTS.png'


const socialIcons: Record<string, ReactNode> = {
  f: (
    <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0h88a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  ),
  "Google profile": (
    <svg viewBox="0 0 488 512" width="16" height="16" fill="currentColor">
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  ),
  yt: (
    <svg viewBox="0 0 576 512" width="16" height="16" fill="currentColor">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232 337.6V174.4L370 256l-138 81.6z" />
    </svg>
  ),
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const [mobileSubDropdownOpen, setMobileSubDropdownOpen] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMobileDropdownOpen(null)
    setMobileSubDropdownOpen(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:py-5 text-slate-900" style={{ minHeight: 64 }}>
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={Logo} alt="Renovvo Logo" style={{ height: 'clamp(40px, 9vw, 108px)', width: 'auto' }} />
          </Link>

          <Link
            to="/contact"
            className="font-semibold uppercase flex-shrink-0"
            style={{
              background: '#c9a84c' ,
              color: '#071830',
              padding: 'clamp(0.5rem, 1.5vw, 1rem) clamp(0.75rem, 3vw, 2rem)',
              borderRadius: 0,
              letterSpacing: '0.08em',
              fontSize: 'clamp(0.625rem, 1.8vw, 0.95rem)',
              boxShadow: '0 4px 12px rgba(225, 225, 225, 0.4)',
              textDecoration: 'none',
              
              whiteSpace: 'nowrap',
            }}
          >
            Get A Free Estimate
          </Link>

          <div className="hidden lg:flex flex-col items-start gap-3 text-left">
            <a href="tel:2812229491" className="inline-flex items-center gap-2 font-semibold" style={{ color: '#071830', textDecoration: 'none', fontSize: '1.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000" style={{ flexShrink: 0 }}>
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z" />
              </svg>
              <span style={{ letterSpacing: '0.02em' }}>(281) 222-9491</span>
            </a>
            <div className="flex gap-3">
              {[
                { icon: 'f', href: 'https://www.facebook.com/share/1Bd3eha5uH/?mibextid=wwXIfr' },
                { icon: 'ig', href: 'https://www.instagram.com/rewisebuilders?igsh=MWEwOGVneHU2N213OA==' },
                { icon: 'tiktok', href: '#' },
                { icon: 'yt', href: '#' },
                { icon: "Google profile", href: "https://g.page/r/CZ0r7k1y6e4HEB0/review" },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-xs font-bold cursor-pointer"
                  style={{ width: 36, height: 36, background: '#c9a84c', color: '#071830', borderRadius: 0 }}
                >
                  {socialIcons[icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="border-t border-white/10 bg-[#0b2545]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:justify-center h-16">
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(item =>
              item.dropdown ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="nav-link flex items-center gap-1 bg-transparent border-none p-0"
                    style={{ color: location.pathname.startsWith(item.path) ? '#c9a84c' : '#ffffff', cursor: 'pointer' }}
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{
                        transition: 'transform 0.2s',
                        transform: openDropdown === item.path ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    className="absolute left-1/2 transition-all duration-200"
                    style={{
                      top: '100%',
                      transform: openDropdown === item.path ? 'translate(-50%, 0)' : 'translate(-50%, 6px)',
                      opacity: openDropdown === item.path ? 1 : 0,
                      visibility: openDropdown === item.path ? 'visible' : 'hidden',
                      paddingTop: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        background: '#0b2545',
                        border: '1px solid rgba(201,168,76,0.25)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                        minWidth: 320,
                        padding: '0.4rem 0',
                      }}
                    >
                      {item.dropdown.map((sub, i) => {
                        const hasSubDropdown = 'dropdown' in sub && !!sub.dropdown && sub.dropdown.length > 0
                        const content = (
                          <>
                            {'img' in sub && sub.img && (
                              <img
                                src={sub.img}
                                alt={sub.label}
                                className="object-cover flex-shrink-0"
                                style={{ width: 52, height: 52, borderRadius: 2 }}
                              />
                            )}
                            <span
                              className="flex-1 text-sm font-medium uppercase tracking-wide whitespace-nowrap"
                              style={{ color: location.pathname === sub.path ? '#c9a84c' : '#ffffff' }}
                            >
                              {sub.label}
                            </span>
                            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                              <path d="M3.5 1.5L7 5L3.5 8.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        )

                        const rowStyle = {
                          padding: '0.6rem 1.25rem',
                          borderBottom: i < item.dropdown.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                        }

                        if (hasSubDropdown) {
                          return (
                            <div
                              key={sub.path}
                              className="relative"
                              onMouseEnter={() => setOpenSubDropdown(sub.path)}
                              onMouseLeave={() => setOpenSubDropdown(null)}
                            >
                              <Link
                                to={sub.path}
                                className="flex items-center gap-4 transition-colors"
                                style={{ ...rowStyle, background: openSubDropdown === sub.path ? 'rgba(255,255,255,0.05)' : 'transparent' }}
                              >
                                {content}
                              </Link>
                              <div
                                className="absolute transition-all duration-200"
                                style={{
                                  left: '100%',
                                  top: 0,
                                  paddingLeft: '0.5rem',
                                  opacity: openSubDropdown === sub.path ? 1 : 0,
                                  visibility: openSubDropdown === sub.path ? 'visible' : 'hidden',
                                  transform: openSubDropdown === sub.path ? 'translate(0, 0)' : 'translate(-6px, 0)',
                                }}
                              >
                                <div
                                  style={{
                                    background: '#0b2545',
                                    border: '1px solid rgba(201,168,76,0.25)',
                                    boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                                    minWidth: 220,
                                    padding: '0.4rem 0',
                                  }}
                                >
                                  {sub.dropdown!.map((leaf, j) => (
                                    <Link
                                      key={leaf.path}
                                      to={leaf.path}
                                      className="flex items-center gap-4 transition-colors"
                                      style={{
                                        padding: '0.6rem 1.25rem',
                                        borderBottom: j < sub.dropdown!.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                      }}
                                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                    >
                                      <span
                                        className="flex-1 text-sm font-medium uppercase tracking-wide whitespace-nowrap"
                                        style={{ color: location.pathname === leaf.path ? '#c9a84c' : '#ffffff' }}
                                      >
                                        {leaf.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )
                        }

                        if ('external' in sub && sub.external) {
                          return (
                            <a
                              key={sub.path}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 transition-colors"
                              style={{ ...rowStyle, color: '#ffffff' }}
                              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                            >
                              {content}
                            </a>
                          )
                        }

                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="flex items-center gap-4 transition-colors"
                            style={rowStyle}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            {content}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nav-link"
                  style={{ color: location.pathname === item.path ? '#c9a84c' : '#ffffff' }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3 lg:absolute lg:right-6 lg:top-1/2 lg:transform lg:-translate-y-1/2">
           
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div
                className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 origin-center"
                style={{ transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
              />
              <div
                className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <div
                className="w-6 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
              />
            </button>
          </div>
        </div>

        <div
          className="lg:hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? 'calc(100vh - 64px)' : 0,
            overflowY: mobileOpen ? 'auto' : 'hidden',
            overflowX: 'hidden',
            background: '#0c3b6d',
            borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}
        >
          {NAV_ITEMS.map(item =>
            item.dropdown ? (
              <div key={item.path} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center justify-between px-6">
                  <Link
                    to={item.path}
                    className="flex-1 py-4 text-sm font-medium uppercase tracking-widest transition-colors"
                    style={{ color: location.pathname.startsWith(item.path) ? '#c9a84c' : '#ffffff' }}
                  >
                    {item.label}
                  </Link>
                  <button
                    aria-label={`Toggle ${item.label} submenu`}
                    className="p-4 -mr-4"
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.path ? null : item.path)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{
                        transition: 'transform 0.2s',
                        transform: mobileDropdownOpen === item.path ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      <path d="M1.5 3.5L5 7L8.5 3.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: mobileDropdownOpen === item.path ? 320 : 0, background: 'rgba(255,255,255,0.03)' }}
                >
                  {item.dropdown.map(sub => {
                    const hasSubDropdown = 'dropdown' in sub && !!sub.dropdown && sub.dropdown.length > 0

                    if (hasSubDropdown) {
                      const isOpen = mobileSubDropdownOpen === sub.path
                      return (
                        <div key={sub.path}>
                          <div className="flex items-center justify-between pr-6">
                            <Link
                              to={sub.path}
                              className="flex-1 px-10 py-3 text-sm font-medium uppercase tracking-widest transition-colors"
                              style={{ color: location.pathname === sub.path ? '#c9a84c' : 'rgba(255,255,255,0.75)' }}
                            >
                              {sub.label}
                            </Link>
                            <button
                              aria-label={`Toggle ${sub.label} submenu`}
                              className="p-3"
                              onClick={() => setMobileSubDropdownOpen(isOpen ? null : sub.path)}
                            >
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}
                              >
                                <path d="M1.5 3.5L5 7L8.5 3.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="overflow-hidden transition-all duration-300"
                            style={{ maxHeight: isOpen ? 280 : 0, background: 'rgba(255,255,255,0.03)' }}
                          >
                            {sub.dropdown!.map(leaf => (
                              <Link
                                key={leaf.path}
                                to={leaf.path}
                                className="block px-14 py-3 text-sm font-medium uppercase tracking-widest transition-colors"
                                style={{ color: location.pathname === leaf.path ? '#c9a84c' : 'rgba(255,255,255,0.6)' }}
                              >
                                {leaf.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    return 'external' in sub && sub.external ? (
                      <a
                        key={sub.path}
                        href={sub.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-10 py-3 text-sm font-medium uppercase tracking-widest transition-colors"
                        style={{ color: '#ffffff' }}
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-10 py-3 text-sm font-medium uppercase tracking-widest transition-colors"
                        style={{ color: location.pathname === sub.path ? '#c9a84c' : 'rgba(255,255,255,0.75)' }}
                      >
                        {sub.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ) : item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="block px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  color: location.pathname === item.path ? '#c9a84c' : '#ffffff',
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  )
}
