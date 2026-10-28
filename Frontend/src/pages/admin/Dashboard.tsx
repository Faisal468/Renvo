import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  API_BASE,
  clearAdminToken,
  deleteCMSImage,
  fetchCMSContent,
  fetchCMSImages,
  getAdminToken,
  saveCMSContent,
  uploadCMSImage,
} from '../../lib/cms'

export default function Dashboard() {
  const navigate = useNavigate()
  const [contentJson, setContentJson] = useState('')
  const [images, setImages] = useState<Array<{ id: string; url: string; originalName: string }>>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const token = useMemo(() => getAdminToken(), [])

  useEffect(() => {
    if (!token) {
      navigate('/admin')
      return
    }

    setLoading(true)
    Promise.all([fetchCMSContent(), fetchCMSImages()])
      .then(([content, imagesData]) => {
        setContentJson(JSON.stringify(content, null, 2))
        setImages(imagesData)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [navigate, token])

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    setMessage(null)
    try {
      const parsed = JSON.parse(contentJson)
      await saveCMSContent(parsed)
      setMessage('Content saved successfully.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save content.')
    } finally {
      setSaving(false)
    }
  }

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setError(null)
    setMessage(null)
    try {
      const image = await uploadCMSImage(file)
      setImages(prev => [...prev, image])
      setMessage('Image uploaded successfully.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.')
    }
  }

  const handleDeleteImage = async (id: string) => {
    if (!window.confirm('Delete this image from the library?')) return
    setError(null)
    setMessage(null)
    try {
      await deleteCMSImage(id)
      setImages(prev => prev.filter(image => image.id !== id))
      setMessage('Image removed successfully.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to delete image.')
    }
  }

  const logout = () => {
    clearAdminToken()
    navigate('/admin')
  }

  return (
    <div className="min-h-screen" style={{ background: '#f5f8ff', padding: '3rem 1.5rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display" style={{ fontSize: '2rem', color: '#0b2545' }}>
              Renovvo Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl" style={{ lineHeight: 1.8 }}>
              Manage site content and image uploads for the Renovvo website. Changes are saved to the backend and can be used by any page that loads CMS content.
            </p>
          </div>
          <button
            onClick={logout}
            className="btn-primary"
            style={{ background: '#0b2545', color: '#ffffff', padding: '0.85rem 1.5rem' }}
          >
            Log out
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <section style={{ background: '#ffffff', borderRadius: 24, padding: '2rem', minHeight: 520, boxShadow: '0 20px 40px rgba(11,37,69,0.08)' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">Content JSON</div>
                <h2 className="font-display mt-2" style={{ fontSize: '1.45rem', color: '#0b2545' }}>
                  Edit site content structure
                </h2>
              </div>
              <button
                onClick={handleSave}
                className="btn-primary"
                style={{ background: '#c9a84c', color: '#071830', padding: '0.85rem 1.25rem', fontSize: '0.85rem' }}
                disabled={saving}
              >
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4" style={{ lineHeight: 1.7 }}>
              The content object is used by pages to render headings, text, and image URLs. Use the uploaded image URLs in text fields or page hero objects.
            </p>
            <textarea
              value={contentJson}
              onChange={e => setContentJson(e.target.value)}
              className="w-full h-[520px] rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-mono text-slate-900"
              style={{ minHeight: 520, resize: 'vertical' }}
            />
            {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
            {message && <div className="mt-4 text-sm text-emerald-700">{message}</div>}
          </section>

          <section style={{ background: '#ffffff', borderRadius: 24, padding: '2rem', boxShadow: '0 20px 40px rgba(11,37,69,0.08)' }}>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">Image Library</div>
              <h2 className="font-display mt-2" style={{ fontSize: '1.45rem', color: '#0b2545' }}>
                Upload and manage images
              </h2>
            </div>
            <label className="block mb-4">
              <span className="text-sm font-medium text-slate-700">Upload a new image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="mt-3 block w-full text-sm text-slate-700"
              />
            </label>
            <div className="space-y-4">
              {loading ? (
                <div className="text-sm text-slate-500">Loading images…</div>
              ) : images.length === 0 ? (
                <div className="text-sm text-slate-500">No uploaded images yet.</div>
              ) : (
                images.map(image => (
                  <div key={image.id} className="rounded-3xl border border-slate-200 overflow-hidden bg-slate-50">
                    <img src={`${API_BASE}${image.url}`} alt={image.originalName} className="w-full object-cover" style={{ maxHeight: 180, width: '100%' }} />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-slate-900">{image.originalName}</p>
                      <p className="text-xs text-slate-500 break-all">{`${API_BASE}${image.url}`}</p>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="mt-3 btn-primary"
                        style={{ background: '#ef4444', color: '#ffffff', padding: '0.6rem 1rem', fontSize: '0.8rem' }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
