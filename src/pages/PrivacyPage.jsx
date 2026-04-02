import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

function PrivacyPage() {
  return (
    <div className="space-y-10">
      <SEO
        title="Privacy Policy | Signal & Cipher"
        description="Read the privacy policy for Signal & Cipher."
      />
      <SectionHeader
        eyebrow="Privacy"
        title="A simple privacy baseline for readers and listeners."
        description="Replace this placeholder policy with your final legal language before launch."
      />
      <section className="surface-card rounded-[1.8rem] p-6">
        <div className="text-muted-strong space-y-5 text-sm leading-7">
          <p>
            We collect the minimum information needed to operate this website, respond to contact requests, and
            manage newsletter subscriptions.
          </p>
          <p>
            Newsletter submissions should only be sent to a compliant provider after you connect the integration.
            Until then, this demo stores no backend subscriber data.
          </p>
          <p>
            You can update this page with your final retention periods, processors, lawful bases, and regional
            rights disclosures.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
