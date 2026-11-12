import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from './PageHero'
import { sortImagesByFilename } from './shared'
import heroImage from '../assets/kitchen/29.1.jpeg'

// Photos for each level live in src/assets/shop/<slug>/Level <n>/ (or level-<n>/).
// Optional sub-folders inside a level (e.g. "Framed", "Frameless") become sub-sections.
const allImageModules = import.meta.glob('../assets/shop/*/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', { eager: true, import: 'default' }) as Record<string, string>

// url -> display name taken from the image filename (e.g. "Ritzy Shaker Cyan")
const imageNames: Record<string, string> = Object.fromEntries(
  Object.entries(allImageModules).map(([path, url]) => {
    const base = decodeURIComponent(path.split('/').pop() ?? '')
      .replace(/\.[^.]+$/, '')
      .replace(/_+/g, ' ')
      .replace(/(?<=\w)-+(?=\w)/g, ' ')
    return [url, /^[\d._\s-]*$/.test(base) ? '' : base]
  })
)

interface ImageGroup {
  name: string // sub-folder name, '' when images sit directly in the level folder
  images: string[]
}

function levelGroups(slug: string, level: number, folder?: string): ImageGroup[] {
  const dir = folder ? folder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : `level[- ]${level}`
  const re = new RegExp(`/shop/${slug}/${dir}/(.+)$`, 'i')
  const byGroup = new Map<string, Record<string, string>>()
  for (const [path, url] of Object.entries(allImageModules)) {
    const m = decodeURIComponent(path).match(re)
    if (!m) continue
    const parts = m[1].split('/')
    const group = parts.length > 1 ? parts[0] : ''
    byGroup.set(group, { ...(byGroup.get(group) ?? {}), [path]: url })
  }
  return [...byGroup.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, modules]) => ({ name, images: sortImagesByFilename(modules) }))
}

interface ShopLevelsProps {
  slug: string
  label: string
  title: string
  subtitle: string
  levelCount: number
  // Shape of each image tile (CSS aspect-ratio), e.g. '4/5' for doors, '1/1' for square swatches
  tileAspect?: string
  // Max width of the level sections (Tailwind class); wider = bigger tiles with the same 5 per row
  containerWidth?: string
  // Optional: use a differently named folder for a level, e.g. { 1: 'Mohawk' }. The name is also shown in the level heading.
  levelFolders?: Record<number, string>
}

function ImageName({ name }: { name: string }) {
  return (
    <div
      className="text-center font-semibold uppercase tracking-wider"
      style={{ color: '#0b2545', fontSize: '0.75rem', marginTop: '0.6rem' }}
    >
      {name}
    </div>
  )
}

export default function ShopLevels({ slug, label, title, subtitle, levelCount, levelFolders, tileAspect = '4/5', containerWidth = 'max-w-7xl' }: ShopLevelsProps) {
  const [viewAll, setViewAll] = useState<{ heading: string; images: string[] } | null>(null)
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const levels = Array.from({ length: levelCount }, (_, i) => ({ n: i + 1, groups: levelGroups(slug, i + 1, levelFolders?.[i + 1]), folder: levelFolders?.[i + 1] }))

  return (
    <>
      <PageHero image={heroImage} label={label} title={title} subtitle={subtitle} />

      {levels.map(({ n, groups, folder }, idx) => (
        <section key={n} className="py-16" style={{ background: idx % 2 === 0 ? '#f8faff' : '#ffffff' }}>
          <div className={`${containerWidth} mx-auto px-6`}>
            <div className="section-label mb-4">{label}</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Level {n}{folder ? ` — ${folder}` : ''}
            </h2>
            <div className="gold-line mb-8" />

            <div className="space-y-10">
              {groups.map(({ name, images }) => {
                const heading = name ? `Level ${n} — ${name}` : `Level ${n}`
                return (
                  <div key={name}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-bold tracking-wide uppercase" style={{ color: '#0b2545', fontSize: '1.05rem' }}>
                        {name}
                      </h3>
                      <button
                        onClick={() => setViewAll({ heading, images })}
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors flex-shrink-0 ml-auto"
                        style={{ background: '#0b2545', color: '#ffffff', padding: '0.5rem 1rem' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#c9a84c')}
                        onMouseLeave={e => (e.currentTarget.style.background = '#0b2545')}
                      >
                        View All ({images.length})
                      </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {images.slice(0, 5).map((img, i) => (
                        <div key={i} className="cursor-pointer" onClick={() => setLightbox({ images, index: i })}>
                          <div className="portfolio-item" style={{ aspectRatio: tileAspect, background: '#ffffff' }}>
                            <img src={img} alt={imageNames[img] || `${heading} ${i + 1}`} className="w-full h-full object-contain" />
                            <div className="portfolio-overlay" />
                          </div>
                          {imageNames[img] && <ImageName name={imageNames[img]} />}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
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

      {viewAll && (
        <div className="fixed inset-0 z-50 overflow-y-auto" style={{ background: '#f8faff' }}>
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#0b2545' }}>
                {title} {viewAll.heading} — All
              </h2>
              <button
                onClick={() => setViewAll(null)}
                className="text-2xl transition-opacity opacity-60 hover:opacity-100"
                style={{ color: '#0b2545' }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {viewAll.images.map((img, i) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={() => setLightbox({ images: viewAll.images, index: i })}
                >
                  <div className="portfolio-item" style={{ aspectRatio: tileAspect, background: '#ffffff' }}>
                    <img src={img} alt={imageNames[img] || `${viewAll.heading} ${i + 1}`} className="w-full h-full object-contain" />
                    <div className="portfolio-overlay" />
                  </div>
                  {imageNames[img] && <ImageName name={imageNames[img]} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
              <span className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {imageNames[lightbox.images[lightbox.index]] && <span className="block font-semibold uppercase tracking-wider">{imageNames[lightbox.images[lightbox.index]]}</span>}
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{lightbox.index + 1} / {lightbox.images.length}</span>
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
