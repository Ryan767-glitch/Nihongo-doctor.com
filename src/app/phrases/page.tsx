import type { Metadata } from "next";
export const metadata: Metadata = { title: "医療フレーズ集｜にほんごドクター.com" };

const phrases = [
    { ja: '頭が痛いです', romaji: 'Atama ga itai desu', en: 'I have a headache' },
    { ja: 'お腹が痛いです', romaji: 'Onaka ga itai desu', en: 'I have a stomachache' },
    { ja: '熱があります', romaji: 'Netsu ga arimasu', en: 'I have a fever' },
    { ja: '吐き気がします', romaji: 'Hakike ga shimasu', en: 'I feel nauseous' },
    { ja: '咳が出ます', romaji: 'Seki ga demasu', en: 'I have a cough' },
    { ja: '下痢をしています', romaji: 'Geri wo shiteimasu', en: 'I have diarrhea' },
    { ja: 'めまいがします', romaji: 'Memai ga shimasu', en: 'I feel dizzy' },
    { ja: '息苦しいです', romaji: 'Ikigurushii desu', en: 'I have difficulty breathing' },
    { ja: 'アレルギーがあります', romaji: 'Arerugii ga arimasu', en: 'I have allergies' },
    { ja: '薬を飲んでいます', romaji: 'Kusuri wo nondeimasu', en: 'I am taking medicine' },
    { ja: '保険証を持っています', romaji: 'Hoken-shou wo motteimasu', en: 'I have my insurance card' },
    { ja: '救急車を呼んでください', romaji: 'Kyuukyuusha wo yonde kudasai', en: 'Please call an ambulance' },
    { ja: '日本語が話せる医師はいますか', romaji: 'Nihongo ga hanaseru ishi wa imasuka', en: 'Is there a doctor who speaks Japanese?' },
    { ja: '処方箋をお願いします', romaji: 'Shohousen wo onegai shimasu', en: 'I need a prescription please' },
    { ja: '痛み止めをください', romaji: 'Itami-dome wo kudasai', en: 'Please give me painkillers' },
];

export default function PhrasesPage() {
    return (
        <div className="region-page">
            <h1>医療フレーズ集</h1>
            <p className="source-note">病院で使える基本的な日本語フレーズ</p>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
                {phrases.map((p, i) => (
                    <div key={i} className="clinic-card">
                        <h3 style={{ fontSize: '1.1rem' }}>{p.ja}</h3>
                        <div className="name-en">{p.romaji}</div>
                        <div className="info"><span>{p.en}</span></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
