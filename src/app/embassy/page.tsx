import type { Metadata } from "next";
export const metadata: Metadata = { title: "大使館・領事館情報｜にほんごドクター.com" };
export default function EmbassyPage() {
    return (
        <div className="region-page">
            <h1>大使館・領事館情報</h1>
            <p className="source-note">各国の在外日本国大使館・総領事館の連絡先情報</p>
            <div className="clinic-card" style={{ maxWidth: 600 }}>
                <h3>在外日本国大使館・総領事館一覧</h3>
                <div className="info">
                    <span>外務省の公式サイトから、世界各国の日本国大使館・総領事館の連絡先を確認できます。</span>
                </div>
                <div className="actions" style={{ marginTop: '1rem' }}>
                    <a href="https://www.mofa.go.jp/mofaj/annai/zaigai/list/index.html" target="_blank" rel="noopener noreferrer">外務省 在外公館リスト</a>
                </div>
            </div>
        </div>
    );
}
