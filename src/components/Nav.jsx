import { DATA } from '../data'

export default function Nav() {
  const { navLinks, brand } = DATA

  return (
    <nav className="nav-fade flex justify-between items-center pt-1 pb-7 sticky top-0 z-10">
      <div className="flex items-baseline gap-[14px] font-serif font-semibold text-[22px]">
        <span>
          {brand.first} <span className="text-terracotta">·</span> {brand.last}
        </span>
      </div>

      <div className="hidden md:flex gap-[22px]">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-ink-soft text-[13px] tracking-[0.18em] uppercase font-medium py-1.5 border-b border-transparent hover:text-terracotta hover:border-terracotta transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
