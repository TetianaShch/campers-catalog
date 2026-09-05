import { getCampers } from '@/lib/campers';
import styles from './Catalog.module.css';
import CatalogSidebar from '@/components/catalog/CatalogSidebar/CatalogSidebar';
import CatalogList from '@/components/catalog/CatalogList/CatalogList';

type CatalogPageProps = {
  searchParams: Promise<{
    location?: string;
    form?: string;
    transmission?: string;
    engine?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { location, form, transmission, engine } = await searchParams;

  const campers = await getCampers({
    location,
    form,
    transmission,
    engine,
  });

  return (
    <main className="container">
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <CatalogSidebar />
        </aside>
        <CatalogList
          initialItems={campers.items ?? []}
          initialPage={campers.page ?? 1}
          filters={{ location, form, transmission, engine }}
        />
      </div>
    </main>
  );
}
