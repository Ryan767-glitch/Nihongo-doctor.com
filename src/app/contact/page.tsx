import type { Metadata } from "next";
export const metadata: Metadata = { title: "お問い合わせ｜にほんごドクター.com" };
export default function ContactPage() {
    return (
        <div className="region-page">
            <h1>お問い合わせ</h1>
            <p className="source-note">掲載情報の修正・追加のご依頼、その他お問い合わせはこちらから</p>
            <div className="clinic-card" style={{ maxWidth: 600 }}>
                <h3>お問い合わせについて</h3>
                <div className="info">
                    <span>掲載情報に誤りがある場合や、新たな日本語対応医療機関の情報をお持ちの方は、ぜひお知らせください。</span>
                    <span style={{ marginTop: '0.5rem' }}>メール: info@nihongodoctor.com</span>
                </div>
            </div>
        </div>
    );
}
