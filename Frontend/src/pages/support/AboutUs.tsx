import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import useCMSContent from '../../hooks/useCMSContent'
import { CMS_DEFAULT_CONTENT } from '../../lib/cmsDefaults'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/about — they load automatically, sorted by filename number
const aboutImageModules = import.meta.glob('../../assets/about/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const aboutImages = sortImagesByFilename(aboutImageModules)

export default function About() {
  const { content } = useCMSContent('about', CMS_DEFAULT_CONTENT.about)
  const introImage = content.values.image ?? aboutImages[0] ?? IMG.about
  const showroomImage = content.approach.image ?? aboutImages[1] ?? IMG.team

  return (
    <>
      <PageHero
        image={content.hero.image}
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
            <div className="order-2 lg:order-1">
              <div className="section-label mb-4">How We Work</div>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                Our Client-Centered Approach
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-500 mb-5" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                What truly sets RENOVVO apart is our commitment to a Client-Centered Design &amp; Build process. We simplify the complexities of construction with expert guidance and hands-on resources.
              </p>
              <div className="mb-7" style={{ borderLeft: '3px solid #c9a84c', paddingLeft: '1.25rem' }}>
                <h3 className="font-display font-semibold mb-2" style={{ color: '#0b2545', fontSize: '1.05rem' }}>Visit Our Showroom</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our state-of-the-art showroom is an invaluable resource. Here, you can easily touch, see, and choose every finish and material, ensuring your selections perfectly align with your design goals.
                </p>
              </div>
              <p className="text-gray-500 mb-7" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                From the initial design sketch through the final build, our team is committed to ensuring your renovation is perfectly executed, helping you create the extraordinary home you&rsquo;ve always wanted.
              </p>
              <Link to="/contact" className="btn-primary">Schedule a Showroom Visit</Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden" style={{ height: 480 }}>
                <img src={showroomImage} alt="RENOVVO showroom" className="w-full h-full object-cover" />
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
