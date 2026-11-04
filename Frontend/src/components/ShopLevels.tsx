import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from './PageHero'
import { sortImagesByFilename } from './shared'
import heroImage from '../assets/kitchen/29.1.jpeg'

// Photos for each level live in src/assets/shop/<slug>/level-<n>/ — drop images in and they appear.
const allImageModules = import.meta.glob('../assets/shop/*/level-*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', { eager: true, import: 'default' }) as Record<string, string>

function levelImages(slug: string, level: number) {
  const modules = Object.fromEntries(
    Object.entries(allImageModules).filter(([path]) => path.includes(`/shop/${slug}/level-${level}/`))
  )
  return sortImagesByFilename(modules)
}

interface ShopLevelsProps {
  slug: string
  label: string
  title: string
  subtitle: string
  levelCount: number
}

export default function ShopLevels({ slug, label, title, subtitle, levelCount }: ShopLevelsProps) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const levels = Array.from({ length: levelCount }, (_, i) => ({ n: i + 1, images: levelImages(slug, i + 1) }))

  return (
    <>
      <PageHero image={heroImage} label={label} title={title} subtitle={subtitle} />

      {levels.map(({ n, images }, idx) => (
        <section key={n} className="py-16" style={{ background: idx % 2 === 0 ? '#f8faff' : '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="section-label mb-4">{label}</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Level {n}
            </h2>
            <div className="gold-line mb-8" />

            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.slice(0, 6).map((img, i) => (
                  <div
                    key={i}
                    className="portfolio-item cursor-pointer"
                    style={{ aspectRatio: '4/3' }}
                    onClick={() => setLightbox({ images, index: i })}
                  >
                    <img src={img} alt={`${label} Level ${n} ${i + 1}`} className="w-full h-full object-cover" />
                    <div className="portfolio-overlay" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="py-20" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display mb-5 text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600 }}>
            Ready to Choose Your Level?
          </h2>
          <div className="gold-line mx-auto mb-8" />
          <Link to="/contact" className="btn-primary">Get Your Free Estimate</Link>
        </div>
      </section>

      {lightbox && (
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
              src={lightbox.images[lightbox.index]}
              alt={`${label} ${lightbox.index + 1}`}
              className="w-full object-contain mx-auto"
              style={{ maxHeight: '80vh' }}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length })}
                className="text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                ← Prev
              </button>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {lightbox.index + 1} / {lightbox.images.length}
              </span>
              <button
                onClick={() => setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length })}
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
