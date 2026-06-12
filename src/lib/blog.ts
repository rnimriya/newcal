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
  image?: string;
}

const categoryImages: Record<string, string> = {
  finance: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop&auto=format&q=80",
  math: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=450&fit=crop&auto=format&q=80",
  health: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop&auto=format&q=80",
  loans: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop&auto=format&q=80",
  converters: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop&auto=format&q=80",
  physics: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop&auto=format&q=80",
  time: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=450&fit=crop&auto=format&q=80",
  algebra: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop&auto=format&q=80",
  default: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&auto=format&q=80"
};

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

  // Assign deterministic fallback image
  if (fields.includes('image') && !items.image) {
    const cat = (items.toolCategory || data.toolCategory || 'default').toLowerCase();
    items.image = categoryImages[cat] || categoryImages.default;
  }

  // Assign tags from category/tool if not present
  if (fields.includes('tags') && !items.tags) {
    items.tags = [];
    if (items.toolCategory || data.toolCategory) items.tags.push((items.toolCategory || data.toolCategory).toLowerCase());
    if (items.toolSlug || data.toolSlug) items.tags.push((items.toolSlug || data.toolSlug).replace(/-/g, ' '));
  }

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
