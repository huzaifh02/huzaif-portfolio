import Link from 'next/link';
import type { CSSProperties } from 'react';
import { getProjects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

const skills = [
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
  { name: 'AWS', icon: '/icons/amazonaws.svg' },
  { name: 'GCP', icon: '/icons/googlecloud.svg' },
  { name: 'Terraform', icon: '/icons/terraform.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'GitHub Actions', icon: '/icons/githubactions.svg' },
  { name: 'Prometheus', icon: '/icons/prometheus.svg' },
  { name: 'Grafana', icon: '/icons/grafana.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Helm', icon: '/icons/helm.svg' },
];

const highlights = [
  { value: '3+ yrs', label: 'DevOps engineering' },
  { value: '20+ clusters', label: 'Operated & migrated' },
  { value: '120+ pipelines', label: 'CI/CD automation' },
  { value: '99.9%', label: 'Availability focus' },
];

const services = [
  {
    title: 'Infrastructure Foundations',
    description:
      'Designing infrastructure foundations that make cloud systems predictable, scalable, and self-serve for product teams.',
  },
  {
    title: 'Reliability & Observability',
    description:
      'Signal-rich monitoring, alerting, and incident response systems that reduce noise and protect uptime.',
  },
  {
    title: 'DevEx & Automation',
    description:
      'Streamlining CI/CD, IaC workflows, and golden paths so developers ship confidently and faster.',
  },
];

const personal = [
  {
    title: 'Trekking',
    description:
      "I'm from Kashmir, and when I'm not working you'll usually find me trekking to alpine lakes or exploring the mountains.",
    images: [
      '/personal/IMG_20230625_114721.jpg',
      '/personal/IMG_20230914_120254.jpg',
    ],
  },
  {
    title: 'Football',
    description:
      'I played semi-professionally through school and college. The discipline still shapes how I run incidents.',
    image: '/personal/football1.jpeg',
  },
  {
    title: 'Chess',
    description:
      'A 1300-rated chess.com habit that keeps me thinking several moves ahead, just like designing resilient systems.',
    image: '/personal/chess1.png',
  },
];

const podcasts = [
  {
    title: 'Cloudflare Freemium Model Explained',
    videoId: 'YEMvDCbbolA',
    episode: 'Episode 1',
  },
  {
    title: 'GitHub Actions vs Jenkins',
    videoId: 'OPLRZofmN20',
    episode: 'Episode 2',
  },
];

const revealStyle = (delay: string): CSSProperties => ({
  '--delay': delay,
} as CSSProperties);

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="page-shell min-h-screen">
      <div className="absolute inset-0 grid-dots opacity-25" aria-hidden="true" />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center reveal" style={revealStyle('80ms')}>
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-[var(--border)] glow">
                <img
                  src="/profile.jpg"
                  alt="Huzaif Shah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-center">
                <span className="w-3 h-3 bg-[var(--accent-cool)] rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          <div className="reveal" style={revealStyle('120ms')}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full surface-soft text-sm text-[var(--muted)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cool)] animate-pulse" />
                Open to new DevOps challenges
              </span>
            </div>

          <div className="space-y-4 reveal" style={revealStyle('180ms')}>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">DevOps Engineer</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-[var(--foreground)]">
              Huzaif Shah
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)]">
              Building calm, resilient <span className="gradient-text">cloud infrastructure</span> that teams trust.
            </p>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              I help teams ship with confidence by strengthening Kubernetes foundations, modernizing delivery pipelines,
              and designing observability that tells the real story of production.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 reveal" style={revealStyle('240ms')}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl accent-badge font-semibold text-sm transition-transform hover:scale-[1.02]"
            >
              View Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)] transition"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8l-9 6-9-6" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs text-[var(--muted)] reveal" style={revealStyle('300ms')}>
            <span className="surface-soft px-4 py-2 rounded-full">Kashmir, India</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 reveal" style={revealStyle('340ms')}>
          {highlights.map((item) => (
            <div key={item.label} className="surface-soft rounded-2xl px-4 py-3 text-center">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item.value}</p>
              <p className="text-xs text-[var(--muted)] mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 surface-soft rounded-3xl p-6 space-y-4 reveal" style={revealStyle('380ms')}>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] text-center">Toolbox</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border)] text-xs text-[var(--foreground)]"
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4 invert opacity-80" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        <div className="flex items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Selected Work</p>
            <h2 className="text-3xl font-display text-[var(--foreground)]">Projects that shaped reliability</h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            Explore all
          </Link>
        </div>
        <div className="grid gap-6">
          {projects.slice(0, 5).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {projects.length > 5 && (
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
            >
              View all {projects.length} projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">How I Help</p>
            <h2 className="text-3xl font-display text-[var(--foreground)] mb-4">DevOps clarity for fast teams</h2>
            <p className="text-[var(--muted)] max-w-lg">
              I partner with engineering teams to design infrastructure that is intuitive, observable, and ready for growth.
              From discovery to delivery, I focus on making cloud systems reliable and easy to ship against.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.title} className="surface-card rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--muted)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-display text-[var(--foreground)]">Videos</h2>
            <p className="text-sm text-[var(--muted)]">Sharing lessons from DevOps operations</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {podcasts.map((podcast) => (
            <div
              key={podcast.videoId}
              className="surface-card rounded-3xl overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.videoId}`}
                  title={podcast.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  {podcast.episode}
                </span>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mt-2">
                  {podcast.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-display text-[var(--foreground)]">Beyond the Console</h2>
            <p className="text-sm text-[var(--muted)]">What keeps me grounded outside of work</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {personal.map((item) => {
            const images = item.images ?? (item.image ? [item.image] : []);

            return (
            <div key={item.title} className="surface-card rounded-3xl overflow-hidden">
              {images.length === 1 && (
                <div className="h-56 w-full bg-[var(--surface-3)] flex items-center justify-center p-4">
                  <img
                    src={images[0]}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain rounded-2xl"
                  />
                </div>
              )}
              {images.length > 1 && (
                <div className="grid grid-cols-2 gap-2 p-4 bg-[var(--surface-3)]">
                  {images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt={item.title}
                      className="h-32 w-full object-cover rounded-2xl"
                    />
                  ))}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          )})}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 pb-24 relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-display text-[var(--foreground)]">Let’s connect</h2>
            <p className="text-sm text-[var(--muted)]">Start a conversation about reliability and infrastructure goals</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="https://www.linkedin.com/in/mohammad-huzaif-shah-742257237/"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card rounded-2xl p-5 flex items-center justify-between gap-3"
          >
            <span className="text-sm font-semibold text-[var(--foreground)]">LinkedIn</span>
            <span className="text-xs text-[var(--muted)]">Let’s connect</span>
          </a>
          <a
            href="https://github.com/huzaifh02"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card rounded-2xl p-5 flex items-center justify-between gap-3"
          >
            <span className="text-sm font-semibold text-[var(--foreground)]">GitHub</span>
            <span className="text-xs text-[var(--muted)]">Open source</span>
          </a>
          <a
            href="mailto:huzaifh02@gmail.com"
            className="surface-card rounded-2xl p-5 flex items-center justify-between gap-3"
          >
            <span className="text-sm font-semibold text-[var(--foreground)]">Email</span>
            <span className="text-xs text-[var(--muted)]">huzaifh02@gmail.com</span>
          </a>
        </div>
      </section>
    </div>
  );
}
