import { useLang } from '../i18n/LangContext'
import { Showcase } from './Showcase'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { Meta } from '../components/Meta'
import './Home.css'

const COLUMNS = Array.from({ length: 12 })

export function Home() {
  const { t } = useLang()
  const l = t.landing

  return (
    <>
      <Meta title={t.pages.home.title} routeKey="home" />
      <section className="hero" id="top">
        <div className="grid12" aria-hidden="true">
          {COLUMNS.map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <h1 className="hero-title display">
          {l.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="hero-intro">{l.intro}</p>
      </section>

      <section className="projects" id="projects">
        <Showcase top />
      </section>

      <AboutSection />

      <ContactSection />
    </>
  )
}
