'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Footer from '@/components/Footer';

export default function ArticlePreviewPage() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('articlePreview');
    if (data) setArticle(JSON.parse(data));
  }, []);

  if (!article) return <p className="text-center py-10">Loading preview...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <article className="mb-16 text-center">
        <div className="text-gray-500 font-medium text-sm mb-2">
          {dayjs(article.date).format('MMMM D, YYYY')} · Created by{' '}
          <span className="!capitalize">{article.author}</span>
        </div>
        <h1 className="text-3xl font-semibold capitalize">{article.title}</h1>
        {article.thumbnailPreview && (
          <img
            src={article.thumbnailPreview}
            alt="Thumbnail"
            className="w-full h-96 object-cover rounded-lg my-10"
          />
        )}
        <div
          className="prose max-w-full text-left leading-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Other Articles */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Other articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              date: 'April 13, 2025',
              title: 'Cybersecurity Essentials Every Developer Should Know',
              desc: 'Protect your apps and users with these fundamental cybersecurity practices for...',
            },
            {
              date: 'April 10, 2025',
              title: 'The Future of Work: Remote-First Teams and Digital Tools',
              desc: 'How tech companies are optimizing remote collaboration with smarter tools and processes...',
            },
            {
              date: 'April 9, 2025',
              title: 'Design Systems: Why Your Team Needs One in 2025',
              desc: 'Learn how design systems save time, ensure consistency, and scale design efforts...',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Image
              </div>
              <div className="p-4">
                <div className="text-gray-500 text-sm mb-2">{item.date}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    Technology
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    Design
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
