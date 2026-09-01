import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG, SERVICE_LINKS, sortImagesByFilename } from '../components/shared'

// Loads every photo from every src/assets/<service> folder, grouped by folder name
const allImageModules = import.meta.glob('../assets/*/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>

const categories = SERVICE_LINKS.map(s => {
  const slug = s.path.split('/').pop()!
  const modules = Object.fromEntries(
    Object.entries(allImageModules).filter(([path]) => path.includes(`/assets/${slug}/`))
  )
  return { slug, label: s.label, images: sortImagesByFilename(modules) }
}).filter(c => c.images.length > 0)

export default function Portfolio() {
  const [viewAllSlug, setViewAllSlug] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<{ slug: string; index: number } | null>(null)

  const viewAllCategory = categories.find(c => c.slug === viewAllSlug) ?? null
  const lightboxCategory = lightbox ? categories.find(c => c.slug === lightbox.slug) ?? null : null

  return (
    <>
      <PageHero
        image={IMG.portfolio_hero}
        label="Portfolio"
        title="Our Work Speaks for Itself"
        subtitle="Browse hundreds of completed projects across the United States — each one a story of transformation."
      />

      {/* Stats row */}
      <div style={{ background: '#0b2545', padding: '2rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: '500+', l: 'Projects' },
              { v: '12', l: 'States Served' },
              { v: '98%', l: 'Satisfaction' },
              { v: '15+', l: 'Years' },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display font-bold" style={{ color: '#c9a84c', fontSize: '2rem' }}>{s.v}</div>
                <div className="text-white text-xs tracking-widest uppercase mt-1 opacity-70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category rows */}
      <section className="py-16" style={{ background: '#f8faff' }}>
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {categories.map(cat => (
            <div key={cat.slug}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold tracking-wide uppercase" style={{ color: '#0b2545', fontSize: '1.05rem' }}>
                  {cat.label}
                </h2>
                <button
                  onClick={() => setViewAllSlug(cat.slug)}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors flex-shrink-0"
                  style={{ background: '#0b2545', color: '#ffffff', padding: '0.5rem 1rem' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#c9a84c')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#0b2545')}
                >
                  View All ({cat.images.length})
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {cat.images.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="portfolio-item cursor-pointer"
                    style={{ aspectRatio: '4/3' }}
                    onClick={() => setLightbox({ slug: cat.slug, index: i })}
                  >
                    <img src={img} alt={`${cat.label} project ${i + 1}`} className="w-full h-full object-cover" />
                    <div className="portfolio-overlay" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Start Your Project</div>
          <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>
            Want Results Like These?
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-gray-500 mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Every project in this portfolio started with a single conversation. Let us make your home the next one.
          </p>
          <Link to="/contact" className="btn-primary">Get Your Free Estimate</Link>
        </div>
      </section>

      {/* View All modal */}
      {viewAllCategory && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ background: '#f8faff' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#0b2545' }}>
                {viewAllCategory.label} — All Projects
              </h2>
              <button
                onClick={() => setViewAllSlug(null)}
                className="text-2xl transition-opacity opacity-60 hover:opacity-100"
                style={{ color: '#0b2545' }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {viewAllCategory.images.map((img, i) => (
                <div
                  key={i}
                  className="portfolio-item cursor-pointer"
                  onClick={() => setLightbox({ slug: viewAllCategory.slug, index: i })}
                >
                  <img src={img} alt={`${viewAllCategory.label} project ${i + 1}`} className="w-full h-auto object-cover" />
                  <div className="portfolio-overlay" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && lightboxCategory && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: 'rgba(7,24,48,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-2xl opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={lightboxCategory.images[lightbox.index]}
              alt={`${lightboxCategory.label} project ${lightbox.index + 1}`}
              className="w-full object-contain mx-auto"
              style={{ maxHeight: '80vh' }}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setLightbox({ slug: lightbox.slug, index: (lightbox.index - 1 + lightboxCategory.images.length) % lightboxCategory.images.length })}
                className="text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                ← Prev
              </button>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {lightbox.index + 1} / {lightboxCategory.images.length}
              </span>
              <button
                onClick={() => setLightbox({ slug: lightbox.slug, index: (lightbox.index + 1) % lightboxCategory.images.length })}
                className="text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
