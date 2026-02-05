import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const fs = await import('fs/promises');
  const path = await import('path');
  
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = await fs.readdir(blogDirectory);
  
  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const filePath = path.join(blogDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const processedContent = await remark()
          .use(html)
          .process(content);
        
        const contentHtml = processedContent.toString();
        
        return {
          slug: filename.replace(/\.md$/, ''),
          title: data.title || '',
          date: data.date || '',
          excerpt: data.excerpt || '',
          content: contentHtml,
          image: data.image || '',
        };
      })
  );
  
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const fs = await import('fs/promises');
  const path = await import('path');
  
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content: contentHtml,
      image: data.image || '',
    };
  } catch (error) {
    return null;
  }
}
