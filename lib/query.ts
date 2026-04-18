import type { CatalogFilters } from '@/types/filters';

export const buildQuery = (filters: CatalogFilters) => {
    const params = new URLSearchParams();

    if (filters.form) params.set('form', filters.form);
    if (filters.transmission) params.set('transmission', filters.transmission);
    if (filters.engine) params.set('engine', filters.engine);

    return params.toString();
};
