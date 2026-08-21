import { useState, useRef } from 'react'
import PageHero from '../components/PageHero'
import useCMSContent from '../hooks/useCMSContent'
import { CMS_DEFAULT_CONTENT } from '../lib/cmsDefaults'

const ZOHO_IFRAME_NAME = 'zoho_lead_submit_frame'

export default function Contact() {
  const { content } = useCMSContent('contact', CMS_DEFAULT_CONTENT.contact)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const zohoFormRef = useRef<HTMLFormElement>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    zohoFormRef.current?.submit()
    setSent(true)
  }

  const description = [
    form.budget && `Estimated Budget: ${form.budget}`,
    form.message,
  ].filter(Boolean).join('\n\n')

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  const fieldStyle = {
    border: '1.5px solid rgba(11,37,69,0.15)',
    color: '#0b2545',
    background: '#fff',
    width: '100%',
    padding: '0.875rem 1rem',
    fontSize: '0.9375rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = '#0b2545')
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = 'rgba(11,37,69,0.15)')

  return (
    <>
      <PageHero
        image={content.hero.image}
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
                      <a href={c.href} className="font-medium transition-colors" style={{ color: '#0b2545' }}
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
              style={{ background: '#f8faff', padding: '3rem', boxShadow: '0 4px 30px rgba(11,37,69,0.06)' }}
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div
                    className="flex items-center justify-center mb-6"
                    style={{ width: 72, height: 72, background: '#0b2545', borderRadius: '50%' }}
                  >
                    <span className="text-3xl" style={{ color: '#c9a84c' }}>✓</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: '#0b2545' }}>
                    Message Received!
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. A member of our team will be in touch within 24 hours to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-semibold mb-7" style={{ color: '#0b2545', fontSize: '1.3rem' }}>
                    Request a Free Estimate
                  </h3>
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0b2545' }}>Full Name *</label>
                        <input type="text" placeholder="John Smith" value={form.name} onChange={update('name')} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0b2545' }}>Phone *</label>
                        <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={update('phone')} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0b2545' }}>Email Address *</label>
                      <input type="email" placeholder="john@example.com" value={form.email} onChange={update('email')} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0b2545' }}>Service Needed</label>
                        <select value={form.service} onChange={update('service')} style={{ ...fieldStyle, color: form.service ? '#0b2545' : '#9ca3af' }} onFocus={onFocus} onBlur={onBlur}>
                          <option value="" disabled>Select a service...</option>
                          <option>Kitchen Remodeling</option>
                          <option>Bathroom Renovation</option>
                          <option>Home Addition</option>
                          <option>Cabinet Installation</option>
                          <option>Flooring & Tile</option>
                          <option>Exterior Upgrade</option>
                          <option>Full-Home Renovation</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0b2545' }}>Estimated Budget</label>
                        <select value={form.budget} onChange={update('budget')} style={{ ...fieldStyle, color: form.budget ? '#0b2545' : '#9ca3af' }} onFocus={onFocus} onBlur={onBlur}>
                          <option value="" disabled>Select range...</option>
                          <option>Under $10,000</option>
                          <option>$10,000 – $25,000</option>
                          <option>$25,000 – $50,000</option>
                          <option>$50,000 – $100,000</option>
                          <option>$100,000+</option>
                          <option>Not Sure Yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0b2545' }}>Tell Us About Your Project</label>
                      <textarea
                        rows={5}
                        placeholder="Describe your project, current space, ideal timeline, or anything else that helps us understand what you're looking for..."
                        value={form.message}
                        onChange={update('message')}
                        style={{ ...fieldStyle, resize: 'none' }}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-center" style={{ padding: '1rem' }}>
                      Send My Request — It's Free
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      By submitting you agree to be contacted by ReWise Builders. We never sell your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service area content */}
      <section style={{ background: '#0b2545', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-label mb-4" style={{ color: 'rgba(201,168,76,0.8)' }}>SERVICE AREA</div>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600 }}>
            We Come to You - All Across Houston & Suburbs
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

      {/* Hidden Zoho CRM Web-to-Lead submission — posts in the background via a hidden iframe so the
          visible form above keeps its own instant success screen instead of navigating away. */}
      <iframe name={ZOHO_IFRAME_NAME} style={{ display: 'none' }} title="Zoho lead submission" />
      <form
        ref={zohoFormRef}
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads7242604000000728004"
        method="POST"
        target={ZOHO_IFRAME_NAME}
        acceptCharset="UTF-8"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="xnQsjsdp" value="b3f1ff9a083311f6036ad395783fb8b0caed987e30e10c899dc318719d4aa6e5" readOnly />
        <input type="hidden" name="zc_gad" value="" readOnly />
        <input type="hidden" name="xmIwtLD" value="7848179506004115216962b1bef3f834489f1bd077da142b39ee69a76971af34429bb45fe83a30bcbaa572d8618195df" readOnly />
        <input type="hidden" name="actionType" value="TGVhZHM=" readOnly />
        <input type="hidden" name="returnURL" value="null" readOnly />
        <input type="hidden" name="aG9uZXlwb3Q" value="" readOnly />
        <input type="hidden" name="Last Name" value={form.name} readOnly />
        <input type="hidden" name="Phone" value={form.phone} readOnly />
        <input type="hidden" name="Email" value={form.email} readOnly />
        <input type="hidden" name="Company" value={form.service} readOnly />
        <input type="hidden" name="Description" value={description} readOnly />
      </form>
    </>
  )
}
