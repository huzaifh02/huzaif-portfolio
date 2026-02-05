import { BlogPost } from '@/lib/markdown';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const hasImage = post.image && post.image.trim() !== '';

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="surface-card rounded-3xl overflow-hidden transition-all">
        {hasImage && (
          <div className="relative w-full h-48 bg-[var(--surface-3)] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 text-[var(--muted)] text-xs uppercase tracking-[0.2em]">
              <span>Blog</span>
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border)] text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:border-[var(--border-strong)] transition-all">
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
