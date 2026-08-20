import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'
import synchronyLogo from '../assets/financing/sycrony.svg'
import acornLogo from '../assets/financing/Acron.svg'

export default function Finances() {
  return (
    <>
      <PageHero
        image={IMG.finance}
        label="Financing"
        title="Financing for Your Home Remodeling and Roofing Needs in Houston, TX & Surrounding Areas"
        subtitle="Upgrade your home with a new bathroom, room addition, kitchen remodel, or roof with flexible financing options from our trusted financing partners."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-4 justify-center flex">Financing Partners</div>
          <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.25 }}>
            Flexible Ways to Fund Your Project
          </h2>
          <div className="gold-line mx-auto mb-8" />

          <p className="text-gray-500 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.9 }}>
            <strong style={{ color: '#0b2545' }}>Synchrony</strong> and <strong style={{ color: '#0b2545' }}>Acorn Finance</strong> offer a variety of financing solutions to help make your home improvement project more affordable and manageable.
          </p>
          <p className="text-gray-500 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.9 }}>
            We also offer financing options to help cover <strong style={{ color: '#0b2545' }}>insurance deductibles</strong>, making it easier to move forward with your roofing or remodeling project without the upfront financial burden.
          </p>
          <p className="text-gray-500 mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.9 }}>
            Explore your financing options today and turn your home improvement plans into reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12">
            <a
              href="https://www.synchrony.com/mmc/P1235247602"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apply with Synchrony"
              className="flex items-center justify-center transition-opacity"
              style={{ opacity: 1 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <img src={synchronyLogo} alt="Synchrony" style={{ height: 56, width: 'auto' }} />
            </a>
            <a
              href="https://www.acornfinance.com/pre-qualify/?d=Z4F5W&utm_medium=web_pre_qual_link_copy_welcome"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apply with Acorn Finance"
              className="flex items-center justify-center transition-opacity"
              style={{ opacity: 1 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <img src={acornLogo} alt="Acorn Finance" style={{ height: 64, width: 'auto' }} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
