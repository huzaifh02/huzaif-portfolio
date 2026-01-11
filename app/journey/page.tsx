import { getJourneyEntries } from '@/lib/content';
import JourneyTimeline from '@/components/JourneyTimeline';

export default async function JourneyPage() {
  const entries = await getJourneyEntries();

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">My Journey</h1>
        </div>
        <p className="text-neutral-400 text-lg">
          From DevOps to Platform Engineering — milestones along the way.
        </p>
      </div>

      <JourneyTimeline entries={entries} />
    </div>
  );
}
