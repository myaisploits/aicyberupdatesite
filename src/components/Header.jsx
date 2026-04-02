import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../data/siteData'

const navClassName = ({ isActive }) =>
  `rounded-full px-4 py-2.5 text-sm font-medium ${
    isActive
      ? 'bg-ink-950 text-sand-50 shadow-lg shadow-ink-950/15 dark:bg-cyan-400 dark:text-ink-950 dark:shadow-cyan-400/20'
      : 'text-ink-900/80 hover:bg-white hover:text-ink-950 dark:text-slate-50/95 dark:hover:bg-white/12 dark:hover:text-white'
  }`

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 9 9 0 1 0 20 15.2Z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('signal-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme ?? (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    window.localStorage.setItem('signal-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/55 bg-sand-50/88 px-4 py-3 shadow-[0_20px_45px_rgba(8,17,31,0.08)] backdrop-blur-xl dark:border-white/12 dark:bg-ink-950/76">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-950 to-ink-800 text-xs font-black uppercase tracking-[0.3em] text-cyan-300 shadow-panel dark:from-cyan-300 dark:to-cyan-400 dark:text-ink-950">
            S+C
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">Signal & Cipher</p>
            <p className="text-muted text-xs uppercase tracking-[0.28em]">
              AI x Cybersecurity intelligence
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav
            className="flex items-center gap-1 rounded-full border border-ink-950/8 bg-white/78 p-1.5 shadow-sm dark:border-white/12 dark:bg-ink-900/92"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <NavLink key={item.to} className={navClassName} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <NavLink className={navClassName} to="/updates">
              Updates
            </NavLink>
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/10 bg-white/95 text-ink-950 shadow-sm hover:-translate-y-0.5 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-950/10 bg-white/95 text-ink-950 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-950/10 bg-white/95 text-ink-950 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/55 bg-sand-50/92 px-4 pb-4 pt-3 shadow-[0_20px_45px_rgba(8,17,31,0.08)] backdrop-blur-xl lg:hidden dark:border-white/12 dark:bg-ink-950/86">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {[...navigationItems, { label: 'Updates', to: '/updates' }].map((item) => (
              <NavLink
                key={item.to}
                className={navClassName}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
