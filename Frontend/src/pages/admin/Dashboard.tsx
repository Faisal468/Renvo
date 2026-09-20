import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  API_BASE,
  clearAdminToken,
  deleteCMSImage,
  fetchCMSContent,
  fetchCMSImages,
  getAdminToken,
  mergeDeep,
  saveCMSContent,
  uploadCMSImage,
} from '../../lib/cms'
import { CMS_PAGES } from '../../lib/cmsPages'
import { SchemaField, humanizeLabel } from './SchemaField'

const PAGE_GROUPS = Array.from(new Set(CMS_PAGES.map(p => p.group)))

export default function Dashboard() {
  const navigate = useNavigate()
  const token = useMemo(() => getAdminToken(), [])

  const [activeKey, setActiveKey] = useState<string>(CMS_PAGES[0].key)
  const [pageContent, setPageContent] = useState<Record<string, any>>({})
  const [images, setImages] = useState<Array<{ id: string; url: string; originalName: string }>>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!token) {
      navigate('/admin')
    }
  }, [navigate, token])

  useEffect(() => {
    if (!token) return
    setLoading(true)
    setError(null)
    setMessage(null)
    const activePage = CMS_PAGES.find(p => p.key === activeKey)!
    Promise.all([fetchCMSContent(activeKey), fetchCMSImages()])
      .then(([content, imagesData]) => {
        setPageContent(mergeDeep(activePage.defaults, content as any))
        setImages(imagesData)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [activeKey, token])

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    setMessage(null)
    try {
      await saveCMSContent({ [activeKey]: pageContent })
      setMessage('Saved — changes are live on the site now.')
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
    if (!window.confirm('Delete this image from the library? Only do this if it is not used on the site.')) return
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

  const sections = Object.entries(pageContent)
  const activePage = CMS_PAGES.find(p => p.key === activeKey)

  return (
    <div className="min-h-screen" style={{ background: '#f5f8ff', padding: '3rem 1.5rem' }}>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display" style={{ fontSize: '2rem', color: '#0b2545' }}>
              Renovvo Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl" style={{ lineHeight: 1.8 }}>
              Pick a page on the left, edit its text and photos, then save. Changes go live on the site right away.
            </p>
          </div>
          <button onClick={logout} className="btn-primary" style={{ background: '#0b2545', color: '#ffffff', padding: '0.85rem 1.5rem' }}>
            Log out
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1.4fr_0.5fr] items-start">
          <nav
            style={{ background: '#ffffff', borderRadius: 24, padding: '1.25rem', boxShadow: '0 20px 40px rgba(11,37,69,0.08)', maxHeight: 'calc(100vh - 9rem)', overflowY: 'auto', position: 'sticky', top: '1.5rem' }}
          >
            {PAGE_GROUPS.map(group => (
              <div key={group} className="mb-5 last:mb-0">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 px-2 mb-2">{group}</div>
                <div className="space-y-1">
                  {CMS_PAGES.filter(p => p.group === group).map(page => (
                    <button
                      key={page.key}
                      onClick={() => setActiveKey(page.key)}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        background: activeKey === page.key ? '#c9a84c' : 'transparent',
                        color: activeKey === page.key ? '#071830' : '#334155',
                      }}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <section style={{ background: '#ffffff', borderRadius: 24, padding: '2rem', minHeight: 520, boxShadow: '0 20px 40px rgba(11,37,69,0.08)' }}>
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <h2 className="font-display" style={{ fontSize: '1.45rem', color: '#0b2545' }}>
                {activePage?.label} Page Content
              </h2>
              <button
                onClick={handleSave}
                className="btn-primary"
                style={{ background: '#c9a84c', color: '#071830', padding: '0.85rem 1.25rem', fontSize: '0.85rem' }}
                disabled={saving || loading}
              >
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>

            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
            {message && <div className="mb-4 text-sm text-emerald-700">{message}</div>}

            {loading ? (
              <div className="text-sm text-slate-500">Loading…</div>
            ) : (
              <div className="space-y-4">
                {sections.map(([key, value], index) => (
                  <details key={key} open={index === 0} className="rounded-2xl border border-slate-200 group">
                    <summary className="cursor-pointer select-none px-4 py-3 font-semibold text-[#0b2545] list-none flex items-center justify-between">
                      {humanizeLabel(key)}
                      <span className="text-slate-400 text-sm">▾</span>
                    </summary>
                    <div className="px-4 pb-4 pt-1">
                      <SchemaField
                        fieldKey={key}
                        label=""
                        value={value}
                        onChange={next => setPageContent(prev => ({ ...prev, [key]: next }))}
                      />
                    </div>
                  </details>
                ))}
              </div>
            )}
          </section>

          <section style={{ background: '#ffffff', borderRadius: 24, padding: '2rem', boxShadow: '0 20px 40px rgba(11,37,69,0.08)' }}>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">Image Library</div>
              <h2 className="font-display mt-2" style={{ fontSize: '1.3rem', color: '#0b2545' }}>
                All uploaded images
              </h2>
              <p className="text-xs text-slate-500 mt-2" style={{ lineHeight: 1.6 }}>
                A backup list of every photo ever uploaded. To change a photo on the site, use the "Replace Image" button next to it on the left instead of this list.
              </p>
            </div>
            <label className="block mb-4">
              <span className="text-sm font-medium text-slate-700">Upload a new image</span>
              <input type="file" accept="image/*" onChange={handleUpload} className="mt-3 block w-full text-sm text-slate-700" />
            </label>
            <div className="space-y-4" style={{ maxHeight: 640, overflowY: 'auto' }}>
              {images.length === 0 ? (
                <div className="text-sm text-slate-500">No uploaded images yet.</div>
              ) : (
                images.map(image => (
                  <div key={image.id} className="rounded-3xl border border-slate-200 overflow-hidden bg-slate-50">
                    <img src={`${API_BASE}${image.url}`} alt={image.originalName} className="w-full object-cover" style={{ maxHeight: 140, width: '100%' }} />
                    <div className="p-3">
                      <p className="text-xs font-semibold text-slate-900 break-all">{image.originalName}</p>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="mt-2 btn-primary"
                        style={{ background: '#ef4444', color: '#ffffff', padding: '0.5rem 0.9rem', fontSize: '0.75rem' }}
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
