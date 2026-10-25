import type { ReactNode } from 'react'
import { Link } from 'react-router'

const SITE_URL = 'https://renovvo.com'
const PRIVACY_URL = `${SITE_URL}/privacy-policy`
const EMAIL = 'support@renovvo.com'
const PHONE_HREF = '+12812229491'
const PHONE_DISPLAY = '+1 (281) 222-9491'

const strong = { color: '#0b2545', fontWeight: 600 } as const

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

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 style={{ color: '#0b2545', fontSize: '1.05rem', fontWeight: 600 }}>{title}</h3>
      {children}
    </div>
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

function Contact() {
  return (
    <>
      <p>
        <span style={strong}>Email:</span>{' '}
        <a href={`mailto:${EMAIL}`} style={strong}>
          {EMAIL}
        </a>
        <br />
        <span style={strong}>Phone:</span>{' '}
        <a href={`tel:${PHONE_HREF}`} style={strong}>
          {PHONE_DISPLAY}
        </a>
      </p>
    </>
  )
}

export default function TermsOfService() {
  return (
    <div style={{ paddingTop: 140, paddingBottom: 80, background: '#ffffff' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="section-label mb-4">Legal</div>
        <h1
          className="font-display mb-2"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600, lineHeight: 1.25 }}
        >
          Terms of Service
        </h1>
        <p className="mb-1" style={{ color: '#0b2545', fontSize: '0.95rem', fontWeight: 600 }}>
          Operated by Renovo Outlets of America LLC
        </p>
        <p className="mb-8" style={{ color: 'rgba(11,37,69,0.5)', fontSize: '0.9rem' }}>
          Website: {SITE_URL} &nbsp;·&nbsp; Effective Date: October 25, 2026
        </p>
        <div className="gold-line mb-10" />

        <div className="space-y-8" style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.9 }}>
          <Section title="1. Introduction">
            <p>Welcome to RENOVVO.</p>
            <p>
              These Terms of Service ("Terms") govern your use of the RENOVVO website, online forms, appointment
              scheduling tools, and related digital services.
            </p>
            <p>
              RENOVVO is operated by <span style={strong}>Renovo Outlets of America LLC</span> ("Company,"
              "RENOVVO," "we," "our," or "us"), including its business divisions and trade names.
            </p>
            <p>
              RENOVVO provides residential construction, remodeling, roofing, windows, cabinets, design-build, and
              related home improvement services.
            </p>
            <p>By accessing our website or using our online services, you agree to these Terms and our Privacy Policy.</p>
          </Section>

          <Section title="2. Website Use">
            <p>
              Our website is intended to provide information about RENOVVO, our services, and ways to contact our
              team.
            </p>
            <p>
              You agree to use our website for lawful purposes and not to interfere with its operation, security,
              or functionality.
            </p>
            <p>Information submitted through our website must be accurate and provided in good faith.</p>
            <p>
              Submitting an inquiry, requesting an estimate, or scheduling a consultation does not create a
              contractual obligation for either party.
            </p>
          </Section>

          <Section title="3. Estimates, Consultations, and Services">
            <p>
              RENOVVO may provide consultations, preliminary estimates, proposals, and project recommendations
              based on information supplied by customers.
            </p>
            <p>Unless expressly stated otherwise:</p>
            <List
              items={[
                'Initial estimates are preliminary and subject to verification.',
                'Final pricing may depend on site conditions, measurements, material selections, project scope, and other factors.',
                'Project schedules and availability are subject to confirmation.',
                'Construction and remodeling services are governed by separate written proposals or agreements.',
              ]}
            />
            <p>Information provided through our website does not constitute a binding construction contract.</p>
          </Section>

          <Section title="4. SMS Messaging Terms and Conditions">
            <Sub title="4.1 Program Description">
              <p>
                RENOVVO offers an SMS messaging program for customers and prospective customers who expressly
                consent to receive text messages.
              </p>
              <p>Depending on the consent provided, messages may include:</p>
              <List
                items={[
                  'Responses to customer inquiries and estimate requests.',
                  'Appointment confirmations, reminders, and scheduling updates.',
                  'Consultation and project-related communications.',
                  'Customer service messages and follow-up communications.',
                  'Promotional offers, special discounts, and service announcements for customers who separately opt in to marketing messages.',
                ]}
              />
              <p>Messages may be sent by RENOVVO through authorized messaging service providers.</p>
            </Sub>

            <Sub title="4.2 SMS Consent">
              <p>SMS consent is obtained through website forms, scheduling forms, or other approved opt-in methods.</p>
              <p>
                Where applicable, customers provide consent by selecting an optional, unchecked SMS consent
                checkbox.
              </p>
              <p>
                Consent to receive marketing text messages is{' '}
                <span style={strong}>not a condition of purchasing any goods or services</span>.
              </p>
              <p>
                We do not treat submission of a contact form alone as consent to receive promotional text messages.
              </p>
            </Sub>

            <Sub title="4.3 Message Frequency">
              <p>
                Message frequency varies depending on customer inquiries, appointments, project activity, and the
                types of messages for which the customer has opted in.
              </p>
            </Sub>

            <Sub title="4.4 Message and Data Rates">
              <p>Message and data rates may apply.</p>
              <p>
                Customers should contact their wireless service provider for information regarding their messaging
                or data plans.
              </p>
            </Sub>

            <Sub title="4.5 Opt-Out Instructions">
              <p>
                You may opt out of SMS communications at any time by replying <span style={strong}>STOP</span> to a
                message from RENOVVO.
              </p>
              <p>
                After receiving your opt-out request, we will send a confirmation message, and you will no longer
                receive messages from the applicable messaging program unless you provide consent again.
              </p>
            </Sub>

            <Sub title="4.6 Customer Support">
              <p>
                For assistance with our SMS program, reply <span style={strong}>HELP</span> to any message.
              </p>
              <p>You may also contact us directly:</p>
              <Contact />
            </Sub>

            <Sub title="4.7 Carrier Disclaimer">
              <p>Wireless carriers are not liable for delayed or undelivered messages.</p>
              <p>
                Message delivery is subject to carrier availability, network conditions, and other factors beyond
                our control.
              </p>
            </Sub>

            <Sub title="4.8 Privacy of SMS Information">
              <p>RENOVVO respects the privacy of customers who communicate with us through SMS.</p>
              <p style={strong}>
                Mobile information and SMS opt-in consent data will not be shared, sold, rented, or disclosed to
                third parties or affiliates for their own marketing or promotional purposes.
              </p>
              <p>
                We may share information with service providers solely as necessary to deliver messaging services
                on our behalf, subject to appropriate confidentiality and data protection obligations.
              </p>
              <p>
                For additional information, please review our{' '}
                <Link to="/privacy-policy" style={strong}>
                  Privacy Policy
                </Link>
                : {PRIVACY_URL}
              </p>
            </Sub>
          </Section>

          <Section title="5. Email and Telephone Communications">
            <p>
              By providing your contact information and requesting communication from RENOVVO, you authorize us to
              respond to your inquiry through appropriate communication channels, subject to applicable law and the
              consent you have provided.
            </p>
            <p>
              Marketing communications will be sent only where permitted by law and applicable consent
              requirements.
            </p>
            <p>You may request that we discontinue marketing emails or other optional communications at any time.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All website content, including the RENOVVO name, logos, branding, photographs, graphics, text,
              designs, and other materials, is owned by or licensed to Renovo Outlets of America LLC unless
              otherwise indicated.
            </p>
            <p>These materials are protected by applicable intellectual property laws.</p>
            <p>You may view, download, or print website content for personal, noncommercial purposes.</p>
            <p>
              You may not reproduce, distribute, modify, or commercially use our content without prior written
              authorization.
            </p>
          </Section>

          <Section title="7. Customer-Submitted Information">
            <p>
              When you submit project descriptions, photographs, drawings, measurements, or other materials to
              RENOVVO, you represent that you have the right to provide those materials.
            </p>
            <p>You authorize RENOVVO to use the submitted information as reasonably necessary to:</p>
            <List
              items={[
                'Review your inquiry.',
                'Evaluate your project.',
                'Prepare estimates or proposals.',
                'Communicate with you.',
                'Provide requested services.',
              ]}
            />
            <p>
              Submitting materials does not automatically grant RENOVVO permission to publish your private project
              information or photographs for advertising.
            </p>
            <p>Any marketing use requiring additional authorization will be addressed separately.</p>
          </Section>

          <Section title="8. Third-Party Services and Links">
            <p>
              Our website may contain links to third-party websites or use external services for scheduling,
              customer communications, financing applications, or payment processing.
            </p>
            <p>These third-party services may operate under their own terms and privacy policies.</p>
            <p>
              RENOVVO is not responsible for the content, policies, or independent operations of third-party
              websites.
            </p>
          </Section>

          <Section title="9. Website Information and Disclaimers">
            <p>RENOVVO makes reasonable efforts to provide accurate and current information on its website.</p>
            <p>
              However, descriptions of services, materials, pricing, financing options, promotional offers, and
              project timelines may change without notice.
            </p>
            <p>Website content is provided for general informational purposes.</p>
            <p>
              To the extent permitted by applicable law, RENOVVO does not guarantee uninterrupted access to its
              website or that all information will be free from errors.
            </p>
            <p>Nothing in these Terms limits any rights or warranties that cannot lawfully be excluded.</p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, RENOVVO will not be liable for indirect or consequential
              damages arising solely from the use of, or inability to access, our website.
            </p>
            <p>
              This provision does not replace, modify, or limit obligations expressly established under a separate
              signed construction or service agreement, nor does it exclude liability that cannot legally be
              limited.
            </p>
          </Section>

          <Section title="11. Privacy Policy">
            <p>Your privacy is important to us.</p>
            <p>
              Our Privacy Policy explains how we collect, use, store, and protect personal information submitted
              through our website and communication channels.
            </p>
            <p>
              Please review our Privacy Policy at:{' '}
              <Link to="/privacy-policy" style={strong}>
                {PRIVACY_URL}
              </Link>
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law
              principles.
            </p>
            <p>
              Any dispute relating to these website Terms will be subject to applicable law and the jurisdiction of
              courts authorized to hear the dispute.
            </p>
            <p>Separate construction or service agreements may contain additional dispute resolution provisions.</p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              RENOVVO may update these Terms of Service periodically to reflect changes in our operations, website
              features, communication practices, or legal requirements.
            </p>
            <p>Updated Terms will be posted on our website with a revised effective date.</p>
            <p>
              Continued use of our website after changes become effective constitutes acceptance of the updated
              Terms, to the extent permitted by law.
            </p>
          </Section>

          <Section title="14. Contact Information">
            <p>For questions regarding these Terms of Service, please contact:</p>
            <p>
              <span style={strong}>RENOVVO</span>
              <br />
              Operated by Renovo Outlets of America LLC
            </p>
            <p>
              <span style={strong}>Website:</span>{' '}
              <a href={SITE_URL} style={strong}>
                {SITE_URL}
              </a>
            </p>
            <Contact />
          </Section>

          <p className="pt-6" style={{ fontSize: '0.85rem', borderTop: '1px solid rgba(11,37,69,0.1)' }}>
            © 2026 RENOVVO / Renovo Outlets of America LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
