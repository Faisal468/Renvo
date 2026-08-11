import PageHero from '../../components/PageHero'
import { IMG } from '../../components/shared'
import mg from '../../assets/windows/7.jpg';
import mg1 from '../../assets/windows/8.jpg';

export default function OurProcess() {
  return (
    <>
      <PageHero
        image={IMG.hero2}
        label="Our Process"
        title="Your Vision. Our Process."
        subtitle="For over 30 years, POWER has been committed to building trust throughout the renovation process. From 'one day' to 'day one,' this roadmap details every step of our partnership[cite: 1]."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-4">What to expect</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              A roadmap designed for transparency and trust from day one
            </h2>
          </div>

          <div className="space-y-16">
            {[
              {
                step: '01',
                title: 'Schedule',
                subtitle: 'Schedule Your Free Estimate',
                text: 'Booking a free estimate with POWER is transparent and easy[cite: 1]. Schedule an appointment online, or if you prefer, via phone call with one of our Scheduling Agents[cite: 1]. Already have an appointment? Great! We will call you day-of and confirm everything is good-to-go[cite: 1].',
                image: IMG.hero2
              },
              {
                step: '02',
                title: 'Consultation',
                subtitle: 'Consult With Our Experts',
                text: 'Our Remodeling Consultants will conduct a thorough inspection of your entire home[cite: 1]. Then comes the fun part: a full review of styles, colors, and options[cite: 1]. We will leave you with a free estimate, valid for up to one year[cite: 1].',
                image: mg
              },
              {
                step: '03',
                title: 'Production',
                subtitle: 'Production & Planning',
                text: 'Once a project has been agreed to, we will work with you to set up an install date[cite: 1]. We will then confirm all measurements, project details, and order products[cite: 1]. You can stay up-to-date with the entire process via our exclusive project management app Project Pulse[cite: 1].',
                image: IMG.hero2
              },
              {
                step: '04',
                title: 'Installation',
                subtitle: 'Installation And Beyond',
                text: 'Our top-rated installers will conduct your remodel and transform your home to look exactly how you envisioned it[cite: 1]. Once complete, you will receive a lifetime labor warranty and a manufacturer warranty for all services and products[cite: 1]. Remember, POWER works for you—if there are any questions regarding your project, our Customer Support representatives are ready and waiting to answer your call[cite: 1].',
                image: mg1
              }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center" style={{ width: 44, height: 44, borderRadius: '50%', background: '#0b2545', color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
                      {item.step}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#c9a84c' }}>
                      {item.title}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-4" style={{ fontSize: '1.75rem', color: '#0b2545' }}>
                    {item.subtitle}
                  </h3>
                  <p className="text-base" style={{ lineHeight: 1.8, color: '#475569' }}>
                    {item.text}
                  </p>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                  <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                    <img 
                      src={item.image} 
                      alt={item.subtitle} 
                      className="w-full h-[320px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-3xl text-center" style={{ background: '#0b2545', color: '#ffffff' }}>
            <div className="section-label mb-4" style={{ color: '#c9a84c' }}>Project Pulse</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 600 }}>
              Track Your Project in Real Time
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
              Track and monitor every moment of your project with our best-in-class secure project-tracking app: Project Pulse[cite: 1]. Schedule a follow-up, view important updates, access documents, and e-sign papers all in one place[cite: 1].
            </p>
          </div>
        </div>
      </section>
    </>
  )
}