import { getJourneyEntries } from '@/lib/content';
import JourneyTimeline from '@/components/JourneyTimeline';

export default async function JourneyPage() {
  const entries = await getJourneyEntries();

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-3">Journey</p>
        <h1 className="text-3xl md:text-4xl font-display text-[var(--foreground)]">From DevOps to platform</h1>
        <p className="text-[var(--muted)] text-lg mt-3 max-w-2xl">
          Milestones that shaped my approach to reliability, tooling, and platform clarity.
        </p>
      </div>

      <JourneyTimeline entries={entries} />
    </div>
  );
}
