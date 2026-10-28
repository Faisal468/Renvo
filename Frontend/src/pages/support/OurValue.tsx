import PageHero from '../../components/PageHero'
import { IMG } from '../../components/shared'

export default function OurValue() {
  return (
    <>
      <PageHero
        image={IMG.hero3}
        label="Our Value"
        title="The values that guide every support interaction"
        subtitle="We treat your project with respect, transparency, and accountability from day one."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="section-label mb-4">Core values</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
                What we stand for when supporting your home renovation
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Empathy', description: 'We listen carefully and respond with respect, understanding your unique needs.' },
                  { title: 'Accountability', description: 'We own every issue and deliver follow-through until the problem is solved.' },
                  { title: 'Transparency', description: 'We communicate clearly, so you always know what happens next.' },
                  { title: 'Quality', description: 'We hold every solution to the same craftsmanship standard as our build work.' },
                ].map(item => (
                  <div key={item.title} style={{ padding: '1.75rem', borderRadius: 18, border: '1px solid rgba(11,37,69,0.08)', background: '#f8faff' }}>
                    <h3 className="font-semibold mb-3" style={{ color: '#0b2545' }}>{item.title}</h3>
                    <p className="text-gray-500" style={{ lineHeight: 1.8 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl" style={{ height: 420, background: '#e8edf2' }}>
              <img src={IMG.hero} alt="Values driven support" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
