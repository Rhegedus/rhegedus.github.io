import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        My Portfolio
      </h1>
      
      {posts.length === 0 ? (
        <p className="text-slate-400">No projects found. Add some markdown files in the `content` folder.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/portfolio/${post.slug}`}
              className="block p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors group"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {post.metadata.title}
              </h2>
              
              {post.metadata.company && (
                <p className="text-sm text-slate-400 mb-2">{post.metadata.company}</p>
              )}
              
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
