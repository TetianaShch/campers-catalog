'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/catalog/Catalog.module.css';
import CamperCard from '@/components/catalog/CamperCard/CamperCard';
import { Button } from '@/components/ui/Button/Button';
import { getCampers } from '@/lib/campers';
import type { Camper } from '@/types/camper';
import type { CatalogFilters } from '@/types/filters';

type CatalogListProps = {
  initialItems: Camper[];
  initialPage: number;
  filters: Partial<CatalogFilters>;
};

export default function CatalogList({
  initialItems,
  initialPage,
  filters,
}: CatalogListProps) {
  const [items, setItems] = useState<Camper[]>(initialItems);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialItems.length === 4);

  useEffect(() => {
    setItems(initialItems);
    setPage(initialPage);
    setHasMore(initialItems.length === 4);
  }, [filters, initialItems, initialPage]);

  const handleLoadMore = async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);

    try {
      const nextPage = page + 1;
      const data = await getCampers(filters, nextPage, 4);

      const newItems = data.items ?? [];
      if (newItems.length < 4) {
        setHasMore(false);
      }
      setItems(prev => [...prev, ...newItems]);
      setPage(nextPage);
    } catch (error) {
      console.error('Failed to load more campers', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className={styles.content}>
        <p>No campers found</p>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {items.map((camper, index) => (
          <li key={camper.id} className={styles.camperItem}>
            <CamperCard camper={camper} isPriority={index === 0} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className={styles.pagination}>
          <Button type="button" variant="outlined" onClick={handleLoadMore}>
            {isLoading ? 'Loading...' : 'Load more'}
          </Button>
        </div>
      )}
    </div>
  );
}
