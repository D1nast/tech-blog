import Link from 'next/link';
import Image from 'next/image';

type Category = {
  name: string;
  count: number;
};

type Tag = {
  name: string;
  count: number;
};

type RecentPost = {
  title: string;
  date: string;
  slug: string;
};

type SidebarProps = {
  categories: Category[];
  popularTags: Tag[];
  recentPosts: RecentPost[];
  className?: string;
};

export default function Sidebar({ categories, popularTags, recentPosts, className }: SidebarProps) {
  return (
    <div id="side-content" className={`w-full lg:w-[30%] ${className || ''}`}>
      <div className="sticky top-24 space-y-6">
        {/* プロフィール */}
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/profile.jpg"
                  alt="プロフィール画像"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold">石原</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  技術ブログ
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/D1nast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* カテゴリー */}
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-lg font-bold">カテゴリー</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name}`}
                className="flex items-center justify-between px-6 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <span>{category.name}</span>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </section>
        {/* 最近の記事 */}
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-lg font-bold">最近の記事</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.jpg"
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="line-clamp-2 text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <time className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 