import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import useCMSContent from '../../hooks/useCMSContent'
import { CMS_DEFAULT_CONTENT } from '../../lib/cmsDefaults'
import { IMG, sortImagesByFilename } from '../../components/shared'
import a1 from '../../assets/about/5.jpg'
import approachLogo from '../../assets/about/logo.jpeg'

// Row-major order fills a 3x3 grid as: 1 2 3 / 4 L 5 / 6 7 8
const APPROACH_GRID = [
  { type: 'card' as const, title: 'Customer First', description: 'From the moment we connect, we treat you as a valued customer whether you choose our services or not.' },
  { type: 'card' as const, title: 'Ownership', description: 'Your home is your domain. We will enter only when invited and stay only as long as we’re welcome.' },
  { type: 'card' as const, title: 'Safety', description: 'Your security matters. We send only individuals of integrity and honor to your home always courteous, professionally attired, and respectful of every homeowner.' },
  { type: 'card' as const, title: 'Respect', description: 'We respect all homeowners and believe in full transparency. We never proceed without all relevant owners and parties present, ensuring everyone understands our services and expectations.' },
  { type: 'logo' as const, img: approachLogo },
  { type: 'card' as const, title: 'Punctuality', description: 'Your time is valuable. Appointments and installations will always be completed as promised. If challenges arise, we will coordinate with you promptly.' },
  { type: 'card' as const, title: 'Fair Pricing', description: 'You deserve fair treatment. Our pricing remains consistent—never influenced by age, race, income, home value, or any other social factors.' },
  { type: 'card' as const, title: 'Privacy Protection', description: 'Your personal information is yours alone. We employ top-tier security measures to safeguard your privacy and will never sell your data.' },
  { type: 'card' as const, title: 'Lifetime Guarantee*', description: 'Your investment should bring peace of mind. If we make a mistake, we will make it right—not just today, but for the lifetime of your home.' },
]

// Drop photos into src/assets/about — they load automatically, sorted by filename number
const aboutImageModules = import.meta.glob('../../assets/about/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const aboutImages = sortImagesByFilename(aboutImageModules)

export default function About() {
  const { content } = useCMSContent('about', CMS_DEFAULT_CONTENT.about)
  const introImage = content.values.image ?? aboutImages[0] ?? IMG.about

  return (
    <>
      <PageHero
        image={a1}
        label={content.hero.label}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />

      {/* Values / Mission */}
      <section id="values" className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden" style={{ height: 480 }}>
                <img src={introImage} alt="RENOVVO craftsmanship" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="section-label mb-4">{content.values.heading}</div>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                {content.values.title}
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-500 mb-5" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                {content.values.description}
              </p>
              <p className="text-gray-500 mb-7" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                {content.values.extra}
              </p>
              <Link to="/contact" className="btn-primary">{content.values.button}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">What We Offer</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>
              Our Comprehensive Services
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.servicesIntro ?? 'We serve as your premier partner for every scale of transformation, offering a complete suite of services designed to meet all your needs.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.services.map((s: { title: string; desc: string }) => (
              <div key={s.title} style={{ background: '#ffffff', border: '1px solid rgba(11,37,69,0.08)', padding: '2.5rem' }}>
                <div style={{ width: 6, height: 6, background: '#c9a84c', borderRadius: '50%', marginBottom: '1.25rem' }} />
                <h3 className="font-display font-semibold mb-3" style={{ color: '#0b2545', fontSize: '1.1rem' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client-Centered Approach */}
      <section id="process" className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-label mb-4">How We Work</div>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                Our Client-Centered Approach
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-500 mb-5" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                What truly sets RENOVVO apart is our commitment to a Client-Centered Design &amp; Build process. We simplify the complexities of construction with expert guidance and hands-on resources.
              </p>
             
              <p className="text-gray-500 mb-7" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                From the initial design sketch through the final build, our team is committed to ensuring your renovation is perfectly executed, helping you create the extraordinary home you&rsquo;ve always wanted.
              </p>
              <Link to="/contact" className="btn-primary">Schedule a Visit for Free Estimate</Link>
            </div>
            <div>
              <div className="grid grid-cols-3" style={{ gap: 'clamp(4px, 1vw, 8px)' }}>
                {APPROACH_GRID.map((cell, i) =>
                  cell.type === 'logo' ? (
                    <div
                      key="logo"
                      className="flex items-center justify-center"
                      style={{ aspectRatio: '1 / 1', background: '#ffffff', border: '1px solid rgba(11,37,69,0.08)' }}
                    >
                      <img src={cell.img} alt="RENOVVO" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center text-center"
                      style={{
                        aspectRatio: '1 / 1',
                        background: '#1b56b3',
                        padding: 'clamp(0.375rem, 2vw, 0.75rem)',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <h3 className="font-display" style={{ color: '#ffffff', fontSize: 'clamp(0.5625rem, 2vw, 0.8125rem)', marginBottom: '0.25rem' }}>
                        {cell.title}
                      </h3>
                      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.4375rem, 1.5vw, 0.625rem)', lineHeight: 1.4 }}>
                        {cell.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600 }}>
            Ready to Build Your Extraordinary Home?
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
