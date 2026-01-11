import { JourneyEntry } from '@/lib/content';

interface JourneyTimelineProps {
  entries: JourneyEntry[];
}

export default function JourneyTimeline({ entries }: JourneyTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />
      
      <div className="space-y-8">
        {entries.map((entry, index) => (
          <article key={entry.id} className="relative pl-16 group">
            {/* Timeline dot */}
            <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-neutral-900 border-2 border-orange-500 group-hover:bg-orange-500 transition-colors">
              <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            
            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time className="text-sm text-orange-400 font-medium">
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </time>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {entry.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
