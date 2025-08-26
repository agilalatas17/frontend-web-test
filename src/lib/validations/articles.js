import * as z from 'zod';

const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];
const MAX_MB = 2;

export const articleFormSchema = z.object({
  thumbnail: z
    .custom(
      (val) =>
        val instanceof File || (Array.isArray(val) && val[0] instanceof File),
      'Please enter picture'
    )
    .transform((val) => (Array.isArray(val) ? val[0] : val))
    .refine(
      (file) => file && ACCEPTED_TYPES.includes(file.type),
      'Only JPG or PNG'
    )
    .refine(
      (file) => file && file.size <= MAX_MB * 1024 * 1024,
      `Max ${MAX_MB}MB`
    ),
  title: z.string().min(1, 'Please enter title'),
  category: z.enum(
    ['frontend', 'backend', 'religion'],
    'Please select category'
  ),
  content: z.string().min(1, 'Content field cannot be empty'),
});
