import { Fragment } from 'react'
import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import Card from './Card'

function renderBullet(parts, key) {
  if (typeof parts === 'string') {
    return <li key={key}>{parts}</li>
  }
  return (
    <li key={key}>
      {parts.map((seg, i) =>
        typeof seg === 'string'
          ? <Fragment key={i}>{seg}</Fragment>
          : <strong key={i} className="text-ink">{seg.b}</strong>
      )}
    </li>
  )
}

function TimelineItem({ item }) {
  return (
    <div className="relative pb-9 last:pb-0">
      <span className="tl-dot" />
      <div className="flex justify-between items-baseline gap-4 flex-wrap mb-1">
        <div>
          <h3 className="font-serif font-semibold text-[clamp(22px,2.2vw,28px)] leading-[1.2] text-ink">
            {item.role}
          </h3>
          <div className="text-terracotta font-semibold text-[14px] tracking-[0.06em]">
            {item.company}
          </div>
        </div>
        <div className="font-serif italic text-peacock-deep text-[17px]">
          <div>{item.when}</div>
          <div>{item.location}</div>

        </div>
      </div>
      <ul className="list-disc pl-[18px] text-ink-soft mt-3.5 space-y-2 leading-[1.65]">
        {item.bullets.map((b, i) => renderBullet(b, i))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="reveal mt-16">
      <SectionHeader number="03" title="Experience" />

      <Card>
        <div className="timeline">
          {DATA.experience.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </Card>
    </section>
  )
}
