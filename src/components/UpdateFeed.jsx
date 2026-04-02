import { useEffect, useMemo, useState } from 'react'
import { fallbackUpdates } from '../data/siteData'
import { formatRelativeTime } from '../utils/formatters'

const RSS_JSON_BASE_URL = 'https://rssjson.vercel.app/api?url='
const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY
const RECENT_WINDOWS = [
  { days: 2, ms: 1000 * 60 * 60 * 48 },
  { days: 7, ms: 1000 * 60 * 60 * 24 * 7 },
  { days: 14, ms: 1000 * 60 * 60 * 24 * 14 },
  { days: 30, ms: 1000 * 60 * 60 * 24 * 30 },
]
const MINIMUM_ITEMS = 8

const feedMap = {
  ai: {
    title: 'AI updates',
    description: 'Latest signals from model labs, policy, and production AI.',
    query: 'artificial intelligence OR generative AI OR LLM OR OpenAI OR Anthropic',
    sources: [
      { name: 'OpenAI News', url: 'https://openai.com/news/rss.xml' },
      { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml' },
      { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/' },
      { name: 'Planet AI', url: 'https://planet-ai.net/rss.xml' },
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity updates',
    description: 'Live headlines from incident response, advisories, and threat intel.',
    query: 'cybersecurity OR ransomware OR zero-day OR data breach OR vulnerability',
    sources: [
      { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/' },
      { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/feed/' },
      { name: 'Microsoft Security Response Center', url: 'https://api.msrc.microsoft.com/update-guide/rss' },
    ],
  },
}

function isWithinWindow(pubDate, windowMs) {
  const timestamp = new Date(pubDate).getTime()
  return Number.isFinite(timestamp) && Date.now() - timestamp <= windowMs
}

async function fetchJson(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

async function fetchRssSource(source) {
  const data = await fetchJson(`${RSS_JSON_BASE_URL}${encodeURIComponent(source.url)}`)

  return (data.items ?? []).map((item) => ({
    title: item.title,
    link: item.link || item.guid || source.url,
    pubDate: item.pubDate || item.published || item.isoDate || new Date().toISOString(),
    source: source.name,
  }))
}

async function fetchGNews(query, limit) {
  if (!GNEWS_API_KEY) {
    return []
  }

  const params = new URLSearchParams({
    q: query,
    lang: 'en',
    max: String(limit),
    apikey: GNEWS_API_KEY,
  })

  const data = await fetchJson(`https://gnews.io/api/v4/search?${params.toString()}`)

  return (data.articles ?? []).map((article) => ({
    title: article.title,
    link: article.url,
    pubDate: article.publishedAt,
    source: article.source?.name ?? 'GNews',
  }))
}

function dedupeAndSort(items) {
  const seen = new Set()

  return items
    .filter((item) => item.title && item.link)
    .sort((left, right) => new Date(right.pubDate).getTime() - new Date(left.pubDate).getTime())
    .filter((item) => {
      const key = `${item.link}::${item.title}`
      if (seen.has(key)) {
        return false
      }

      seen.add(key)
      return true
    })
}

function selectRecentItems(items, limit) {
  const sortedItems = dedupeAndSort(items)

  for (const windowConfig of RECENT_WINDOWS) {
    const matches = sortedItems.filter((item) => isWithinWindow(item.pubDate, windowConfig.ms))
    if (matches.length >= Math.min(limit, MINIMUM_ITEMS)) {
      return {
        items: matches.slice(0, limit),
        daysWindow: windowConfig.days,
        mode: 'live',
      }
    }
  }

  return {
    items: sortedItems.slice(0, limit),
    daysWindow: RECENT_WINDOWS.at(-1)?.days ?? 30,
    mode: 'live',
  }
}

function fillMinimumItems(items, category, limit) {
  const targetCount = Math.min(limit, MINIMUM_ITEMS)
  if (items.length >= targetCount) {
    return items.slice(0, limit)
  }

  const reserveItems = dedupeAndSort([
    ...items,
    ...fallbackUpdates[category],
  ])

  return reserveItems.slice(0, Math.max(limit, targetCount))
}

function UpdateFeed({ category = 'ai', limit = 10, autoRefresh = true }) {
  const config = feedMap[category]
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [refreshKey, setRefreshKey] = useState(0)
  const [windowDays, setWindowDays] = useState(2)

  useEffect(() => {
    let cancelled = false

    const loadUpdates = async () => {
      try {
        setStatus('loading')
        const liveResults = await Promise.allSettled([
          fetchGNews(config.query, Math.max(limit, MINIMUM_ITEMS)),
          ...config.sources.map((source) => fetchRssSource(source)),
        ])
        const aggregatedItems = liveResults.flatMap((result) =>
          result.status === 'fulfilled' ? result.value : [],
        )
        const recentSelection = selectRecentItems(aggregatedItems, limit)
        const nextItems = fillMinimumItems(recentSelection.items, category, limit)

        if (!cancelled && nextItems.length >= Math.min(limit, MINIMUM_ITEMS)) {
          setItems(nextItems)
          setWindowDays(recentSelection.daysWindow)
          setStatus(nextItems.length > recentSelection.items.length ? 'hybrid' : 'success')
          setLastUpdated(new Date())
          return
        }

        if (!cancelled) {
          setItems(fillMinimumItems([], category, limit))
          setWindowDays(30)
          setStatus('reserve')
          setLastUpdated(new Date())
        }
      } catch {
        if (!cancelled) {
          setStatus('reserve')
          setItems(fillMinimumItems([], category, limit))
          setWindowDays(30)
          setLastUpdated(new Date())
        }
      }
    }

    loadUpdates()

    if (!autoRefresh) {
      return () => {
        cancelled = true
      }
    }

    const intervalId = window.setInterval(loadUpdates, 1000 * 60 * 15)

    return () => {
      cancelled = true
      window.clearInterval(intervalId)
    }
  }, [autoRefresh, category, config.query, config.sources, limit, refreshKey])

  const visibleItems = useMemo(() => items.slice(0, limit), [items, limit])

  return (
    <section className="surface-card rounded-[1.6rem] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {config.title}
          </p>
          <p className="text-muted-strong mt-3 text-sm leading-7">
            {config.description}
          </p>
        </div>
        <div className="rounded-full border border-ink-950/10 bg-slate-50/95 px-3 py-2 text-xs uppercase tracking-[0.24em] text-ink-900 dark:border-white/10 dark:bg-ink-800/80 dark:text-slate-50">
          <button
            type="button"
            onClick={() => setRefreshKey((value) => value + 1)}
            className="font-semibold disabled:opacity-60"
            aria-label={`Refresh ${config.title}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {visibleItems.length ? (
        <div className="mt-6 space-y-4">
          {visibleItems.map((item) => (
            <article
              key={`${item.title}-${item.link}`}
              className="surface-card-soft rounded-2xl p-4"
            >
              <a href={item.link} target="_blank" rel="noreferrer" className="font-medium hover:text-cyan-400">
                {item.title}
              </a>
              <div className="text-muted mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <span>{item.source}</span>
                <span>{formatRelativeTime(item.pubDate)}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="surface-card-soft mt-6 rounded-2xl p-4 text-sm leading-7">
          {status === 'loading'
            ? 'Fetching current headlines from live AI and cybersecurity sources...'
            : 'No live items were available just now, so the reserve feed is filling the panel.'}
        </div>
      )}

      <p className="text-muted mt-5 text-xs leading-6">
        Sources are attributed per item. Refresh prioritizes the last 2 days, then widens to the last {windowDays} days when needed to keep at least 8 items visible. Last checked {lastUpdated.toLocaleTimeString()}. Auto-refresh runs every 15 minutes.
      </p>
    </section>
  )
}

export default UpdateFeed
