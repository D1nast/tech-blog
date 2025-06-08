import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  tags,
  slug,
}: BlogCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-1 flex-col p-6">
        <time className="mb-2 text-sm text-gray-500 dark:text-gray-400">{date}</time>
        <h2 className="mb-4 text-xl font-semibold line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {title}
          </Link>
        </h2>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3 dark:text-gray-300">
          {excerpt}
        </p>
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <Link
              href={`/blog/${slug}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              続きを読む →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
} 