export interface GalleryItem {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
}

export interface Camper {
    id: string;
    name: string;
    price: number;
    rating: number;
    totalReviews: number;
    location: string;
    description: string;

    form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
    transmission: 'automatic' | 'manual';
    engine: 'diesel' | 'petrol' | 'hybrid' | 'electric';

    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    amenities: string[] | string;
    gallery: GalleryItem[];
    createdAt: string;
    updatedAt: string;

}

export interface CampersParams {
    page?: number;
    perPage?: number;
    location?: string;
    form?: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
    transmission?: 'automatic' | 'manual';
    engine?: 'diesel' | 'petrol' | 'hybrid' | 'electric';
}


