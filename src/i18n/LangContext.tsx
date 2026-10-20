import { createContext, useContext } from 'react'
import type { Dict } from './de'
import type { Lang, RouteKey } from './routes'

export interface LangValue {
  lang: Lang
  routeKey: RouteKey
  t: Dict
}

export const LangContext = createContext<LangValue | null>(null)

export function useLang(): LangValue {
  const v = useContext(LangContext)
  if (!v) throw new Error('useLang outside LangContext')
  return v
}
