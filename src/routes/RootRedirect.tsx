import { Navigate } from 'react-router'
import { isLang, readStored } from '../i18n/routes'

export function RootRedirect() {
  const stored = readStored('lang') ?? undefined
  const lang = isLang(stored)
    ? stored
    : navigator.language.toLowerCase().startsWith('en')
      ? 'en'
      : 'de'
  return <Navigate to={`/${lang}`} replace />
}
