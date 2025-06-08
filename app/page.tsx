"use client";

import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const samplePosts = [
    {
      title: 'テスト1',
      excerpt: 'っっっっs',
      date: '2025/06/06',
      tags: ['AWS', '設計'],
      slug: 'aws-fanout-architecture',
    },
    {
      title: 'テスト2',
      excerpt: 'JavaScriptの記事です',
      date: '2025/06/05',
      tags: ['JavaScript', 'Web開発'],
      slug: 'javascript-article',
    },
    {
      title: 'テスト3',
      excerpt: 'TypeScriptの記事です',
      date: '2025/06/04',
      tags: ['TypeScript', 'Web開発'],
      slug: 'typescript-article',
    }
  ];

  const categories = [
    { name: 'TypeScript', count: 35 },
    { name: 'AWS', count: 28 },
    { name: 'React', count: 25 },
    { name: 'Python', count: 22 },
    { name: 'Ruby', count: 22 },
    { name: 'atcoder', count: 22 },
  ];

  // 選択されたカテゴリーに基づいて記事をフィルタリング
  const filteredPosts = selectedCategory
    ? samplePosts.filter(post => post.tags.includes(selectedCategory))
    : samplePosts;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {/* メインコンテンツ */}
      <div style={{display:"flex", width:"100%", minHeight:"calc(100vh - 64px - 400px)"}}>  
        {/* サイドバー */}
        <div style={{flex:3, padding: "2rem"}}>
          <Sidebar
            categories={categories}
            popularTags={[
              { name: 'AWS', count: 28 },
              { name: '設計', count: 25 },
              { name: '開発環境', count: 22 },
              { name: 'TypeScript', count: 20 },
              { name: 'React', count: 18 },
              { name: 'Node.js', count: 15 },
            ]}
            recentPosts={[
              {
                title: 'SNS・SQS・Lambdaを使ったファンアウト構成の注意点',
                date: '2025/06/06',
                slug: 'aws-fanout-architecture',
              },
            ]}
          />
        </div>
        <div style={{flex:7, padding: "2rem"}}>
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-800">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`border-b-2 px-1 py-4 text-sm font-medium ${
                    selectedCategory === null
                      ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  すべて
                </button>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`border-b-2 px-1 py-4 text-sm font-medium ${
                      selectedCategory === category.name
                        ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      {category.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
