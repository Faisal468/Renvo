import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { NAV_ITEMS } from './shared'
import Logo from '../assets/new logoo.jpeg'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMobileDropdownOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden lg:block bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-slate-900" style={{ minHeight: 120 }}>
          <Link to="/" className="flex items-center gap-4">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 52, height: 52, background: '#dde5ec', borderRadius: 8 }}
            >
              <img src={Logo} alt="Renovvo Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-display font-semibold" style={{ fontSize: '1.5rem', lineHeight: 1.05, letterSpacing: '0.14em' }}>
                RENOVVO
              </div>
              <div className="font-display uppercase" style={{ fontSize: '0.72rem', letterSpacing: '0.36em', color: '#55606b', marginTop: 4 }}>
                DESIGN+SHOP+BUILD
              </div>
            </div>
          </Link>

          <Link
            to="/contact"
            className="font-semibold uppercase"
            style={{
              background: '#dcff4b',
              color: '#071830',
              padding: '1rem 2rem',
              borderRadius: 8,
              letterSpacing: '0.14em',
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 16px 28px rgba(0,0,0,0.08)',
            }}
          >
            Get A Free Estimate
          </Link>

          <div className="flex flex-col items-end gap-3 text-right">
            <a href="tel:2812229491" className="inline-flex items-center gap-3 font-medium" style={{ color: '#071830', textDecoration: 'none', fontSize: '1rem' }}>
              <span style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#ffffff', color: '#ffffff', fontSize: '1.1rem' }}>📞</span>
              <span style={{ letterSpacing: '0.03em' }}>(281) 222-9491</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1Bd3eha5uH/?mibextid=wwXIfr"
                aria-label="Facebook"
                style={{ width: 28, height: 28, borderRadius: '50%', background: '#375892', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, textDecoration: 'none' }}
              >
                f
              </a>
              <a
                href="https://www.instagram.com/rewisebuilders?igsh=MWEwOGVneHU2N213OA=="
                aria-label="Instagram"
                style={{ width: 28, height: 28, borderRadius: '50%', background: '#de4b91', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, textDecoration: 'none' }}
              >
                i
              </a>
              <a
                href="https://www.tiktok.com/@rewisebuilders"
                aria-label="TikTok"
                style={{ width: 28, height: 28, borderRadius: '50%', background: '#000000', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, textDecoration: 'none' }}
              >
                t
              </a>
              <a
                href="https://www.google.com"
                aria-label="Google"
                style={{ width: 28, height: 28, borderRadius: '50%', background: '#db4437', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none' }}
              >
                G
              </a>
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

                        if ('external' in sub && sub.external) {
                          return (
                            <a
                              key={sub.path}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 transition-colors"
                              style={{
                                padding: '0.6rem 1.25rem',
                                borderBottom: i < item.dropdown.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                color: '#ffffff',
                              }}
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
                            style={{
                              padding: '0.6rem 1.25rem',
                              borderBottom: i < item.dropdown.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                            }}
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
            <Link
              to="/contact"
              className="font-semibold uppercase"
              style={{
                background: '#dffe2f',
                color: '#071830',
                padding: '0.6rem 1rem',
                borderRadius: 999,
                letterSpacing: '0.12em',
                fontSize: '0.75rem',
                textDecoration: 'none',
              }}
            >
              Quote
            </Link>
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
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? (mobileDropdownOpen ? 760 : 480) : 0,
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
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{
                        transition: 'transform 0.2s',
                        transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      <path d="M1.5 3.5L5 7L8.5 3.5" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: mobileDropdownOpen ? 260 : 0, background: 'rgba(255,255,255,0.03)' }}
                >
                  {item.dropdown.map(sub =>
                    'external' in sub && sub.external ? (
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
                  )}
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
