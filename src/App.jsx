import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Catalog from './components/Catalog.jsx'
import WhyUs from './components/WhyUs.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import QuoteForm from './components/QuoteForm.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// App junta todas las secciones en el orden en que se ven en la página
export default function App() {
  // Productos que el cliente marca en el catálogo; el formulario los recibe
  const [sel, setSel] = useState([])
  return (
    <>
      <Navbar />
      <Hero />
      <Catalog sel={sel} setSel={setSel} />
      <WhyUs />
      <HowToOrder />
      <QuoteForm sel={sel} setSel={setSel} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
