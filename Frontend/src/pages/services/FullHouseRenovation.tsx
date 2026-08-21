import { useEffect, useState } from 'react'
import PageHero from '../../components/PageHero'
import { IMG } from '../../components/shared'

import gold from '../../assets/feat proj/golden forest.jpg';
import bayou from '../../assets/feat proj/bayou bridge.jpeg';
import cand from '../../assets/feat proj/candlewood.jpeg';
import holly from '../../assets/feat proj/hollyspring.jpeg';
import misty from '../../assets/feat proj/mistyleaf.jpeg';
import waymouth from '../../assets/feat proj/weymouth dr.jpeg';
import drive from '../../assets/feat proj/onedrive.jpeg';
import pewter from '../../assets/feat proj/pewter.jpeg';
import rock from '../../assets/feat proj/rockdril.jpeg';
import acorn from '../../assets/feat proj/acron-st.jpeg';


// Each completed project lives in its own subfolder under src/assets/full house/<project-folder>.
// To add a new project: drop its photos into a new subfolder, add one glob line below, and add one
// entry to `renovationProjects`. Because each project reads from its own dedicated folder, images
// can never mix between projects.

function loadProjectImages(glob: Record<string, string>): string[] {
  return Object.values(glob)
}

const overviewDriveImages = loadProjectImages(import.meta.glob('../../assets/full house/10423-overview-drive/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const wickershamImages = loadProjectImages(import.meta.glob('../../assets/full house/10910-wickersham/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const springLksImages = loadProjectImages(import.meta.glob('../../assets/full house/2803-spring-lks/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const pewterKnollsImages = loadProjectImages(import.meta.glob('../../assets/full house/28507-pewter-knolls/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const rockrillDriveImages = loadProjectImages(import.meta.glob('../../assets/full house/3303-rockrill-drive/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const acornStImages = loadProjectImages(import.meta.glob('../../assets/full house/5715-acorn-st/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const bayouBridgeImages = loadProjectImages(import.meta.glob('../../assets/full house/6127-bayou-bridge/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const mistyleafImages = loadProjectImages(import.meta.glob('../../assets/full house/6919-mistyleaf/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const weymouthDrImages = loadProjectImages(import.meta.glob('../../assets/full house/9103-weymouth-dr/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const candlewoodImages = loadProjectImages(import.meta.glob('../../assets/full house/candlewood/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const goldenForestImages = loadProjectImages(import.meta.glob('../../assets/full house/golden-forest/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)
const hollyspringImages = loadProjectImages(import.meta.glob('../../assets/full house/hollyspring/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>)

interface RenovationProject {
  id: string
  name: string
  coverImage: string
  images: string[]
}

// coverImage picks which photo represents the project on the grid — change the array index
// (e.g. overviewDriveImages[3]) to use a different photo as the cover. name is a plain string,
// edit it directly.
const renovationProjects: RenovationProject[] = [
   { id: 'golden-forest', name: 'Golden Forest', coverImage: gold, images: goldenForestImages },
   { id: 'mistyleaf', name: '6919 Mistyleaf', coverImage: misty, images: mistyleafImages },
   { id: 'candlewood', name: 'Candlewood', coverImage: cand, images: candlewoodImages },
   { id: 'hollyspring', name: 'Hollyspring', coverImage: holly, images: hollyspringImages },
   { id: 'bayou-bridge', name: '6127 Bayou Bridge', coverImage: bayou, images: bayouBridgeImages },
   { id: 'weymouth-dr', name: '9103 Weymouth Dr', coverImage: waymouth, images: weymouthDrImages },

  { id: 'overview-drive', name: '10423 Overview Drive', coverImage: drive, images: overviewDriveImages },
  { id: 'wickersham', name: '10910 Wickersham', coverImage: wickershamImages[0], images: wickershamImages },
  { id: 'spring-lks', name: '2803 Spring Lakes', coverImage: springLksImages[0], images: springLksImages },
  { id: 'pewter-knolls', name: '28507 Pewter Knolls', coverImage: pewter, images: pewterKnollsImages },
  { id: 'rockrill-drive', name: '3303 Rockrill Drive', coverImage: rock, images: rockrillDriveImages },
  { id: 'acorn-st', name: '5715 Acorn St', coverImage: acorn, images: acornStImages },
].filter(p => p.coverImage)

export default function FullHouseRenovation() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const activeProject = renovationProjects.find(p => p.id === openProjectId) ?? null

  const openGallery = (id: string) => {
    setOpenProjectId(id)
    setLightboxIndex(0)
  }
  const closeGallery = () => setOpenProjectId(null)
  const prevImage = () => activeProject && setLightboxIndex(i => (i - 1 + activeProject.images.length) % activeProject.images.length)
  const nextImage = () => activeProject && setLightboxIndex(i => (i + 1) % activeProject.images.length)

  useEffect(() => {
    if (!activeProject) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject])

  return (
    <>
      <PageHero
        image={IMG.portfolio_hero}
        label="Design + Build"
        title="Full Home Renovation Projects"
        subtitle="Browse our completed whole-home transformations — each project is its own gallery."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Our Work</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>
              Completed Full Home Renovations
            </h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {renovationProjects.map(project => (
              <button
                key={project.id}
                type="button"
                onClick={() => openGallery(project.id)}
                className="text-left"
                style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
              >
                <div className="portfolio-item" style={{ height: 280 }}>
                  <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover" />
                  <div className="portfolio-overlay" />
                </div>
                <h3 className="font-display font-semibold mt-4" style={{ color: '#0b2545', fontSize: '1.125rem' }}>
                  {project.name}
                </h3>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: '#c9a84c' }}>
                  {project.images.length} Photos
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(7,24,48,0.95)' }}
          onClick={closeGallery}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeGallery}
              className="absolute -top-10 right-0 text-white text-2xl opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close gallery"
            >
              ✕
            </button>
            <div className="text-center mb-3" style={{ color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {activeProject.name}
            </div>
            <img
              src={activeProject.images[lightboxIndex]}
              alt={`${activeProject.name} photo ${lightboxIndex + 1}`}
              className="w-full object-contain mx-auto"
              style={{ maxHeight: '75vh' }}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevImage}
                className="text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                ← Prev
              </button>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {lightboxIndex + 1} / {activeProject.images.length}
              </span>
              <button
                onClick={nextImage}
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
