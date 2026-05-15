import { DATA } from '../data'
import SectionHeader from './SectionHeader'

function StatTile({ num, unit, label }) {
  return (
    <div className="bg-paper border border-rule rounded-[4px] px-5 py-[22px] stat-deco">
      <div className="font-serif text-[44px] leading-none text-terracotta font-semibold">
        {num}
        {unit && <span className="text-gold italic text-[0.5em]">{unit}</span>}
      </div>
      <div className="text-[11px] tracking-[0.22em] uppercase text-ink-soft mt-2 font-semibold">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const { stats } = DATA

  return (
    <section id="about" className="reveal">
      <SectionHeader number="01" title="About" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-start">
        <div className="text-[17px] text-ink-soft leading-[1.75]">
          <p className="mb-4">
            I'm a <strong className="text-ink">Computer Science engineer</strong> from{' '}
            <strong className="text-ink">IIIT Dharwad</strong> who's been shipping AI products since well
            before graduation. I enjoy working at the intersection of research and engineering, designing retrieval pipelines, orchestrating LLM agents, and building real-time voice systems that feel fast and natural.
          </p>
          <p className="mb-4">
            Currently an AI Engineer, building RAG-based text analytics and a sub-3-second ASR&nbsp;→&nbsp;LLM&nbsp;→&nbsp;TTS pipeline.
            Previously at <strong className="text-ink">Siemens R&amp;D</strong>, where I co-published
            two Python packages to PyPI and shipped a localization platform used by multiple internal
            teams.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[18px]">
          {stats.map((s, i) => (
            <StatTile key={i} num={s.num} unit={s.unit} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
