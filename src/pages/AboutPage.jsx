import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

function AboutPage() {
  return (
    <div className="space-y-10">
      <SEO
        title="About | Signal & Cipher"
        description="Learn about Signal & Cipher and its mission covering AI and cybersecurity for practical teams."
      />
      <SectionHeader
        eyebrow="About"
        title="Editorial signal for teams navigating AI acceleration and cyber risk."
        description="Signal & Cipher exists for people building systems under pressure: security leaders, engineers, founders, analysts, and operators."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="surface-card rounded-[1.6rem] p-6">
          <h3 className="font-display text-2xl font-semibold">Mission</h3>
          <p className="text-muted-strong mt-4 text-sm leading-7">
            Translate fast-moving developments in AI and cybersecurity into crisp, decision-ready insight.
          </p>
        </article>
        <article className="surface-card rounded-[1.6rem] p-6">
          <h3 className="font-display text-2xl font-semibold">Editorial lens</h3>
          <p className="text-muted-strong mt-4 text-sm leading-7">
            We focus on operational impact: what changes for engineering, governance, detection, response, and trust.
          </p>
        </article>
        <article className="surface-card rounded-[1.6rem] p-6">
          <h3 className="font-display text-2xl font-semibold">Audience</h3>
          <p className="text-muted-strong mt-4 text-sm leading-7">
            Product builders, defenders, operators, and executives who want practical context instead of trend-chasing.
          </p>
        </article>
      </section>
    </div>
  )
}

export default AboutPage
