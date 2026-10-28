import PageHero from '../../components/PageHero'
import { IMG } from '../../components/shared'

export default function AboutUs() {
  return (
    <>
      <PageHero
        image={IMG.about}
        label="About Us"
        title="The team behind RENOVVO support"
        subtitle="We believe strong customer care is the foundation of every successful renovation."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="section-label mb-4">Customer care</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
                We support homeowners through every step of the renovation journey
              </h2>
              <p className="text-gray-500 mb-6" style={{ lineHeight: 1.8 }}>
                RENOVVO was built on the idea that better service starts with listening. From project planning to post-installation follow-up, our support team keeps things transparent, responsive, and focused on what matters most to you.
              </p>
              <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
                We combine construction expertise with a hospitality mindset so your experience feels calm, clear, and well-managed even when challenges arise.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl" style={{ height: 420, background: '#e8edf2' }}>
              <img src={IMG.team} alt="RENOVVO support team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
