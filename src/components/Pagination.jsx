function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null
  }

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Pagination">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full border border-ink-950/10 px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-full text-sm font-semibold ${
            currentPage === page
              ? 'bg-ink-950 text-sand-50 dark:bg-cyan-400 dark:text-ink-950'
              : 'border border-ink-950/10 dark:border-white/10'
          }`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full border border-ink-950/10 px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10"
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
