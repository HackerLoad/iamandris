import { useLocation } from 'react-router'
import { useLang } from '../i18n/LangContext'
import { ROUTE_KEYS } from '../i18n/routes'
import type { RouteKey } from '../i18n/routes'
import { Meta } from '../components/Meta'

export function Page({ routeKey, children }: { routeKey: RouteKey; children?: React.ReactNode }) {
  const { t } = useLang()
  const { pathname } = useLocation()
  const num = String(ROUTE_KEYS.indexOf(routeKey) + 1).padStart(2, '0')
  const page = t.pages[routeKey]

  return (
    <>
      <Meta title={page.title} routeKey={routeKey} />
      <section className="page-cell">
        <p className="label">
          [{num}] {page.name} — {pathname}
        </p>
        <h1 className="display page-headline">{page.name}</h1>
      </section>
      {children}
    </>
  )
}
