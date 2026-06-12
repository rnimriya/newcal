import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
  author?: string;
  toolSlug?: string;
  toolCategory?: string;
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Partial<BlogPost> = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field as keyof BlogPost] = data[field];
    }
  });

  return items as BlogPost;
}

export function getAllPosts(fields: string[] = []): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
