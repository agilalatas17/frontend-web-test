'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerFormSchema } from '@/lib/validations/auth';
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/passwordInput';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { registerAPI } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      password: '',
      role: undefined,
    },
  });

  const onRegister = async (values) => {
    try {
      console.log('CEK VALUES REGIS : ', values);
      const res = await registerAPI(values);

      if (res.data.role === 'Admin') {
        router.push('/admin/articles');
      } else {
        router.push('/articles');
      }

      toast.success('Register success!');
    } catch (e) {
      toast.error('Register failed!');
    }
  };

  return (
    <>
      <Form {...form} className="p-0">
        <form onSubmit={form.handleSubmit(onRegister)}>
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="username">Username</FormLabel>
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
                  <FormLabel htmlFor="password">Password</FormLabel>
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

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="role">Role</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
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
              'Register'
            )}
          </Button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <span>
              <a
                href=""
                className="underline text-primary hover:text-primary/20"
              >
                Login
              </a>
            </span>
          </p>
        </form>
      </Form>
    </>
  );
}
