import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <SEO title="404 | Signal & Cipher" description="The requested page could not be found." />
      <div className="surface-card max-w-xl rounded-[2rem] p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          This signal is out of range.
        </h1>
        <p className="text-muted-strong mt-4 text-sm leading-7">
          The page you tried to reach does not exist anymore, or the link was malformed.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 hover:-translate-y-0.5 dark:bg-cyan-400 dark:text-ink-950"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
