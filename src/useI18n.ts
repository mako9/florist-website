import { useContext } from 'react'
import { I18nContext } from './i18nContext'
import type { Locale } from './i18nContext'

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used inside I18nProvider')
  }
  return ctx
}

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
]
