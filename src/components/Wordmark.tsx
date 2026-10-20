import { useEffect, useRef, useState } from 'react'

const TEXT = 'IAMANDRIS'
const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#/_[]01'
const DURATION = 300
const STEP = 40

const original = TEXT.split('')

function randomChar() {
  return POOL[Math.floor(Math.random() * POOL.length)]
}

export function Wordmark({ scrambleKey }: { scrambleKey: number }) {
  const refs = useRef<(HTMLSpanElement | null)[]>([])
  const [chars, setChars] = useState(original)

  useEffect(() => {
    if (scrambleKey === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = refs.current
    // Breite pro Buchstabe einfrieren, damit nichts springt
    const widths = els.map((el) => el?.offsetWidth ?? 0)
    els.forEach((el, i) => {
      if (el) el.style.width = `${widths[i]}px`
    })

    const start = performance.now()
    const id = setInterval(() => {
      const t = performance.now() - start
      if (t >= DURATION) {
        clearInterval(id)
        setChars(original)
        els.forEach((el) => {
          if (el) el.style.width = ''
        })
        return
      }
      const locked = Math.floor((t / DURATION) * TEXT.length)
      setChars(original.map((c, i) => (i < locked ? c : randomChar())))
    }, STEP)

    return () => {
      clearInterval(id)
      setChars(original)
      els.forEach((el) => {
        if (el) el.style.width = ''
      })
    }
  }, [scrambleKey])

  return (
    <span className="wordmark display" aria-hidden="true">
      {chars.map((c, i) => (
        <span
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          className={i < 3 ? 'wm-light' : undefined}
        >
          {c}
        </span>
      ))}
    </span>
  )
}
