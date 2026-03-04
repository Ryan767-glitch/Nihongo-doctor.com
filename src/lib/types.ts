export interface Clinic {
    name: string;
    nameEn?: string;
    address?: string;
    city: string;
    phone?: string;
    website?: string;
    notes?: string;
}

export interface Country {
    name: string;
    clinics: Clinic[];
}

export interface Region {
    slug: string;
    name: string;
    description: string;
    countries: Country[];
}
