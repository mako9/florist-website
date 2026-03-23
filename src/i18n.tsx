import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { I18nContext } from './i18nContext'
import type { Locale, Translations } from './i18nContext'

export type { Locale, Translations } from './i18nContext'

const TRANSLATIONS: Record<Locale, Translations> = {
  de: {
    nav: {
      services: 'Leistungen',
      gallery: 'Galerie',
      contact: 'Kontakt',
      language: 'Sprache',
    },
    hero: {
      title: 'Kunstvolle Blumenarrangements',
      subtitle: 'Handgefertigte Floristik für die poetischen Momente des Lebens.',
    },
    services: {
      headline: 'Unsere Leistungen',
      items: [
        {
          title: 'Hochzeiten',
          description:
            'Florale Konzepte für Ihren besonderen Tag, inklusive Bouquets und Dekoration.',
        },
        {
          title: 'Events',
          description:
            'Firmenfeiern, Partys und intime Anlässe gestaltet mit saisonalen Blüten.',
        },
        {
          title: 'Abos',
          description:
            'Wöchentliche oder monatliche Blumenlieferungen für Zuhause oder Büro.',
        },
      ],
    },
    gallery: {
      headline: 'Aktuelle Arbeiten',
    },
    contact: {
      headline: 'Kontakt aufnehmen',
      description: 'Bereit für Farbe und Atmosphäre? Wir freuen uns auf Ihre Nachricht.',
    },
    footer: {
      copyright: '© {year} Alle Rechte vorbehalten.',
      allRights: 'Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      title: 'Artisanal Florals',
      subtitle: "Hand-crafted arrangements for life's poetic moments.",
    },
    services: {
      headline: 'Our Services',
      items: [
        {
          title: 'Weddings',
          description:
            'Full-service floral design for your special day, from bouquets to venue installations.',
        },
        {
          title: 'Events',
          description:
            'Corporate events, parties, and intimate dinners styled with seasonal blooms.',
        },
        {
          title: 'Subscriptions',
          description:
            'Weekly or monthly fresh flower deliveries for your home or office.',
        },
      ],
    },
    gallery: {
      headline: 'Recent Work',
    },
    contact: {
      headline: 'Get in Touch',
      description:
        "Ready to bring some colour to your next project? We'd love to hear from you.",
    },
    footer: {
      copyright: '© {year} All rights reserved.',
      allRights: 'All rights reserved.',
    },
  },
}

const LOCALE_STORAGE_KEY = 'florist-website-locale'

function isLocale(value: unknown): value is Locale {
  return value === 'de' || value === 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'de'
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(saved)) return saved
    return 'de'
  })

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: TRANSLATIONS[locale],
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
