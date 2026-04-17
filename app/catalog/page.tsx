import { getCampers } from '@/lib/campers';
import { Camper } from '@/types/camper';
import styles from './Catalog.module.css';
import CamperCard from '@/components/catalog/CamperCard/CamperCard';
import { Button } from '@/components/ui/Button/Button';

export default async function CatalogPage() {
  const campers = await getCampers();

  return (
    <main className="container">
      <div className={styles.layout}>
        <aside className={styles.sidebar}>Sidebar</aside>
        <div className={styles.content}>
          <ul className={styles.list}>
            {campers.items.map((camper: Camper, index: number) => (
              <li key={camper.id} className={styles.camperItem}>
                <CamperCard camper={camper} isPriority={index === 0} />
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <Button variant="outlined">Load more</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
