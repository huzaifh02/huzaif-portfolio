import Link from 'next/link';

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

const blogs = [
  {
    title: 'Securely Expose Apps Using Cloudflare Tunnel',
    url: 'https://www.kubeblogs.com/how-to-securely-expose-your-applications-using-cloudflare-tunnel-step-by-step-guide/',
  },
  {
    title: 'Enterprise AWS Backup Implementation',
    url: 'https://www.kubeblogs.com/enterprise-aws-backup-implementation-compliance-policies-monitoring-and-data-protection/',
  },
  {
    title: 'The Graviton Advantage: Cut Your Cloud Bill in Half',
    url: 'https://www.kubeblogs.com/how-choosing-the-right-aws-instances-can-cut-your-cloud-bill-in-half-the-graviton-advantage/',
  },
  {
    title: 'EC2 or Fargate?',
    url: 'https://www.kubeblogs.com/ec2-or-fargate/',
  },
  {
    title: 'Act for GitHub Actions',
    url: 'https://www.kubeblogs.com/act-for-github-actions/',
  },
  {
    title: 'Custom Healthy Backend Count Metric in GCP',
    url: 'https://www.kubeblogs.com/how-to-create-a-custom-healthy-backend-count-metric-in-gcp-fixing-the-aws-healthyhostcount-gap/',
  },
  {
    title: 'Deploy New Images in a VM Without SSH',
    url: 'https://www.kubeblogs.com/how-to-deploy-new-images-in-a-vm-without-ssh-secure-container-deployment/',
  },
  {
    title: 'Avoid GitHub Token Rate Limiting Issues',
    url: 'https://www.kubeblogs.com/how-to-avoid-github-token-rate-limiting-issues-complete-guide-for-devops-teams/',
  },
  {
    title: 'Deploy AWS Lambda Using GitHub Actions',
    url: 'https://www.kubeblogs.com/how-to-deploy-aws-lambda-functions-using-github-actions-complete-ci-cd-automation-guide/',
  },
];

const podcasts = [
  {
    title: 'Platform Engineering Deep Dive',
    url: 'https://youtu.be/YEMvDCbbolA?si=p5CW0jhBC-tOXfHL',
    duration: 'Episode 1',
  },
  {
    title: 'Cloud Infrastructure Insights',
    url: 'https://youtu.be/OPLRZofmN20?si=YJLtOwohytKpJKnZ',
    duration: 'Episode 2',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Available for work
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Building reliable<br />
          <span className="gradient-text">cloud platforms</span>
        </h1>
        
        <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl">
          I design, build, and operate internal platforms on AWS and GCP. 
          Specializing in Kubernetes, CI/CD, and production observability.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-all hover:scale-105 glow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            View Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-orange-500/50 text-white rounded-lg transition-all hover:bg-neutral-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </Link>
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
              Platform Engineer with <span className="text-orange-400 font-medium">3+ years of experience</span>. 
              I specialize in Kubernetes (EKS, GKE), CI/CD platform engineering, 
              Infrastructure as Code, and production observability.
            </p>
            <p>
              I focus on enabling developer productivity through reliable, 
              scalable infrastructure. I've led cloud migrations, built developer 
              tooling, and designed reliability-focused platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Writing</h2>
          <a 
            href="https://www.kubeblogs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-auto text-sm text-orange-400 hover:text-orange-300 flex items-center gap-1"
          >
            View all on KubeBlogs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        <div className="grid gap-3">
          {blogs.map((blog) => (
            <a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-neutral-300 group-hover:text-white transition-colors">
                  {blog.title}
                </span>
              </div>
              <svg className="w-5 h-5 text-neutral-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Podcasts</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {podcasts.map((podcast) => (
            <a
              key={podcast.url}
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center glow-sm">
                <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xs text-orange-400 font-medium">{podcast.duration}</span>
                <h3 className="text-neutral-200 group-hover:text-white transition-colors font-medium">
                  {podcast.title}
                </h3>
              </div>
            </a>
          ))}
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
