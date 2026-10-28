import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from './PageHero'
import { SERVICE_LINKS } from './shared'

export interface ServiceLayoutProps {
  slug: string
  label: string
  title: string
  subtitle: string
  desc: string
  img: string
  heroImages?: string[]
  heroOverlay?: string
  gallery: string[]
  features: string[]
  fullGallery?: string[]
  cta?: { title: string; text: string }
}

export default function ServiceLayout({ slug, label, title, subtitle, desc, img, heroImages, heroOverlay, gallery, features, fullGallery, cta }: ServiceLayoutProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const fullGalleryImages = fullGallery ?? []

  return (
    <>
      <PageHero
        image={heroImages && heroImages.length > 0 ? heroImages : img}
        label={label}
        title={title}
        subtitle={subtitle}
        overlay={heroOverlay}
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-1">
              <div className="relative">
                <div className="overflow-hidden" style={{ height: 420 }}>
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  {gallery.map((g, i) => (
                    <div key={i} className="overflow-hidden" style={{ height: 140 }}>
                      <img src={g} alt={`${label} example ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-2">
              <div className="section-label mb-4">{label}</div>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                {title}
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-500 mb-7" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                {desc}
              </p>
              <div className="grid grid-cols-2 gap-y-3 mb-8">
                {features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                    <span style={{ color: '#c9a84c', fontSize: '0.75rem' }}>✦</span>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full project gallery */}
      {fullGalleryImages.length > 0 && (
        <section className="py-20" style={{ background: '#f8faff' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="section-label mb-4 justify-center flex">Our Work</div>
              <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', color: '#0b2545', fontWeight: 600 }}>
                {label} Projects
              </h2>
              <div className="gold-line mx-auto" />
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
              {fullGalleryImages.map((g, i) => (
                <div
                  key={i}
                  className="portfolio-item break-inside-avoid mb-3 cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={g} alt={`${label} project ${i + 1}`} className="w-full h-auto object-cover" />
                  <div className="portfolio-overlay" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(7,24,48,0.95)' }}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-10 right-0 text-white text-2xl opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={fullGalleryImages[lightboxIndex]}
              alt={`${label} project ${lightboxIndex + 1}`}
              className="w-full object-contain mx-auto"
              style={{ maxHeight: '80vh' }}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + fullGalleryImages.length) % fullGalleryImages.length)}
                className="text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                ← Prev
              </button>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {lightboxIndex + 1} / {fullGalleryImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % fullGalleryImages.length)}
                className="text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Other services */}
      <section className="py-16" style={{ background: '#f7f6f3' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">Explore More</div>
          <h3 className="font-display mb-8" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#0b2545', fontWeight: 600 }}>
            Other Services
          </h3>
          <div className="flex flex-wrap gap-3">
            {SERVICE_LINKS.filter(s => s.path !== `/services/${slug}`).map(s => (
              <Link
                key={s.path}
                to={s.path}
                className="px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors"
                style={{ border: '1px solid #0b2545', color: '#0b2545' }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600 }}>
            {cta?.title ?? 'Ready to Get Started?'}
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            {cta?.text ?? 'Contact us today for a free, no-obligation consultation and estimate. We respond within 24 hours.'}
          </p>
          <Link to="/contact" className="btn-primary">Schedule a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
