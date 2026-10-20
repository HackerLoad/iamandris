import { de } from './de'
import { en } from './en'
import type { Dict } from './de'
import type { Lang } from './routes'

export const dictionaries: Record<Lang, Dict> = { de, en }
