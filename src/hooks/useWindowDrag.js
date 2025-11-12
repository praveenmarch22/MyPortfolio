import { useRef, useEffect } from 'react'

export default function useWindowDrag() {
  const ref = useRef(null)
  useEffect(() => {
    // placeholder: attach drag handlers to ref.current
  }, [])
  return ref
}
