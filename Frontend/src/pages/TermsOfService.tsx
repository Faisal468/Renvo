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
        <p className="mb-8" style={{ color: 'rgba(11,37,69,0.5)', fontSize: '0.9rem' }}>
          Last updated: August 31, 2026
        </p>
        <div className="gold-line mb-10" />

        <div className="space-y-8" style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.9 }}>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the RENOVVO website and services.
            By accessing our website or requesting our services, you agree to be bound by these Terms. If you do
            not agree, please do not use our website or services.
          </p>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Use of Our Website
            </h2>
            <p>
              You agree to use our website only for lawful purposes and in a manner that does not infringe the
              rights of, restrict, or inhibit anyone else's use of the website. Content on this website is
              provided for general informational purposes and is subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Estimates and Services
            </h2>
            <p>
              Any estimates, quotes, or project timelines provided through our website or by our team are
              preliminary and subject to change based on an in-person assessment, material availability, permits,
              and other factors. Final pricing and scope of work will be outlined in a separate written agreement
              or contract prior to the start of any project.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, and graphics, is the property of
              RENOVVO or its licensors and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or use our content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Third-Party Links and Partners
            </h2>
            <p>
              Our website may contain links to third-party websites, including financing partners, which are not
              owned or controlled by us. We are not responsible for the content, policies, or practices of any
              third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, RENOVVO shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of our website or services. Our total liability for
              any claim arising from our services shall not exceed the amount paid for the services in question.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the state in which RENOVVO operates, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Changes to These Terms
            </h2>
            <p>
              We may revise these Terms from time to time. Continued use of our website after changes are posted
              constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3" style={{ color: '#0b2545', fontSize: '1.25rem', fontWeight: 600 }}>
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@rewisebuilders.com" style={{ color: '#0b2545', fontWeight: 600 }}>
                hello@rewisebuilders.com
              </a>{' '}
              or (281) 222-9491.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
