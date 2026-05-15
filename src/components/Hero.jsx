import { DATA } from '../data'
import Mandala from './Mandala'

export default function Hero() {
  const { hero, brand } = DATA

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center pt-10 pb-20">
      <div>
        <div className="flex items-center gap-[14px] mb-[18px]">
          <span className="font-devanagari text-terracotta text-[28px]">{hero.greetingDevanagari}</span>
          <span className="text-xs tracking-[0.3em] uppercase text-ink-soft font-semibold">{hero.greetingSmall}</span>
        </div>

        <h1 className="font-serif font-medium text-ink leading-[1.02] text-[clamp(48px,7vw,96px)] -tracking-[0.01em]">
          I build <span className="text-terracotta italic font-medium">intelligent</span><br />
          <span className="heading-highlight">AI systems</span> with care.
        </h1>

        <div className="font-serif italic text-peacock-deep text-[clamp(20px,2.2vw,26px)] mt-[18px] mb-[22px]">
          {hero.role}
        </div>

        <p className="text-ink-soft text-[17px] max-w-[54ch] mb-7 leading-[1.6]">
          {hero.blurb}
        </p>

        <div className="flex flex-wrap gap-[14px]">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] tracking-[0.18em] uppercase font-semibold bg-terracotta text-paper hover:bg-terracotta-deep hover:-translate-y-px transition-all"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] tracking-[0.18em] uppercase font-semibold bg-transparent text-peacock-deep border border-peacock hover:bg-peacock hover:text-paper transition-all"
          >
            View projects
          </a>
        </div>
      </div>

      <div className="relative aspect-square max-w-[380px] mx-auto w-full">
        <div className="w-full h-full animate-spin-slow">
          <Mandala />
        </div>
      </div>
    </section>
  )
}
