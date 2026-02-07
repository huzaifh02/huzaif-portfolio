import { getProjects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-3">Portfolio</p>
        <h1 className="text-3xl md:text-4xl font-display text-[var(--foreground)]">
          Huzaif Shah
        </h1>
        <p className="text-[var(--muted)] text-lg mt-3 max-w-2xl">
          DevOps engineer building calm, reliable infrastructure. Selected work in Kubernetes, CI/CD, and
          cloud automation.
        </p>
      </div>
      <div className="surface-card rounded-3xl p-6 flex items-center gap-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[var(--border)] glow">
          <img
            src="/profile.jpg"
            alt="Huzaif Shah"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-display text-[var(--foreground)]">DevOps Engineer</p>
          <p className="text-sm text-[var(--muted)]">Kashmir, India</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-[var(--muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-cool)]" />
              Available March 2026
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
