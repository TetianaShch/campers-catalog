export interface AvailableFilters {
    forms: string[];
    transmissions: string[];
    engines: string[];
}

export interface CatalogFilters {
    location: string;
    form: string;
    transmission: string;
    engine: string;
}

export const initialFilters: CatalogFilters = {
    location: '',
    form: '',
    transmission: '',
    engine: '',
};
