import { getCampers } from '@/lib/campers';
import styles from './Catalog.module.css';
import CatalogSidebar from '@/components/catalog/CatalogSidebar/CatalogSidebar';
import CatalogList from '@/components/catalog/CatalogList/CatalogList';

type CatalogPageProps = {
  searchParams: Promise<{
    form?: string;
    transmission?: string;
    engine?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { form, transmission, engine } = await searchParams;

  const campers = await getCampers({
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
          filters={{ form, transmission, engine }}
        />
      </div>
    </main>
  );
}
