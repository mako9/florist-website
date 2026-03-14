import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()

  return (
    <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1490750967868-88df5691cc60?auto=format&fit=crop&q=80&w=2000"
        alt="Floral workshop"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center text-white px-8 py-10 rounded-xl bg-black/25 backdrop-blur-[2px]">
        <h1 className="text-5xl md:text-7xl font-serif mb-4">{t.hero.title}</h1>
        <p className="text-lg md:text-xl font-light italic">{t.hero.subtitle}</p>
      </div>
    </header>
  )
}
