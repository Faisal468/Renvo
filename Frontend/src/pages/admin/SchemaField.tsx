import { useRef, useState } from 'react'
import { API_BASE, uploadCMSImage } from '../../lib/cms'

const IMAGE_KEY_PATTERN = /image|img|logo|photo|gallery/i
const LONG_TEXT_KEY_PATTERN = /desc|text|sub|extra|content|bio|summary|disclaimer/i
const IMAGE_URL_PATTERN = /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i

function looksLikeImageUrl(value: unknown) {
  if (typeof value !== 'string' || !value) return false
  return IMAGE_URL_PATTERN.test(value) || value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/uploads') || value.startsWith('/src/assets') || value.startsWith('/assets') || value.startsWith('blob:')
}

export function humanizeLabel(key: string) {
  if (!key) return ''
  const spaced = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_-]/g, ' ')
  const withSpaces = spaced.charAt(0).toUpperCase() + spaced.slice(1)
  return withSpaces
    .split(' ')
    .map(word => (word.toLowerCase() === 'cta' ? 'CTA' : word))
    .join(' ')
}

function emptyLike(value: any): any {
  if (typeof value === 'string') return ''
  if (typeof value === 'number') return 0
  if (Array.isArray(value)) return []
  if (value && typeof value === 'object') {
    const out: Record<string, any> = {}
    Object.keys(value).forEach(k => {
      out[k] = emptyLike(value[k])
    })
    return out
  }
  return value
}

interface FieldProps {
  label: string
  value: any
  onChange: (value: any) => void
}

function ImageField({ label, value, onChange }: FieldProps) {
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const result = await uploadCMSImage(file)
      onChange(`${API_BASE}${result.url}`)
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
      {label && <div className="text-sm font-semibold text-slate-700 mb-3">{label}</div>}
      <div className="flex items-center gap-4 flex-wrap">
        <div
          className="rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center"
          style={{ width: 120, height: 80, flexShrink: 0 }}
        >
          {value ? (
            <img src={value} alt={label || 'preview'} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs text-slate-400">No image</span>
          )}
        </div>
        <label
          className="btn-primary"
          style={{ background: '#0b2545', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.8rem', cursor: 'pointer' }}
        >
          {uploading ? 'Uploading…' : 'Replace Image'}
          <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </label>
      </div>
    </div>
  )
}

function TextField({ label, value, onChange, multiline }: FieldProps & { multiline?: boolean }) {
  return (
    <div>
      {label && <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">{label}</label>}
      {multiline ? (
        <textarea
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 text-sm"
          style={{ minHeight: 90 }}
        />
      ) : (
        <input
          type="text"
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 text-sm"
        />
      )}
    </div>
  )
}

function PhotoGridField({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [uploadingCount, setUploadingCount] = useState(0)
  const addInputRef = useRef<HTMLInputElement>(null)
  const replaceInputRef = useRef<HTMLInputElement>(null)
  const replaceIndexRef = useRef<number | null>(null)
  const dragIndexRef = useRef<number | null>(null)
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const handleAddFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (files.length === 0) return
    setUploadingCount(files.length)
    try {
      const uploaded: string[] = []
      for (const file of files) {
        const result = await uploadCMSImage(file)
        uploaded.push(`${API_BASE}${result.url}`)
      }
      onChange([...value, ...uploaded])
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploadingCount(0)
      if (addInputRef.current) addInputRef.current.value = ''
    }
  }

  const startReplace = (index: number) => {
    replaceIndexRef.current = index
    replaceInputRef.current?.click()
  }

  const handleReplaceFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const index = replaceIndexRef.current
    if (!file || index === null) return
    try {
      const result = await uploadCMSImage(file)
      onChange(value.map((item, i) => (i === index ? `${API_BASE}${result.url}` : item)))
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      replaceIndexRef.current = null
      if (replaceInputRef.current) replaceInputRef.current.value = ''
    }
  }

  const removeAt = (index: number) => onChange(value.filter((_, i) => i !== index))

  const reorder = (from: number, to: number) => {
    if (from === to) return
    const next = [...value]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    onChange(next)
  }

  const clearDragState = () => {
    dragIndexRef.current = null
    setDraggingIndex(null)
    setDragOverIndex(null)
  }

  return (
    <div>
      <div className="text-xs text-slate-500 mb-3">
        {value.length} photo{value.length === 1 ? '' : 's'} — drag to reorder, click a photo to replace it, or the × to remove it.
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))' }}>
        {value.map((url, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => {
              dragIndexRef.current = index
              setDraggingIndex(index)
            }}
            onDragOver={e => {
              e.preventDefault()
              if (dragIndexRef.current !== null && dragOverIndex !== index) setDragOverIndex(index)
            }}
            onDrop={e => {
              e.preventDefault()
              const from = dragIndexRef.current
              if (from !== null) reorder(from, index)
              clearDragState()
            }}
            onDragEnd={clearDragState}
            className="relative"
            style={{
              aspectRatio: '1',
              borderRadius: 10,
              overflow: 'hidden',
              border: dragOverIndex === index && draggingIndex !== null && draggingIndex !== index ? '2px solid #c9a84c' : '1px solid #e2e8f0',
              cursor: draggingIndex === index ? 'grabbing' : 'grab',
              background: '#f8fafc',
              opacity: draggingIndex === index ? 0.4 : 1,
            }}
            onClick={() => startReplace(index)}
          >
            <img src={url} loading="lazy" className="w-full h-full object-cover" alt={`Photo ${index + 1}`} draggable={false} />
            <button
              type="button"
              onClick={e => {
                e.stopPropagation()
                removeAt(index)
              }}
              className="absolute flex items-center justify-center"
              style={{ top: 4, right: 4, width: 20, height: 20, borderRadius: '50%', background: 'rgba(7,24,48,0.75)', color: '#fff', fontSize: 13, lineHeight: 1 }}
              aria-label="Remove photo"
            >
              ×
            </button>
          </div>
        ))}
        <label
          className="flex items-center justify-center text-xs font-semibold text-slate-500 text-center px-1"
          style={{ aspectRatio: '1', borderRadius: 10, border: '2px dashed #cbd5e1', cursor: 'pointer' }}
        >
          {uploadingCount > 0 ? `Uploading ${uploadingCount}…` : '+ Add'}
          <input ref={addInputRef} type="file" accept="image/*" multiple onChange={handleAddFiles} className="hidden" />
        </label>
      </div>
      <input ref={replaceInputRef} type="file" accept="image/*" onChange={handleReplaceFile} className="hidden" />
    </div>
  )
}

function NumberField({ label, value, onChange }: FieldProps) {
  return (
    <div>
      {label && <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">{label}</label>}
      <input
        type="number"
        value={value ?? 0}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full rounded-xl border border-slate-200 p-3 text-sm"
      />
    </div>
  )
}

function ArrayField({ fieldKey, label, value, onChange }: { fieldKey: string; label: string; value: any[]; onChange: (v: any[]) => void }) {
  const isPrimitiveArray = value.every(item => item === null || typeof item !== 'object')
  const isImageArray =
    isPrimitiveArray && (IMAGE_KEY_PATTERN.test(fieldKey) || (value.length > 0 && value.every(looksLikeImageUrl)))

  const addItem = () => {
    const template = value.length > 0 ? emptyLike(value[value.length - 1]) : ''
    onChange([...value, template])
  }
  const removeItem = (index: number) => onChange(value.filter((_, i) => i !== index))
  const updateItem = (index: number, next: any) => onChange(value.map((item, i) => (i === index ? next : item)))

  if (isImageArray) {
    return (
      <div>
        {label && <div className="text-sm font-bold text-[#0b2545] mb-3">{label}</div>}
        <PhotoGridField value={value} onChange={onChange} />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        {label && <div className="text-sm font-bold text-[#0b2545]">{label}</div>}
        <button
          type="button"
          onClick={addItem}
          className="btn-primary"
          style={{ background: '#c9a84c', color: '#071830', padding: '0.4rem 0.9rem', fontSize: '0.75rem', marginLeft: 'auto' }}
        >
          + Add
        </button>
      </div>

      {value.length === 0 && <div className="text-sm text-slate-400 mb-2">No items yet.</div>}

      {isPrimitiveArray ? (
        <div className="space-y-2">
          {value.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={item ?? ''}
                onChange={e => updateItem(index, e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 text-sm"
              />
              <button type="button" onClick={() => removeItem(index)} className="text-xs font-semibold text-red-600 hover:underline whitespace-nowrap">
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {value.map((item, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 p-4 bg-white relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Item {index + 1}</div>
                <button type="button" onClick={() => removeItem(index)} className="text-xs font-semibold text-red-600 hover:underline">
                  Remove
                </button>
              </div>
              <SchemaField fieldKey={String(index)} label="" value={item} onChange={next => updateItem(index, next)} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function SchemaField({ fieldKey, label, value, onChange }: FieldProps & { fieldKey: string }) {
  if (value === null || value === undefined) {
    return <TextField label={label} value="" onChange={onChange} />
  }

  if (Array.isArray(value)) {
    return <ArrayField fieldKey={fieldKey} label={label} value={value} onChange={onChange} />
  }

  if (typeof value === 'object') {
    const fields = (
      <div className="space-y-4">
        {Object.entries(value).map(([k, v]) => (
          <SchemaField key={k} fieldKey={k} label={humanizeLabel(k)} value={v} onChange={next => onChange({ ...value, [k]: next })} />
        ))}
      </div>
    )
    if (!label) return fields
    return (
      <div className="rounded-2xl border border-slate-200 p-4">
        <div className="text-sm font-bold text-[#0b2545] mb-4">{label}</div>
        {fields}
      </div>
    )
  }

  if (typeof value === 'number') {
    return <NumberField label={label} value={value} onChange={onChange} />
  }

  if (typeof value === 'string' && IMAGE_KEY_PATTERN.test(fieldKey)) {
    return <ImageField label={label} value={value} onChange={onChange} />
  }

  const multiline = typeof value === 'string' && (value.length > 80 || LONG_TEXT_KEY_PATTERN.test(fieldKey))
  return <TextField label={label} value={value} onChange={onChange} multiline={multiline} />
}
