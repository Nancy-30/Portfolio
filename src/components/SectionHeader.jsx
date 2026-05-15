export default function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-[18px] mt-8 mb-7">
      <span className="font-serif italic text-terracotta text-[22px]">{number} —</span>
      <h2 className="font-serif font-medium text-[clamp(34px,4.4vw,56px)] leading-[1.1] whitespace-nowrap text-ink">
        {title}
      </h2>
      <span className="flex-1 h-px bg-gradient-to-r from-rule to-transparent" />
      <span className="text-gold text-sm tracking-[6px]">❋ ❋ ❋</span>
    </div>
  )
}
