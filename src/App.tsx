import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import { I18nProvider } from './i18n'

function MainPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </HashRouter>
    </I18nProvider>
  )
}
