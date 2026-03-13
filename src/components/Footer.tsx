import { config } from '../config'

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 text-sm text-center py-8 px-6">
      <p className="font-serif text-stone-200 text-lg mb-1">{config.site.name}</p>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}
