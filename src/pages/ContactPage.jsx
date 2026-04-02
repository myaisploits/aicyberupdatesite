import { useState } from 'react'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

const initialState = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', text: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, message } = form

    if (!name.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please complete your name and message.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setStatus({
      type: 'success',
      text: 'Message captured. Connect this form to your inbox provider or CRM to activate delivery.',
    })
    setForm(initialState)
  }

  return (
    <div className="space-y-10">
      <SEO
        title="Contact | Signal & Cipher"
        description="Reach out to Signal & Cipher using the contact form."
      />
      <SectionHeader
        eyebrow="Contact"
        title="Reach the editorial team."
        description="Use the form for partnerships, speaking requests, editorial ideas, or podcast guest suggestions."
      />

      <section className="surface-card rounded-[1.8rem] p-6">
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-ink-950/10 bg-slate-50 px-4 py-3 text-sm text-ink-950 outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-ink-950/10 bg-slate-50 px-4 py-3 text-sm text-ink-950 outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Message</span>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-ink-950/10 bg-slate-50 px-4 py-3 text-sm text-ink-950 outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            />
          </label>
          <div>
            <button
              type="submit"
              className="rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 hover:-translate-y-0.5 dark:bg-cyan-400 dark:text-ink-950"
            >
              Send message
            </button>
          </div>
        </form>
        {status.text ? (
          <p className={`mt-4 text-sm ${status.type === 'error' ? 'text-rose-500' : 'text-emerald-500'}`} role="status">
            {status.text}
          </p>
        ) : null}
      </section>
    </div>
  )
}

export default ContactPage
