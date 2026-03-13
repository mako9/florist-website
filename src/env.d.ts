/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_NAME: string
  readonly VITE_SITE_URL: string
  readonly VITE_SITE_TAGLINE: string
  readonly VITE_SITE_DESCRIPTION: string
  readonly VITE_BUSINESS_ADDRESS: string
  readonly VITE_BUSINESS_PHONE: string
  readonly VITE_BUSINESS_PHONE_E164: string
  readonly VITE_BUSINESS_EMAIL: string
  readonly VITE_BUSINESS_HOURS: string
  readonly VITE_BUSINESS_PRICE_RANGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
