import { Link } from 'react-router-dom'
import { socialLinks } from '../data/siteData'

function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-white/50 dark:border-white/10 dark:bg-ink-950/45">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-2xl font-semibold">Signal & Cipher</p>
          <p className="text-muted-strong max-w-xl text-sm leading-7">
            A publication for teams tracking frontier AI, defensive engineering, and the
            shifting edge of cyber risk.
          </p>
        </div>
        <div>
          <p className="text-muted mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
            Explore
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/blog" className="hover:text-cyan-400">
              Blog
            </Link>
            <Link to="/podcasts" className="hover:text-cyan-400">
              Podcasts
            </Link>
            <Link to="/updates" className="hover:text-cyan-400">
              Current updates
            </Link>
            <Link to="/privacy" className="hover:text-cyan-400">
              Privacy policy
            </Link>
          </div>
        </div>
        <div>
          <p className="text-muted mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
            Follow
          </p>
          <div className="flex flex-col gap-3 text-sm">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
