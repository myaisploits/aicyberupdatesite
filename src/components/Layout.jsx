import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className="min-h-screen text-ink-950 dark:text-slate-50">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
