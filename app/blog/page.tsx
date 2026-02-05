import { getBlogPosts } from '@/lib/markdown';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-3">Writing</p>
        <h1 className="text-3xl md:text-4xl font-display text-[var(--foreground)]">Platform notes</h1>
        <p className="text-[var(--muted)] text-lg mt-3 max-w-2xl">
          Short, actionable notes on platform engineering, cloud infrastructure, and Kubernetes operations.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
