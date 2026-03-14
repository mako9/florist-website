import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { I18nProvider } from './i18n'

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
        <Nav />
        <Hero />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  )
}
