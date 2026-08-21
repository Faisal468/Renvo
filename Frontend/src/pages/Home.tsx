import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import useCMSContent from '../hooks/useCMSContent'
import { CMS_DEFAULT_CONTENT } from '../lib/cmsDefaults'

interface HeroSlide {
  img: string
  headline: string
  sub: string
}

function Hero({ slides }: { slides: HeroSlide[] }) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const interval = window.setInterval(() => setSlide(current => (current + 1) % slides.length), 6000)
    return () => window.clearInterval(interval)
  }, [slides.length])

  if (!slides.length) {
    return null
  }

  return (
    <section id="hero" className="relative overflow-hidden" style={{ height: 'calc(100vh + 200px)', minHeight: 840 }}>
      {slides.map((slideData, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: slide === index ? 1 : 0 }}
        >
          <img src={slideData.img} alt="Reworked home" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="section-label mb-5">Design + Shop + Build</div>
          <h1
            className="font-display text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1, fontWeight: 600 }}
          >
            {slides[slide].headline}
          </h1>
          <p className="text-white mb-10" style={{ fontSize: '1.0625rem', opacity: 0.85, lineHeight: 1.7, maxWidth: 520 }}>
            {slides[slide].sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio" className="btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn-outline">Get a Free Estimate</Link>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            style={{
              width: slide === index ? 28 : 8,
              height: 3,
              borderRadius: 2,
              background: slide === index ? '#c9a84c' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
      )}

      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <div style={{ writingMode: 'vertical-rl', color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </div>
        <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.25)' }} />
      </div>
    </section>
  )
}

function TrustBar({ items }: { items: Array<{ icon: string; text: string }> }) {
  return (
    <div style={{ background: '#0b2545', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center py-4 gap-y-3">
          {items.map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <span style={{ color: '#c9a84c' }}>{item.icon}</span>
              <span className="text-white text-sm font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServicesPreview({ services }: { services: Array<{ title: string; img: string }> }) {
  const [index, setIndex] = useState(0)
  const total = services.length
  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)
  const at = (offset: number) => services[(index + offset + total) % total]

  const panels = [
    { item: at(-1), role: 'prev' as const, onClick: prev },
    { item: at(0), role: 'current' as const, onClick: undefined },
    { item: at(1), role: 'next' as const, onClick: next },
  ]

  return (
    <section className="py-20" style={{ background: '#ffffff' }}>
      <div className="text-center max-w-2xl mx-auto mb-10 px-6">
        <div className="section-label mb-4">What We Do</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0b2545', fontWeight: 600 }}>
          Full-Scope Remodeling Services
        </h2>
        <div className="gold-line mx-auto mt-6" />
      </div>

      <div className="relative">
        <div className="absolute flex items-center gap-3" style={{ right: 24, bottom: '100%', marginBottom: 16 }}>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous service"
            className="flex items-center justify-center"
            style={{ width: 36, height: 36, background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <svg width="20" height="12" viewBox="0 0 28 16" fill="none">
              <path d="M27 8H1M1 8L8 1M1 8L8 15" stroke="#0b2545" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next service"
            className="flex items-center justify-center"
            style={{ width: 36, height: 36, background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <svg width="20" height="12" viewBox="0 0 28 16" fill="none">
              <path d="M1 8H27M27 8L20 1M27 8L20 15" stroke="#0b2545" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="flex" style={{ height: 620, gap: 4, background: '#e8edf2' }}>
          {panels.map(({ item, role, onClick }) => (
            <button
              key={`${role}-${item.title}`}
              type="button"
              onClick={onClick}
              className={`relative overflow-hidden group ${role === 'current' ? 'w-full md:w-[52%]' : 'hidden md:block md:w-[24%]'}`}
              style={{ border: 'none', padding: 0, cursor: role === 'current' ? 'default' : 'pointer', background: 'none' }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: role === 'current' ? 'rgba(7,24,48,0.18)' : 'rgba(7,24,48,0.5)' }}
              />
              <div
                className="absolute top-8 right-6 font-display text-white uppercase font-semibold"
                style={{ writingMode: 'vertical-rl', letterSpacing: '0.15em', fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
              >
                {item.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-6">
        <Link
          to="/services"
          className="inline-block font-semibold uppercase"
          style={{ color: '#0b2545', letterSpacing: '0.12em', fontSize: '0.85rem', borderBottom: '2px solid #c9a84c', paddingBottom: 4 }}
        >
          Explore {panels[1].item.title}
        </Link>
      </div>
    </section>
  )
}

function PortfolioPreview({ projects }: { projects: Array<{ title: string; cat: string; img: string; tall: boolean }> }) {
  return (
    <section className="py-20" style={{ background: '#f8faff' }}>
      <div className="text-center max-w-2xl mx-auto mb-10 px-6">
        <div className="section-label mb-4">Our Work</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0b2545', fontWeight: 600 }}>
          Featured Projects
        </h2>
        <div className="gold-line mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[160px] md:auto-rows-[200px]" style={{ gap: 2 }}>
        {projects.map(project => (
          <Link
            key={project.title}
            to="/services/full-house-renovation"
            className={`group relative block overflow-hidden ${project.tall ? 'col-span-2 row-span-2' : ''}`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(7,24,48,0.85) 0%, transparent 55%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#c9a84c' }}>{project.cat}</p>
              <h3 className="font-display text-white font-semibold" style={{ fontSize: '1rem' }}>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12 px-6">
        <Link to="/portfolio" className="btn-primary" style={{ background: '#0b2545', color: '#fff' }}>
          View Full Portfolio
        </Link>
      </div>
    </section>
  )
}

function Stats({ items }: { items: Array<{ value: string; label: string }> }) {
  return (
    <section style={{ background: '#0b2545', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map(item => (
            <div key={item.label} className="text-center">
              <div className="stat-number" style={{ color: '#c9a84c' }}>{item.value}</div>
              <div className="gold-line mx-auto my-3" />
              <div className="text-white text-sm font-medium tracking-widest uppercase opacity-75">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSnippet({ data }: { data: { image: string; title: string; description: string; extra: string } }) {
  return (
    <section className="py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="overflow-hidden" style={{ height: 520 }}>
              <img src={data.image} alt="ReWise team on site" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -bottom-8 -right-8 hidden lg:flex flex-col items-center justify-center"
              style={{ width: 160, height: 160, background: '#0b2545' }}
            >
              <div className="font-display text-5xl font-bold" style={{ color: '#c9a84c', lineHeight: 1 }}>15</div>
              <div className="text-white text-xs tracking-widest uppercase mt-2 text-center px-3">Years<br/>of Excellence</div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="section-label mb-4">About Us</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.2 }}>
              {data.title}
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-500 mb-5" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
              {data.description}
            </p>
            <p className="text-gray-500" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
              {data.extra}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { num: '01', title: 'Free Consultation', desc: 'We listen to your vision, budget, and timeline in a no-pressure meeting.' },
    { num: '02', title: 'Custom Proposal', desc: 'Detailed scope of work, materials list, and transparent pricing.' },
    { num: '03', title: 'Design & Planning', desc: 'See your space in 3D before we break ground.' },
    { num: '04', title: 'Expert Build', desc: 'Licensed team executes with daily updates and zero surprises.' },
    { num: '05', title: 'Final Walkthrough', desc: 'We close only when you are 100% satisfied.' },
  ]
  return (
    <section style={{ background: '#0b2545', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div style={{ color: 'rgba(201,168,76,0.8)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>How It Works</div>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600 }}>Our Proven Process</h2>
          <div className="gold-line mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute" style={{ top: '2.5rem', left: '10%', right: '10%', height: 1, background: 'linear-gradient(to right, #c9a84c, rgba(201,168,76,0.1))', zIndex: 0 }} />
          {steps.map((step, index) => (
            <div key={step.num} className="relative text-center z-10">
              <div
                className="font-display font-bold mx-auto mb-5 flex items-center justify-center"
                style={{ width: 56, height: 56, background: index === 0 ? '#c9a84c' : 'rgba(255,255,255,0.07)', border: '2px solid #c9a84c', borderRadius: '50%', color: index === 0 ? '#071830' : '#c9a84c', fontSize: '0.875rem' }}
              >
                {step.num}
              </div>
              <h3 className="font-display text-white font-semibold mb-2" style={{ fontSize: '1rem' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Client Reviews</div>
          <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>What Homeowners Say</h2>
          <div className="gold-line mx-auto" />
        </div>
        <div className="elfsight-app-c6720390-401e-455e-92fe-9f1b2b623f83" data-elfsight-app-lazy />
      </div>
    </section>
  )
}

function CTABanner({ image }: { image: string }) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 440 }}>
      <img src={image} alt="Beautiful remodeled home" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,24,48,0.93) 0%, rgba(11,37,69,0.7) 100%)' }} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="section-label mb-5">Ready to Start?</div>
        <h2 className="font-display text-white mb-5 max-w-2xl" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, lineHeight: 1.2 }}>
          Your Dream Home Is One Call Away
        </h2>
        <p className="text-white max-w-xl mb-10" style={{ opacity: 0.8, fontSize: '1.0625rem', lineHeight: 1.7 }}>
          Get a free, no-obligation estimate from our team within 48 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary">Get a Free Estimate</Link>
          <a href="tel:+18005551234" className="btn-outline">Call 281-222-9491</a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { content } = useCMSContent('home', CMS_DEFAULT_CONTENT.home)

  return (
    <>
      <Hero slides={content.hero.slides} />
      <TrustBar items={content.trustBar} />
      <ServicesPreview services={content.services} />
      <PortfolioPreview projects={content.portfolioPreview} />
      <Stats items={content.stats} />
      <AboutSnippet data={content.aboutSnippet} />
      <section className="py-20" style={{ background: '#0b2545' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600 }}>
            {content.cta.title}
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            {content.cta.text}
          </p>
          <Link to="/contact" className="btn-primary">{content.cta.button}</Link>
        </div>
      </section>
      <Process />
      <Testimonials />
      <CTABanner image={content.aboutSnippet.image} />
    </>
  )
}
