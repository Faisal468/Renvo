import type { ReactNode } from 'react'
import { Link } from 'react-router'
import Logo from '../assets/RENOVVO_white_text.png';

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

export default function Footer() {
  return (
    <footer style={{ background: '#071830' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-6">
              <img src={Logo} alt="Renovvo Logo" style={{ height: 84, width: 'auto' }} />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Premium remodeling services across the Texas. Insured and dedicated to excellence since 2010.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'f', href: 'https://www.facebook.com/share/1Bd3eha5uH/?mibextid=wwXIfr' },
                { icon: 'ig', href: 'https://www.instagram.com/rewisebuilders?igsh=MWEwOGVneHU2N213OA==' },
                { icon: 'tiktok', href: '#' },
                { icon: 'yt', href: '#' },
                { icon: "Google profile", href: "https://maps.app.goo.gl/bvKqa8xb1M86hHgB7" },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-xs font-bold cursor-pointer transition-all"
                  style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = '#c9a84c'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#071830'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  {socialIcons[icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">Services</h4>
            <div className="space-y-3">
              {[
                { label: 'Kitchen Remodeling', to: '/services/kitchen' },
                { label: 'Bathroom Remodeling', to: '/services/bathroom' },
                { label: 'Home Additions', to: '/services/addition' },
                { label: 'Patio & Outdoor', to: '/services/patio' },
                { label: 'Full Home Renovation', to: '/services/full-house-renovation' },
                { label: 'New Construction', to: '/services/new-construction' },
                { label: 'Roofing', to: '/services/roofing' },
                { label: 'windows', to: '/services/windows' },
                { label: 'Cabinets', to: 'https://renovvocabinets.com/' },
              ].map(({ label: s, to }) => (
                <Link
                  key={s}
                  to={to}
                  className="block text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">Company</h4>
            <div className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Gallery', to: '/portfolio' },

                { label: 'Partner Vendors', to: '/vendors' },
                { label: 'Financing', to: '/finances' },
                { label: 'Contact Us', to: '/contact' },
              ].map(item => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <div className="space-y-4">
              {[
                { label: '281-222-9491', sub: 'Call or Text', href: 'tel:+12812229491' },
                { label: 'support@renovvo.com', sub: 'Email Us', href: 'mailto:support@renovvo.com' },
                { label: 'Mon–Fri 9am–6pm CST, Sat 9am–12pm CST', sub: 'Business Hours' },
              ].map(c =>
                c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    <div className="text-sm font-medium text-white">{c.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{c.sub}</div>
                  </a>
                ) : (
                  <div key={c.label}>
                    <div className="text-sm font-medium text-white">{c.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{c.sub}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center py-6 gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} RENOVVO. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms of Service', to: '/terms-of-service' },
            ].map(({ label: l, to }) => (
              <Link
                key={l}
                to={to}
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
