import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-ink-950 px-6 py-14 text-sand-50 shadow-panel sm:px-10 lg:px-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(84,212,255,0.26),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(200,241,105,0.14),_transparent_24%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Intelligence for builders and defenders
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Decode the future of AI. Defend against the risks of now.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-100/78 sm:text-lg">
            Signal & Cipher translates fast-moving AI research, adversarial tactics, and
            security engineering patterns into practical insight for modern teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/blog" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-ink-950 hover:-translate-y-0.5">
              Explore articles
            </Link>
            <Link to="/updates" className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-sand-50 hover:-translate-y-0.5 hover:bg-white/12">
              Live updates
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <article className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-100/55">Coverage map</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold text-cyan-300">AI</p>
                <p className="mt-2 text-sm text-slate-100/65">
                  Model deployment, governance, agent workflows, and regulation.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-lime-300">Cyber</p>
                <p className="mt-2 text-sm text-slate-100/65">
                  Detection, response, zero trust, cloud defense, and resilience.
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-100/55">Signal promise</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-100/75">
              <li>Actionable explainers instead of hype cycles.</li>
              <li>Operational security insight rooted in real incidents.</li>
              <li>Podcast conversations with practitioners building at the edge.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
