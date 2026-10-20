import { useLang } from '../i18n/LangContext'
import type { LegalKey } from '../i18n/routes'
import './LegalPage.css'

export function LegalPage({ kind }: { kind: LegalKey }) {
  const { t } = useLang()
  const l = t.legal
  const title = kind === 'privacy' ? l.privacyTitle : l.imprintTitle
  const sections = kind === 'privacy' ? l.privacy : l.imprint

  return (
    <>
      <title>{`${title} — IAMANDRIS`}</title>
      <section className="legal-head">
        <p className="label">{(kind === 'privacy' ? l.draftPrivacy : l.draft) || `[${title}]`}</p>
        <h1 className="display legal-title">{title}</h1>
      </section>
      {sections.map((s) => (
        <section className="legal-block" key={s.h}>
          <h2 className="label">{s.h}</h2>
          <div className="legal-text">
            {(typeof s.p === 'string' ? [s.p] : s.p).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
