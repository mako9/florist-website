import { config } from '../config'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
      <a href="#" className="text-2xl font-serif tracking-widest uppercase text-stone-800">
        {config.site.name}
      </a>
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider">
        {LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="hover:text-emerald-700 transition-colors">
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
