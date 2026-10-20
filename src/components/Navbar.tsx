import { useLang } from '../i18n/LangContext'
import { useHideOnScroll } from '../hooks/useHideOnScroll'
import { Wordmark } from './Wordmark'
import './Navbar.css'

interface Props {
  open: boolean
  onToggle: () => void
  scrambleKey: number
  buttonRef: React.RefObject<HTMLButtonElement | null>
}

export function Navbar({ open, onToggle, scrambleKey, buttonRef }: Props) {
  const { t } = useLang()
  const hidden = useHideOnScroll(open)

  return (
    <header className={`navbar${open ? ' is-open' : ''}${hidden ? ' is-hidden' : ''}`}>
      <div className="spacer" />
      <button
        ref={buttonRef}
        type="button"
        className="cell menu-btn"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? t.nav.closeAria : t.nav.openAria}
        onClick={onToggle}
      >
        <Wordmark scrambleKey={scrambleKey} />
        <span className="label">[{open ? t.nav.close : t.nav.menu}]</span>
      </button>
      <div className="spacer" />
    </header>
  )
}
