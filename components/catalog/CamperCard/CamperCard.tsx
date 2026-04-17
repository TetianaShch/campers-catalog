import { Camper } from '@/types/camper';
import { Button } from '@/components/ui/Button/Button';
import styles from './CamperCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface CamperCardProps {
  camper: Camper;
  isPriority?: boolean;
}

const CamperCard = ({ camper, isPriority = false }: CamperCardProps) => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={camper.gallery?.[0]?.thumb || ''}
        alt={camper.name}
        width={292}
        height={320}
        loading={isPriority ? 'eager' : 'lazy'}
      />

      <div className={styles.content}>
        <div className={styles.topRow}>
          <h2 className={styles.title}>{camper.name}</h2>
          <p className={styles.price}>€{camper.price}</p>
        </div>

        <div className={styles.meta}>
          <p>⭐ {camper.rating}</p>
          <p>{camper.location}</p>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.tags}>
          <span className={styles.tag}>{camper.engine}</span>
          <span className={styles.tag}>{camper.transmission}</span>
          <span className={styles.tag}>{camper.form}</span>
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="filled" className={styles.button}>
            Show more
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default CamperCard;
