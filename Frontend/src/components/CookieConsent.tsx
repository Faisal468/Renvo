import { useState } from 'react'
import { Link } from 'react-router'

const STORAGE_KEY = 'renovvo-cookie-consent'

function readChoice(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => readChoice() === null)

  if (!visible) return null

  const choose = (choice: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // storage unavailable; the banner just won't persist
    }
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed left-4 right-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-[100] p-6"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(11,37,69,0.12)',
        boxShadow: '0 10px 40px rgba(11,37,69,0.18)',
      }}
    >
      <h2 className="font-display mb-2" style={{ color: '#0b2545', fontSize: '1.15rem', fontWeight: 600 }}>
        We value your privacy
      </h2>
      <p className="mb-5" style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
        We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All," you
        consent to our use of cookies. See our{' '}
        <Link to="/privacy-policy" style={{ color: '#0b2545', fontWeight: 600, textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose('rejected')}
          className="flex-1 py-2.5 cursor-pointer"
          style={{ border: '1px solid #0b2545', color: '#0b2545', background: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}
        >
          Reject All
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="flex-1 py-2.5 cursor-pointer"
          style={{ border: '1px solid #0b2545', color: '#ffffff', background: '#0b2545', fontWeight: 600, fontSize: '0.9rem' }}
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
