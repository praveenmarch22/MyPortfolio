import { useEffect } from 'react'

export default function useResizeHandler(handler) {
  useEffect(() => {
    if (!handler) return
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [handler])
}
