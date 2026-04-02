import { useMemo, useState } from 'react'
import NewsletterForm from '../components/NewsletterForm'
import Pagination from '../components/Pagination'
import PostCard from '../components/PostCard'
import SEO from '../components/SEO'
import SearchAndFilterBar from '../components/SearchAndFilterBar'
import SectionHeader from '../components/SectionHeader'
import { posts } from '../data/posts'

const POSTS_PER_PAGE = 6
const categories = ['All', 'AI', 'Cybersecurity', 'Both']

function BlogPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category
      const matchesQuery =
        !normalizedQuery ||
        [post.title, post.excerpt, post.author, ...(post.keywords ?? [])]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))

  const safeCurrentPage = Math.min(currentPage, totalPages)
  const visiblePosts = filteredPosts.slice(
    (safeCurrentPage - 1) * POSTS_PER_PAGE,
    safeCurrentPage * POSTS_PER_PAGE,
  )

  return (
    <div className="space-y-10">
      <SEO
        title="Blog | Signal & Cipher"
        description="Browse AI and cybersecurity articles with search, filters, and pagination."
      />
      <SectionHeader
        eyebrow="Blog"
        title="Analysis that connects model innovation with security reality."
        description="Search the archive, filter by category, and jump into articles with markdown formatting and code examples."
      />
      <SearchAndFilterBar
        query={query}
        onQueryChange={setQuery}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visiblePosts.length ? (
          visiblePosts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <div className="surface-card rounded-[1.6rem] border-dashed p-8 text-sm leading-7 md:col-span-2 xl:col-span-3">
            No posts matched this search yet. Try a broader keyword or switch the category filter.
          </div>
        )}
      </div>

      <Pagination currentPage={safeCurrentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <NewsletterForm compact />
    </div>
  )
}

export default BlogPage
