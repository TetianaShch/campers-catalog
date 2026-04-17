import { Camper } from '@/types/camper';
import { Button } from '@/components/ui/Button/Button';
import styles from './CamperCard.module.css';
import Image from 'next/image';

interface CamperCardProps {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={camper.gallery?.[0]?.thumb || ''}
        alt={camper.name}
        width={292}
        height={320}
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

        <Button variant="filled" className={styles.button}>
          Show more
        </Button>
      </div>
    </article>
  );
};

export default CamperCard;
