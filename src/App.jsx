import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Azienda from './pages/Azienda'
import Contatti from './pages/Contatti'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'
import Servizi from './pages/Servizi'

export default function App() {
  return (
    <div className="min-h-svh bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-terracotta focus:px-4 focus:py-2 focus:text-cream"
      >
        Vai al contenuto
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/azienda" element={<Azienda />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
