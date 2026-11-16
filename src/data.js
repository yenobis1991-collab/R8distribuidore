// =====================================================
// DATOS DEL NEGOCIO: aquí se edita todo el contenido
// =====================================================

export const business = {
  name: 'R8 Distribuidores',
  whatsapp: '51971380158', // código de país + número, sin + ni espacios
  email: 'r8distribuidores@hotmail.com',
  zone: 'Delivery. El costo depende de la distancia',
  hours: 'Atención por WhatsApp las 24 horas',
}

// Crea el enlace de WhatsApp con el mensaje ya escrito
export const waLink = (text) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`

// Categorías del catálogo (cada una funciona como filtro).
// "icon" elige el dibujo: flask, dropper, jar, scale, cross
// Si solo hay una categoría con productos, los filtros no se muestran.
export const categories = [
  { name: 'Material médico', icon: 'cross', text: 'Descartables y de uso clínico' },
]

// Cada producto: cat (debe coincidir con una categoría), name, use (para qué sirve)
// y, si quieres, pres (presentación). Si no pones pres, no se muestra esa fila.
export const products = [
  { cat: 'Material médico', name: 'Guantes', use: 'Guantes descartables para procedimientos.' },
  { cat: 'Material médico', name: 'Preservativos', use: 'Consulta modelos y presentaciones por WhatsApp.' },
  { cat: 'Material médico', name: 'Papel térmico', use: 'Papel térmico para impresión de equipos médicos.' },
  { cat: 'Material médico', name: 'Gel', use: 'Consulta tipos y presentaciones por WhatsApp.' },
  { cat: 'Material médico', name: 'Papel de camilla', use: 'Papel descartable para camilla.' },
  { cat: 'Material médico', name: 'Sabanillas', use: 'Sabanillas descartables.' },
]

export const reasons = [
  { title: 'Trato directo', text: 'Hablas con quien te atiende, sin intermediarios.' },
  { title: 'Respuesta rápida', text: 'Cotizamos y confirmamos disponibilidad por WhatsApp.' },
  { title: 'Entrega coordinada', text: 'Enviamos por delivery; el costo depende de la distancia.' },
  { title: 'Asesoría', text: 'Te orientamos para elegir el insumo o material adecuado.' },
]

export const steps = [
  { title: 'Escríbenos', text: 'Cuéntanos qué producto necesitas y la cantidad aproximada.' },
  { title: 'Recibe tu cotización', text: 'Te enviamos precio y disponibilidad.' },
  { title: 'Confirma y recibe', text: 'Coordinamos el pago y te lo llevamos por delivery.' },
]
