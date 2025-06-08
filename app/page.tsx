import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const samplePost = {
    title: 'テスト',
    excerpt: 'っっっっs',
    date: '2025/06/06',
    tags: ['AWS', '設計'],
    slug: 'aws-fanout-architecture',
    thumbnail: '/blog/aws-fanout.jpg',
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {/* メインコンテンツ */}
      <div style={{display:"flex", width:"100%", height:"100vh"}}>  
        {/* サイドバー */}
        <div style={{flex:3, padding: "2rem"}}>
          <Sidebar
            categories={[
              { name: 'Web開発', count: 42 },
              { name: 'JavaScript', count: 38 },
              { name: 'TypeScript', count: 35 },
              { name: 'AWS', count: 28 },
              { name: 'React', count: 25 },
              { name: 'Node.js', count: 22 },
            ]}
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
          <section className="mb-12">
            <h1 className="mb-8 text-3xl font-bold">最新の記事</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <BlogCard {...samplePost} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
