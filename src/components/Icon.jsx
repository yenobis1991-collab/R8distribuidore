// Iconos de línea simples, dibujados en SVG (heredan el color del texto)
const paths = {
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5.2 9.1A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.9L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  dropper: (
    <>
      <path d="M9 2h6v3H9zM10 5v3h4V5" />
      <path d="M8 8h8v3a4 4 0 0 1-8 0zM12 15v5" />
      <path d="M10.5 20h3" />
    </>
  ),
  jar: (
    <>
      <path d="M6 5h12v3H6zM7 8h10v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M9.5 13h5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 8h14" />
      <path d="M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z" />
    </>
  ),
  cross: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
}

export default function Icon({ name, size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
