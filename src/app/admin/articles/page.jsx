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
import { getCategoriesAPI } from '@/lib/api/categories';

export default function ArticlesPage() {
  const [category, setCategory] = useState([]);
  const data = [
    {
      id: 1,
      title: 'Cybersecurity Essentials Every Developer Should Know',
      category: 'Technology',
      createdAt: '2025-04-13T10:55:12',
      thumbnail: '/assets/images/article1.jpg',
    },
    {
      id: 2,
      title: 'The Future of Work: Remote-First Teams and Digital Tools',
      category: 'bajigur',
      createdAt: '2025-04-13T10:55:12',
      thumbnail: '/assets/images/article2.jpg',
    },
  ];

  const onLoadCategories = async () => {
    const res = await getCategoriesAPI();
    console.log('CEK CATEGORIESSSSS : ', res);
  };

  useEffect(() => {
    onLoadCategories();
  }, []);

  return (
    <>
      <section className="bg-white rounded-xl">
        <div>
          <div className="flex justify-between items-center border-b p-6">
            <h4 className="font-medium">Total Articles : 25</h4>
          </div>
          <div className="flex items-center gap-4 justify-between border-b p-6">
            <div className="flex flex-row gap-x-2">
              <Select>
                <SelectTrigger className="gap-x-3">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {category.map((item, index) => (
                    <SelectItem value={index}>{item.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <SearchInput placeholder="Search by title" className="w-64" />
            </div>
            <button className="inline-flex gap-x-1.5 items-center bg-blue-600 text-white px-4 py-2.5 rounded-md text-sm">
              <Plus className="size-5" /> Add Articles
            </button>
          </div>
        </div>

        <DataTable columns={ARTICLES_COLUMNS} data={data} />

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
