import { Link } from 'react-router-dom'
import { config } from '../config'
import { useI18n } from '../useI18n'

export default function Footer() {
  const { t } = useI18n()
  const copyright = t.footer.copyright.replace('{year}', String(new Date().getFullYear()))

  return (
    <footer className="bg-stone-800 text-stone-400 text-sm text-center py-8 px-6">
      <p className="font-serif text-stone-200 text-lg mb-1">{config.site.name}</p>
      <p>{copyright}</p>
      <p className="mt-3">
        <Link to="/impressum" className="hover:text-stone-200 transition-colors underline underline-offset-4">
          {t.footer.impressum}
        </Link>
      </p>
    </footer>
  )
}
