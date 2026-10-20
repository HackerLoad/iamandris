import { useLang } from '../i18n/LangContext'
import { GITHUB, LINKEDIN, MAIL } from '../lib/links'
import './ContactSection.css'

const HREFS = [MAIL, GITHUB, LINKEDIN]

export function ContactSection() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <h2 className="display contact-title" data-reveal="wipe">{t.pages.contact.name}</h2>
        <p className="contact-sub" data-reveal="fade">{c.sub}</p>
      </div>

      <ul>
        {c.rows.map((r, i) => {
          const external = HREFS[i].startsWith('http')
          return (
            <li key={r.k} data-reveal="fade">
              <a
                className="contact-row"
                href={HREFS[i]}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                <span className="display contact-name">{r.k}</span>
                <span className="label contact-val">{r.v}</span>
                <span className="label">[→]</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
