import { getBlogPosts, getBlogPost } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-12 transition-colors group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Blog
      </Link>

      <article>
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
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
          <h1 className="text-3xl md:text-4xl font-display text-[var(--foreground)] mb-4 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              {post.excerpt}
            </p>
          )}
          {post.image && post.image.trim() !== '' && (
            <div className="mt-8 rounded-3xl overflow-hidden border border-[var(--border)]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          )}
        </header>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
