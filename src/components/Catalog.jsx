import { useMemo, useState } from 'react'
import { items, categoryOrder } from '../inventory.js'
import { waLink } from '../data.js'

const PAGE = 60
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const data = items.map(([name, unit, cat]) => ({ name, unit, cat, key: norm(name) }))

// Catálogo: filtros por categoría, buscador y lista de cotización que se envía por WhatsApp
export default function Catalog({ sel, setSel }) {
  const [cat, setCat] = useState('Todos')
  const [text, setText] = useState('')
  const [shown, setShown] = useState(PAGE)

  const list = useMemo(() => {
    const t = norm(text.trim())
    return data.filter((p) => (cat === 'Todos' || p.cat === cat) && (!t || p.key.includes(t) || norm(p.cat).includes(t)))
  }, [cat, text])

  const count = (c) => data.filter((p) => p.cat === c).length
  const toggle = (name) => setSel((s) => (s.includes(name) ? s.filter((n) => n !== name) : [...s, name]))
  const pick = (c) => { setCat(c); setShown(PAGE) }

  return (
    <section id="catalogo" className="sec">
      <div className="w">
        <div className="head">
          <h2>Catálogo</h2>
          <p>{data.length} productos. Marca los que necesitas y pide tu cotización por WhatsApp.</p>
        </div>

        <div className="cats" role="group" aria-label="Categorías">
          {['Todos', ...categoryOrder].map((c) => (
            <button key={c} className={`cat ${cat === c ? 'on' : ''}`} onClick={() => pick(c)} aria-pressed={cat === c}>
              {c} <span className="cat-n">{c === 'Todos' ? data.length : count(c)}</span>
            </button>
          ))}
        </div>

        <label className="search">
          <span className="sr">Buscar producto</span>
          <input type="search" placeholder="Buscar producto, por ejemplo: glicerina" value={text} onChange={(e) => { setText(e.target.value); setShown(PAGE) }} />
        </label>

        <p className="found" aria-live="polite">{list.length} {list.length === 1 ? 'producto' : 'productos'}</p>

        <ul className="rows">
          {list.slice(0, shown).map((p) => {
            const on = sel.includes(p.name)
            return (
              <li key={p.name + p.cat} className={on ? 'on' : ''}>
                <button onClick={() => toggle(p.name)} aria-pressed={on} aria-label={`${on ? 'Quitar' : 'Agregar'} ${p.name}`}>
                  <span className="tick" aria-hidden="true">{on ? '✓' : '+'}</span>
                  <span className="pn">{p.name}</span>
                  <span className="pu">{p.unit}</span>
                </button>
              </li>
            )
          })}
        </ul>

        {list.length > shown && (
          <button className="more" onClick={() => setShown((n) => n + PAGE)}>
            Ver más ({list.length - shown} restantes)
          </button>
        )}
        {list.length === 0 && (
          <p className="empty">
            No encontramos ese producto en la lista. Escríbenos y lo consultamos:{' '}
            <a href={waLink(`Hola, busco: ${text}`)}>preguntar por WhatsApp</a>.
          </p>
        )}
      </div>

      {sel.length > 0 && (
        <div className="quote" role="region" aria-label="Tu cotización">
          <span><strong>{sel.length}</strong> {sel.length === 1 ? 'producto' : 'productos'} en tu cotización</span>
          <button className="clear" onClick={() => setSel([])}>Vaciar</button>
          <a className="go" href="#cotizacion">Completar solicitud</a>
        </div>
      )}
    </section>
  )
}
