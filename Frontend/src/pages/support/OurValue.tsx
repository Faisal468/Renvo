import PageHero from '../../components/PageHero'
import { IMG } from '../../components/shared'
import integrityIcon from '../../assets/about/image.svg'
import careIcon from '../../assets/about/image (1).svg'
import optimismIcon from '../../assets/about/image (2).svg'
import commitmentIcon from '../../assets/about/image (3).svg'
import innovationIcon from '../../assets/about/image (4).svg'

const VALUES = [
  { title: 'Integrity', icon: integrityIcon, description: 'We uphold honesty and morality in every project we undertake.' },
  { title: 'Care', icon: careIcon, description: 'We prioritize people, ensuring every client & home is treated with respect and attention.' },
  { title: 'Optimism', icon: optimismIcon, description: 'We embrace challenges with a positive mindset, always striving for improvement.' },
  { title: 'Commitment', icon: commitmentIcon, description: 'We build lasting relationships, standing by our customers and employees.' },
  { title: 'Innovation', icon: innovationIcon, description: 'We seek creative solutions to enhance homes and redefine remodeling standards.' },
]

export default function OurValue() {
  return (
    <>
      <PageHero
        image={IMG.hero3}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {VALUES.map(item => (
              <div key={item.title}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.icon} alt="" style={{ width: 40, height: 40 }} />
                    <h3 className="font-display font-semibold" style={{ color: '#0b2545', fontSize: '1.25rem' }}>{item.title}</h3>
                  </div>
                  <span style={{ color: '#0b2545' }}>▲</span>
                </div>
                <p className="text-gray-500" style={{ lineHeight: 1.8 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
