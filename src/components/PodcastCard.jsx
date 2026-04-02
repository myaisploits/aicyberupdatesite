function PodcastCard({ episode }) {
  return (
    <article className="surface-card rounded-[1.6rem] p-6">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-400">
        <span>{episode.duration}</span>
        <span className="h-1 w-1 rounded-full bg-current" />
        <span>{episode.publishDate}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{episode.title}</h3>
      <p className="text-muted-strong mt-3 text-sm leading-7">
        {episode.description}
      </p>
      <audio controls className="mt-5 w-full" aria-label={`Audio player for ${episode.title}`}>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio player.
      </audio>
      <div className="mt-5">
        <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
          Show notes
        </p>
        <ul className="text-muted-strong mt-3 space-y-2 text-sm leading-6">
          {episode.showNotes.map((note) => (
            <li key={note}>• {note}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default PodcastCard
