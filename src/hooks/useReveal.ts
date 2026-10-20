import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Blendet Elemente mit [data-reveal] ein, sobald sie im Sichtbereich liegen. */
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
