import type { Metadata } from "next";
export const metadata: Metadata = { title: "利用規約｜にほんごドクター.com" };
export default function TermsPage() {
    return (
        <div className="region-page">
            <h1>利用規約</h1>
            <div className="clinic-card" style={{ maxWidth: 800 }}>
                <div className="info" style={{ lineHeight: 2 }}>
                    <p>当サイト「にほんごドクター.com」（以下「当サイト」）をご利用いただく前に、以下の利用規約をお読みください。</p>
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>1. 情報の正確性</p>
                    <p>当サイトに掲載されている情報は、外務省「世界の医療事情」、各国日本人会、各医療機関の公開情報を基に作成していますが、内容の正確性・最新性を保証するものではありません。</p>
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>2. 免責事項</p>
                    <p>当サイトの利用により生じた損害について、運営者は一切の責任を負いません。受診の際は、必ず事前に各医療機関へ直接ご確認ください。</p>
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>3. 推奨行為ではない</p>
                    <p>当サイトは特定の医療機関を推奨するものではありません。</p>
                </div>
            </div>
        </div>
    );
}
