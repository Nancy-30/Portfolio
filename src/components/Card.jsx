export default function Card({ className = '', ornament = true, hover = true, children, ...rest }) {
  const classes = [
    'bg-paper border border-rule rounded-[4px] p-7 pb-6 relative',
    ornament ? 'card-ornament' : '',
    hover    ? 'card-hover'    : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
