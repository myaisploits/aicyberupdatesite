import { useState } from 'react'

const initialState = {
  email: '',
  consent: false,
}

function NewsletterForm({ compact = false }) {
  const [form, setForm] = useState(initialState)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = form.email.trim()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: 'error', text: 'Enter a valid email address to subscribe.' })
      return
    }

    if (!form.consent) {
      setMessage({
        type: 'error',
        text: 'Please confirm GDPR consent before joining the newsletter.',
      })
      return
    }

    setMessage({
      type: 'success',
      text: 'Subscription captured. Connect this form to Mailchimp or ConvertKit to activate delivery.',
    })
    setForm(initialState)
  }

  return (
    <section className={`surface-card rounded-[1.8rem] ${compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6'}`}>
      <div className={compact ? 'max-w-2xl' : 'max-w-3xl'}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Newsletter
        </p>
        <h3 className={`font-display font-semibold tracking-tight ${compact ? 'mt-2 text-2xl' : 'mt-3 text-2xl sm:text-[2rem]'}`}>
          Weekly briefings on frontier AI and practical defense.
        </h3>
        <p className={`text-muted-strong ${compact ? 'mt-2 text-sm leading-6' : 'mt-2 text-sm leading-6 sm:leading-7'}`}>
          Receive sharp analysis, curated links, and podcast drops without the feed fatigue.
        </p>
      </div>

      <form
        className={`mt-4 ${compact ? 'space-y-3' : 'grid gap-3 lg:grid-cols-[1fr_auto]'}`}
        onSubmit={handleSubmit}
      >
        <div className="space-y-3">
          <label className="block text-sm font-medium" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-ink-950/10 bg-slate-50 px-4 py-2.5 text-sm text-ink-950 outline-none ring-0 focus:border-cyan-400 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            aria-describedby="newsletter-message"
          />
          <label className="text-muted-strong flex items-start gap-3 text-sm leading-5.5">
            <input
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border border-ink-950/20"
            />
            <span>
              I consent to receiving email updates and understand I can unsubscribe at any time.
            </span>
          </label>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-full bg-ink-950 px-6 py-2.5 text-sm font-semibold text-sand-50 hover:-translate-y-0.5 dark:bg-cyan-400 dark:text-ink-950"
          >
            Subscribe
          </button>
        </div>
      </form>

      {message.text ? (
        <p
          id="newsletter-message"
          className={`mt-3 text-sm ${
            message.type === 'error' ? 'text-rose-500' : 'text-emerald-500'
          }`}
          role="status"
        >
          {message.text}
        </p>
      ) : null}
    </section>
  )
}

export default NewsletterForm
