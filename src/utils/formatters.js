export function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString))
}

export function formatRelativeTime(dateString) {
  const now = Date.now()
  const then = new Date(dateString).getTime()
  const hours = Math.max(1, Math.round((now - then) / (1000 * 60 * 60)))

  if (hours < 24) {
    return `${hours}h ago`
  }

  const days = Math.round(hours / 24)
  return `${days}d ago`
}
