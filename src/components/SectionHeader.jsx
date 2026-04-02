function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-muted-strong mt-4 text-base leading-7">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
