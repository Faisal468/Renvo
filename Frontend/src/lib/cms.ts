export const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:4000'
const ADMIN_TOKEN_KEY = 'renovvo_admin_token'

export type CMSContent = Record<string, any>

export function getAdminToken() {
  return window.localStorage.getItem(ADMIN_TOKEN_KEY) ?? ''
}

export function setAdminToken(token: string) {
  window.localStorage.setItem(ADMIN_TOKEN_KEY, token)
}

export function clearAdminToken() {
  window.localStorage.removeItem(ADMIN_TOKEN_KEY)
}

export async function loginAdmin(password: string) {
  const resp = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  if (!resp.ok) {
    throw new Error('Invalid admin password')
  }
  const data = await resp.json()
  return data.token as string
}

export async function fetchCMSContent(page?: string) {
  const url = new URL(`${API_BASE}/api/content`)
  if (page) url.searchParams.set('page', page)
  const resp = await fetch(url.toString())
  if (!resp.ok) {
    throw new Error('Unable to fetch CMS content')
  }
  return (await resp.json()) as CMSContent
}

export async function saveCMSContent(content: CMSContent) {
  const token = getAdminToken()
  const resp = await fetch(`${API_BASE}/api/content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-token': token,
    },
    body: JSON.stringify({ content }),
  })
  if (!resp.ok) {
    throw new Error('Unable to save CMS content')
  }
  return (await resp.json()) as { success: boolean; content: CMSContent }
}

export async function fetchCMSImages() {
  const resp = await fetch(`${API_BASE}/api/images`)
  if (!resp.ok) {
    throw new Error('Unable to fetch CMS images')
  }
  return (await resp.json()) as Array<{ id: string; url: string; originalName: string }>
}

export async function uploadCMSImage(file: File) {
  const token = getAdminToken()
  const form = new FormData()
  form.append('image', file)
  const resp = await fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    headers: { 'x-admin-token': token },
    body: form,
  })
  if (!resp.ok) {
    throw new Error('Unable to upload image')
  }
  return (await resp.json()) as { id: string; url: string; originalName: string }
}

export async function deleteCMSImage(id: string) {
  const token = getAdminToken()
  const resp = await fetch(`${API_BASE}/api/images/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': token },
  })
  if (!resp.ok) {
    throw new Error('Unable to delete image')
  }
  return await resp.json()
}

export function mergeDeep<T>(target: T, source: Partial<T>): T {
  if (typeof target !== 'object' || target === null) return source as T
  const output = Array.isArray(target) ? [...(target as any)] : { ...(target as any) }
  if (typeof source !== 'object' || source === null) return output
  Object.keys(source).forEach(key => {
    const sourceValue = (source as any)[key]
    const targetValue = (output as any)[key]
    if (Array.isArray(sourceValue)) {
      ;(output as any)[key] = sourceValue
    } else if (typeof sourceValue === 'object' && sourceValue !== null && typeof targetValue === 'object' && targetValue !== null) {
      ;(output as any)[key] = mergeDeep(targetValue, sourceValue)
    } else {
      ;(output as any)[key] = sourceValue
    }
  })
  return output
}
