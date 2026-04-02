import { useEffect } from 'react'

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title

    const metaDescription =
      document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', description)

    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription)
    }
  }, [description, title])

  return null
}

export default SEO
