import { Link } from 'react-router-dom'
import { config } from '../config'
import { localeOptions, useI18n } from '../i18n'

export default function Nav() {
  const { t, locale, setLocale } = useI18n()

  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav className="flex justify-between items-center px-6 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
      <Link to="/" className="text-2xl font-serif tracking-widest uppercase text-stone-800">
        {config.site.name}
      </Link>
      <div className="hidden md:flex gap-8 items-center font-medium text-sm uppercase tracking-wider">
        {links.map(({ label, href }) => (
          <a key={href} href={href} className="hover:text-emerald-700 transition-colors">
            {label}
          </a>
        ))}
        <label className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider">
          <span>{t.nav.language}:</span>
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
            className="text-xs uppercase border border-stone-200 rounded-md px-2 py-1 bg-white text-stone-700"
          >
            {localeOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="md:hidden flex items-center gap-2">
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value as Locale)}
          className="text-xs uppercase border border-stone-200 rounded-md px-2 py-1 bg-white text-stone-700"
        >
          {localeOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  )
}
