import { useCallback, useEffect, useState } from 'react'
import { readStored, writeStored } from '../i18n/routes'

export type Theme = 'light' | 'dark'

function current(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(current)

  // Ohne manuelle Wahl dem System folgen
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (readStored('theme')) return
      const next: Theme = mq.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      setThemeState(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    writeStored('theme', next)
    setThemeState(next)
  }, [])

  return { theme, toggle }
}
