import { useI18n } from '../useI18n'

interface GalleryImage {
  src: string
  alt: string
}

const IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88df5691cc60?auto=format&fit=crop&q=80&w=600',
    alt: 'Pink floral arrangement',
  },
  {
    src: 'https://images.unsplash.com/photo-1487530811015-780780ee8a3b?auto=format&fit=crop&q=80&w=600',
    alt: 'White garden flowers',
  },
  {
    src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=600',
    alt: 'Bridal bouquet',
  },
  {
    src: 'https://images.unsplash.com/photo-1548198471-e3a6a70a2bc1?auto=format&fit=crop&q=80&w=600',
    alt: 'Table centrepiece',
  },
]

export default function Gallery() {
  const { t } = useI18n()

  return (
    <section id="gallery" className="bg-stone-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-3">{t.gallery.headline}</h2>
          <div className="h-1 w-20 bg-emerald-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map(({ src, alt }) => (
            <div key={src} className="aspect-square overflow-hidden rounded-xl">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
