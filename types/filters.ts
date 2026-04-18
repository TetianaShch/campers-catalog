export interface AvailableFilters {
    forms: string[];
    transmissions: string[];
    engines: string[];
}

export interface CatalogFilters {
    form: string;
    transmission: string;
    engine: string;
}

export const initialFilters: CatalogFilters = {
    form: '',
    transmission: '',
    engine: '',
};
