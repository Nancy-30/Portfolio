import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import Card from './Card'

function SkillChip({ label, hot }) {
  const base =
    'inline-block px-3.5 py-1.5 rounded-[4px] text-[14px] border transition-all cursor-default'

  if (hot) {
    return (
      <span
        className={`${base} font-semibold hover:bg-terracotta hover:text-paper hover:border-terracotta hover:-translate-y-px`}
        style={{
          background: 'rgba(184,68,44,0.08)',
          borderColor: 'rgba(184,68,44,0.35)',
          color: '#8E3320',
        }}
      >
        {label}
      </span>
    )
  }

  return (
    <span
      className={`${base} bg-paper border-rule text-ink hover:bg-peacock hover:text-paper hover:border-peacock hover:-translate-y-px`}
    >
      {label}
    </span>
  )
}

function SkillGroup({ title, items, span }) {
  return (
    <div className={span ? 'col-span-full' : ''}>
      <h4 className="skill-h font-sans uppercase tracking-[0.22em] text-[11px] text-terracotta font-bold mb-3.5 flex items-center gap-2.5">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <SkillChip key={it.label} label={it.label} hot={!!it.hot} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="reveal mt-16">
      <SectionHeader number="06" title="Technical Skills" />

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {DATA.skills.map((g) => (
            <SkillGroup key={g.title} {...g} />
          ))}
        </div>
      </Card>
    </section>
  )
}
