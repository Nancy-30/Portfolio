export default function Mandala({ className = '', colorClass = 'text-terracotta', opacityClass = 'opacity-60' }) {
  return (
    <svg
      viewBox="-100 -100 200 200"
      className={`w-full h-full ${colorClass} ${opacityClass} ${className}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle r="96" />
        <circle r="88" strokeDasharray="1 3" />
        <circle r="74" />
        <circle r="58" />
        <circle r="40" />
        <circle r="22" />
        <circle r="8" />
      </g>

      <g fill="currentColor">
        <circle cx="0"      cy="-30"    r="1.6" />
        <circle cx="15"     cy="-25.98" r="1.6" />
        <circle cx="25.98"  cy="-15"    r="1.6" />
        <circle cx="30"     cy="0"      r="1.6" />
        <circle cx="25.98"  cy="15"     r="1.6" />
        <circle cx="15"     cy="25.98"  r="1.6" />
        <circle cx="0"      cy="30"     r="1.6" />
        <circle cx="-15"    cy="25.98"  r="1.6" />
        <circle cx="-25.98" cy="15"     r="1.6" />
        <circle cx="-30"    cy="0"      r="1.6" />
        <circle cx="-25.98" cy="-15"    r="1.6" />
        <circle cx="-15"    cy="-25.98" r="1.6" />
      </g>

      <g fill="currentColor">
        <circle cx="0"      cy="-50"    r="2" />
        <circle cx="19.13"  cy="-46.19" r="2" />
        <circle cx="35.36"  cy="-35.36" r="2" />
        <circle cx="46.19"  cy="-19.13" r="2" />
        <circle cx="50"     cy="0"      r="2" />
        <circle cx="46.19"  cy="19.13"  r="2" />
        <circle cx="35.36"  cy="35.36"  r="2" />
        <circle cx="19.13"  cy="46.19"  r="2" />
        <circle cx="0"      cy="50"     r="2" />
        <circle cx="-19.13" cy="46.19"  r="2" />
        <circle cx="-35.36" cy="35.36"  r="2" />
        <circle cx="-46.19" cy="19.13"  r="2" />
        <circle cx="-50"    cy="0"      r="2" />
        <circle cx="-46.19" cy="-19.13" r="2" />
        <circle cx="-35.36" cy="-35.36" r="2" />
        <circle cx="-19.13" cy="-46.19" r="2" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.9">
        <circle cx="0"       cy="-66"    r="6" />
        <circle cx="46.67"   cy="-46.67" r="6" />
        <circle cx="66"      cy="0"      r="6" />
        <circle cx="46.67"   cy="46.67"  r="6" />
        <circle cx="0"       cy="66"     r="6" />
        <circle cx="-46.67"  cy="46.67"  r="6" />
        <circle cx="-66"     cy="0"      r="6" />
        <circle cx="-46.67"  cy="-46.67" r="6" />
      </g>

      <g fill="currentColor" opacity="0.85">
        <rect x="-2.5"   y="-84.5" width="5" height="5" transform="rotate(45 0 -82)" />
        <rect x="55.86"  y="-60.36" width="5" height="5" transform="rotate(45 58.36 -57.86)" />
        <rect x="79.5"   y="-2.5"  width="5" height="5" transform="rotate(45 82 0)" />
        <rect x="55.86"  y="55.36" width="5" height="5" transform="rotate(45 58.36 57.86)" />
        <rect x="-2.5"   y="79.5"  width="5" height="5" transform="rotate(45 0 82)" />
        <rect x="-60.86" y="55.36" width="5" height="5" transform="rotate(45 -58.36 57.86)" />
        <rect x="-84.5"  y="-2.5"  width="5" height="5" transform="rotate(45 -82 0)" />
        <rect x="-60.86" y="-60.36" width="5" height="5" transform="rotate(45 -58.36 -57.86)" />
      </g>
    </svg>
  )
}
