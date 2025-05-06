// src/lib/fetchArticles.js
import Parser from 'rss-parser';

export async function fetchQiitaArticles(username) {
    try {
        const res = await fetch(`https://qiita.com/api/v2/users/${username}/items`);
        const data = await res.json();
        return data.map(post => ({
            title: post.title,
            url: post.url,
            date: post.created_at,
            source: 'Qiita',
            private: post.private
        }));
    } catch (error) {
        console.error('Qiita API Error:', error);
        return [];
    }
}

export async function fetchRssArticles(rssUrl, sourceName) {
    try {
        const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`);
        const data = await res.text();
        const parser = new Parser();
        const feed = await parser.parseString(data);
        
        // noteの場合の特別な処理
        if (sourceName === 'Note') {
            // noteの記事URLに含まれる特定のパラメータや
            // メタデータを確認して限定公開状態を判定
            return feed.items.map(item => ({
                title: item.title,
                url: item.link,
                date: item.pubDate || item.isoDate,
                source: sourceName,
                // noteの限定公開判定ロジックを追加
                private: item.link.includes('private') || // 例: URLに'private'が含まれる
                        item.categories?.includes('private') || // 例: カテゴリーに'private'が含まれる
                        false // デフォルトは非限定公開
            }));
        }

        // note以外の記事の処理（既存のコード）
        return feed.items.map(item => ({
            title: item.title,
            url: item.link,
            date: item.pubDate || item.isoDate,
            source: sourceName,
            private: false
        }));
    } catch (error) {
        console.error(`RSS Feed Error (${sourceName}):`, error);
        return [];
    }
}
