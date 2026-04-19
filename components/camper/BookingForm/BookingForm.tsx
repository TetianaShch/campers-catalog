'use client';
import { Button } from '@/components/ui/Button/Button';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>

      <form>
        <div className={styles.fields}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
        </div>

        <Button type="submit" className={styles.button}>
          Send
        </Button>
      </form>
    </div>
  );
}
