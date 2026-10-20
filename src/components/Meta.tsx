import { LANGS, buildPath } from '../i18n/routes'
import type { RouteKey } from '../i18n/routes'

export function Meta({ title, routeKey }: { title: string; routeKey: RouteKey }) {
  const origin = window.location.origin
  return (
    <>
      <title>{`${title} — IAMANDRIS`}</title>
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={origin + buildPath(l, routeKey)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={origin + buildPath('de', routeKey)} />
    </>
  )
}
