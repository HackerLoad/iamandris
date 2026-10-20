import type { RouteKey } from '../i18n/routes'

export const SECTION_IDS: Record<RouteKey, string> = {
  home: 'top',
  projects: 'projects',
  about: 'about',
  contact: 'contact',
}

// Welche Section liegt gerade in der Bildschirmmitte?
export function sectionAtViewportCenter(): RouteKey | null {
  const mid = window.innerHeight / 2
  for (const [key, id] of Object.entries(SECTION_IDS) as [RouteKey, string][]) {
    const r = document.getElementById(id)?.getBoundingClientRect()
    if (r && r.top <= mid && r.bottom > mid) return key
  }
  return null
}
