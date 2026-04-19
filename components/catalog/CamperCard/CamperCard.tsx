import { Camper } from '@/types/camper';
import { Button } from '@/components/ui/Button/Button';
import CamperDetails from '@/components/camper/CamperDetails/CamperDetails';
import styles from './CamperCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';

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
          <span className={styles.metaItem}>
            <FaStar className={styles.star} />
            {camper.rating}
          </span>

          <span className={styles.metaItem}>
            <FiMap className={styles.icon} />
            {camper.location}
          </span>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <CamperDetails
          engine={camper.engine}
          transmission={camper.transmission}
          form={camper.form}
        />
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
