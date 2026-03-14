import { MapPin, Phone, Mail, type LucideIcon } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'

interface ContactItem {
  Icon: LucideIcon
  text: string
}

export default function Contact() {
  const { t } = useI18n()

  const CONTACT_ITEMS: ContactItem[] = [
    { Icon: MapPin, text: config.business.address },
    { Icon: Phone, text: config.business.phone },
    { Icon: Mail, text: config.business.email },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-4">{t.contact.headline}</h2>
        <p className="text-stone-600 mb-8 leading-relaxed">{t.contact.description}</p>
        <ul className="space-y-4">
          {CONTACT_ITEMS.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-4">
              <Icon className="text-emerald-700 shrink-0" size={20} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
