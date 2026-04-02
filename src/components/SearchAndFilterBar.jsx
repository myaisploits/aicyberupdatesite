function SearchAndFilterBar({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categories,
}) {
  return (
    <div className="surface-card rounded-[1.6rem] p-5">
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by title, excerpt, or keyword..."
            className="w-full rounded-2xl border border-ink-950/10 bg-slate-50 px-4 py-3 text-sm text-ink-950 outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
          />
        </label>
        <label className="block md:min-w-52">
          <span className="mb-2 block text-sm font-medium">Category</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-2xl border border-ink-950/10 bg-slate-50 px-4 py-3 text-sm text-ink-950 outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}

export default SearchAndFilterBar
