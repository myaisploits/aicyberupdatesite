import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import NewsletterForm from '../components/NewsletterForm'
import RelatedPosts from '../components/RelatedPosts'
import SEO from '../components/SEO'
import TableOfContents from '../components/TableOfContents'
import { posts } from '../data/posts'
import { formatDate } from '../utils/formatters'
import { extractHeadings, slugify } from '../utils/markdown'
import NotFoundPage from './NotFoundPage'

function PostPage() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)

  const headings = useMemo(() => (post ? extractHeadings(post.content) : []), [post])

  if (!post) {
    return <NotFoundPage />
  }

  const relatedPosts = posts
    .filter((entry) => entry.slug !== post.slug && entry.category === post.category)
    .slice(0, 3)

  return (
    <div className="space-y-12">
      <SEO title={`${post.title} | Signal & Cipher`} description={post.excerpt} />
      <article className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <div className="space-y-8">
          <div className="surface-card rounded-[1.8rem] p-7">
            <Link to="/blog" className="text-sm font-medium text-cyan-400">
              Back to blog
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-400">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-current" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-muted-strong mt-5 text-base leading-8">
              {post.excerpt}
            </p>
            <div className="text-muted mt-6 flex flex-wrap gap-4 text-sm">
              <span>{post.author}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>

          <div className="surface-card rounded-[1.8rem] p-7">
            <div className="prose-content max-w-none text-base leading-8 text-ink-900 dark:text-slate-100">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h2: ({ children }) => {
                    const text = String(children)
                    return (
                      <h2 id={slugify(text)} className="mt-10 font-display text-3xl font-semibold tracking-tight">
                        {children}
                      </h2>
                    )
                  },
                  h3: ({ children }) => {
                    const text = String(children)
                    return (
                      <h3 id={slugify(text)} className="mt-8 text-2xl font-semibold tracking-tight">
                        {children}
                      </h3>
                    )
                  },
                  p: ({ children }) => <p className="mt-5">{children}</p>,
                  li: ({ children }) => <li className="mt-2">{children}</li>,
                  a: ({ href, children }) => (
                    <a href={href} className="text-cyan-400 underline" target="_blank" rel="noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <TableOfContents headings={headings} />
          <NewsletterForm compact />
        </div>
      </article>

      <RelatedPosts posts={relatedPosts} />
    </div>
  )
}

export default PostPage
