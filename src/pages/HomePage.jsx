import HeroSection from '../components/HeroSection'
import NewsletterForm from '../components/NewsletterForm'
import PostCard from '../components/PostCard'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'
import UpdateFeed from '../components/UpdateFeed'
import { posts } from '../data/posts'

function HomePage() {
  const featuredPosts = posts.slice(0, 6)

  return (
    <div className="space-y-18">
      <SEO
        title="Signal & Cipher | AI and Cybersecurity Intelligence"
        description="Signal & Cipher covers AI, cybersecurity, podcasts, and live updates for builders and defenders."
      />
      <HeroSection />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Featured"
          title="Six recent briefings for operators, builders, and defenders."
          description="The latest articles blend strategy, architecture, and practical security decision-making."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <UpdateFeed category="ai" limit={5} autoRefresh />
        <UpdateFeed category="cybersecurity" limit={5} autoRefresh />
      </section>

      <NewsletterForm />
    </div>
  )
}

export default HomePage
