import { waLink } from '../data.js'

export default function WhatsAppButton() {
  return (
    <a className="wa" href={waLink('Hola, quiero información')}>
      WhatsApp
    </a>
  )
}
