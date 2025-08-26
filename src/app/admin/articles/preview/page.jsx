'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function PreviewArticlePage() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const previewData = localStorage.getItem('articlePreview');
    if (previewData) {
      setData(JSON.parse(previewData));
    }
  }, []);

  if (!data) return <p className="text-center mt-10">No preview data</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      {/* Thumbnail */}
      {data.thumbnailPreview && (
        <img
          src={data.thumbnailPreview}
          alt="thumbnail"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold">{data.title}</h1>

      {/* Category */}
      <p className="text-sm text-gray-500">Category: {data.category}</p>

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      {/* Action */}
      <div className="flex gap-2 mt-6">
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
        <Button
          onClick={() => {
            // di sini kamu bisa langsung submit ke API juga
            router.push('/articles');
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}
