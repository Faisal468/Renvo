import { Link } from 'react-router'

const SECTIONS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Main',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Gallery', to: '/portfolio' },
      { label: 'Financing', to: '/finances' },
      { label: 'Partner Vendors', to: '/vendors' },
      { label: 'Windows', to: '/windows' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Design + Build Services',
    links: [
      { label: 'All Services', to: '/services' },
      { label: 'Kitchen Remodel', to: '/services/kitchen' },
      { label: 'Bathroom Remodel', to: '/services/bathroom' },
      { label: 'Room Addition', to: '/services/addition' },
      { label: 'Patio & Outdoors', to: '/services/patio' },
      { label: 'Full Home Renovation', to: '/services/full-house-renovation' },
      { label: 'New Construction', to: '/services/new-construction' },
      { label: 'Flooring', to: '/services/flooring' },
      { label: 'Roofing', to: '/services/roofing' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'Shop Overview', to: '/shop' },
      { label: 'Cabinets', to: '/shop/cabinets' },
      { label: 'Countertops', to: '/shop/countertops' },
      { label: 'Carpets', to: '/shop/carpets' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Support Center', to: '/support' },
      { label: 'Get Support', to: '/support/get-support' },
      { label: 'About Us', to: '/support/about-us' },
      { label: 'Our Process', to: '/support/our-process' },
      { label: 'Our Values', to: '/support/our-value' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
      { label: 'Sitemap', to: '/sitemap' },
    ],
  },
]

export default function Sitemap() {
  return (
    <div style={{ paddingTop: 140, paddingBottom: 80, background: '#ffffff' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-label mb-4">Site Map</div>
        <h1
          className="font-display mb-2"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.25 }}
        >
          Sitemap
        </h1>
        <p className="mb-8" style={{ color: 'rgba(11,37,69,0.5)', fontSize: '0.95rem' }}>
          Every page on the RENOVVO website, in one place.
        </p>
        <div className="gold-line mb-10" />

        <nav aria-label="Sitemap" className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {SECTIONS.map(section => (
            <div key={section.title}>
              <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="transition-colors"
                      style={{ color: '#4b5563', fontSize: '1rem' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
