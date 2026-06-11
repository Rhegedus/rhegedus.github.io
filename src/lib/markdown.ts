import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostMetadata {
  title: string;
  tags: string[];
  company: string;
  status: string;
  order?: number;
  [key: string]: any;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  contentHtml: string;
}

export async function getPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Failed to read content directory:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse frontmatter and content
  const matterResult = matter(fileContents);
  const data = matterResult.data || {};
  const content = matterResult.content || '';

  // Convert markdown to clean HTML string using remark
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  // Robust parsing & safe fallback defaults to prevent static build block crash
  const title = typeof data.title === 'string' && data.title ? data.title : 'Untitled';
  const company = typeof data.company === 'string' ? data.company : '';
  const status = typeof data.status === 'string' ? data.status : '';
  const order = typeof data.order === 'number' ? data.order : undefined;

  let tags: string[] = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags.map((tag) => String(tag || '').trim()).filter(Boolean);
  } else if (typeof data.tags === 'string' && data.tags.trim() !== '') {
    tags = [data.tags.trim()];
  }

  const metadata: PostMetadata = {
    ...data,
    title,
    tags,
    company,
    status,
    order,
  };

  return {
    slug,
    metadata,
    contentHtml,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        return await getPostBySlug(slug);
      } catch (error) {
        console.error(`Error loading markdown post for slug "${slug}":`, error);
        return null;
      }
    })
  );

  // Filter out any null results from files that failed to read or parse
  const validPosts = posts.filter((post): post is Post => post !== null);

  // Sort posts by order metadata (ascending), with fallback to alphabetical order by title
  return validPosts.sort((a, b) => {
    const orderA = typeof a.metadata.order === 'number' ? a.metadata.order : 999;
    const orderB = typeof b.metadata.order === 'number' ? b.metadata.order : 999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.metadata.title.localeCompare(b.metadata.title);
  });
}
