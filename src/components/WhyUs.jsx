import { reasons } from '../data.js'

export default function WhyUs() {
  return (
    <section id="nosotros" className="sec">
      <div className="w why">
        <div className="why-lead">
          <h2>Atención directa, sin vueltas</h2>
          <p>
            Somos distribuidores de material médico e insumos para preparados magistrales.
            Hablas con quien te atiende y recibes una respuesta clara.
          </p>
        </div>
        <ul className="why-list">
          {reasons.map((r) => (
            <li key={r.title}>
              <strong>{r.title}</strong>
              <span>{r.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
