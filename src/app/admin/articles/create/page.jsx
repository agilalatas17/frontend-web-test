import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArticleForm from './article-form';

export default function CreateArticlePage() {
  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex-row items-cente gap-x-2">
          <Link href="/admin/articles" className="inline">
            <ArrowLeft className="size-5" />
          </Link>
          <h3 className="font-medium !m-0">Create Article</h3>
        </CardHeader>
        <CardContent>
          <ArticleForm />
        </CardContent>
      </Card>
    </>
  );
}
