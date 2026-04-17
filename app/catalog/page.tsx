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
        <aside className={styles.sidebar}>
          <div className={styles.filtersBox}>
            <p className={styles.locationLabel}>Location</p>

            <div className={styles.locationInput}>Kyiv, Ukraine</div>

            <p className={styles.filtersTitle}>Filters</p>

            <div className={styles.filterGroup}>
              <p className={styles.groupTitle}>Camper form</p>

              <label className={styles.option}>
                <input type="radio" name="form" /> Alcove
              </label>
              <label className={styles.option}>
                <input type="radio" name="form" /> Panel Van
              </label>
              <label className={styles.option}>
                <input type="radio" name="form" /> Integrated
              </label>
              <label className={styles.option}>
                <input type="radio" name="form" /> Semi Integrated
              </label>
            </div>

            <div className={styles.filterGroup}>
              <p className={styles.groupTitle}>Engine</p>

              <label className={styles.option}>
                <input type="radio" name="engine" /> Diesel
              </label>
              <label className={styles.option}>
                <input type="radio" name="engine" /> Petrol
              </label>
              <label className={styles.option}>
                <input type="radio" name="engine" /> Hybrid
              </label>
              <label className={styles.option}>
                <input type="radio" name="engine" /> Electric
              </label>
            </div>

            <div className={styles.filterGroup}>
              <p className={styles.groupTitle}>Transmission</p>

              <label className={styles.option}>
                <input type="radio" name="transmission" /> Automatic
              </label>
              <label className={styles.option}>
                <input type="radio" name="transmission" /> Manual
              </label>
            </div>
            <Button variant="filled" className={styles.searchBtn}>
              Search
            </Button>
            <Button variant="outlined" className={styles.clearBtn}>
              Clear filters
            </Button>
          </div>
        </aside>
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
