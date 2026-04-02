import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatters'

function PostCard({ post }) {
  return (
    <article className="surface-card group flex h-full flex-col rounded-[1.6rem] p-6">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-400">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-current" />
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
        <Link to={`/blog/${post.slug}`} className="hover:text-cyan-400">
          {post.title}
        </Link>
      </h3>
      <p className="text-muted-strong mt-4 flex-1 text-sm leading-7">
        {post.excerpt}
      </p>
      <div className="text-muted mt-6 flex items-center justify-between text-sm">
        <span>{post.author}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
    </article>
  )
}

export default PostCard
