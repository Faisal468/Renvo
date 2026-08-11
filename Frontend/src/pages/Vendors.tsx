import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'

const vendors = [
  { name: 'MSI Surfaces', url: 'https://www.msisurfaces.com/stile/porcelain-slabs/', category: 'Tile & Stone', desc: 'Porcelain slabs and large-format surfaces.', logo: 'MS' },
  { name: 'Earthstone (12mm Porc)', url: 'https://earthstonetexas.com/collections/12mm-porc', category: 'Tile & Stone', desc: '12mm porcelain collections.', logo: 'ET' },
  { name: 'Atlas Plan', url: 'https://www.atlasplan.com/en/', category: 'Materials', desc: 'Architectural surface solutions and porcelain slabs.', logo: 'AP' },
  { name: 'Earthstone (Quartz Slab)', url: 'https://earthstonetexas.com/collections/quartz-slab', category: 'Countertops', desc: 'Quartz slab collections.', logo: 'ET' },
  { name: 'BPI Prestige (Countertops)', url: 'https://bpiprestige.com/collections/countertops', category: 'Countertops', desc: 'Quartz & surface collections.', logo: 'BP' },
  { name: 'FirmFit Floor', url: 'https://www.firmfitfloor.com/collections/', category: 'Flooring', desc: 'Rigid core and LVT collections.', logo: 'FF' },
  { name: 'Bruce (Rigid Core)', url: 'https://www.bruce.com/en-us/products/rigid-core.html?size=24', category: 'Flooring', desc: 'Rigid core flooring products.', logo: 'BR' },
  { name: 'BPI Prestige (Luxury Vinyl)', url: 'https://bpiprestige.com/collections/luxury-vinyl', category: 'Flooring', desc: 'Luxury vinyl collections.', logo: 'BP' },
  { name: 'NovoCore', url: 'https://www.novocorefloor.com/', category: 'Flooring', desc: 'Luxury vinyl and rigid core flooring.', logo: 'NC' },
  { name: 'AHF' , url: 'https://www.ahfcontract.com/en-us/products.html?size=24', category: 'Flooring', desc: 'Luxury vinyl and rigid core flooring.', logo: 'AH' },
  { name: 'BPI Prestige', url: 'https://bpiprestige.com/collections/carpet', category: 'Carpet', desc: 'Laminate flooring collections.', logo: 'BP' },
  { name: 'KeyStone', url: 'https://www.keystonetile.com/', category: 'Tile & Stone', desc: 'Tile and stone collections.', logo: 'KS' },




]

const benefits = [
  { title: 'Material Discounts', desc: 'Our vendor relationships pass direct savings to you — often 15–30% below retail pricing.' },
  { title: 'Verified Quality', desc: 'Every product we specify has been vetted by our team on real projects in real homes.' },
  { title: 'Warranty Backed', desc: 'All partner products carry manufacturer warranties. We track and honor every one.' },
  { title: 'On-Time Delivery', desc: 'Coordinated directly with our vendors so materials arrive before your project starts — no delays.' },
]

export default function Vendors() {
  return (
    <>
      <PageHero
        image={IMG.kitchen1}
        label="Partner Vendors"
        title="We Work With the Best Brands in the Industry"
        subtitle="Our vendor partnerships give you access to premium materials at competitive prices, backed by full manufacturer warranties."
      />

      {/* Vendor grid */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Trusted Partners</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>
              Our Preferred Vendor Network
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Every brand in our network was chosen for quality, reliability, and the warranty protection they provide our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vendors.map(vendor => (
              <a
                key={vendor.name}
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={vendor.name}
                className="testimonial-card p-7 block"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                    style={{ width: 52, height: 52, background: '#eaf2ff', color: '#0b2545', letterSpacing: '0.05em' }}
                  >
                    {vendor.logo}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold" style={{ color: '#0b2545', fontSize: '1.0625rem' }}>{vendor.name}</h3>
                    <div className="text-xs tracking-widest uppercase mt-0.5" style={{ color: '#c9a84c', fontWeight: 600 }}>{vendor.category}</div>
                  </div>
                </div>
                <div className="gold-line mb-4" />
                <p className="text-sm leading-relaxed text-gray-500">{vendor.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ background: '#0b2545' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div style={{ color: 'rgba(201,168,76,0.85)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
              What This Means for You
            </div>
            <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600 }}>
              The ReWise Vendor Advantage
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => (
              <div key={b.title} style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderTop: '2px solid #c9a84c' }}>
                <h3 className="font-display text-white font-semibold mb-3" style={{ fontSize: '1.1rem' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-5">Supplier Relations</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                Become a ReWise Preferred Vendor
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-500 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                We are always looking to partner with best-in-class manufacturers and suppliers. If your products meet our quality standards and you are interested in becoming part of our vendor network, we would love to hear from you.
              </p>
              <p className="text-gray-500 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                Benefits include access to our regional install teams, placement in our material specification process, and co-marketing opportunities with our client base.
              </p>
              <Link to="/contact" className="btn-primary">Submit a Vendor Inquiry</Link>
            </div>
            <div className="overflow-hidden" style={{ height: 400, background: '#e8edf2' }}>
              <img src={IMG.team} alt="ReWise team reviewing materials" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
