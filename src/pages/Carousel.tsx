import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import placeholder from '../assets/project-placeholder.png'

const INTERVAL = 7000

export function Carousel() {
  const { t } = useLang()
  const s = t.showcase
  const items = s.projects
  const n = items.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const go = (dir: number) => setActive((a) => (a + dir + n) % n)

  useEffect(() => {
    if (paused || reduced.current) return
    const id = setInterval(() => setActive((a) => (a + 1) % n), INTERVAL)
    return () => clearInterval(id)
  }, [paused, n])

  const half = Math.floor(n / 2)
  const offsetOf = (i: number) => ((i - active + n + half) % n) - half

  return (
    <div
      className="car"
      role="region"
      aria-roledescription="carousel"
      aria-label={s.carouselAria}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
    >
      <div className="car-stage" aria-live={paused ? 'polite' : 'off'}>
        {items.map((p, i) => {
          const o = offsetOf(i)
          const visible = Math.abs(o) <= 1
          const body = (
            <>
              <span className="car-top label">
                <span>[{String(i + 1).padStart(2, '0')}]</span>
                <span>{p.year}</span>
              </span>
              <span className="car-img">
                <img src={placeholder} alt="" draggable={false} />
              </span>
              <span className="car-name display">{p.name}</span>
              <span className="car-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag label">
                    [{tag}]
                  </span>
                ))}
              </span>
            </>
          )
          const cls = `car-item${o === 0 ? ' is-center' : ''}`
          const style = { '--o': o } as React.CSSProperties
          return o === 0 ? (
            <a
              key={p.name}
              className={cls}
              style={style}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${s.projectAria}: ${p.name}`}
            >
              {body}
            </a>
          ) : (
            <button
              key={p.name}
              type="button"
              className={cls}
              style={style}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              onClick={() => setActive(i)}
            >
              {body}
            </button>
          )
        })}
      </div>

      <div className="car-ctrl">
        <button type="button" className="btn label" onClick={() => go(-1)}>
          [← {s.prev}]
        </button>
        <span className="label">
          {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </span>
        <button type="button" className="btn label" onClick={() => go(1)}>
          [{s.next} →]
        </button>
      </div>
    </div>
  )
}
