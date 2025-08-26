'use client';

import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('id');

export const ARTICLES_COLUMNS = [
  {
    accessorKey: 'thumbnails',
    header: 'Thumbnails',
    meta: { className: 'text-center' },
    cell: ({ row }) => {
      const url = row.original.imageUrl;
      return (
        <Image
          src={url ?? '/assets/images/default image.png'}
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
      <p className="text-center capitalize">
        {row.row.original.category?.name ?? '-'}
      </p>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    cell: ({ row }) => {
      const date = dayjs(row.original.createdAt).format(
        'MMMM DD, YYYY HH:mm:ss'
      );
      return <p className="text-center">{date}</p>;
    },
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
