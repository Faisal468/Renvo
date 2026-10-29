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

export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: 140, paddingBottom: 80, background: '#ffffff' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="section-label mb-4">Legal</div>
        <h1
          className="font-display mb-2"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.25 }}
        >
          Privacy Policy
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
            <p>
              RENOVVO OUTLETS OF AMERICA LLC ("RENOVVO," "we," "us," or "our") respects your privacy and is
              committed to protecting the personal information you provide when visiting our website, requesting
              estimates, scheduling consultations, purchasing services, or communicating with our company.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, protect, and disclose information in connection
              with our home improvement, remodeling, roofing, windows, cabinets, design-build, and construction
              services.
            </p>
            <p>By using our website, you acknowledge the data practices described in this Privacy Policy.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following information when you voluntarily provide it:</p>
            <List
              items={[
                'Full name',
                'Email address',
                'Telephone and mobile phone numbers',
                'Property or project address',
                'Details about requested remodeling or construction services',
                'Appointment and consultation preferences',
                'Project specifications, photographs, and related communications',
                'Information submitted through website forms, telephone calls, emails, and SMS messages',
              ]}
            />
            <p>
              We may also automatically collect certain technical information, including IP addresses, browser
              types, device information, website usage data, and cookies.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use personal information for legitimate business purposes, including:</p>
            <List
              items={[
                'Responding to inquiries and requests for estimates',
                'Scheduling consultations and appointments',
                'Preparing estimates, proposals, and contracts',
                'Providing remodeling, construction, and home improvement services',
                'Communicating project updates and scheduling changes',
                'Sending invoices, payment reminders, and service notifications',
                'Providing customer support',
                'Sending promotional messages when appropriate consent has been obtained',
                'Improving our website, services, and customer experience',
                'Maintaining business records and complying with legal obligations',
              ]}
            />
          </Section>

          <Section title="4. SMS Messaging and Consent">
            <p>
              RENOVVO OUTLETS OF AMERICA LLC may send SMS text messages to customers and prospective customers who
              have provided the appropriate consent.
            </p>
            <p>Depending on the consent provided, messages may include:</p>
            <List
              items={[
                'Appointment confirmations and reminders',
                'Consultation scheduling and updates',
                'Estimate and proposal follow-ups',
                'Construction and remodeling project updates',
                'Customer service communications',
                'Invoice and payment notifications',
                'Promotional offers, discounts, and service announcements',
              ]}
            />
            <p>
              <span style={strong}>Message frequency varies</span> depending on customer inquiries, project
              activity, and communication preferences.
            </p>
            <p>
              <span style={strong}>Message and data rates may apply.</span>
            </p>
            <p>
              Customers may opt out of SMS communications at any time by replying <span style={strong}>STOP</span>{' '}
              to any message.
            </p>
            <p>
              For assistance, reply <span style={strong}>HELP</span> or contact RENOVVO through{' '}
              <a href={SITE_URL} style={strong}>
                {SITE_URL}
              </a>
              .
            </p>
            <p>Consent to receive promotional SMS messages is not a condition of purchasing goods or services.</p>
            <p>We maintain records of SMS consent where applicable and honor valid opt-out requests.</p>
          </Section>

          <Section title="5. Mobile Information and SMS Data Protection">
            <p style={strong}>
              No mobile information will be shared with third parties/affiliates for marketing/promotional
              purposes. Information sharing to subcontractors in support services, such as customer service, is
              permitted. All other use case categories exclude text messaging originator opt-in data and consent;
              this information will not be shared with any third parties.
            </p>
            <p>
              RENOVVO does not sell, rent, or transfer customers' mobile phone numbers or SMS opt-in consent to
              third parties for their independent marketing or promotional activities.
            </p>
            <p>
              Mobile messaging information may be processed by authorized messaging service providers solely to
              deliver communications on our behalf, subject to appropriate confidentiality and data protection
              obligations.
            </p>
          </Section>

          <Section title="6. Information Sharing and Service Providers">
            <p>
              We may disclose necessary personal information to authorized service providers supporting our
              business operations, including:
            </p>
            <List
              items={[
                'Customer relationship management systems',
                'Scheduling and project management platforms',
                'Payment processors and accounting service providers',
                'Website hosting and technical support providers',
                'Contractors and service professionals involved in delivering requested services',
              ]}
            />
            <p>
              Such disclosures are limited to legitimate business purposes and are subject to applicable privacy
              and confidentiality obligations.
            </p>
            <p>
              SMS opt-in consent and related mobile messaging information remain subject to the restrictions
              described in Section 5.
            </p>
            <p>We may also disclose information when required by law or to protect our legal rights.</p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We use reasonable administrative, technical, and organizational safeguards designed to protect
              personal information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>
          </Section>

          <Section title="8. Data Retention">
            <p>
              We retain personal information for as long as reasonably necessary to provide services, maintain
              business records, fulfill contractual obligations, resolve disputes, and comply with applicable laws.
            </p>
            <p>
              When information is no longer required, we take reasonable steps to securely delete or otherwise
              dispose of it.
            </p>
          </Section>

          <Section title="9. Cookies and Website Analytics">
            <p>
              Our website may use cookies and similar technologies to improve website functionality, understand
              visitor activity, and evaluate website performance.
            </p>
            <p>Visitors may manage certain cookie preferences through their browser settings.</p>
          </Section>

          <Section title="10. Your Privacy Choices">
            <p>You may contact us to:</p>
            <List
              items={[
                'Request access to personal information we maintain about you',
                'Request corrections to inaccurate information',
                'Request deletion of eligible personal information',
                'Withdraw consent for optional marketing communications',
                'Ask questions about our privacy practices',
              ]}
            />
            <p>
              Requests will be handled in accordance with applicable laws and legitimate business recordkeeping
              requirements.
            </p>
            <p>
              To stop receiving SMS messages, reply <span style={strong}>STOP</span> at any time.
            </p>
          </Section>

          <Section title="11. Third-Party Websites">
            <p>
              Our website may contain links to third-party websites. RENOVVO is not responsible for the privacy
              practices or content of independently operated websites.
            </p>
            <p>We encourage visitors to review the privacy policies of those websites.</p>
          </Section>

          <Section title="12. Children's Privacy">
            <p>
              Our website and services are intended for adults seeking home improvement and construction services.
            </p>
            <p>We do not knowingly collect personal information from children under the age of 13.</p>
          </Section>

          <Section title="13. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our business practices,
              services, technology, or applicable legal requirements.
            </p>
            <p>Any revisions will be published on this page with an updated effective date.</p>
          </Section>

          <Section title="14. Contact Information">
            <p style={strong}>RENOVVO OUTLETS OF AMERICA LLC</p>
            <p>
              Website:{' '}
              <a href={SITE_URL} style={strong}>
                {SITE_URL}
              </a>
            </p>
            <p>
              For privacy-related questions, requests, or concerns, please contact us through the contact
              information provided on our website.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
