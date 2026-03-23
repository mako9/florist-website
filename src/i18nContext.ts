import { createContext } from 'react'

export type Locale = 'de' | 'en'

export interface Translations {
  nav: {
    services: string
    gallery: string
    contact: string
    language: string
  }
  hero: {
    title: string
    subtitle: string
  }
  services: {
    headline: string
    items: Array<{ title: string; description: string }>
  }
  gallery: {
    headline: string
  }
  contact: {
    headline: string
    description: string
  }
  footer: {
    copyright: string
    allRights: string
  }
}

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

export const I18nContext = createContext<I18nContextValue | null>(null)
