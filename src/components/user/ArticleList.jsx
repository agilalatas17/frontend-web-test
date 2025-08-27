'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { getArticlesAPI } from '@/lib/api/articles';
import dayjs from 'dayjs';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArticleList({ search }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onLoadData = async () => {
    setIsLoading(true);
    const data = await getArticlesAPI({
      page: 1,
      limit: 20,
      title: search || '',
    });

    setArticles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    onLoadData();
  }, [search]);
  return (
    <>
      {isLoading ? (
        <Skeleton className="h-4 w-[250px] mb-6 hidden md:block" />
      ) : (
        <p className="mb-6 hidden md:block">
          Showing : {articles?.data?.length || 0} of {articles?.total || 0}{' '}
          articles
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-[60px] md:gap-x-10">
        {isLoading ? (
          // 👉 Skeleton placeholder (3 item)
          Array.from({ length: 3 }).map((_, i) => (
            <Card
              key={i}
              className="max-w-sm rounded-xl overflow-hidden w-full"
            >
              <Skeleton className="w-full h-[200px] mb-4 rounded-xl" />
              <CardContent className="p-0">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
              </CardContent>
              <CardFooter className="p-0">
                <Skeleton className="h-6 w-20 rounded-full" />
              </CardFooter>
            </Card>
          ))
        ) : articles?.data?.length > 0 ? (
          articles.data.map((article) => (
            <Card
              key={article.id}
              className="max-w-sm rounded-xl overflow-hidden w-full h-full"
            >
              <div className="relative w-full mb-4 overflow-hidden">
                <img
                  src={
                    article.imageUrl ||
                    'https://s3.sellerpintar.com/articles/articles/1755330243359-harimau.jpeg'
                  }
                  alt={article.title}
                  className="min-w-64 md:!w-[388px] !h-[200px] md:!h-60 !object-fit rounded-xl w-full overflow-hidden"
                />
              </div>
              <CardContent className="p-0">
                <p className="text-xs md:text-sm mb-2">
                  {dayjs(article.createdAt).format('MMMM DD, YYYY')}
                </p>
                <h1 className="md:text-lg font-semibold">{article.title}</h1>
                <p
                  className="text-sm md:text-base my-2 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </CardContent>
              <CardFooter className="p-0">
                <Badge className="px-3 py-1 rounded-full bg-blue-200 text-blue-900 md:text-sm shadow-none font-normal hover:bg-blue-200">
                  Technology
                </Badge>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-slate-500">
            No articles found.
          </p>
        )}
      </div>
    </>
  );
}
