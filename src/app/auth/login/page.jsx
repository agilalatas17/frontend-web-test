'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from '@/lib/validations/auth';
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/PasswordInput';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { loginAPI } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  let message;

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onLogin = async (values) => {
    try {
      const res = await loginAPI(values);

      if (res.data.role === 'Admin') {
        router.push('/admin/articles');
      } else {
        router.push('/articles');
      }

      toast.success('Login success!');
    } catch (e) {
      if (e.status === 401) {
        message = 'Username atau password salah!';
      }

      return toast.error(`${message}` || 'Login failed!');
    }
  };

  return (
    <>
      <Form {...form} className="p-0">
        <form onSubmit={form.handleSubmit(onLogin)}>
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="username" className="text-gray-900">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="username"
                      placeholder="Input username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password" className="text-gray-900">
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      id="password"
                      placeholder="Input password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full my-6">
            {form.formState.isSubmitting ? (
              <>
                <Loader2Icon className="animate-spin" />
                Please wait
              </>
            ) : (
              'Login'
            )}
          </Button>

          <p className="text-center text-sm text-slate-600">
            Don’t have an account?{' '}
            <span>
              <a
                href="/auth/register"
                className="underline text-primary hover:text-primary/20"
              >
                Register
              </a>
            </span>
          </p>
        </form>
      </Form>
    </>
  );
}
