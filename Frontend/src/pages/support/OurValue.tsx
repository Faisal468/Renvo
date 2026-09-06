import { useState } from 'react'
import PageHero from '../../components/PageHero'
import v1 from '../../assets/windows/6.jpg'
import integrityIcon from '../../assets/about/image.svg'
import careIcon from '../../assets/about/image (1).svg'
import optimismIcon from '../../assets/about/image (2).svg'
import commitmentIcon from '../../assets/about/image (3).svg'
import innovationIcon from '../../assets/about/image (4).svg'

const GALLERY_VALUES = [
  { title: 'Customer First', description: 'From the moment we connect, we treat you as a valued customer whether you choose our services or not.' },
  { title: 'Ownership', description: 'Your home is your domain. We will enter only when invited and stay only as long as we’re welcome.' },
  { title: 'Safety', description: 'Your security matters. We send only individuals of integrity and honor to your home always courteous, professionally attired, and respectful of every homeowner.' },
  { title: 'Respect', description: 'We respect all homeowners and believe in full transparency. We never proceed without all relevant owners and parties present, ensuring everyone understands our services and expectations.' },
  { title: 'Punctuality', description: 'Your time is valuable. Appointments and installations will always be completed as promised. If challenges arise, we will coordinate with you promptly.' },
  { title: 'Fair Pricing', description: 'You deserve fair treatment. Our pricing remains consistent—never influenced by age, race, income, home value, or any other social factors.' },
  { title: 'Privacy Protection', description: 'Your personal information is yours alone. We employ top-tier security measures to safeguard your privacy and will never sell your data.' },
  { title: 'Lifetime Guarantee*', description: 'Your investment should bring peace of mind. If we make a mistake, we will make it right—not just today, but for the lifetime of your home.' },
]

const VALUES = [
  { title: 'Integrity', icon: integrityIcon, description: 'We uphold honesty and morality in every project we undertake.' },
  { title: 'Care', icon: careIcon, description: 'We prioritize people, ensuring every client & home is treated with respect and attention.' },
  { title: 'Optimism', icon: optimismIcon, description: 'We embrace challenges with a positive mindset, always striving for improvement.' },
  { title: 'Commitment', icon: commitmentIcon, description: 'We build lasting relationships, standing by our customers and employees.' },
  { title: 'Innovation', icon: innovationIcon, description: 'We seek creative solutions to enhance homes and redefine remodeling standards.' },
]

const GALLERY_PAGE_SIZE = 3
const GALLERY_PAGE_COUNT = Math.ceil(GALLERY_VALUES.length / GALLERY_PAGE_SIZE)

export default function OurValue() {
  const [galleryPage, setGalleryPage] = useState(0)
  const galleryVisible = GALLERY_VALUES.slice(
    galleryPage * GALLERY_PAGE_SIZE,
    galleryPage * GALLERY_PAGE_SIZE + GALLERY_PAGE_SIZE
  )

  return (
    <>
      <PageHero
        image={v1}
        label="Our Values"
        title="The values that guide every support interaction"
        subtitle="We treat your project with respect, transparency, and accountability from day one."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4">Core values</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              What we stand for when supporting your home renovation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map(item => (
              <div
                key={item.title}
                className="group"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(11,37,69,0.08)',
                  padding: '2.75rem 2.25rem',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(11,37,69,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  className="flex items-center justify-center mb-6"
                  style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f4fb' }}
                >
                  <img src={item.icon} alt="" style={{ width: 30, height: 30 }} />
                </div>
                <h3 className="font-display font-semibold mb-3" style={{ color: '#0b2545', fontSize: '1.3rem' }}>
                  {item.title}
                </h3>
                <div className="gold-line mb-4" />
                <p className="text-gray-500" style={{ fontSize: '1rem', lineHeight: 1.8 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4">Gallery</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Our values in action
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setGalleryPage(p => (p - 1 + GALLERY_PAGE_COUNT) % GALLERY_PAGE_COUNT)}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#0b2545',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
              {galleryVisible.map((item, i) => (
                <div
                  key={galleryPage * GALLERY_PAGE_SIZE + i}
                  className="flex flex-col items-center justify-center text-center"
                  style={{
                    aspectRatio: '3 / 2',
                    borderRadius: 10,
                    boxShadow: '0 12px 30px rgba(11,37,69,0.12)',
                    background: '#1b56b3',
                    padding: '1.75rem',
                  }}
                >
                  <h3 className="font-display" style={{ color: '#ffffff', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              onClick={() => setGalleryPage(p => (p + 1) % GALLERY_PAGE_COUNT)}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#0b2545',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: GALLERY_PAGE_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setGalleryPage(i)}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: i === galleryPage ? '#0b2545' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
