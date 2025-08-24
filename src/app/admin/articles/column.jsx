'use client';

import Link from 'next/link';
import Image from 'next/image';

export const ARTICLES_COLUMNS = [
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnails',
    meta: { className: 'text-center' },
    cell: ({ row }) => {
      const url = row.getValue('thumbnail');
      return (
        <Image
          src={url}
          alt="thumbnail"
          width={60}
          height={60}
          className="rounded-md mx-auto object-cover size-[60px]"
        />
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: (row) => (
      <p className="text-center capitalize">{row.getValue('category')}</p>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    cell: (row) => (
      <p className="text-center capitalize">{row.getValue('createdAt')}</p>
    ),
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const article = row.original;
      return (
        <div className="flex gap-3 text-sm justify-center">
          <Link href={`/articles/${article.id}`} className="text-blue-500">
            Preview
          </Link>
          <Link
            href={`/articles/${article.id}/edit`}
            className="text-green-600"
          >
            Edit
          </Link>
          <button
            onClick={() => alert(`Delete ${article.title}`)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      );
    },
  },
];
