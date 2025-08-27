'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { articleFormSchema } from '@/lib/validations/articles';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  FormControl,
} from '@/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TextEditor from '@/components/text-editor';
import { ImagePlus } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function ArticleForm() {
  const router = useRouter();
  const [preview, setPreview] = useState(null);

  const form = useForm({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      thumbnail: null,
      title: '',
      category: '',
      content: '',
    },
  });

  const onPreview = (values) => {
    const { title, category, content } = form.getValues(); // ambil values secara spesifik
    const author = localStorage.getItem('username');
    localStorage.setItem(
      'articlePreview',
      JSON.stringify({
        title,
        category,
        content,
        date: dayjs().toISOString(),
        author: author,
        thumbnailPreview: preview, // URL dari useState preview
      })
    );
    router.push('/admin/articles/preview');
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('thumbnail', values.thumbnail);
    formData.append('category', values.category);

    // try {
    //   const res = await fetch('/api/articles', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   if (!res.ok) throw new Error('Failed to create article');
    //   toast.success('Article created!');
    // } catch (err) {
    //   toast.error(err.message);
    // }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Upload Image Field */}
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="thumbnail" className="text-gray-900">
                  Thumbnails
                </FormLabel>
                <div>
                  <label
                    htmlFor="thumbnail"
                    className="flex flex-col items-center justify-center w-60 h-40 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                        <ImagePlus className="size-5 mb-3" />
                        <span className="text-xs">Click to select files</span>
                        <span className="text-xs">
                          Support File Type: jpg or png
                        </span>
                      </div>
                    )}
                  </label>
                  <input
                    id="thumbnail"
                    type="file"
                    accept="image/jpeg,image/png"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                      if (file) setPreview(URL.createObjectURL(file));
                    }}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title" className="text-gray-900">
                  Title
                </FormLabel>
                <Input placeholder="Input title" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title Field */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="role" className="text-gray-900">
                  Category
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                      <SelectItem value="religion">Religion</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  The existing category list can be seen in the{' '}
                  <Link
                    href="/admin/category"
                    className="text-blue-600 hover:text-blue-500 hover:underline"
                  >
                    category
                  </Link>{' '}
                  menu
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextEditor value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-x-2 py-4 my-6">
            <Button variant="outline">Cancel</Button>
            <Button variant="secondary" onClick={onPreview}>
              Preview
            </Button>
            <Button variant="">Upload</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
