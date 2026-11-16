import { waLink } from '../data.js'
import HeroArt from './HeroArt.jsx'

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="w hero-grid">
        <div className="hero-text">
          <h1>Todo para preparar con precisión</h1>
          <p>
            Venta y distribución de material médico e insumos para preparados magistrales.
            Dinos qué necesitas y te cotizamos por WhatsApp.
          </p>
          <div className="row">
            <a className="btn solid" href={waLink('Hola, quiero cotizar productos')}>Cotizar por WhatsApp</a>
            <a className="btn line" href="#catalogo">Ver catálogo</a>
          </div>
        </div>
        <HeroArt />
      </div>
    </header>
  )
}
