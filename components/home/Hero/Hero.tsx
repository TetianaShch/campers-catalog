import styles from './Hero.module.css';
import { Button } from '../../ui/Button/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.text}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog">
          <Button variant="filled">View Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
