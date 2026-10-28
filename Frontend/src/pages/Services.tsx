import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'

const services = [
  {
    title: 'Kitchen Remodeling',
    desc: 'A kitchen remodel is one of the highest-return investments you can make in your home. We handle everything from layout redesign and custom cabinetry to countertop installation, appliance integration, and finishing details that turn an ordinary kitchen into the heart of your home.',
    img: IMG.kitchen1,
    gallery: [IMG.kitchen2, IMG.kitchen3],
    features: ['Custom cabinet design', 'Quartz & granite countertops', 'Island additions', 'Lighting design', 'Tile backsplash', 'Appliance installation'],
  },
  {
    title: 'Bathroom Renovation',
    desc: 'Transform your bathroom into a personal sanctuary. Our team specializes in master bath remodels, guest bath updates, and spa-inspired designs that blend luxury with function — complete with waterproofing, tile work, and premium fixtures.',
    img: IMG.bathroom1,
    gallery: [IMG.bathroom2, IMG.bathroom3],
    features: ['Walk-in shower conversions', 'Soaking tub installation', 'Heated tile floors', 'Custom vanities', 'Steam showers', 'Smart fixtures'],
  },
  {
    title: 'Home Additions',
    desc: 'Need more space without the cost of moving? Our home addition team designs and builds seamless expansions that feel like they were always part of the original structure — properly permitted and structurally engineered.',
    img: IMG.addition,
    gallery: [IMG.exterior1, IMG.living1],
    features: ['Room additions', 'Second-story additions', 'Garage conversions', 'Sunroom builds', 'ADU construction', 'Foundation work'],
  },
  {
    title: 'Flooring & Tile',
    desc: 'The right flooring sets the tone for every room. We install hardwood, luxury vinyl plank, ceramic and porcelain tile, natural stone, and carpet — with expert prep work that ensures your floors last decades.',
    img: IMG.flooring,
    gallery: [IMG.living2, IMG.kitchen1],
    features: ['Hardwood installation', 'Luxury vinyl plank', 'Porcelain & ceramic tile', 'Natural stone', 'Heated floor systems', 'Subfloor repair'],
  },
  {
    title: 'Living Space Remodeling',
    desc: 'Open up your home with thoughtful living room and common area renovations. We remove walls, update trim and millwork, install built-in shelving, and redesign flow so your home works the way you live.',
    img: IMG.living1,
    gallery: [IMG.living2, IMG.living3],
    features: ['Open-concept conversions', 'Built-in shelving & bars', 'Fireplace surround', 'Crown molding & trim', 'Painting & finishes', 'Lighting upgrades'],
  },
  {
    title: 'Exterior Upgrades',
    desc: 'Make a lasting first impression with a stunning exterior renovation. From siding replacement and window installation to full front-elevation redesigns, we boost your home\'s curb appeal and protect its value.',
    img: IMG.exterior2,
    gallery: [IMG.exterior1, IMG.exterior3],
    features: ['Siding replacement', 'Window & door installation', 'Deck & patio builds', 'Front entry redesign', 'Roofing', 'Exterior painting'],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        image={IMG.kitchen1}
        label="Our Services"
        title="Complete Home Remodeling Solutions"
        subtitle="Expert craftsmanship in every category — from kitchens and bathrooms to full-home transformations."
      />

      {/* Services list */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
              >
                {/* Image side — alternates */}
                <div className={`order-1 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="overflow-hidden" style={{ height: 420 }}>
                      <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    {/* Small gallery pair */}
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      {service.gallery.map((g, i) => (
                        <div key={i} className="overflow-hidden" style={{ height: 140 }}>
                          <img src={g} alt={`${service.title} example ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className={`order-2 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="section-label mb-4">Service {String(idx + 1).padStart(2, '0')}</div>
                  <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                    {service.title}
                  </h2>
                  <div className="gold-line mb-6" />
                  <p className="text-gray-500 mb-7" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-y-3 mb-8">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                        <span style={{ color: '#c9a84c', fontSize: '0.75rem' }}>✦</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600 }}>
            Ready to Get Started?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Contact us today for a free, no-obligation consultation and estimate. We respond within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary">Schedule a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
