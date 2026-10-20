export const LANGS = ['de', 'en'] as const
export type Lang = (typeof LANGS)[number]

export const ROUTES = {
  home: { de: '', en: '' },
  projects: { de: 'projekte', en: 'projects' },
  about: { de: 'ueber-mich', en: 'about' },
  contact: { de: 'kontakt', en: 'contact' },
} as const

export const LEGAL = {
  privacy: { de: 'datenschutz', en: 'privacy' },
  imprint: { de: 'impressum', en: 'imprint' },
} as const

export type LegalKey = keyof typeof LEGAL

export function legalPath(lang: Lang, key: LegalKey): string {
  return `/${lang}/${LEGAL[key][lang]}`
}

export function legalFromSlug(lang: Lang, slug: string): LegalKey | null {
  return (Object.keys(LEGAL) as LegalKey[]).find((k) => LEGAL[k][lang] === slug) ?? null
}

export type RouteKey = keyof typeof ROUTES
export const ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[]

export function isLang(v: string | undefined): v is Lang {
  return v === 'de' || v === 'en'
}

export function buildPath(lang: Lang, key: RouteKey): string {
  const slug = ROUTES[key][lang]
  return slug ? `/${lang}/${slug}` : `/${lang}`
}

export function keyFromSlug(lang: Lang, slug: string): RouteKey | null {
  return ROUTE_KEYS.find((k) => ROUTES[k][lang] === slug) ?? null
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de'
}

export function readStored(name: string): string | null {
  try {
    return localStorage.getItem(name)
  } catch {
    return null
  }
}

export function writeStored(name: string, value: string) {
  try {
    localStorage.setItem(name, value)
  } catch {
    /* ignore */
  }
}
