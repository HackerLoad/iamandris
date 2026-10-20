import { Navigate, useParams } from 'react-router'
import { useLang } from '../i18n/LangContext'
import { LANGS, ROUTE_KEYS, buildPath, keyFromSlug, legalFromSlug } from '../i18n/routes'
import { LegalPage } from './LegalPage'
import { SECTION_IDS } from '../lib/sections'

export function SlugPage() {
  const { lang } = useLang()
  const { slug = '' } = useParams()
  const key = keyFromSlug(lang, slug)
  const legal = legalFromSlug(lang, slug)
  if (legal) return <LegalPage kind={legal} />

  const toSection = (k: keyof typeof SECTION_IDS) => (
    <Navigate to={{ pathname: buildPath(lang, 'home'), hash: `#${SECTION_IDS[k]}` }} replace />
  )

  if (key && key !== 'home') return toSection(key)

  // Slug aus anderer Sprache -> korrekte lokalisierte Route
  for (const l of LANGS) {
    const k = keyFromSlug(l, slug)
    if (k && ROUTE_KEYS.includes(k)) return toSection(k)
  }
  return <Navigate to={buildPath(lang, 'home')} replace />
}
