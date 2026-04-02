function TableOfContents({ headings }) {
  if (headings.length < 3) {
    return null
  }

  return (
    <aside className="surface-card rounded-[1.6rem] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
        On this page
      </p>
      <nav className="mt-4 space-y-3" aria-label="Table of contents">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm leading-6 hover:text-cyan-400 ${
              heading.level === 3 ? 'pl-4 text-ink-900/80 dark:text-slate-100/80' : 'text-ink-950 dark:text-slate-50'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default TableOfContents
