import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import Card from './Card'

function AchievementCard({ sym, tag, title, body, link }) {
  return (
    <Card>
      <span className="font-serif italic text-[36px] text-gold leading-none inline-block">{sym}</span>
      <div className="text-[11px] tracking-[0.22em] uppercase text-terracotta mt-2 font-bold">{tag}</div>
      <h3 className="font-serif font-semibold text-[22px] mt-2.5 text-ink">{title}</h3>
      <p className="mt-2.5 text-ink-soft">{body}</p>
      {link && (
        <a
          href={link.href}
          className="ach-link inline-flex items-center gap-2 mt-2.5 text-[13px] text-peacock font-semibold tracking-[0.04em] hover:text-terracotta"
        >
          {link.label}
        </a>
      )}
    </Card>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="reveal mt-16">
      <SectionHeader number="04" title="Achievements" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {DATA.achievements.map((a, i) => (
          <AchievementCard key={i} {...a} />
        ))}
      </div>
    </section>
  )
}
