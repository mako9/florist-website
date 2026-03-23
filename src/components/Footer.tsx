import { config } from '../config'
import { useI18n } from '../useI18n'

export default function Footer() {
  const { t } = useI18n()
  const copyright = t.footer.copyright.replace('{year}', String(new Date().getFullYear()))

  return (
    <footer className="bg-stone-800 text-stone-400 text-sm text-center py-8 px-6">
      <p className="font-serif text-stone-200 text-lg mb-1">{config.site.name}</p>
      <p>{copyright}</p>
    </footer>
  )
}
