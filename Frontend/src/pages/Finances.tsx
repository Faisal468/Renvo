import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import { IMG } from '../components/shared'

const plans = [
  {
    title: '12-Month No Interest',
    badge: null,
    apr: '0% APR',
    period: 'for 12 months',
    monthly: 'Deferred interest',
    minAmount: '$5,000',
    features: ['0% interest for 12 months', 'No prepayment penalty', 'Fixed monthly payments', 'Approved in minutes', 'Soft credit pull to pre-qualify'],
  },
  {
    title: 'Low Monthly Payments',
    badge: 'Most Popular',
    apr: 'From 6.99% APR',
    period: 'up to 120 months',
    monthly: 'Starting at $89/mo',
    minAmount: '$3,000',
    features: ['Terms up to 10 years', 'Low fixed monthly payments', 'No prepayment penalty', 'Covers all project costs', 'Fast decision — same day'],
  },
  {
    title: 'Same-As-Cash',
    badge: null,
    apr: '0% APR',
    period: 'for 18 months',
    monthly: 'No interest if paid in full',
    minAmount: '$7,500',
    features: ['18 months interest-free', 'No monthly payment required', 'Pay when ready', 'Best for larger projects', 'Pre-qualify with no impact'],
  },
]

const steps = [
  { num: '01', title: 'Pre-Qualify Online', desc: 'Fill out a 60-second form. Soft credit pull — no impact to your score.' },
  { num: '02', title: 'Get Your Offer', desc: 'See your rate, term, and monthly payment instantly. Choose what fits.' },
  { num: '03', title: 'We Start Building', desc: 'Once approved, your project starts — no upfront payment required.' },
  { num: '04', title: 'Pay Over Time', desc: 'Simple monthly payments automatically drafted. No surprises.' },
]

const faqs = [
  { q: 'Will applying affect my credit score?', a: 'Pre-qualification uses a soft credit inquiry that has no impact on your credit score. Only a formal application triggers a hard pull.' },
  { q: 'What credit score do I need?', a: 'We have options for a wide range of credit profiles. While better scores get lower rates, we work with scores as low as 580 in many cases.' },
  { q: 'Can I finance the full project cost?', a: 'Yes — financing covers 100% of your project cost including materials, labor, permits, and design fees.' },
  { q: 'How quickly can I be approved?', a: 'Most applicants receive a decision within minutes. In rare cases it may take up to 24 hours for manual review.' },
  { q: 'Is there a prepayment penalty?', a: 'No. You can pay off your balance at any time without any fees or penalties.' },
]

export default function Finances() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [calc, setCalc] = useState({ amount: 15000, term: 60 })
  const rate = 0.0699 / 12
  const payment = Math.round((calc.amount * rate) / (1 - Math.pow(1 + rate, -calc.term)))

  return (
    <>
      <PageHero
        image={IMG.finance}
        label="Financing"
        title="Remodel Now, Pay Over Time"
        subtitle="Flexible financing options that make your dream remodel possible — regardless of your budget."
      />

      {/* Plans */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Financing Plans</div>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0b2545', fontWeight: 600 }}>
              Choose the Plan That Fits Your Life
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              We partner with trusted lenders to offer competitive rates and flexible terms for every project size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.title}
                className="relative"
                style={{
                  border: plan.badge ? '2px solid #c9a84c' : '1px solid rgba(11,37,69,0.1)',
                  background: plan.badge ? '#0b2545' : '#fff',
                  padding: '2.5rem',
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-widest uppercase"
                    style={{ background: '#c9a84c', color: '#071830' }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="font-display font-bold mb-1" style={{ color: plan.badge ? '#c9a84c' : '#0b2545', fontSize: '1.5rem' }}>
                  {plan.apr}
                </div>
                <div className="text-sm mb-1" style={{ color: plan.badge ? 'rgba(255,255,255,0.6)' : '#6b7280' }}>{plan.period}</div>
                <div className="font-display text-2xl font-semibold mb-1" style={{ color: plan.badge ? '#ffffff' : '#0b2545' }}>
                  {plan.monthly}
                </div>
                <div className="text-xs mb-5" style={{ color: plan.badge ? 'rgba(201,168,76,0.8)' : '#c9a84c', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Min. project: {plan.minAmount}
                </div>
                <div className="gold-line mb-6" />
                <h3 className="font-display font-semibold mb-5" style={{ color: plan.badge ? '#ffffff' : '#0b2545', fontSize: '1.1rem' }}>
                  {plan.title}
                </h3>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: plan.badge ? 'rgba(255,255,255,0.7)' : '#6b7280' }}>
                      <span style={{ color: '#c9a84c' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 text-sm font-bold tracking-widest uppercase transition-all"
                  style={{
                    background: plan.badge ? '#c9a84c' : 'transparent',
                    color: plan.badge ? '#071830' : '#0b2545',
                    border: plan.badge ? 'none' : '1.5px solid #0b2545',
                  }}
                >
                  Apply for This Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment calculator */}
      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Estimate</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Payment Calculator
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0b2545' }}>
                  Project Amount: <span style={{ color: '#c9a84c' }}>${calc.amount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={3000}
                  max={150000}
                  step={1000}
                  value={calc.amount}
                  onChange={e => setCalc(p => ({ ...p, amount: Number(e.target.value) }))}
                  className="w-full"
                  style={{ accentColor: '#0b2545' }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$3,000</span><span>$150,000</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0b2545' }}>
                  Term: <span style={{ color: '#c9a84c' }}>{calc.term} months</span>
                </label>
                <input
                  type="range"
                  min={12}
                  max={120}
                  step={12}
                  value={calc.term}
                  onChange={e => setCalc(p => ({ ...p, term: Number(e.target.value) }))}
                  className="w-full"
                  style={{ accentColor: '#0b2545' }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>12 mo</span><span>120 mo</span>
                </div>
              </div>
            </div>
            <div style={{ background: '#0b2545', padding: '2.5rem', textAlign: 'center' }}>
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(201,168,76,0.8)', fontWeight: 600 }}>
                Estimated Monthly Payment
              </div>
              <div className="font-display font-bold mb-2" style={{ color: '#c9a84c', fontSize: '3.5rem', lineHeight: 1 }}>
                ${payment.toLocaleString()}
              </div>
              <div className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                /month at 6.99% APR · {calc.term} months
              </div>
              <div className="gold-line mx-auto mb-5" />
              <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                This is an estimate. Actual rate and payment depend on your credit profile and final project cost.
              </p>
              <Link to="/contact" className="btn-primary block text-center">Get Exact Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Process</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              How Financing Works
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center">
                <div
                  className="font-display font-bold mx-auto mb-5 flex items-center justify-center"
                  style={{ width: 56, height: 56, background: i === 0 ? '#0b2545' : '#eaf2ff', border: '2px solid #0b2545', borderRadius: '50%', color: i === 0 ? '#fff' : '#0b2545', fontSize: '0.875rem' }}
                >
                  {step.num}
                </div>
                <h3 className="font-display font-semibold mb-2" style={{ color: '#0b2545' }}>{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#f8faff' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">FAQ</div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0b2545', fontWeight: 600 }}>
              Financing Questions Answered
            </h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid rgba(11,37,69,0.1)', background: '#fff' }}>
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold" style={{ color: '#0b2545' }}>{faq.q}</span>
                  <span style={{ color: '#c9a84c', fontSize: '1.25rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {activeFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: activeFaq === i ? 200 : 0 }}>
                  <p className="px-6 pb-6 text-gray-500" style={{ lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
