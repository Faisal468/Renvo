import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import useCMSContent from '../hooks/useCMSContent'
import { CMS_DEFAULT_CONTENT } from '../lib/cmsDefaults'

export default function Cabinets() {
  const { content } = useCMSContent('cabinets', CMS_DEFAULT_CONTENT.cabinets)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [selected, setSelected] = useState(0)
  const styles = content.styles
  const faqs = content.faqs

  return (
    <>
      <PageHero
        image={content.hero.image}
        label={content.hero.label}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />

      {/* Intro */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-5">Why ReWise Cabinets</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
                Cabinetry That Looks as Good as It Functions
              </h2>
              <div className="gold-line mb-7" />
              <p className="text-gray-500 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                {content.intro.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {content.intro.items.map((f: string) => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                    <span style={{ color: '#c9a84c' }}>✦</span> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden" style={{ height: 460 }}>
              <img src={styles[selected].img} alt={styles[selected].name} className="w-full h-full object-cover transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Style selector */}
      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Cabinet Styles</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Find Your Style
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {styles.map((style, i) => (
              <div
                key={style.name}
                className="cursor-pointer group transition-all"
                style={{
                  border: selected === i ? '2px solid #0b2545' : '2px solid transparent',
                  outline: selected === i ? 'none' : '1px solid rgba(11,37,69,0.1)',
                }}
                onClick={() => setSelected(i)}
              >
                <div className="overflow-hidden" style={{ height: 220 }}>
                  <img src={style.img} alt={style.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5" style={{ background: selected === i ? '#0b2545' : '#fff' }}>
                  <h3 className="font-display font-semibold mb-1" style={{ color: selected === i ? '#c9a84c' : '#0b2545', fontSize: '1.0625rem' }}>
                    {style.name}
                  </h3>
                  <div className="text-xs tracking-wide mb-2" style={{ color: selected === i ? 'rgba(255,255,255,0.6)' : '#c9a84c' }}>
                    {style.finish} · {style.material}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: selected === i ? 'rgba(255,255,255,0.7)' : '#6b7280' }}>
                    {style.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">FAQ</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Common Cabinet Questions
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ border: '1px solid rgba(11,37,69,0.1)', background: '#fff' }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold" style={{ color: '#0b2545' }}>{faq.q}</span>
                  <span style={{ color: '#c9a84c', fontSize: '1.25rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {activeFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: activeFaq === i ? 200 : 0 }}
                >
                  <p className="px-6 pb-6 text-gray-500" style={{ lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600 }}>
            {content.cta.title}
          </h2>
          <p className="mb-7" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.7 }}>
            {content.cta.text}
          </p>
          <Link to="/contact" className="btn-primary">{content.cta.button}</Link>
        </div>
      </section>
    </>
  )
}
