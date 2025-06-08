import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  thumbnail?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  tags,
  slug,
  thumbnail = '/placeholder.jpg'
}: BlogCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mb-2 text-xl font-semibold line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {title}
          </Link>
        </h2>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3 dark:text-gray-300">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            続きを読む →
          </Link>
        </div>
      </div>
    </article>
  );
} 