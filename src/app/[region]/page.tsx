import { notFound } from "next/navigation";
import { regions, getRegionBySlug, getRegionStats } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
    return regions.map(r => ({ region: r.slug }));
}

export function generateMetadata({ params }: { params: { region: string } }): Metadata {
    const region = getRegionBySlug(params.region);
    if (!region) return {};
    const stats = getRegionStats(region);
    return {
        title: `${region.name}の日本語対応病院・クリニック一覧｜にほんごドクター.com`,
        description: region.description,
        openGraph: {
            title: `${region.name}の日本語対応病院・クリニック一覧｜にほんごドクター.com`,
            description: region.description,
        },
    };
}

function makeMapUrl(name: string, address: string, city: string, country: string) {
    const q = encodeURIComponent(`${name} ${address || ''} ${city} ${country}`.trim());
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default function RegionPage({ params }: { params: { region: string } }) {
    const region = getRegionBySlug(params.region);
    if (!region) notFound();

    const stats = getRegionStats(region);

    return (
        <div className="region-page">
            <h1>{region.name}</h1>
            <h2 style={{ fontSize: '1.1rem', color: '#718096', fontWeight: 500, marginBottom: '0.5rem' }}>
                {region.name}の日本語対応医療機関
            </h2>
            <p className="source-note">出典：外務省『世界の医療事情』（2024年調査時点）ほか</p>

            {region.countries.map(country => (
                <section key={country.name} className="country-section">
                    <h2 className="country-title">
                        {country.name}
                        <span className="country-count">{country.clinics.length}件</span>
                    </h2>
                    <div className="clinic-grid">
                        {country.clinics.map((clinic, i) => (
                            <div key={i} className="clinic-card">
                                <h3>{clinic.name}</h3>
                                {clinic.nameEn && <div className="name-en">{clinic.nameEn}</div>}
                                <div className="info">
                                    {clinic.address && <span>📍 {clinic.address}</span>}
                                    {!clinic.address && <span>📍 {clinic.city}　{country.name}</span>}
                                    {clinic.phone && <span>📞 {clinic.phone}</span>}
                                    {clinic.notes && <span>📝 {clinic.notes}</span>}
                                </div>
                                <div className="actions">
                                    {clinic.phone && (
                                        <a href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}>電話</a>
                                    )}
                                    {clinic.website && (
                                        <a href={clinic.website} target="_blank" rel="noopener noreferrer">WEB</a>
                                    )}
                                    <a href={makeMapUrl(clinic.name, clinic.address || '', clinic.city, country.name)} target="_blank" rel="noopener noreferrer">地図</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
