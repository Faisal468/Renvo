import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'
import renflo from '../assets/vendor/flooring/FLOORING.png';
import arizonaTileLogo from '../assets/vendor/flooring/az-tile-logo.png'
import daltileLogo from '../assets/vendor/flooring/DAL_Logo_H_Black.png'
import emserLogo from '../assets/vendor/flooring/Emser.png'
import keystoneLogo from '../assets/vendor/flooring/Keystone_Logo.png'
import marazziLogo from '../assets/vendor/flooring/Marazzi.jpg'
import msiLogo from '../assets/vendor/flooring/MSI.png'
import rocaLogo from '../assets/vendor/flooring/logo.png'
import renovoSurfacesLogo from '../assets/vendor/countertops/SURFACES.png'
import daltileCountertopsLogo from '../assets/vendor/countertops/DAL_Logo_H_Black.png'
import earthstoneLogo from '../assets/vendor/countertops/Earthstone.png'
import msiCountertopsLogo from '../assets/vendor/countertops/MSI.png'
import omniSurfacesLogo from '../assets/vendor/countertops/logo-omni-final.png'

// Picks up every jpg dropped into this folder automatically — no manual imports needed.
// Not eager: each photo is only fetched once the gallery is actually opened.
const renovoFlooringModules = import.meta.glob('../assets/vendor/flooring/renovo flooring/*.jpg') as Record<string, () => Promise<{ default: string }>>

const renovoFlooringFiles = Object.keys(renovoFlooringModules)
  .sort((a, b) => a.localeCompare(b))
  .map(path => {
    const filename = path.split('/').pop() ?? ''
    return { path, label: filename.replace(/\.jpg$/i, '').replace(/^SP\d+-/, '') }
  })

const CATEGORIES = [
  'Flooring & Backsplash',
  'Countertops',
  'Doors',
  'Accessories',
  'Roofing',
] as const

type VendorCategory = typeof CATEGORIES[number]

type Vendor = { name: string; url: string; category: VendorCategory; img: string; imgBg?: string; galleryFiles?: { path: string; label: string }[] }

// TODO: replace the '#' placeholders with each vendor's real website URL
const vendors: Vendor[] = [
  { name: 'Renovo Flooring', url: '#', category: 'Flooring & Backsplash', img: renflo, galleryFiles: renovoFlooringFiles },
  { name: 'Arizona Tile', url: 'https://www.arizonatile.com/', category: 'Flooring & Backsplash', img: arizonaTileLogo, imgBg: '#0b2545' },
  { name: 'Daltile', url: 'https://www.daltile.com/tile-product-category', category: 'Flooring & Backsplash', img: daltileLogo },
  { name: 'Emser Tile', url: 'https://www.emser.com/', category: 'Flooring & Backsplash', img: emserLogo },
  { name: 'Keystone Tile', url: 'https://www.keystonetile.com/', category: 'Flooring & Backsplash', img: keystoneLogo },
  { name: 'Marazzi', url: 'https://www.marazziusa.com ', category: 'Flooring & Backsplash', img: marazziLogo },
  { name: 'MSI Surfaces', url: 'https://www.msisurfaces.com', category: 'Flooring & Backsplash', img: msiLogo },
  { name: 'Roca', url: 'https://rocatileusa.com/', category: 'Flooring & Backsplash', img: rocaLogo, imgBg: '#0b2545' },

  { name: 'Renovo Surfaces', url: '#', category: 'Countertops', img: renovoSurfacesLogo },
  { name: 'Daltile', url: 'https://www.daltile.com/tile-product-category', category: 'Countertops', img: daltileCountertopsLogo },
  { name: 'Earthstone Colours', url: 'https://earthstonetexas.com/', category: 'Countertops', img: earthstoneLogo },
  { name: 'MSI Surfaces', url: 'https://www.msisurfaces.com/countertops/', category: 'Countertops', img: msiCountertopsLogo },
  { name: 'Omni Surfaces', url: 'https://omnisurfaces.com/', category: 'Countertops', img: omniSurfacesLogo },
]

const benefits = [
  { title: 'Material Discounts', desc: 'Our vendor relationships pass direct savings to you — often 15–30% below retail pricing.' },
  { title: 'Verified Quality', desc: 'Every product we specify has been vetted by our team on real projects in real homes.' },
  { title: 'Warranty Backed', desc: 'All partner products carry manufacturer warranties. We track and honor every one.' },
  { title: 'On-Time Delivery', desc: 'Coordinated directly with our vendors so materials arrive before your project starts — no delays.' },
]

export default function Vendors() {
  const [openGallery, setOpenGallery] = useState<Vendor | null>(null)
  const [galleryImages, setGalleryImages] = useState<{ src: string; label: string }[]>([])
  const [galleryLoading, setGalleryLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openVendorGallery = (vendor: Vendor) => {
    setOpenGallery(vendor)
    setActiveIndex(0)
    setGalleryImages([])
    if (!vendor.galleryFiles) return
    setGalleryLoading(true)
    Promise.all(
      vendor.galleryFiles.map(async file => ({
        label: file.label,
        src: (await renovoFlooringModules[file.path]()).default,
      }))
    ).then(resolved => {
      setGalleryImages(resolved)
      setGalleryLoading(false)
    })
  }

  const showPrev = () => setActiveIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
  const showNext = () => setActiveIndex(i => (i + 1) % galleryImages.length)

  useEffect(() => {
    if (!openGallery) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGallery(null)
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openGallery, galleryImages.length])

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

          {CATEGORIES.map(category => {
            const items = vendors.filter(v => v.category === category)
            return (
              <div key={category} className="mb-16 last:mb-0">
                <h3 className="font-display font-semibold mb-5" style={{ color: '#0b2545', fontSize: '1.375rem' }}>
                  {category}
                </h3>
                <div className="gold-line mb-8" />
                {items.length === 0 ? (
                  <p className="text-sm text-gray-400 italic">Vendors coming soon.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map(vendor => {
                      const logoBox = (
                        <div
                          className="flex items-center justify-center"
                          style={{ height: 72, background: vendor.imgBg ?? '#ffffff', border: '1px solid #eef1f6', borderRadius: 4, padding: '0.75rem 1.25rem' }}
                        >
                          <img
                            src={vendor.img}
                            alt={vendor.name}
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                          />
                        </div>
                      )

                      if (vendor.galleryFiles) {
                        return (
                          <button
                            key={vendor.name}
                            type="button"
                            aria-label={vendor.name}
                            className="testimonial-card p-7 block w-full text-left"
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                            onClick={() => openVendorGallery(vendor)}
                          >
                            {logoBox}
                          </button>
                        )
                      }

                      return (
                        <a
                          key={vendor.name}
                          href={vendor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={vendor.name}
                          className="testimonial-card p-7 block"
                          style={{ textDecoration: 'none' }}
                        >
                          {logoBox}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
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

      {openGallery && (
        <div
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(11,37,69,0.85)', zIndex: 100 }}
          onClick={() => setOpenGallery(null)}
        >
          <div
            className="w-full overflow-y-auto"
            style={{ background: '#ffffff', maxWidth: 960, maxHeight: '85vh', borderRadius: 4, padding: '2rem' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold" style={{ color: '#0b2545', fontSize: '1.375rem' }}>
                {openGallery.name}
              </h3>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setOpenGallery(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', lineHeight: 1, color: '#0b2545', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>
            <div className="gold-line mb-6" />

            {galleryLoading ? (
              <p className="text-sm text-gray-400 italic text-center py-12">Loading photos…</p>
            ) : (
              <>
                <div className="relative flex items-center justify-center" style={{ background: '#f8faff', borderRadius: 4 }}>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={showPrev}
                    className="absolute flex items-center justify-center"
                    style={{ left: 12, width: 40, height: 40, borderRadius: '50%', background: 'rgba(11,37,69,0.85)', color: '#ffffff', border: 'none', fontSize: '1.25rem', cursor: 'pointer', zIndex: 1 }}
                  >
                    ‹
                  </button>
                  <img
                    src={galleryImages[activeIndex]?.src}
                    alt={galleryImages[activeIndex]?.label}
                    style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                  />
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={showNext}
                    className="absolute flex items-center justify-center"
                    style={{ right: 12, width: 40, height: 40, borderRadius: '50%', background: 'rgba(11,37,69,0.85)', color: '#ffffff', border: 'none', fontSize: '1.25rem', cursor: 'pointer', zIndex: 1 }}
                  >
                    ›
                  </button>
                </div>

                <div className="text-center mt-4 mb-6">
                  <div className="font-display font-semibold" style={{ color: '#0b2545', fontSize: '1.0625rem' }}>{galleryImages[activeIndex]?.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{activeIndex + 1} / {galleryImages.length}</div>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {galleryImages.map((item, i) => (
                    <button
                      key={item.label}
                      type="button"
                      aria-label={item.label}
                      onClick={() => setActiveIndex(i)}
                      style={{
                        padding: 0,
                        border: i === activeIndex ? '2px solid #c9a84c' : '2px solid transparent',
                        borderRadius: 4,
                        cursor: 'pointer',
                        lineHeight: 0,
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full object-cover"
                        style={{ height: 60, borderRadius: 2, opacity: i === activeIndex ? 1 : 0.7 }}
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
