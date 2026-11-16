import { steps } from '../data.js'

export default function HowToOrder() {
  return (
    <section id="pedir" className="sec tint">
      <div className="w">
        <div className="head">
          <h2>Cómo pedir</h2>
          <p>Tres pasos, todo por WhatsApp.</p>
        </div>
        <ol className="flow">
          {steps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
