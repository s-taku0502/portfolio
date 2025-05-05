// src/app/blogs/page.js
import { fetchQiitaArticles, fetchRssArticles } from '@/lib/fetchArticles';
import Header from '@/components/Header';
import '../../styles/globals.css';

export const dynamic = 'force-dynamic'; // SSRを有効化

// 日付を "2025.Mar.25" の形式にフォーマットする関数
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'short' }); // Jan, Feb, ...
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
};

// サービス別のバッジ色を返す関数
const getBadgeColor = (source) => {
    switch (source) {
        case 'Qiita':
            return 'bg-green-100 text-green-700';
        case 'Zenn':
            return 'bg-indigo-100 text-indigo-700';
        case 'Note':
            return 'bg-yellow-100 text-yellow-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

export default async function BlogPage() {
    const qiita = await fetchQiitaArticles('takumi1227');
    const zenn = await fetchRssArticles('https://zenn.dev/sudo_dev/feed', 'Zenn');
    const note = await fetchRssArticles('https://note.com/link_sudo/rss', 'Note');

    const articles = [...qiita, ...zenn, ...note].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <>
            <Header className="pb-6" />
            <div className="p-6 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">外部記事一覧</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <a
                            key={i}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition p-4"
                        >
                            <div className="text-sm text-gray-400 mb-1">
                                {formatDate(article.date)}
                            </div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                {article.title}
                            </h2>
                            <div className="flex items-center gap-2 mt-2">
                                <img
                                    src={`/icons/${article.source.toLowerCase()}.png`}
                                    alt={article.source}
                                    className="w-4 h-4"
                                />
                                <span
                                    className={`text-xs px-2 py-1 rounded ${getBadgeColor(article.source)}`}
                                >
                                    {article.source}
                                </span>
                            </div>

                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
