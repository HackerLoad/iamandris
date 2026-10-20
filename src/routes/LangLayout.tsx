import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router'
import { LangContext } from '../i18n/LangContext'
import { dictionaries } from '../i18n/dictionaries'
import { isLang, keyFromSlug } from '../i18n/routes'
import type { Lang } from '../i18n/routes'
import { Navbar } from '../components/Navbar'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function LangLayout() {
  const { lang } = useParams()
  if (!isLang(lang)) return <Navigate to="/de" replace />
  return <Shell lang={lang} />
}

const FOCUSABLE = '.navbar button, #site-menu a[href], #site-menu button'

function Shell({ lang }: { lang: Lang }) {
  const { pathname, hash } = useLocation()
  const slug = pathname.split('/').filter(Boolean)[1]
  const routeKey = (slug ? keyFromSlug(lang, slug) : null) ?? 'home'

  const [open, setOpen] = useState(false)
  const [scrambleKey, setScrambleKey] = useState(0)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])

  const toggle = useCallback(() => {
    if (open) {
      close()
    } else {
      setScrambleKey((k) => k + 1)
      setOpen(true)
    }
  }, [open, close])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    document.querySelector<HTMLElement>('#site-menu a[href]')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== 'Tab') return
      const items = Array.from(document.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null
      const inside = active ? items.includes(active) : false
      if (e.shiftKey && (!inside || active === first)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (!inside || active === last)) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [open, close])

  return (
    <LangContext.Provider value={{ lang, routeKey, t: dictionaries[lang] }}>
      <Navbar open={open} onToggle={toggle} scrambleKey={scrambleKey} buttonRef={buttonRef} />
      <Menu open={open} onClose={close} />
      <main inert={open} style={{ paddingTop: 'var(--nav-h)' }}>
        <Outlet />
        <Footer />
      </main>
    </LangContext.Provider>
  )
}
