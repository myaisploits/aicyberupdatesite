import PostCard from './PostCard'

function RelatedPosts({ posts }) {
  if (!posts.length) {
    return null
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Related posts
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          Keep reading across adjacent signals.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts
