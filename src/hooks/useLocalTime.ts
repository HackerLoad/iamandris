import { useEffect, useState } from 'react'

const fmt = new Intl.DateTimeFormat('de-DE', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Europe/Berlin',
})

export function useLocalTime(active: boolean) {
  const [time, setTime] = useState(() => fmt.format(new Date()))

  useEffect(() => {
    if (!active) return
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [active])

  return time
}
