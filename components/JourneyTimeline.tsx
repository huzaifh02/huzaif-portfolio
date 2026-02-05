import { JourneyEntry } from '@/lib/content';

interface JourneyTimelineProps {
  entries: JourneyEntry[];
}

export default function JourneyTimeline({ entries }: JourneyTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[rgba(255,179,71,0.4)] to-transparent" />
      
      <div className="space-y-8">
        {entries.map((entry, index) => (
          <article key={entry.id} className="relative pl-16 group">
            {/* Timeline dot */}
            <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-[var(--surface-3)] border-2 border-[var(--accent)] group-hover:bg-[var(--accent)] transition-colors">
              <div className="absolute inset-0 rounded-full bg-[rgba(255,179,71,0.2)] animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            
            <div className="p-6 surface-card rounded-2xl transition-all">
              <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time>
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </time>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {entry.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
