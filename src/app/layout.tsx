import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { regions, getRegionStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "にほんごドクター.com｜海外で日本語が通じる病院・クリニック検索",
  description: "海外で日本語が通じる病院・クリニックを探せる検索サイト。45カ国以上、320件超の医療機関を掲載。",
  openGraph: {
    title: "にほんごドクター.com｜海外で日本語が通じる病院・クリニック検索",
    description: "海外で日本語が通じる病院・クリニックを探せる検索サイト。45カ国以上、320件超の医療機関を掲載。",
    siteName: "にほんごドクター.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="site-logo">にほんごドクター.com</Link>
            <nav>
              <Link href="/embassy">大使館情報</Link>
              <Link href="/phrases">医療フレーズ集</Link>
              <Link href="/contact">お問い合わせ</Link>
            </nav>
          </div>
        </header>

        <div className="region-nav">
          {regions.map(r => {
            const stats = getRegionStats(r);
            return (
              <Link key={r.slug} href={`/${r.slug}`}>
                {r.name}
              </Link>
            );
          })}
        </div>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-section">
              <h4>サイトについて</h4>
              <Link href="/">このサイトについて</Link>
              <Link href="/contact">お問い合わせ</Link>
            </div>
            <div className="footer-section">
              <h4>お役立ち情報</h4>
              <Link href="/phrases">医療フレーズ集</Link>
              <Link href="/embassy">大使館・領事館情報</Link>
            </div>
            <div className="footer-section">
              <h4>法的情報</h4>
              <Link href="/terms">利用規約</Link>
              <Link href="/privacy">プライバシーポリシー</Link>
            </div>
          </div>
          <div className="footer-disclaimer">
            <h4 style={{ marginBottom: '0.5rem', fontSize: '0.8rem' }}>免責事項</h4>
            掲載情報は外務省「世界の医療事情」、各国日本人会、および各医療機関の公開情報を基に作成していますが、内容の正確性・最新性を保証するものではありません。受診の際は、必ず事前に各医療機関へ直接ご確認ください。当サイトの利用により生じた損害について、運営者は一切の責任を負いません。また、当サイトは特定の医療機関を推奨するものではありません。
          </div>
          <div className="footer-bottom">
            出典：外務省『世界の医療事情』等参照<br />
            © 2026 にほんごドクター.com All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
