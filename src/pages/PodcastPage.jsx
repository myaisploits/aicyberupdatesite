import NewsletterForm from '../components/NewsletterForm'
import PodcastCard from '../components/PodcastCard'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { podcasts } from '../data/podcasts'
import { subscribeLinks } from '../data/siteData'

function PodcastPage() {
  return (
    <div className="space-y-10">
      <SEO
        title="Podcasts | Signal & Cipher"
        description="Listen to Signal & Cipher podcast episodes with show notes, audio players, and subscription links."
      />
      <SectionHeader
        eyebrow="Podcast"
        title="Conversations with practitioners shaping AI and security."
        description="Listen in, read the show notes, and subscribe in the player of your choice."
      />

      <section className="surface-card rounded-[1.8rem] p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Subscribe
            </p>
            <p className="text-muted-strong mt-3 text-sm leading-7">
              Follow the feed anywhere. RSS is ready for your preferred host or syndication workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {subscribeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink-950/10 px-4 py-2 text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6">
        {podcasts.map((episode) => (
          <PodcastCard key={episode.id} episode={episode} />
        ))}
      </div>

      <NewsletterForm compact />
    </div>
  )
}

export default PodcastPage
