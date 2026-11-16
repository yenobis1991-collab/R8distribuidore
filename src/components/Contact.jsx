import { business, waLink } from '../data.js'

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="w contact-in">
        <div>
          <h2>¿Qué necesitas hoy?</h2>
          <p>Escríbenos y te respondemos con la información de tu pedido.</p>
          <a className="btn white" href={waLink('Hola, quiero hacer un pedido')}>Escribir por WhatsApp</a>
        </div>
        <dl className="info">
          <div><dt>Atención</dt><dd>{business.hours}</dd></div>
          <div><dt>Entregas</dt><dd>{business.zone}</dd></div>
          <div><dt>Correo</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>
        </dl>
      </div>
    </section>
  )
}
