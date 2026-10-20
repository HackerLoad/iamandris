import { Link } from 'react-router'
import { useLang } from '../i18n/LangContext'
import { buildPath } from '../i18n/routes'
import { Carousel } from './Carousel'
import './Showcase.css'

function Section({ n, title, hideHead, children }: { n?: number; title: string; hideHead?: boolean; children: React.ReactNode }) {
  return (
    <section className="sc-section">
      {!hideHead && (
      <header className="sc-head label">
        {n !== undefined && <span>[{String(n).padStart(2, '0')}]</span>}
        <span>{title}</span>
      </header>
      )}
      {children}
    </section>
  )
}

function Img({ ratio, caption, className }: { ratio?: string; caption: string; className?: string }) {
  return (
    <figure className={`sc-img${className ? ` ${className}` : ''}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
      <figcaption className="label">[{caption}]</figcaption>
    </figure>
  )
}

export function Showcase({ top = false }: { top?: boolean }) {
  const { lang, t } = useLang()
  const s = t.showcase

  return (
    <div className="sc">
      <Section n={1} title={s.s01} hideHead={top}>
        <div className="sc-grid">
          <div className="sc-cell sc-c12">
            <p className="label">H1 / DISPLAY</p>
            <h2 className="display sc-h1" data-reveal="wipe">
              {s.lead}
              <span className="label sc-sup">[{s.leadTag}]</span>
            </h2>
          </div>
          <div className="sc-cell sc-c12 sc-carousel-cell" data-reveal="fade">
            <Carousel />
          </div>
        </div>
      </Section>

      {!top && (
        <>
      <Section n={2} title={s.s02}>
        <div className="sc-cell sc-btns">
          <button type="button" className="btn btn-primary label">[{s.btnPrimary}]</button>
          <button type="button" className="btn label">[{s.btnSecondary}]</button>
          <button type="button" className="btn btn-accent label">[{s.btnAccent}]</button>
          <button type="button" className="btn label" disabled>[{s.btnDisabled}]</button>
          <Link className="sc-link label" to={buildPath(lang, 'contact')}>[→ {t.pages.contact.name}]</Link>
        </div>
        <Link className="sc-cta" to={buildPath(lang, 'contact')}>
          <span className="display sc-cta-title">{s.ctaTitle}</span>
          <span className="label">[{s.ctaBtn} →]</span>
        </Link>
      </Section>
        </>
      )}

      {!top && (
        <>
      <Section n={3} title={s.s03}>
        <div className="sc-bento">
          <div className="sc-cell b-a">
            <p className="label">[A] 7×2</p>
            <h3 className="display sc-h1">{s.bentoTitle}</h3>
            <div>
              <p className="sc-mt">{s.bentoText}</p>
              <p className="sc-mt"><button type="button" className="btn btn-primary label">[{s.btnPrimary}]</button></p>
            </div>
          </div>
          <div className="sc-cell b-b sc-accent">
            <p className="label">[B] {s.bentoStat}</p>
            <p className="display sc-stat">07</p>
          </div>
          <Img className="b-c" caption="C 5×1" />
          <div className="sc-cell b-d">
            <p className="label">[D] {s.bentoStack}</p>
            <ul className="sc-list">
              <li>REACT 19</li>
              <li>TYPESCRIPT</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="sc-cell b-e sc-inv">
            <p className="label">[E]</p>
            <p className="display sc-quote">{s.quote}</p>
          </div>
          <div className="sc-cell b-f">
            <p className="label">[F] {s.bentoStatus}</p>
            <p className="display sc-h2">{s.available}</p>
          </div>
        </div>
      </Section>

      <Section n={4} title={s.s04}>
        <div className="sc-grid">
          <Img className="sc-c8" ratio="16 / 9" caption="16:9" />
          <Img className="sc-c4" ratio="4 / 5" caption="4:5" />
          <Img className="sc-c4" ratio="1 / 1" caption="1:1" />
          <div className="sc-cell sc-c8">
            <p className="label">{s.figCaption} 01</p>
            <p>{s.body1}</p>
          </div>
        </div>
      </Section>

      <Section n={5} title={s.s05}>
        <form className="sc-grid" onSubmit={(e) => e.preventDefault()}>
          <label className="sc-field sc-c6">
            <span className="label">{s.formName}</span>
            <input type="text" name="name" autoComplete="off" />
          </label>
          <label className="sc-field sc-c6">
            <span className="label">{s.formMail} · {s.formHint}</span>
            <input type="email" name="mail" autoComplete="off" />
          </label>
          <label className="sc-field sc-c12">
            <span className="label">{s.formMsg}</span>
            <textarea name="msg" rows={4} />
          </label>
          <div className="sc-cell sc-c12">
            <button type="submit" className="btn btn-accent label">[{s.formSend}]</button>
          </div>
        </form>
      </Section>

      <Section n={6} title={s.s06}>
        <ul>
          {s.projects.map((p, i) => (
            <li key={p.name}>
              <a className="sc-proj" href={p.url} target="_blank" rel="noreferrer">
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                <span className="display sc-proj-name">{p.name}</span>
                <span className="label sc-hide-s">{p.tags.join(' / ')}</span>
                <span className="label">{p.year}</span>
                <span className="label">[→]</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section n={7} title={s.s07}>
        <div className="sc-cell sc-tags">
          {s.tags.map((tag, i) => (
            <span key={tag} className={`tag label${i === 1 ? ' tag-on' : ''}${i === 2 ? ' tag-accent' : ''}`}>
              [{tag}]
            </span>
          ))}
          <span className="tag tag-accent label">[{s.available}]</span>
          <span className="tag label">[v1.0.0]</span>
        </div>
      </Section>

      <Section n={8} title={s.s08}>
        <div className="sc-grid">
          <div className="sc-cell sc-c4 sw sw-paper"><p className="label">--paper</p></div>
          <div className="sc-cell sc-c4 sw sw-forest"><p className="label">--forest</p></div>
          <div className="sc-cell sc-c4 sw sw-night"><p className="label">--night</p></div>
          <div className="sc-cell sc-c12 sc-spacing">
            {[4, 8, 12, 24, 48, 96].map((n) => (
              <div key={n} className="sc-space">
                <span className="sc-bar" style={{ width: `var(--s-${n})` }} />
                <span className="label">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
        </>
      )}
    </div>
  )
}
