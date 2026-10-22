import type { ReactNode } from 'react'

const SITE_URL = 'https://renovvo.com'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const strong = { color: '#0b2545', fontWeight: 600 } as const

export default function TermsOfService() {
  return (
    <div style={{ paddingTop: 140, paddingBottom: 80, background: '#ffffff' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="section-label mb-4">Legal</div>
        <h1
          className="font-display mb-2"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.25 }}
        >
          Terms of Service &amp; SMS Terms and Conditions
        </h1>
        <p className="mb-1" style={{ color: '#0b2545', fontSize: '0.95rem', fontWeight: 600 }}>
          RENOVVO OUTLETS OF AMERICA LLC
        </p>
        <p className="mb-8" style={{ color: 'rgba(11,37,69,0.5)', fontSize: '0.9rem' }}>
          Website: {SITE_URL} &nbsp;·&nbsp; Effective Date: October 22, 2026
        </p>
        <div className="gold-line mb-10" />

        <div className="space-y-8" style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.9 }}>
          <Section title="1. Introduction">
            <p>Welcome to RENOVVO.</p>
            <p>
              These Terms of Service govern your use of the website operated by RENOVVO OUTLETS OF AMERICA LLC
              ("RENOVVO," "we," "us," or "our"), including inquiries, consultation requests, estimates, and
              electronic communications.
            </p>
            <p>
              RENOVVO provides home improvement, remodeling, roofing, window installation, cabinetry, design-build,
              and construction services.
            </p>
            <p>
              By accessing our website or using our services, you agree to these Terms of Service, as applicable.
            </p>
          </Section>

          <Section title="2. Website and Services">
            <p>
              Our website allows visitors to learn about our services, submit inquiries, request estimates,
              schedule consultations, and communicate with our team.
            </p>
            <p>
              Information provided on our website is intended for general informational purposes. Project pricing,
              schedules, materials, warranties, and construction specifications are subject to individual written
              proposals and agreements.
            </p>
            <p>Submitting an inquiry or requesting an estimate does not establish a construction contract.</p>
          </Section>

          <Section title="3. SMS Messaging Program">
            <p>
              <span style={strong}>Program Name:</span> RENOVVO Customer Communications
            </p>
            <p>
              <span style={strong}>Operated By:</span> RENOVVO OUTLETS OF AMERICA LLC
            </p>
            <p>
              By voluntarily opting into our SMS messaging program, you agree to receive text messages from
              RENOVVO at the mobile phone number you provide.
            </p>
            <p>Depending on your consent preferences, messages may include:</p>
            <p style={strong}>Transactional and Informational Messages</p>
            <List
              items={[
                'Responses to customer inquiries',
                'Appointment confirmations and reminders',
                'Consultation scheduling updates',
                'Estimate and proposal notifications',
                'Project scheduling and progress updates',
                'Customer support communications',
                'Invoice and payment notifications',
              ]}
            />
            <p style={strong}>Marketing and Promotional Messages</p>
            <List
              items={[
                'Home remodeling promotions',
                'Special offers and seasonal discounts',
                'Information about RENOVVO services',
                'Promotional announcements and marketing campaigns',
              ]}
            />
            <p>Marketing and non-marketing SMS consent are collected separately.</p>
            <p>
              Consent to receive marketing text messages is not required to purchase products or services from
              RENOVVO.
            </p>
          </Section>

          <Section title="4. SMS Consent and Enrollment">
            <p>
              Customers may voluntarily enroll in our SMS messaging program through website forms or other
              authorized consent methods offered by RENOVVO.
            </p>
            <p>
              Where applicable, customers must actively select an optional SMS consent checkbox before receiving
              messages under the corresponding messaging program.
            </p>
            <p>
              Providing a mobile phone number alone does not constitute consent to receive promotional SMS
              messages.
            </p>
            <p>
              RENOVVO maintains consent records as appropriate and sends messages consistent with the permissions
              provided.
            </p>
          </Section>

          <Section title="5. Message Frequency">
            <p>
              <span style={strong}>Message frequency varies</span> depending on the type of communication,
              customer inquiries, appointment schedules, project activity, and promotional campaigns for which
              consent has been provided.
            </p>
            <p>Messages may be recurring.</p>
            <p>
              <span style={strong}>Message and data rates may apply.</span> Charges depend on your mobile carrier
              and wireless service plan.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
