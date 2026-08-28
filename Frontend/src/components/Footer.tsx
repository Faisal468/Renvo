import type { ReactNode } from 'react'
import { Link } from 'react-router'
import Logo from '../assets/image-removebg-preview.png';

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
      <path d="M448 209.2c-16.3 7.2-33.8 12-52.2 13.4v90.3c0 48.7-39.5 88.2-88.2 88.2-45.9 0-83.7-34.8-87.7-79.7-1.6.2-3.2.3-4.9.3-25.9 0-46.8-21-46.8-46.8s21-46.8 46.8-46.8c10.8 0 20.8 3.7 28.7 9.9 12.4 9.8 27.9 15.6 44.5 15.6 8.1 0 15.8-1.1 23.1-3.2v-79.5c-23.5-7.6-48.4-11.4-74.2-11.4-33.9 0-66.3 8.9-94.7 24.4-39.3 20.8-70.3 53.8-87.2 93.5-16.5 38.8-18.4 81.9-5 122.5 13.3 40.7 40.8 73.3 79.3 94.7 29.5 16.5 63 25.6 97.7 25.6 26.4 0 52.6-5.9 76.8-17.4 36.4-18.8 64.7-51 80-89.8 15.7-39.7 18.2-83.6 7.2-125.2V209.2z" />
      <path d="M269.5 119.3c-16.4-8.2-36.9-13.1-58.8-13.1h-.5v165.4c0 21.6 11.7 35.5 25.8 35.5 15.5 0 26.8-12.3 26.8-31.5V166.4c10.9 3.6 22.7 5.5 34.8 5.5 2.3 0 4.7-.1 7-.3v-52.3c-12.2 1.2-24.2-.6-36.4-5.0z" />
    </svg>
  ),
  "Google profile": (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.2a8.2 8.2 0 118.2-8.2 8.2 8.2 0 01-8.2 8.2zm.6-13.8h-1.2v1.2H8.7v1.2h2.7v3.9h1.2V8.6h2.7V7.4h-2.7V6.4z" />
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
            <Link to="/" className="inline-flex items-center mb-5" style={{ background: '#f4f5f6', borderRadius: 8, padding: '10px 16px' }}>
              <img src={Logo} alt="Renovvo Logo" style={{ height: 40, width: 'auto' }} />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Premium remodeling services across the United States. Licensed, insured, and dedicated to excellence since 2009.
            </p>
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
              {['Kitchen Remodeling', 'Bathroom Renovation', 'Home Additions', 'Flooring & Tile', 'Cabinet Installation', 'New Construction'].map(s => (
                <Link
                  key={s}
                  to="/services"
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
                { label: 'Gallery', to: '/portfolio' },
                { label: 'About Us', to: '/about' },
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
                { label: '281-222-9491', sub: 'Call or Text' },
                { label: 'hello@rewisebuilders.com', sub: 'Email Us' },
                { label: 'Mon–Sat 9am–6pm EST', sub: 'Business Hours' },
              ].map(c => (
                <div key={c.label}>
                  <div className="text-sm font-medium text-white">{c.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center py-6 gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Renovvo Builders. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Licensing'].map(l => (
              <Link
                key={l}
                to="/"
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
