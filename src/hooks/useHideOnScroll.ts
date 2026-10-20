import { useEffect, useRef, useState } from 'react'

const THRESHOLD = 80

export function useHideOnScroll(locked: boolean) {
  const [hidden, setHidden] = useState(false)
  const lockedRef = useRef(locked)

  useEffect(() => {
    lockedRef.current = locked
    if (locked) setHidden(false)
  }, [locked])

  useEffect(() => {
    let last = window.scrollY
    let ticking = false

    const update = () => {
      ticking = false
      const y = window.scrollY
      const dy = y - last
      if (lockedRef.current || y <= THRESHOLD) setHidden(false)
      else if (dy > 0) setHidden(true)
      else if (dy < 0) setHidden(false)
      last = y
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}
