# Signal & Cipher

A responsive AI and Cybersecurity blog and podcast website built with React, Vite, and Tailwind CSS.

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Environment Variables

- Copy `.env.example` to `.env` if you want to enable broader live-news coverage with GNews.
- `VITE_GNEWS_API_KEY` is optional. The updates page still uses RSS sources without it.

## Features

- Home page with hero, featured posts, updates preview, and newsletter signup
- Blog listing with search, category filters, pagination, and related posts
- Markdown-powered blog detail pages with syntax highlighting and a generated table of contents
- Podcast hub with audio players, show notes, RSS feed link, and subscribe buttons
- AI and Cybersecurity updates feed with auto-refresh and source attribution
- About, Contact, Privacy, and custom 404 pages
- Dark mode, accessibility-minded navigation, SEO metadata, `robots.txt`, and `sitemap.xml`

## Push To GitHub

If this folder is connected to your GitHub repository, run:

```powershell
git add .
git commit -m "Initial Signal & Cipher site"
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

If the remote already exists, skip the `git remote add origin ...` line.
