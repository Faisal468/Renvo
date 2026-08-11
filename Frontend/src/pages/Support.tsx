import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'

const faqs = [
  {
    question: 'How do I request support for my renovation project?',
    answer:
      'Visit this page or contact our support team directly. We will review your issue and connect you with the right specialist quickly.',
  },
  {
    question: 'How long does support respond?',
    answer:
      'Our team responds within 24 business hours for all inquiries, including warranty questions, licensing reviews, and project updates.',
  },
  {
    question: 'Can I get help with billing or insurance questions?',
    answer:
      'Yes. We can walk you through billing details, coverage questions, and your rights as a homeowner before, during, or after your renovation.',
  },
]

export default function Support() {
  return (
    <>
      <PageHero
        image={IMG.team}
        label="Support"
        title="We’re here to help with every question"
        subtitle="Access support resources for FAQs, licensing & insurance, and direct contact with our team."
      />

      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="get-support" style={{ background: '#f8faff', padding: '2rem', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
              <div className="section-label mb-4">Get Support</div>
              <h2 className="font-display mb-4" style={{ color: '#0b2545', fontSize: '1.5rem', fontWeight: 600 }}>
                Reach our support team quickly
              </h2>
              <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
                Need help with your renovation, warranty, or billing? Our support team is ready to assist you with fast, professional responses and the right specialist for your issue.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn-primary">
                  Contact Support
                </Link>
              </div>
            </div>
            <div id="about-us" style={{ background: '#ffffff', padding: '2rem', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
              <div className="section-label mb-4">About Us</div>
              <h2 className="font-display mb-4" style={{ color: '#0b2545', fontSize: '1.5rem', fontWeight: 600 }}>
                Who we are and why support matters
              </h2>
              <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
                RENOVVO is built around exceptional customer care. Our support team helps homeowners feel confident throughout every phase of their renovation, from preconstruction planning to post-installation follow-up.
              </p>
            </div>
            <div id="our-process" style={{ background: '#f8faff', padding: '2rem', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
              <div className="section-label mb-4">Our Process</div>
              <h2 className="font-display mb-4" style={{ color: '#0b2545', fontSize: '1.5rem', fontWeight: 600 }}>
                How support requests are handled
              </h2>
              <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
                Every inquiry is reviewed by our support team, routed to the right project specialist, and tracked until it is fully resolved. We keep communication clear, transparent, and focused on what you need.
              </p>
            </div>
            <div id="our-value" style={{ background: '#ffffff', padding: '2rem', borderRadius: 16, border: '1px solid rgba(11,37,69,0.08)' }}>
              <div className="section-label mb-4">Our Value</div>
              <h2 className="font-display mb-4" style={{ color: '#0b2545', fontSize: '1.5rem', fontWeight: 600 }}>
                The values behind every support interaction
              </h2>
              <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
                We focus on empathy, accountability, and timely resolution. Your satisfaction is central to our process, and we treat every request with care, professionalism, and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Support FAQ</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>
              Answers for the questions homeowners ask most often
            </h2>
          </div>
          <div className="grid gap-6">
            {faqs.map(item => (
              <div key={item.question} style={{ background: '#ffffff', padding: '1.75rem', borderRadius: 12, border: '1px solid rgba(11,37,69,0.08)' }}>
                <h3 className="font-display font-semibold mb-3" style={{ color: '#0b2545', fontSize: '1.05rem' }}>
                  {item.question}
                </h3>
                <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
