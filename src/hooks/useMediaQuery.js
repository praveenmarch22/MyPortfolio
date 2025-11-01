import { useState, useEffect } from 'react'

export default function useMediaQuery(query){
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const fn = e => setMatches(e.matches)
    setMatches(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [query])
  return matches
}
