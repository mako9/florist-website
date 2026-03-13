import { Heart, Calendar, Flower2, type LucideIcon } from 'lucide-react'

interface Service {
  Icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    Icon: Heart,
    title: 'Weddings',
    description:
      'Full-service floral design for your special day, from bouquets to venue installations.',
  },
  {
    Icon: Calendar,
    title: 'Events',
    description:
      'Corporate events, parties, and intimate dinners styled with seasonal blooms.',
  },
  {
    Icon: Flower2,
    title: 'Subscriptions',
    description: 'Weekly or monthly fresh flower deliveries for your home or office.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif mb-3">Our Services</h2>
        <div className="h-1 w-20 bg-emerald-700 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map(({ Icon, title, description }) => (
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
