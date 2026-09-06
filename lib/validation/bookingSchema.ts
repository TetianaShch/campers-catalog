import { z } from 'zod';

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must contain at least 2 characters')
    .max(50, 'Name must contain no more than 50 characters'),

  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Enter a valid email'),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
