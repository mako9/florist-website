import { Heart, Calendar, Flower2, type LucideIcon } from 'lucide-react'
import { useI18n } from '../useI18n'

interface Service {
  Icon: LucideIcon
  title: string
  description: string
}

export default function Services() {
  const { t } = useI18n()

  const services: Service[] = [
    {
      Icon: Heart,
      title: t.services.items[0].title,
      description: t.services.items[0].description,
    },
    {
      Icon: Calendar,
      title: t.services.items[1].title,
      description: t.services.items[1].description,
    },
    {
      Icon: Flower2,
      title: t.services.items[2].title,
      description: t.services.items[2].description,
    },
  ]

  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif mb-3">{t.services.headline}</h2>
        <div className="h-1 w-20 bg-emerald-700 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100"
          >
            <Icon className="w-8 h-8 mb-4 text-emerald-700" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-stone-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
