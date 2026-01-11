import { BlogPost } from '@/lib/markdown';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time className="text-sm text-orange-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-neutral-400 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
          
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
