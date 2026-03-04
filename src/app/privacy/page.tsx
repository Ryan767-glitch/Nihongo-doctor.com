import type { Metadata } from "next";
export const metadata: Metadata = { title: "プライバシーポリシー｜にほんごドクター.com" };
export default function PrivacyPage() {
    return (
        <div className="region-page">
            <h1>プライバシーポリシー</h1>
            <div className="clinic-card" style={{ maxWidth: 800 }}>
                <div className="info" style={{ lineHeight: 2 }}>
                    <p>当サイト「にほんごドクター.com」は、ユーザーのプライバシーを尊重し、以下の方針に基づいて個人情報を取り扱います。</p>
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>1. 収集する情報</p>
                    <p>当サイトでは、アクセス解析のためにCookieを使用する場合があります。</p>
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>2. 情報の利用目的</p>
                    <p>収集した情報は、サイトの改善およびユーザー体験の向上のために利用します。</p>
                    <p style={{ marginTop: '1rem', fontWeight: 700 }}>3. 第三者への提供</p>
                    <p>収集した情報は、法令に基づく場合を除き、第三者に提供しません。</p>
                </div>
            </div>
        </div>
    );
}
