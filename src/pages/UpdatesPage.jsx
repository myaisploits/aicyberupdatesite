import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import UpdateFeed from '../components/UpdateFeed'

function UpdatesPage() {
  return (
    <div className="space-y-10">
      <SEO
        title="Current Updates | Signal & Cipher"
        description="Track the latest AI and cybersecurity updates with auto-refreshing feeds and source attribution."
      />
      <SectionHeader
        eyebrow="Current updates"
        title="Monitor the live stream of AI and cyber developments."
        description="This page refreshes feed data every fifteen minutes and falls back to curated items when a public feed is unavailable."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <UpdateFeed category="ai" limit={10} autoRefresh />
        <UpdateFeed category="cybersecurity" limit={10} autoRefresh />
      </div>
    </div>
  )
}

export default UpdatesPage
