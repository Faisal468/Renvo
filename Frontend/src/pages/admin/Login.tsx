import { useState } from 'react'
import { useNavigate } from 'react-router'
import { loginAdmin, setAdminToken } from '../../lib/cms'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const token = await loginAdmin(password)
      setAdminToken(token)
      navigate('/admin/dashboard')
    } catch (err) {
      setError('Incorrect password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0b2545' }}>
      <div className="w-full max-w-xl p-10" style={{ background: '#ffffff', borderRadius: 16, boxShadow: '0 30px 80px rgba(7,24,48,0.25)' }}>
        <h1 className="font-display mb-6" style={{ fontSize: '2rem', color: '#0b2545' }}>
          Renovvo Admin Login
        </h1>
        <p className="mb-8 text-gray-600" style={{ lineHeight: 1.8 }}>
          Enter the admin password to manage site content and image uploads.
        </p>
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#0b2545' }}>
              Admin password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-md border px-4 py-3"
              style={{ borderColor: '#cbd5e1', outline: 'none' }}
              required
            />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button
            type="submit"
            className="btn-primary w-full"
            style={{ padding: '1rem', fontSize: '0.95rem', background: '#c9a84c', color: '#071830' }}
            disabled={loading}
          >
            {loading ? 'Checking…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
