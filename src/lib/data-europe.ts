import { Country } from './types';

export const europeCountries: Country[] = [
    {
        name: 'イタリア',
        clinics: [
            { name: 'ファーテベーネフラテッリ病院', nameEn: 'Ospedale Fatebenefratelli', city: 'ミラノ', address: 'Piazza Principessa Clotilde 3, 20121 Milano', phone: '02-63631', notes: '公立総合病院 在ミラノ総領事館徒歩圏内' },
            { name: '中田吉彦医師（内科・東洋医学）', nameEn: 'Nakada Clinic Rome', city: 'ローマ', address: 'Via di Monte del Gallo, 4, Roma', phone: '06-6381924', notes: '最寄駅 FL3線 San Pietro' },
            { name: 'サルヴァトール・ムンディ国際病院', nameEn: 'Salvator Mundi International Hospital', city: 'ローマ', address: 'Viale delle Mura Gianicolensi 67, 00152 Roma', phone: '06-588961', notes: '外国人旅行者・駐在員多数利用' },
            { name: 'Dr. Noriko Morishita（一般内科）', city: 'ミラノ', notes: 'JMAE会員 一般内科' },
        ]
    },
    {
        name: 'オランダ',
        clinics: [
            { name: '在蘭日本人健康診断', city: 'アムステルダム', notes: '日本人向け健康診断' },
            { name: 'JECジャパンクリニック', nameEn: 'JEC Japan Clinic', city: 'アムステルダム', website: 'https://japanclinic.nl' },
            { name: 'アムステルランド病院 ジャパンデスク', nameEn: 'Ziekenhuis Amstelland Japan Desk', city: 'アムステルフェーン', website: 'https://www.ziekenhuisamstelland.nl/nl/japan-desk' },
        ]
    },
    {
        name: 'オーストリア',
        clinics: [
            { name: 'プリヴァートクリニック ドゥブリング', nameEn: 'Privatklinik Döbling', city: 'ウィーン', website: 'https://www.privatklinik-doebling.at', notes: '総合病院' },
            { name: '皮膚科 岡本医師', city: 'ウィーン', website: 'https://www.hautarztokamoto.at' },
            { name: '矢本クリニック', city: 'ウィーン' },
        ]
    },
    {
        name: 'スイス',
        clinics: [
            { name: '鈴木りさこ医師', city: 'ジュネーブ' },
            { name: 'フィリップ・ナカムラ医師', city: 'ジュネーブ', notes: '仏国境クリニック' },
            { name: '三宅桂子診療所', city: 'ジュネーブ' },
            { name: 'スイスMCメディカルセンター', nameEn: 'Swiss MC Medical Center', city: 'ジュネーブ', website: 'https://smcenter.ch' },
            { name: 'ジュネーブ大学病院', nameEn: 'Geneva University Hospital', city: 'ジュネーブ' },
            { name: 'Dr. Mari Nakanishi（神経内科）', city: 'チューリッヒ', notes: 'JMAE会員 神経内科' },
        ]
    },
    {
        name: 'スペイン',
        clinics: [
            { name: 'ACクリニック・バルセロナ', city: 'バルセロナ' },
            { name: '下山由紀子 医療通訳サービス', city: 'バルセロナ' },
            { name: 'Dr. Asuka Nakayama（内科）', city: 'バルセロナ', notes: 'JMAE会員 内科' },
        ]
    },
    {
        name: 'ドイツ',
        clinics: [
            { name: '内田医院', city: 'デュッセルドルフ' },
            { name: '篠田診療所', city: 'デュッセルドルフ' },
            { name: 'ノイゲバウア馬場内科クリニック（本院）', nameEn: 'Neugebauer Baba Clinic', city: 'デュッセルドルフ', website: 'https://www.neugebauer-baba.de' },
            { name: 'ノイゲバウア馬場内科クリニック（プリンツェンパーク外来）', city: 'デュッセルドルフ', website: 'https://www.neugebauer-baba.de' },
            { name: '中川フェルベルク美智子（産婦人科）', city: 'デュッセルドルフ' },
            { name: '日本メディカルセンター（人間ドック）', city: 'デュッセルドルフ', website: 'https://www.dock-nmc.de' },
            { name: 'HSアレルゲンプラクシス（一般内科）', city: 'フランクフルト', website: 'https://www.hs-allgemeinpraxis.de' },
            { name: '診療所アム・ニッダタール', city: 'フランクフルト', website: 'https://www.praxis-am-niddatal.de' },
            { name: 'エックハート・ナイマン 総合ホームクリニック', city: 'フランクフルト' },
            { name: '大島歯科医院', city: 'フランクフルト', website: 'https://oshima-private-dentaloffice.com' },
            { name: '山内耳鼻咽喉科（ベルリン・ミッテ）', city: 'ベルリン' },
            { name: '山内耳鼻咽喉科（ベルリン・シュテークリッツ）', city: 'ベルリン' },
            { name: '一般内科 Dr. YBS', city: 'フランクフルト', website: 'https://www.praxis-drybs.de' },
            { name: 'めじろそらクリニック（心療内科・精神科）', city: 'デュッセルドルフ' },
            { name: 'Dr. Yukiyo Becker-Schuder（内科）', city: 'ミュンヘン', address: 'Menzelstr.4a, 81679 München', notes: 'MOFA掲載 総合診療' },
            { name: 'Frauenarzt Dr. Kato（産婦人科）', city: 'ランダウ', address: 'Hauptstr. 108, 94405 Landau an der Isar', notes: 'JMAE会員' },
            { name: 'Dr. Sachiko Freyk（一般内科）', city: 'ホルプ', notes: 'JMAE会員 一般内科' },
        ]
    },
    {
        name: 'フランス',
        clinics: [
            { name: 'アメリカン・ホスピタル', nameEn: 'Hôpital Américain de Paris', city: 'パリ（ヌイイ）', website: 'https://jp.american-hospital.org' },
            { name: '太田博昭医師（精神科）', city: 'パリ' },
            { name: 'ドウィエブ医師（小児科・産婦人科）', city: 'パリ' },
            { name: '近藤毅医師（循環器内科）', city: 'パリ' },
            { name: '三村悌二医師', city: 'パリ' },
            { name: '金久章医師（内科・小児科）', city: 'パリ' },
            { name: '谷村レミー（一般歯科）', city: 'パリ' },
            { name: 'ミュラー医師', city: 'パリ' },
            { name: 'モニカ・ミラドゥロ ロペス/コスタ医師', city: 'パリ' },
            { name: 'イナズマ医師', city: 'パリ' },
        ]
    },
    {
        name: 'ベルギー',
        clinics: [
            { name: 'サンルク大学病院', nameEn: 'Cliniques Universitaires Saint-Luc', city: 'ブリュッセル', address: 'Avenue Hippocrate 10, 1200 Brussels', phone: '02-764-1111', notes: '日本語対応患者サービスあり' },
            { name: 'ブリュッセル日本語医療相談ネットワーク', city: 'ブリュッセル', phone: '02-513-3194', website: 'https://be.emb-japan.go.jp', notes: '日本語医療コーディネート窓口' },
            { name: 'Clinic Leblanc', city: 'ブリュッセル', address: 'Avenue Paul Hymans 127/5, 1200 Woluwe-Saint-Lambert', notes: '内科・歯科・健診・産婦人科 日本語対応' },
            { name: 'Dr. UENO（上野医師）', city: 'ブリュッセル', address: 'Av. des Vaillants 11, 1200 Bruxelles', notes: '内科・小児科・皮膚科・産婦人科' },
            { name: 'Dr. Dominique JUNGERS（一般内科）', city: 'ブリュッセル', address: 'Av. des Vaillants 11, 1200 Bruxelles' },
            { name: 'Dr. Marc NAMECHE（一般内科）', city: 'ブリュッセル', address: 'Av. Chaudron 34, 1160 Bruxelles' },
            { name: 'Dr. Kaoru TANAKA / Dr. Carlier（循環器科）', city: 'ブリュッセル', address: 'Rue Konkel 202, 1200 Woluwe-Saint-Lambert' },
            { name: 'Dr. Makiko MIYAMOTO（皮膚科）', city: 'ブリュッセル', address: 'Rue d\'Arlon 51, 1000 Bruxelles', notes: 'Brussels Skin Center' },
            { name: 'Dr. Ute EIGELDINGER（歯科）', city: 'ブリュッセル', address: 'Av. Louise 341, 1050 Bruxelles' },
            { name: 'Dr. Vervack / Dr. Sachiko MAEMOTO（歯科）', city: 'ゲント', address: 'Botestraat 104/002, 9032 Gent-Wondelgem' },
            { name: 'UZ Brussel', nameEn: 'Universitair Ziekenhuis Brussel', city: 'ブリュッセル', address: 'Laarbeeklaan 101, 1090 Bruxelles' },
            { name: 'Delta Hospital', city: 'ブリュッセル', address: 'Boulevard du Triomphe 201, 1160 Bruxelles' },
            { name: '川瀬まり（心理士）', nameEn: 'Ms. Mari Kawase', city: 'ブリュッセル', notes: 'Centre Médicis & Delta Hospital' },
            { name: '田中健太郎（理学療法士）', nameEn: 'Mr. Kentaro Tanaka', city: 'ブリュッセル', address: 'Square de Meeüs 21', notes: 'BeNomad' },
        ]
    },
    {
        name: '英国',
        clinics: [
            { name: 'ジャパングリーン メディカルセンター（アクトン/レディース）', city: 'ロンドン', website: 'https://www.japangreen.co.uk' },
            { name: 'ジャパングリーン メディカルセンター（シティ）', city: 'ロンドン', website: 'https://www.japangreen.co.uk' },
            { name: 'ロンドン医療センター', nameEn: 'London Medical Centre', city: 'ロンドン', website: 'https://www.iryo.com' },
            { name: 'セントラル・ジャパニーズ・クリニック', city: 'ロンドン', website: 'https://www.fitfiddle.co.uk' },
            { name: 'Dr伊藤クリニック', city: 'ロンドン', website: 'https://www.dritoclinic.co.uk' },
            { name: 'セント・ジョン＆エリザベス病院', city: 'ロンドン', website: 'https://www.hje.org.uk' },
            { name: 'キースコーヘン総合歯科医院（アクトン）', city: 'ロンドン', website: 'https://www.keithcohendentist.co.uk' },
            { name: '高歯科医院', city: 'ロンドン', website: 'https://www.kodental.co.uk' },
            { name: '奈美デンタルクリニック', city: 'ロンドン', website: 'https://namidentalclinic.com' },
            { name: 'Dr. Tetsujiro Ihara（一般内科）', city: 'ロンドン', notes: 'JMAE会員' },
            { name: 'Dr. Hiroshi Abino（精神科）', city: 'ロンドン', notes: 'JMAE会員' },
            { name: 'TW13 DENTAL（歯科）', city: 'ロンドン', notes: '日本語対応歯科' },
        ]
    },
    // === 新規追加国 ===
    {
        name: 'ハンガリー',
        clinics: [
            { name: 'RMC CLINICS', city: 'ブダペスト', notes: '日本語通訳手配可能 私立クリニック' },
            { name: 'Rózsakert Medical Center', city: 'ブダペスト', notes: '日本語通訳手配可能' },
        ]
    },
    {
        name: 'チェコ',
        clinics: [
            { name: 'Unicare Medical Center', city: 'プラハ', notes: '予約制日本語通訳サービスあり 16言語対応' },
        ]
    },
    {
        name: 'デンマーク',
        clinics: [
            { name: 'Dr. Ken Okamoto（心臓血管外科）', city: 'コペンハーゲン', notes: 'JMAE会員 心臓血管外科' },
        ]
    },
    {
        name: 'スウェーデン',
        clinics: [
            { name: 'Dr. Koichi Inoba（眼科）', city: 'イェヴレ', notes: 'JMAE会員 眼科' },
        ]
    },
];
