import { useState } from 'react'
import { waLink } from '../data.js'

const TIPOS = ['Farmacia o botica', 'Laboratorio o fórmulas magistrales', 'Cosmética o cuidado personal', 'Clínica o consultorio', 'Otro']
const empty = { nombre: '', negocio: '', tipo: '', telefono: '', correo: '', ciudad: '', notas: '' }

// Formulario de cotización: no necesita servidor, arma el mensaje y lo abre en WhatsApp
export default function QuoteForm({ sel, setSel }) {
  const [f, setF] = useState(empty)
  const [qty, setQty] = useState({})
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!f.nombre.trim()) e.nombre = 'Escribe tu nombre.'
    if (f.telefono.replace(/\D/g, '').length < 7) e.telefono = 'Escribe un teléfono válido.'
    if (f.correo && !/^\S+@\S+\.\S+$/.test(f.correo)) e.correo = 'Revisa el correo.'
    if (sel.length === 0 && !f.notas.trim()) e.notas = 'Marca productos en el catálogo o escribe qué necesitas.'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    const lines = [
      'Hola, quiero solicitar una cotización.',
      '',
      `Nombre: ${f.nombre}`,
      f.negocio ? `Negocio: ${f.negocio}` : null,
      f.tipo ? `Tipo de negocio: ${f.tipo}` : null,
      `Teléfono: ${f.telefono}`,
      f.correo ? `Correo: ${f.correo}` : null,
      f.ciudad ? `Ciudad: ${f.ciudad}` : null,
      sel.length ? '\nProductos:' : null,
      ...sel.map((n) => `• ${n}${qty[n] ? ` – ${qty[n]}` : ''}`),
      f.notas.trim() ? `\nComentarios: ${f.notas.trim()}` : null,
    ].filter((l) => l !== null)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  const field = (k, label, props = {}, optional) => (
    <label className={`fld ${errors[k] ? 'bad' : ''}`}>
      <span>{label} {optional && <span className="opt">(opcional)</span>}</span>
      <input value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} {...props} />
      {errors[k] && <span className="err" role="alert">{errors[k]}</span>}
    </label>
  )

  return (
    <section id="cotizacion" className="sec tint">
      <div className="w qf">
        <div className="qf-side">
          <h2>Solicita tu cotización</h2>
          <p>Completa tus datos y los productos que necesitas. Te respondemos por WhatsApp con precio y disponibilidad.</p>
          <ul>
            <li>Marca los productos en el catálogo y aparecen aquí solos.</li>
            <li>Indica la cantidad que necesitas de cada uno.</li>
            <li>Al enviar, se abre WhatsApp con tu solicitud lista.</li>
          </ul>
        </div>

        <form className="qf-form" onSubmit={submit} noValidate>
          <div className="qf-in">
            {field('nombre', 'Nombre', { autoComplete: 'name', required: true })}
            {field('negocio', 'Negocio o empresa', { autoComplete: 'organization' }, true)}
            <label className="fld">
              <span>Tipo de negocio <span className="opt">(opcional)</span></span>
              <select value={f.tipo} onChange={set('tipo')}>
                <option value="">Elige una opción</option>
                {TIPOS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            {field('ciudad', 'Ciudad', { autoComplete: 'address-level2' }, true)}
            {field('telefono', 'Teléfono o WhatsApp', { type: 'tel', autoComplete: 'tel', required: true })}
            {field('correo', 'Correo', { type: 'email', autoComplete: 'email' }, true)}

            <div className="chosen">
              <h3>Productos a cotizar ({sel.length})</h3>
              {sel.length === 0 ? (
                <p className="none">Aún no marcaste productos. <a href="#catalogo">Elegir en el catálogo</a> o descríbelos abajo.</p>
              ) : (
                <ul>
                  {sel.map((n) => (
                    <li key={n}>
                      <span>{n}</span>
                      <input aria-label={`Cantidad de ${n}`} placeholder="Cantidad, ej. 5 kg" value={qty[n] || ''} onChange={(e) => setQty((q) => ({ ...q, [n]: e.target.value }))} />
                      <button type="button" className="rm" onClick={() => setSel((s) => s.filter((x) => x !== n))}>Quitar</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <label className={`fld full ${errors.notas ? 'bad' : ''}`}>
              <span>Comentarios <span className="opt">(opcional)</span></span>
              <textarea value={f.notas} onChange={set('notas')} placeholder="Otros productos, marca, grado, fecha en que lo necesitas…" />
              {errors.notas && <span className="err" role="alert">{errors.notas}</span>}
            </label>

            <div className="qf-send">
              <button type="submit">Enviar solicitud por WhatsApp</button>
              <small>No guardamos tus datos en esta página; solo se envían por WhatsApp.</small>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
