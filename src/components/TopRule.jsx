export default function TopRule({ centerNode = null }) {
  const center =
    centerNode != null
      ? centerNode
      : <span className="font-devanagari text-terracotta text-[18px]"> *</span>

  return (
    <div className="flex items-center gap-4 py-1.5 pb-[22px] text-gold text-sm" aria-hidden="true">
      <span className="text-terracotta text-xs tracking-[4px]">◆ ◆ ◆</span>
      <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D9C6A0 20%, #D9C6A0 80%, transparent)' }} />
      {center}
      <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D9C6A0 20%, #D9C6A0 80%, transparent)' }} />
      <span className="text-terracotta text-xs tracking-[4px]">◆ ◆ ◆</span>
    </div>
  )
}
