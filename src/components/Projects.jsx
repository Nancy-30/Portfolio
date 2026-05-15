import { Fragment } from 'react'
import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import Card from './Card'

function ProjectCard({ title, badge, when, blurb, stack, github }) {
  const blurbNode =
    typeof blurb === 'string'
      ? blurb
      : blurb.map((seg, i) =>
          typeof seg === 'string'
            ? <Fragment key={i}>{seg}</Fragment>
            : <strong key={i} className="text-ink">{seg.b}</strong>
        )

  return (
    <Card>
      <div className="flex items-center justify-between gap-4 mb-2.5">
        <h3 className="font-serif font-semibold text-[clamp(22px,2.2vw,28px)] leading-[1.2] text-ink">
          {title}
        </h3>
        {badge && (
          <span
            className="inline-block text-[10px] tracking-[0.2em] uppercase bg-gold px-2.5 py-[3px] rounded-[4px] font-extrabold"
            style={{ color: '#1c1206' }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-4 -mt-1.5 mb-2">
        <span className="font-serif italic text-peacock-deep text-[17px]">{when}</span>
      </div>
      <p className="text-ink-soft mb-4">{blurbNode}</p>

      <div className="flex flex-wrap gap-1.5 mb-[18px]">
        {stack.map((s) => (
          <span
            key={s}
            className="inline-block text-[11px] tracking-[0.04em] px-2.5 py-1 rounded-full font-semibold border"
            style={{
              background: 'rgba(15,76,92,0.07)',
              color: '#0A3744',
              borderColor: 'rgba(15,76,92,0.18)',
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[12px] font-bold tracking-[0.16em] uppercase border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
      >
        <span>◆ GitHub</span>
      </a>
    </Card>
  )
}

export default function Projects() {
  const { projects, githubProfile } = DATA

  return (
    <section id="projects" className="reveal mt-16">
      <SectionHeader number="05" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <p className="mt-[22px] text-ink-soft text-[14px]">
        &nbsp;◇&nbsp; More projects, scratchpads and experiments live on{' '}
        <a
          href={githubProfile}
          target="_blank"
          rel="noopener"
          className="text-peacock hover:text-terracotta font-bold"
        >
          github.com/Nancy-30
        </a>
        .
      </p>
    </section>
  )
}
