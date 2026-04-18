'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { initialFilters, type CatalogFilters } from '@/types/filters';
import { buildQuery } from '@/lib/query';

import styles from '@/app/catalog/Catalog.module.css';
import { Button } from '@/components/ui/Button/Button';

export default function CatalogSidebar() {
  const [filters, setFilters] = useState<CatalogFilters>(initialFilters);
  const router = useRouter();
  const handleRadioChange = (
    name: 'form' | 'engine' | 'transmission',
    value: string,
  ) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  const handleSearch = () => {
    const query = buildQuery(filters);
    router.push(`/catalog?${query}`);
  };

  return (
    <div className={styles.filtersBox}>
      <p className={styles.locationLabel}>Location</p>
      <div className={styles.locationInput}>Kyiv, Ukraine</div>
      <p className={styles.filtersTitle}>Filters</p>
      <div className={styles.filterGroup}>
        <p className={styles.groupTitle}>Camper form</p>
        <label className={styles.option}>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'alcove'}
            onChange={() => handleRadioChange('form', 'alcove')}
          />
          Alcove
        </label>
        <label className={styles.option}>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'panel_van'}
            onChange={() => handleRadioChange('form', 'panel_van')}
          />
          Panel Van
        </label>
        <label className={styles.option}>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'integrated'}
            onChange={() => handleRadioChange('form', 'integrated')}
          />
          Integrated
        </label>
        <label className={styles.option}>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'semi_integrated'}
            onChange={() => handleRadioChange('form', 'semi_integrated')}
          />
          Semi Integrated
        </label>
      </div>
      <div className={styles.filterGroup}>
        <p className={styles.groupTitle}>Engine</p>

        <label className={styles.option}>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'diesel'}
            onChange={() => handleRadioChange('engine', 'diesel')}
          />
          Diesel
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'petrol'}
            onChange={() => handleRadioChange('engine', 'petrol')}
          />
          Petrol
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'hybrid'}
            onChange={() => handleRadioChange('engine', 'hybrid')}
          />
          Hybrid
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'electric'}
            onChange={() => handleRadioChange('engine', 'electric')}
          />
          Electric
        </label>
      </div>
      <div className={styles.filterGroup}>
        <p className={styles.groupTitle}>Transmission</p>

        <label className={styles.option}>
          <input
            type="radio"
            name="transmission"
            checked={filters.transmission === 'automatic'}
            onChange={() => handleRadioChange('transmission', 'automatic')}
          />
          Automatic
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="transmission"
            checked={filters.transmission === 'manual'}
            onChange={() => handleRadioChange('transmission', 'manual')}
          />
          Manual
        </label>
      </div>
      <Button
        type="button"
        variant="filled"
        className={styles.searchBtn}
        onClick={handleSearch}
      >
        Search
      </Button>
      <Button
        type="button"
        variant="outlined"
        className={styles.clearBtn}
        onClick={handleClearFilters}
      >
        Clear filters
      </Button>
    </div>
  );
}
