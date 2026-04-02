export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function extractHeadings(markdown) {
  return markdown
    .split('\n')
    .filter((line) => /^(##|###)\s/.test(line))
    .map((line) => {
      const match = line.match(/^(##|###)\s+(.*)$/)
      const level = match?.[1] === '##' ? 2 : 3
      const text = match?.[2] ?? ''
      return {
        level,
        text,
        id: slugify(text),
      }
    })
}
