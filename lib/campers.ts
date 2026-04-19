import type { CatalogFilters } from '@/types/filters';
import { Camper } from '@/types/camper';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCampers = async (
    filters?: Partial<CatalogFilters>,
    page = 1, limit = 4) => {
    const params = new URLSearchParams();

    params.set('page', String(page));
    params.set('limit', String(limit));

    if (filters?.form) params.set('form', filters.form);
    if (filters?.transmission) params.set('transmission', filters.transmission);
    if (filters?.engine) params.set('engine', filters.engine);

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (response.status === 404) {
        return { items: [] };
    }

    if (!response.ok) {
        throw new Error('Failed to fetch campers');
    }

    return response.json();
};

export const getCamperById = async (camperId: string): Promise<Camper> => {
    const response = await fetch(`${BASE_URL}/${camperId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch camper');
    }

    return response.json();
};


