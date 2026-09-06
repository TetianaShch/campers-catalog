'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button/Button';
import {
  bookingSchema,
  type BookingFormValues,
} from '@/lib/validation/bookingSchema';

import styles from './BookingForm.module.css';

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log(data);
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Book your campervan now</h3>

      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.fields}>
          <div className={styles.field}>
            <input
              {...register('name')}
              className={styles.input}
              type="text"
              placeholder="Name*"
              aria-label="Name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <input
              {...register('email')}
              className={styles.input}
              type="email"
              placeholder="Email*"
              aria-label="Email"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
        </div>

        <Button type="submit" className={styles.button}>
          Send
        </Button>
      </form>
    </div>
  );
}
