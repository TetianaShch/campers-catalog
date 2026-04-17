import { getCampers } from '@/lib/campers';
import { Camper } from '@/types/camper';
import styles from './Catalog.module.css';

export default async function CatalogPage() {
  const campers = await getCampers();

  return (
    <main>
      <h1>Catalog</h1>
      <ul className={styles.list}>
        {campers.items.map((camper: Camper) => (
          <li key={camper.id} className={styles.camperItem}>
            <h3>{camper.name}</h3>
            <p>€{camper.price}</p>
            <p>{camper.location}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
