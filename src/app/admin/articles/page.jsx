'use client';

import { useEffect, useState } from 'react';
import { DataTable } from './data-table';
import { ARTICLES_COLUMNS } from './column';
import { Plus } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { SearchInput } from '@/components/SearchInput';
import { getArticlesAPI } from '@/lib/api/articles';
import Link from 'next/link';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  const onLoadData = async () => {
    const data = await getArticlesAPI({
      page: 1,
      limit: 10,
    });

    setArticles(data);
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <section className="bg-white rounded-xl">
        <div>
          <div className="flex justify-between items-center border-b p-6">
            <h4 className="font-medium">Total Articles : {articles.total}</h4>
          </div>
          <div className="flex items-center gap-4 justify-between border-b p-6">
            <div className="flex flex-row gap-x-2">
              {/* <Select>
                <SelectTrigger className="gap-x-3">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {category.map((item, index) => (
                    <SelectItem value={index}>{item.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select> */}
              <SearchInput placeholder="Search by title" className="w-64" />
            </div>
            <Link
              href="/admin/articles/create"
              className="inline-flex gap-x-1.5 items-center bg-blue-600 text-white px-4 py-2.5 rounded-md text-sm"
            >
              <Plus className="size-5" /> Add Articles
            </Link>
          </div>
        </div>

        <DataTable columns={ARTICLES_COLUMNS} data={articles.data} />

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 px-4 py-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
}
