// Ilustración de la portada: estante de farmacia dentro de un hexágono (como el logo)
const HEX = '230,12 424,108 424,312 230,408 36,312 36,108'

// Etiqueta de frasco: banda azul, marca hexagonal y líneas de texto
function Label({ x, y, w, h, rx = true }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill="#fff" />
      <rect x={x} y={y} width={w} height="7" rx="3" fill="#2B3F9A" />
      <rect x={x} y={y + 4} width={w} height="3" fill="#2B3F9A" />
      <polygon
        points={`${x + 14},${y + 14} ${x + 20},${y + 17.5} ${x + 20},${y + 24.5} ${x + 14},${y + 28} ${x + 8},${y + 24.5} ${x + 8},${y + 17.5}`}
        fill="none" stroke="#C8302F" strokeWidth="1.6"
      />
      <rect x={x + 26} y={y + 16} width={w - 34} height="3" rx="1.5" fill="#101A45" opacity=".7" />
      <rect x={x + 26} y={y + 22} width={(w - 34) * 0.6} height="3" rx="1.5" fill="#101A45" opacity=".35" />
      {rx && <rect x={x + 8} y={y + h - 11} width={w - 16} height="3" rx="1.5" fill="#C8302F" />}
    </g>
  )
}

// Frasco ámbar de vidrio con tapa
function Bottle({ x, w, h, delay }) {
  const y = 300 - h
  const neck = w * 0.46
  return (
    <g className="bt" style={{ animationDelay: `${delay}s` }} filter="url(#sh)">
      <ellipse cx={x + w / 2} cy="301" rx={w * 0.62} ry="5" fill="#0B1240" opacity=".28" />
      {/* tapa */}
      <rect x={x + (w - neck) / 2} y={y - 26} width={neck} height="28" rx="4" fill="url(#cap)" />
      <path d={`M${x + (w - neck) / 2 + 4} ${y - 20}v18M${x + (w - neck) / 2 + 9} ${y - 20}v18M${x + (w + neck) / 2 - 9} ${y - 20}v18M${x + (w + neck) / 2 - 4} ${y - 20}v18`} stroke="#fff" strokeOpacity=".16" strokeWidth="1.4" />
      {/* cuerpo */}
      <path d={`M${x + (w - neck) / 2 - 3} ${y + 2}h${neck + 6}q${(w - neck) / 2 + 3} 6 ${(w - neck) / 2 + 3} 22V${300 - 10}q0 10 -10 10H${x + 10}q-10 0 -10 -10V${y + 24}q0 -16 ${(w - neck) / 2 + 3} -22z`} fill="url(#amb)" transform={`translate(0 0)`} />
      <rect x={x + 8} y={y + 22} width="6" height={h - 44} rx="3" fill="#fff" opacity=".34" />
      <rect x={x + w - 14} y={y + 26} width="4" height={h - 52} rx="2" fill="#000" opacity=".12" />
      <Label x={x + 8} y={y + h * 0.36} w={w - 16} h={Math.min(52, h * 0.36)} />
    </g>
  )
}

export default function HeroArt() {
  return (
    <svg className="art" viewBox="0 0 460 420" role="img" aria-label="Frascos de farmacia, matraz y vaso graduado sobre un estante">
      <defs>
        <clipPath id="hx"><polygon points={HEX} /></clipPath>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7F9FE" />
          <stop offset="1" stopColor="#D9E3F7" />
        </linearGradient>
        <radialGradient id="glow" cx=".5" cy=".42" r=".55">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="amb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E8AE49" />
          <stop offset=".45" stopColor="#C98A2B" />
          <stop offset="1" stopColor="#8F5A14" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3A4FB8" />
          <stop offset=".5" stopColor="#2B3F9A" />
          <stop offset="1" stopColor="#141E5E" />
        </linearGradient>
        <linearGradient id="liq" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7C93EA" />
          <stop offset="1" stopColor="#2B3F9A" />
        </linearGradient>
        <linearGradient id="shelf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A3A9E" />
          <stop offset="1" stopColor="#141E5E" />
        </linearGradient>
        <filter id="sh" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#0B1240" floodOpacity=".22" />
        </filter>
      </defs>

      <polygon points={HEX} fill="url(#bg)" />
      <g clipPath="url(#hx)">
        <rect x="36" y="12" width="388" height="400" fill="url(#glow)" />
        {/* panal decorativo, eco del hexágono del logo */}
        <g fill="none" stroke="#2B3F9A" strokeOpacity=".16" strokeWidth="1.6">
          <polygon points="120,60 142,72 142,98 120,110 98,98 98,72" />
          <polygon points="164,86 186,98 186,124 164,136 142,124 142,98" />
          <polygon points="340,70 362,82 362,108 340,120 318,108 318,82" />
          <polygon points="384,96 406,108 406,134 384,146 362,134 362,108" />
        </g>
        {/* estante */}
        <path d="M36 300H424" stroke="#fff" strokeWidth="2" opacity=".0" />
        <rect x="36" y="300" width="388" height="16" fill="url(#shelf)" />
        <rect x="36" y="300" width="388" height="3" fill="#C8302F" />
        <rect x="36" y="316" width="388" height="100" fill="#141E5E" />

        <g>
          <polygon points="230,330 252,342.5 252,367.5 230,380 208,367.5 208,342.5" fill="none" stroke="#C8302F" strokeWidth="2.4" />
          <text x="230" y="362" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="'Bodoni Moda', Georgia, serif">R8</text>
        </g>
        <Bottle x={58} w={66} h={118} delay={0.1} />
        <Bottle x={134} w={82} h={160} delay={0.25} />

        {/* frasco con gotero */}
        <g transform="translate(-14 0)"><g className="bt" style={{ animationDelay: '0.4s' }} filter="url(#sh)">
          <ellipse cx="258" cy="301" rx="34" ry="5" fill="#0B1240" opacity=".28" />
          <path d="M246 214c0-10 4-14 4-22h16c0 8 4 12 4 22" fill="#1B2670" />
          <ellipse cx="258" cy="186" rx="13" ry="22" fill="#141E5E" />
          <rect x="243" y="204" width="30" height="9" rx="3" fill="url(#cap)" />
          <path d="M243 216h30q8 6 8 20v52q0 12 -10 12h-26q-10 0 -10 -12v-52q0 -14 8 -20z" fill="url(#amb)" />
          <rect x="248" y="232" width="5" height="52" rx="2.5" fill="#fff" opacity=".34" />
          <Label x={245} y={244} w={26} h={30} rx={false} />
        </g></g>

        {/* matraz Erlenmeyer */}
        <g transform="translate(16.2 30) scale(.9)"><g className="bt" style={{ animationDelay: '0.55s' }} filter="url(#sh)">
          <ellipse cx="322" cy="301" rx="46" ry="5" fill="#0B1240" opacity=".25" />
          <path d="M310 172h24v46l40 68q6 12 -6 14h-92q-12 -2 -6 -14l40 -68z" fill="#fff" fillOpacity=".55" stroke="#2B3F9A" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M297 252h50l27 50h-104z" fill="url(#liq)" />
          <path d="M292 262h60" stroke="#fff" strokeOpacity=".35" strokeWidth="2" />
          <rect x="306" y="166" width="32" height="8" rx="3" fill="#2B3F9A" />
          <path d="M316 186v34" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".7" />
          <circle cx="310" cy="278" r="4" fill="#fff" fillOpacity=".8" />
          <circle cx="330" cy="270" r="3" fill="#fff" fillOpacity=".8" />
          <circle cx="344" cy="284" r="2.4" fill="#fff" fillOpacity=".8" />
        </g></g>

        {/* vaso graduado */}
        <g transform="translate(-12 0)"><g className="bt" style={{ animationDelay: '0.7s' }} filter="url(#sh)">
          <ellipse cx="390" cy="301" rx="26" ry="4" fill="#0B1240" opacity=".25" />
          <path d="M366 238h46v52q0 10 -9 10h-28q-9 0 -9 -10z" fill="#fff" fillOpacity=".5" stroke="#2B3F9A" strokeWidth="3" strokeLinejoin="round" />
          <path d="M369 262h40v28q0 7 -7 7h-26q-7 0 -7 -7z" fill="url(#liq)" />
          <path d="M366 250h12M366 262h8M366 274h12" stroke="#2B3F9A" strokeWidth="2" strokeLinecap="round" />
        </g></g>
      </g>

      <polygon points={HEX} fill="none" stroke="#2B3F9A" strokeWidth="8" strokeLinejoin="round" />
      <polygon points="230,30 408,116 408,304 230,392 52,304 52,116" fill="none" stroke="#C8302F" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  )
}
