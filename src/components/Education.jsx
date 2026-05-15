import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import Card from './Card'

function EducationCard({ e }) {
  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 items-start">
        <div>
          <div className="font-serif italic text-peacock-deep text-[18px]">{e.when}</div>
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-ink-soft mt-1">
            {e.where}
          </div>
        </div>
        <div>
          <h3 className="font-serif font-semibold text-[clamp(22px,2.2vw,28px)] leading-[1.2] text-ink">
            {e.school}
          </h3>
          <div className="text-terracotta font-semibold mt-1 text-[14px] tracking-[0.08em] uppercase">
            {e.shortName}
          </div>
          <p className="text-ink-soft mt-2.5 text-[16px]">{e.degree}</p>
          <span
            className="inline-flex items-center gap-2 mt-3 px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-[0.05em]"
            style={{ background: 'rgba(15,76,92,0.08)', color: '#0A3744' }}
          >
            ◆ {e.cpi}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default function Education() {
  const entries = Array.isArray(DATA.education) ? DATA.education : [DATA.education]

  return (
    <section id="education" className="reveal mt-16">
      <SectionHeader number="02" title="Education" />

      <div className="flex flex-col gap-[18px]">
        {entries.map((e, i) => (
          <EducationCard key={i} e={e} />
        ))}
      </div>
    </section>
  )
}
