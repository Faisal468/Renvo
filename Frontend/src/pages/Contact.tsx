import PageHero from '../components/PageHero'
import useCMSContent from '../hooks/useCMSContent'
import { CMS_DEFAULT_CONTENT } from '../lib/cmsDefaults' 
import c1 from '../assets/kitchen/28.9.jpeg'

export default function Contact() {
  const { content } = useCMSContent('contact', CMS_DEFAULT_CONTENT.contact)

  return (
    <>
      <PageHero
        image={c1}
        label={content.hero.label}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />

      {/* Main contact section */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Left info */}
            <div className="lg:col-span-2">
              <div className="section-label mb-5">{content.intro.heading}</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                {content.intro.title}
              </h2>
              <div className="gold-line mb-7" />
              <p className="text-gray-500 mb-10" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                {content.intro.description}
              </p>

              <div className="space-y-6 mb-10">
                {content.contacts.map((c: { icon: string; label: string; value: string; href: string }) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ width: 50, height: 50, background: '#eaf2ff' }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#c9a84c' }}>{c.label}</div>
                      <a href={c.href} className="font-medium transition-colors whitespace-pre-line" style={{ color: '#0b2545' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#2a6fc1')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#0b2545')}
                      >
                        {c.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response promise */}
              <div style={{ background: '#0b2545', padding: '1.5rem', borderLeft: '3px solid #c9a84c' }}>
                <div className="font-display text-white font-semibold mb-2">{content.promise.title}</div>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  {content.promise.text}
                </p>
              </div>
            </div>

            {/* Form */}
            <div
              className="lg:col-span-3"
              style={{ background: '#f8faff', padding: '1.5rem', boxShadow: '0 4px 30px rgba(11,37,69,0.06)' }}
            >
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/V7VIFK3FP0tb1vJuAl6L"
                style={{ width: '100%', height: 740, border: 'none', borderRadius: 8 }}
                id="inline-V7VIFK3FP0tb1vJuAl6L"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 3"
                data-height="740"
                data-layout-iframe-id="inline-V7VIFK3FP0tb1vJuAl6L"
                data-form-id="V7VIFK3FP0tb1vJuAl6L"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="Form 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service area content */}
      <section style={{ background: '#0b2545', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-label mb-4" style={{ color: 'rgba(201,168,76,0.8)' }}>SERVICE AREA</div>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600 }}>
            We Come to You  All Across Houston & Suburbs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            With a team of project managers and a network of experienced & licensed craftsmen, RENOVVO can take on projects anywhere in the State of Texas.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            {['Texas', 'Houston', 'Sugarland', 'Richmond', 'Katy', 'Rosenberg', 'Cypress', 'Missouri City'].map(location => (
              <div
                key={location}
                className="py-3 px-4 text-sm font-medium"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12 }}
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
