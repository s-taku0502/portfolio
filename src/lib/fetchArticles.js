// src/lib/fetchArticles.js
import Parser from 'rss-parser';

export async function fetchQiitaArticles(username) {
  const res = await fetch(`https://qiita.com/api/v2/users/${username}/items`);
  const data = await res.json();
  return data.map(post => ({
    title: post.title,
    url: post.url,
    date: post.created_at,
    source: 'Qiita'
  }));
}

export async function fetchRssArticles(rssUrl, sourceName) {
  const parser = new Parser();
  const feed = await parser.parseURL(rssUrl);
  return feed.items.map(item => ({
    title: item.title,
    url: item.link,
    date: item.pubDate,
    source: sourceName
  }));
}
