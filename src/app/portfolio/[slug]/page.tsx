import { getPostBySlug, getPostSlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);

    return (
      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="border-b border-slate-800 pb-8 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            {post.metadata.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 items-center">
            {post.metadata.company && (
              <div>
                <span className="font-semibold text-slate-300">Company:</span>{' '}
                {post.metadata.company}
              </div>
            )}
            {post.metadata.status && (
              <div>
                <span className="font-semibold text-slate-300">Status:</span>{' '}
                <span className="px-2 py-0.5 rounded text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {post.metadata.status}
                </span>
              </div>
            )}
          </div>

          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded bg-slate-850 text-slate-300 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* CSS prose styling class uses Tailwind's built-in prose classes */}
        <div
          className="prose prose-invert max-w-none text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
