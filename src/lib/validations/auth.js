import * as z from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(1, 'Username field cannot be empty'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const registerFormSchema = z.object({
  username: z.string().min(1, 'Username field cannot be empty'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  role: z.enum(['User', 'Admin'], 'Role is required'),
});
