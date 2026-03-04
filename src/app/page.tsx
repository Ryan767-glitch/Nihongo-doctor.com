import Link from "next/link";
import { regions, getRegionStats, getTotalCountries, getTotalClinics } from "@/lib/data";

export default function Home() {
  const totalCountries = getTotalCountries();
  const totalClinics = getTotalClinics();

  return (
    <>
      <section className="hero">
        <h1>世界中で、日本語の通じるドクターを。</h1>
        <p>{totalCountries}カ国以上・{totalClinics}件超の日本語対応医療機関を掲載</p>
      </section>

      <h2 className="section-title">地域から探す</h2>
      <p className="section-subtitle">世界{totalCountries}カ国・{totalClinics}件以上の日本語対応クリニックを掲載</p>

      <div className="region-grid">
        {regions.map(region => {
          const stats = getRegionStats(region);
          return (
            <Link key={region.slug} href={`/${region.slug}`} style={{ textDecoration: 'none' }}>
              <div className="region-card">
                <h3>{region.name}</h3>
                <span className="stats">{stats.countries}カ国・{stats.clinics}件</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
