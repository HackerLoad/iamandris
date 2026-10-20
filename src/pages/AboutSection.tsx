import { Link } from 'react-router'
import { useLang } from '../i18n/LangContext'
import { buildPath } from '../i18n/routes'
import portrait from '../assets/portrait.webp'
import './AboutSection.css'

export function AboutSection() {
  const { lang, t } = useLang()
  const a = t.about

  return (
    <section className="about" id="about">
      <figure className="about-img">
        <img src={portrait} alt="" draggable={false} />
        <figcaption className="label">[{a.portrait}]</figcaption>
      </figure>

      <div className="about-main">
        <div className="about-top">
          <h2 className="display about-title">{t.pages.about.name}</h2>
        </div>

        <div className="about-text">
          {a.text.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="about-facts">
          {a.facts.map((f) => (
            <div key={f.k} className="about-fact">
              <dt className="label">{f.k}</dt>
              <dd className="label">{f.v}</dd>
            </div>
          ))}
        </dl>

        <Link className="about-cta" to={buildPath(lang, 'contact')}>
          <span className="label">[{a.contact} →]</span>
        </Link>
      </div>
    </section>
  )
}
