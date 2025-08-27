import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { getArticlesAPI } from '@/lib/api/articles';
import dayjs from 'dayjs';

export default async function ArticleList() {
  const articles = await getArticlesAPI({
    page: 1,
    limit: 10,
  });

  return (
    <>
      <p className="mb-6">
        Showing : {articles?.limit} of {articles?.total} articles
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-[60px] md:gap-x-10">
        {articles.data?.map((article) => (
          <Card
            key={article.id}
            className="max-w-sm rounded-xl overflow-hidden w-full"
          >
            <div className="relative w-full mb-4">
              <Image
                src={
                  article.imageUrl ||
                  'https://s3.sellerpintar.com/articles/articles/1755330243359-harimau.jpeg'
                }
                alt={article.title}
                className="min-w-64 h-[200px] md:h-60 object-cover rounded-xl w-full"
                width={335}
                height={200}
              />
            </div>
            <CardContent className="p-0">
              <p className="text-xs md:text-sm mb-2">
                {dayjs(article.createdAt).format('MMMM DD, YYYY')}
              </p>

              <h1 className="md:text-lg font-semibold">{article.title}</h1>
              <p className="text-sm md:text-base my-2">
                Learn how design systems save time, ensure consistency, and
                scale design efforts.
              </p>
            </CardContent>
            <CardFooter className="p-0">
              <Badge className="px-3 py-1 rounded-full bg-blue-200 text-blue-900 md:text-sm shadow-none font-normal hover:bg-blue-200">
                Technology
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
