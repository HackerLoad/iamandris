import { Link } from 'react-router'
import { useLang } from '../i18n/LangContext'
import { legalPath } from '../i18n/routes'
import './Footer.css'

export function Footer() {
  const { lang, t } = useLang()

  return (
    <footer className="footer label">
      <p className="footer-copy">
        © {new Date().getFullYear()} ANDRIS — {t.footer.rights}
      </p>
      <Link className="footer-link" to={legalPath(lang, 'privacy')}>
        [{t.footer.privacy}]
      </Link>
      <Link className="footer-link" to={legalPath(lang, 'imprint')}>
        [{t.footer.imprint}]
      </Link>
    </footer>
  )
}
