import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'

const styles = [
  {
    name: 'Shaker White',
    finish: 'Semi-gloss white',
    material: 'Solid maple',
    desc: 'The most versatile cabinet style in America. Clean lines and recessed panels work in traditional, transitional, and contemporary kitchens alike.',
    img: IMG.cabinets1,
  },
  {
    name: 'Modern Matte Black',
    finish: 'Flat matte',
    material: 'MDF with wood veneer',
    desc: 'Bold and dramatic. Matte black cabinetry creates stunning contrast, especially paired with light countertops and brass hardware.',
    img: IMG.kitchen2,
  },
  {
    name: 'Natural Walnut',
    finish: 'Satin oil',
    material: 'American black walnut',
    desc: 'Warm, rich grain patterns make every run of walnut cabinetry completely unique. The premium choice for luxury kitchen renovations.',
    img: IMG.cabinets2,
  },
  {
    name: 'Two-Tone Finish',
    finish: 'Custom combination',
    material: 'Solid wood + MDF',
    desc: 'Mix upper and lower cabinet colors for a modern, curated look. Navy and white, sage and cream, or any custom pairing we design together.',
    img: IMG.kitchen1,
  },
  {
    name: 'Slab Front Modern',
    finish: 'Lacquer or veneer',
    material: 'Plywood box + MDF doors',
    desc: 'No rails, no stiles, no visible frames. Pure flat-front doors deliver the clean, handleless aesthetic of European kitchen design.',
    img: IMG.cabinets3,
  },
  {
    name: 'Raised Panel Traditional',
    finish: 'Painted or stained',
    material: 'Solid cherry or oak',
    desc: 'Classic raised-panel construction for a timeless, formal look. Perfect for colonial, farmhouse, and traditionally styled homes.',
    img: IMG.cabinets4,
  },
]

const faqs = [
  { q: 'How long does a cabinet installation take?', a: 'Typical kitchen cabinet installations take 3–5 days once all materials are on-site. Larger or custom projects may run 7–10 days.' },
  { q: 'Do you offer semi-custom vs fully custom?', a: 'Yes — we offer stock, semi-custom, and fully custom cabinetry to fit every budget. We will recommend the best option after seeing your space.' },
  { q: 'Can you match existing cabinets?', a: 'In most cases yes — especially with painted finishes. We will bring samples to your home to ensure an exact match.' },
  { q: 'What is included in cabinet installation?', a: 'Everything: demo of existing cabinets, delivery coordination, installation, hardware mounting, and final alignment and adjustment.' },
]

export default function Cabinets() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [selected, setSelected] = useState(0)

  return (
    <>
      <PageHero
        image={IMG.cabinets1}
        label="Cabinets"
        title="Custom Cabinet Solutions for Every Style"
        subtitle="From shaker white to modern slab, we source and install premium cabinetry that defines your kitchen."
      />

      {/* Intro */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-5">Why ReWise Cabinets</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                Cabinetry That Looks as Good as It Functions
              </h2>
              <div className="gold-line mb-7" />
              <p className="text-gray-500 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                Our cabinet division partners with the top US manufacturers to deliver fully custom and semi-custom cabinetry for kitchens, bathrooms, laundry rooms, and beyond. Every cabinet system is designed in 3D before a single piece is ordered.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Free 3D Design', 'Lifetime Warranty on Hardware', 'Soft-Close Standard', 'In-House Installation', 'Custom Sizes Available', 'All Wood Interiors'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                    <span style={{ color: '#c9a84c' }}>✦</span> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden" style={{ height: 460 }}>
              <img src={styles[selected].img} alt={styles[selected].name} className="w-full h-full object-cover transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Style selector */}
      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Cabinet Styles</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Find Your Style
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {styles.map((style, i) => (
              <div
                key={style.name}
                className="cursor-pointer group transition-all"
                style={{
                  border: selected === i ? '2px solid #0b2545' : '2px solid transparent',
                  outline: selected === i ? 'none' : '1px solid rgba(11,37,69,0.1)',
                }}
                onClick={() => setSelected(i)}
              >
                <div className="overflow-hidden" style={{ height: 220 }}>
                  <img src={style.img} alt={style.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5" style={{ background: selected === i ? '#0b2545' : '#fff' }}>
                  <h3 className="font-display font-semibold mb-1" style={{ color: selected === i ? '#c9a84c' : '#0b2545', fontSize: '1.0625rem' }}>
                    {style.name}
                  </h3>
                  <div className="text-xs tracking-wide mb-2" style={{ color: selected === i ? 'rgba(255,255,255,0.6)' : '#c9a84c' }}>
                    {style.finish} · {style.material}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: selected === i ? 'rgba(255,255,255,0.7)' : '#6b7280' }}>
                    {style.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">FAQ</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Common Cabinet Questions
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ border: '1px solid rgba(11,37,69,0.1)', background: '#fff' }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold" style={{ color: '#0b2545' }}>{faq.q}</span>
                  <span style={{ color: '#c9a84c', fontSize: '1.25rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {activeFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: activeFaq === i ? 200 : 0 }}
                >
                  <p className="px-6 pb-6 text-gray-500" style={{ lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600 }}>
            Ready to Design Your Dream Cabinets?
          </h2>
          <p className="mb-7" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.7 }}>
            Book a free in-home measurement and design consultation today.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Design Consult</Link>
        </div>
      </section>
    </>
  )
}
