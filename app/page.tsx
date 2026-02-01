import Link from 'next/link';
import { getProjects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

const skills = [
  { name: 'Kubernetes', icon: '⎈' },
  { name: 'AWS', icon: '☁️' },
  { name: 'GCP', icon: '🌐' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GitHub Actions', icon: '⚡' },
  { name: 'Prometheus', icon: '📊' },
  { name: 'Grafana', icon: '📈' },
  { name: 'Python', icon: '🐍' },
  { name: 'Helm', icon: '⛵' },
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

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-orange-500/30 glow">
                <img
                  src="/profile.jpg"
                  alt="Huzaif Shah"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center border-2 border-neutral-800">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
              Huzaif Shah
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-400 mb-4">
              Building reliable <span className="gradient-text font-semibold">cloud platforms</span>
            </p>
            
            <p className="text-neutral-500 leading-relaxed mb-6 max-w-xl">
              Platform Engineer specializing in Kubernetes, AWS/GCP, CI/CD, and production observability.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-all hover:scale-105 glow-sm text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 hover:border-orange-500/50 text-white rounded-lg transition-all hover:bg-neutral-800 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Skills & Tools</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-300 hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-default"
            >
              <span>{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">About</h2>
        </div>
        
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 md:p-8">
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I'm a Platform Engineer with <span className="text-orange-400 font-medium">2+ years of experience</span> building and operating cloud infrastructure. 
              I work with Kubernetes (EKS, GKE), CI/CD pipelines, Infrastructure as Code, and production monitoring.
            </p>
            <p>
              I focus on making infrastructure reliable and easy to use. I've led cloud migrations, built deployment tooling, 
              and written documentation so teams can operate systems independently. When I'm not working, you'll find me 
              playing football, chess, or trekking in the mountains of Kashmir.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Projects</h2>
        </div>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Videos</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {podcasts.map((podcast) => (
            <div
              key={podcast.videoId}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all"
            >
              {/* Video Embed */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.videoId}`}
                  title={podcast.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-4">
                <span className="inline-flex items-center gap-1 text-xs text-orange-400 font-medium mb-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {podcast.episode}
                </span>
                <h3 className="text-white font-medium">
                  {podcast.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Beyond Code</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Location & Nature */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Kashmir, India</h3>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              I live in Kashmir and love nature. When time permits, I go trekking and have covered several alpine lakes in the region. The mountains keep me grounded.
            </p>
          </div>

          {/* Football */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Football</h3>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-2">
              I love football and have been a semi-professional player during both college and school. It's been a big part of my life and taught me teamwork and discipline.
            </p>
          </div>

          {/* Chess */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Chess</h3>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              I play chess as a hobby on chess.com. Currently rated around 1300 - always working on improving my game. It helps me think strategically, which translates well to infrastructure planning.
            </p>
          </div>

          {/* Trekking */}
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Trekking</h3>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              When time permits, I go for treks in Kashmir. I've covered several alpine lakes in the region. There's something about being in nature that helps me reset and think clearly.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 pb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Connect</h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/mohammad-huzaif-shah-742257237/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all group"
          >
            <svg className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-neutral-300 group-hover:text-white transition-colors">LinkedIn</span>
          </a>
          
          <a
            href="https://www.kubeblogs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all group"
          >
            <svg className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-neutral-300 group-hover:text-white transition-colors">KubeBlogs</span>
          </a>
          
          <a
            href="mailto:huzaifh02@gmail.com"
            className="inline-flex items-center gap-3 px-5 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all group"
          >
            <svg className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-neutral-300 group-hover:text-white transition-colors">Email</span>
          </a>
        </div>
      </section>
    </div>
  );
}
