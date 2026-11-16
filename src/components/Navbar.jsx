export default function Navbar() {
  return (
    <nav className="nav">
      <div className="w">
        <a className="logo" href="#inicio" aria-label="R8 Distribuidores, inicio">
          {/* BASE_URL = /R8distribuidore/ : así la imagen se encuentra en GitHub Pages */}
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" height="56" />
          <span className="nm">R8 Distribuidores</span>
        </a>
        <div className="links">
          <a href="#catalogo">Catálogo</a>
          <a href="#pedir">Cómo pedir</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        <a className="btn solid small" href="#cotizacion">Cotizar</a>
      </div>
    </nav>
  )
}
