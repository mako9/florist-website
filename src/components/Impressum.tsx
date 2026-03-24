import { Link } from 'react-router-dom'
import { config } from '../config'
import { useI18n } from '../useI18n'
import Nav from './Nav'
import Footer from './Footer'

export default function Impressum() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col">
      <Nav />

      <section className="bg-stone-100 py-20 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">{t.impressum.title}</h1>
        <p className="text-stone-500 text-sm uppercase tracking-widest">{t.impressum.subtitle}</p>
      </section>

      <section className="flex-1 bg-stone-50 py-16 px-6">
        <div className="max-w-2xl mx-auto space-y-12">

          <div>
            <h2 className="font-serif text-xl text-stone-800 mb-4">{t.impressum.legalInfo}</h2>
            <div className="text-stone-600 text-sm leading-relaxed space-y-1">
              <p className="font-medium text-stone-800">{config.site.name}</p>
              <p>{config.business.address}</p>
              <p>
                <a
                  href={`tel:${config.business.phone}`}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {config.business.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${config.business.email}`}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {config.business.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl text-stone-800 mb-4">{t.impressum.disclaimer}</h2>
            <p className="text-stone-600 text-sm leading-relaxed">{t.impressum.disclaimerText}</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-stone-800 mb-4">{t.impressum.linksDisclaimer}</h2>
            <p className="text-stone-600 text-sm leading-relaxed">{t.impressum.linksDisclaimerText}</p>
          </div>

          <Link
            to="/"
            className="inline-block text-sm uppercase tracking-wider text-stone-500 hover:text-emerald-700 transition-colors border-b border-stone-300 hover:border-emerald-700 pb-0.5"
          >
            ← {config.site.name}
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  )
}
