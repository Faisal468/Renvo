import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'

export default function Shop() {
  return (
    <>
      <PageHero
        image={IMG.kitchen1}
        label="Shop"
        title="Explore Our Cabinets and Vendor Partners"
        subtitle="Browse custom cabinetry and trusted manufacturers for every renovation project."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div style={{ background: '#f8faff', padding: '2.5rem', borderRadius: 24 }}>
            <h2 className="font-display mb-4" style={{ color: '#0b2545', fontSize: '1.75rem', fontWeight: 600 }}>
              Cabinets
            </h2>
            <p className="text-gray-500 mb-6" style={{ lineHeight: 1.8 }}>
              Our full-service cabinet shop delivers custom, semi-custom, and stock cabinetry for kitchens, baths, laundry rooms, and more. Every project is designed with premium materials, precision installation, and finishes that match your style.
            </p>
            <Link to="/cabinets" className="btn-primary">
              View Cabinets
            </Link>
          </div>

          <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 24, border: '1px solid rgba(11,37,69,0.08)' }}>
            <h2 className="font-display mb-4" style={{ color: '#0b2545', fontSize: '1.75rem', fontWeight: 600 }}>
              Partner Vendors
            </h2>
            <p className="text-gray-500 mb-6" style={{ lineHeight: 1.8 }}>
              We work with leading manufacturers and suppliers across cabinetry, countertops, plumbing, flooring, windows, and exterior finishes. Our vendor network unlocks premium products and trusted warranties.
            </p>
            <Link to="/vendors" className="btn-primary">
              View Vendors
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
