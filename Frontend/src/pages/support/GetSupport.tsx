import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import { IMG } from '../../components/shared'

export default function GetSupport() {
  return (
    <>
      <PageHero
        image={IMG.team}
        label="Get Support"
        title="Fast help for every project question"
        subtitle="Contact our support specialists for warranty, billing, or project updates. We’re here to make your renovation smoother."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="section-label mb-4">How it works</div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
                Submit your request and we’ll respond quickly
              </h2>
              <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
                Tell us the issue, attach photos if needed, and our support team will route your inquiry to the right specialist. We track every request until it is resolved.
              </p>
              <div className="grid gap-4">
                <div style={{ padding: '1.5rem', background: '#f8faff', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#0b2545' }}>1. Send your request</h3>
                  <p className="text-gray-500">Use the contact form or call us directly with project details, photos, or warranty questions.</p>
                </div>
                <div style={{ padding: '1.5rem', background: '#f8faff', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#0b2545' }}>2. We review it fast</h3>
                  <p className="text-gray-500">Our team evaluates your request and assigns the right expert — whether it is installation, warranty, or billing.</p>
                </div>
                <div style={{ padding: '1.5rem', background: '#f8faff', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#0b2545' }}>3. Get a clear response</h3>
                  <p className="text-gray-500">We follow up with next steps, estimated timelines, and any actions needed from you.</p>
                </div>
              </div>
            </div>
            <div style={{ padding: '2rem', borderRadius: 24, background: '#0b2545', color: '#ffffff' }}>
              <h3 className="font-display mb-5" style={{ fontSize: '1.5rem' }}>Need support now?</h3>
              <p className="mb-6" style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.83)' }}>
                If this is urgent, please contact us by phone or submit your request through our support form. We respond to urgent issues first.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
