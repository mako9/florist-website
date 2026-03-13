export const config = {
  site: {
    name: import.meta.env.VITE_SITE_NAME,
    url: import.meta.env.VITE_SITE_URL,
    tagline: import.meta.env.VITE_SITE_TAGLINE,
    description: import.meta.env.VITE_SITE_DESCRIPTION,
  },
  business: {
    address: import.meta.env.VITE_BUSINESS_ADDRESS,
    phone: import.meta.env.VITE_BUSINESS_PHONE,
    email: import.meta.env.VITE_BUSINESS_EMAIL,
  },
} as const
