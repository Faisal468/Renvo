import { useEffect, useState } from 'react'
import { fetchCMSContent, mergeDeep, type CMSContent } from '../lib/cms'

export default function useCMSContent<T extends CMSContent>(page: string, defaults: T) {
  const [content, setContent] = useState<T>(defaults)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchCMSContent(page)
      .then(remote => {
        if (!mounted) return
        setContent(mergeDeep(defaults, remote))
      })
      .catch(err => {
        if (!mounted) return
        setError(err.message)
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [page])

  return { content, loading, error }
}
