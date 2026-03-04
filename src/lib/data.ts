import { Region } from './types';
import { asiaCountries } from './data-asia';
import { europeCountries } from './data-europe';
import { northAmericaCountries, latinAmericaCountries, oceaniaCountries, africaMiddleEastCountries } from './data-other-regions';

function countClinics(countries: { clinics: { name: string }[] }[]) {
    return countries.reduce((sum, c) => sum + c.clinics.length, 0);
}

export const regions: Region[] = [
    {
        slug: 'asia',
        name: 'アジア',
        description: '海外旅行・駐在に必須！アジア地域で日本語が通じる医療機関を検索できます。',
        countries: asiaCountries,
    },
    {
        slug: 'north-america',
        name: '北米',
        description: '海外旅行・駐在に必須！北米で日本語が通じる医療機関を検索できます。',
        countries: northAmericaCountries,
    },
    {
        slug: 'europe',
        name: 'ヨーロッパ',
        description: '海外旅行・駐在に必須！ヨーロッパで日本語が通じる医療機関を検索できます。',
        countries: europeCountries,
    },
    {
        slug: 'oceania',
        name: 'オセアニア',
        description: '海外旅行・駐在に必須！オセアニアで日本語が通じる医療機関を検索できます。',
        countries: oceaniaCountries,
    },
    {
        slug: 'latin-america',
        name: '中南米',
        description: '海外旅行・駐在に必須！中南米 (LatAm)で日本語が通じる医療機関を検索できます。',
        countries: latinAmericaCountries,
    },
    {
        slug: 'africa-middle-east',
        name: 'アフリカ・中東',
        description: '海外旅行・駐在に必須！アフリカ・中東で日本語が通じる医療機関を検索できます。',
        countries: africaMiddleEastCountries,
    },
];

export function getTotalCountries(): number {
    return regions.reduce((sum, r) => sum + r.countries.length, 0);
}

export function getTotalClinics(): number {
    return regions.reduce((sum, r) => sum + countClinics(r.countries), 0);
}

export function getRegionStats(region: Region) {
    return {
        countries: region.countries.length,
        clinics: countClinics(region.countries),
    };
}

export function getRegionBySlug(slug: string): Region | undefined {
    return regions.find(r => r.slug === slug);
}
