import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useTheme } from '../theme/useTheme'
import { useLang } from '../i18n/LangContext'
import { ROUTE_KEYS, buildPath, otherLang, writeStored } from '../i18n/routes'
import { useLocalTime } from '../hooks/useLocalTime'
import { SECTION_IDS, sectionAtViewportCenter } from '../lib/sections'
import type { RouteKey } from '../i18n/routes'
import { GITHUB, LINKEDIN, MAIL } from '../lib/links'
import './Menu.css'

interface Props {
  open: boolean
  onClose: () => void
}

function Half({ long, short, active }: { long: string; short: string; active: boolean }) {
  return (
    <span className={active ? 'half on' : 'half'}>
      <span className="long">{long}</span>
      <span className="short">{short}</span>
    </span>
  )
}

export function Menu({ open, onClose }: Props) {
  const { lang, routeKey, t } = useLang()
  const time = useLocalTime(open)
  const { theme, toggle } = useTheme()
  const target = otherLang(lang)
  const { pathname } = useLocation()
  const onHome = pathname === buildPath(lang, 'home')
  const [section, setSection] = useState<RouteKey | null>(null)

  useEffect(() => {
    if (open && onHome) setSection(sectionAtViewportCenter())
  }, [open, onHome])

  const jump = (e: React.MouseEvent, key: RouteKey) => {
    onClose()
    if (!onHome) return
    e.preventDefault()
    requestAnimationFrame(() =>
      document.getElementById(SECTION_IDS[key])?.scrollIntoView(),
    )
  }

  return (
    <div
      id="site-menu"
      className={`menu${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.menu.aria}
    >
      <ol className="menu-list">
        {ROUTE_KEYS.map((key, i) => {
          const current = key === (onHome ? section : routeKey)
          return (
            <li key={key} style={{ '--i': i } as React.CSSProperties}>
              <Link
                className="menu-row"
                to={{ pathname: buildPath(lang, 'home'), hash: `#${SECTION_IDS[key]}` }}
                aria-current={current ? 'location' : undefined}
                onClick={(e) => jump(e, key)}
              >
                <span className="label menu-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="display menu-name">{t.pages[key].name}</span>
                <span className="label menu-status">
                  {current ? (
                    <>[{t.menu.current}]</>
                  ) : (
                    <span className="menu-arrow">[→]</span>
                  )}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>

      <div
        className="menu-foot label"
        style={{ '--i': ROUTE_KEYS.length } as React.CSSProperties}
      >
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          [{t.menu.github}]
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          [{t.menu.linkedin}]
        </a>
        <a href={MAIL}>[{t.menu.mail}]</a>
        <Link
          className="menu-toggle"
          to={buildPath(target, routeKey)}
          hrefLang={target}
          lang={target}
          aria-label={target === 'en' ? t.nav.langToEn : t.nav.langToDe}
          onClick={() => writeStored('lang', target)}
        >
          [<Half long="DE" short="DE" active={lang === 'de'} />/
          <Half long="EN" short="EN" active={lang === 'en'} />]
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
          onClick={toggle}
        >
          [<Half long="LIGHT" short="L" active={theme === 'light'} />/
          <Half long="DARK" short="D" active={theme === 'dark'} />]
        </button>
        <span className="menu-time">
          {t.menu.city} — {time}
        </span>
      </div>
    </div>
  )
}
