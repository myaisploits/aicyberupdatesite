import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PostPage = lazy(() => import('./pages/PostPage'))
const PodcastPage = lazy(() => import('./pages/PodcastPage'))
const UpdatesPage = lazy(() => import('./pages/UpdatesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4">
            <div className="surface-card rounded-full px-5 py-3 text-sm">
              Loading Signal & Cipher...
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<PostPage />} />
            <Route path="podcasts" element={<PodcastPage />} />
            <Route path="updates" element={<UpdatesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
