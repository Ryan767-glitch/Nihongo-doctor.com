import { Country } from './types';

export const northAmericaCountries: Country[] = [
    {
        name: 'カナダ',
        clinics: [
            { name: 'アルバータ大学病院', city: 'エドモントン' },
            { name: 'オタワ病院', city: 'オタワ' },
            { name: 'ヘイズルディーン・デンタル・グループ', city: 'オタワ' },
            { name: 'フットヒルズ医療センター', city: 'カルガリー' },
            { name: 'シェルドン・チュミア・ヘルス・センター', city: 'カルガリー' },
            { name: 'エンハンスド・ケア・クリニック', city: 'トロント' },
            { name: 'ヒュエン・メディシン', city: 'トロント' },
            { name: 'マウントサイナイ病院', city: 'トロント' },
            { name: 'ヤマシロクリニック', city: 'トロント' },
            { name: '日本語対応クリニック', city: 'バンクーバー', website: 'https://www.carepoint.ca/japanese' },
            { name: 'VGH', city: 'バンクーバー' },
            { name: 'セントポール病院', city: 'バンクーバー' },
            { name: '武内歯科医院', city: 'バンクーバー', website: 'https://www.familydentistinvancouver.com' },
            { name: 'ジューイッシュ・ゼネラル病院', city: 'モントリオール' },
            { name: 'マギル大学医療センター', city: 'モントリオール' },
        ]
    },
    {
        name: 'アメリカ',
        clinics: [
            { name: 'グアム・リージョナル・メディカルシティ', city: 'グアム' },
            { name: 'コモンウェルス・ヘルス・センター', city: 'サイパン' },
            { name: '日本ベイクリニック', city: 'サンフランシスコ', website: 'http://www.nihon-bayclinic.com' },
            { name: 'こばやしクリニック', city: 'サンフランシスコ', website: 'http://www.kobayashi-naika.com' },
            { name: 'UCSF Health', city: 'サンフランシスコ' },
            { name: '柴田路子小児科', city: 'サンフランシスコ' },
            { name: 'UCSF精神科', city: 'サンフランシスコ' },
            { name: '日本クリニック・シカゴ', city: 'シカゴ', website: 'https://nihonclinic.com/jp/chicago-clinic/' },
            { name: '慶応ノースウエスタン・クリニック', city: 'シカゴ' },
            { name: '精神科・心療内科', city: 'シカゴ', website: 'https://chicago.takashimatsukimd.com/' },
            { name: 'ひばりファミリーメディカル', city: 'ニュージャージー', website: 'https://hibarifamilymedical.com/' },
            { name: '東京海上記念診療所', city: 'ニューヨーク', website: 'https://www.mountsinai.org/locations/msd-japanese-medical-practice' },
            { name: '20イーストメディカル', city: 'ニューヨーク', website: 'http://www.20eastmedical.com/index-jp.html' },
            { name: 'J+MED on Madison', city: 'ニューヨーク', website: 'https://jmedny.com/' },
            { name: 'J・MEDICAL', city: 'ニューヨーク', website: 'https://www.jmedical.com/' },
            { name: '安心メディカル', city: 'ニューヨーク', website: 'http://www.anshinmedical.com/' },
            { name: '聖ルカクリニック アラモアナ', city: 'ホノルル' },
            { name: '聖ルカクリニック ワイキキ支店', city: 'ホノルル' },
            { name: 'ドクターズ・オン・コール', city: 'ホノルル' },
            { name: 'バプティスト・ヘルス・サウスフロリダ', city: 'マイアミ', website: 'https://www.baptisthealth.net/' },
            { name: 'ニコラウス小児病院', city: 'マイアミ' },
            { name: '冨澤仁医師クリニック', city: 'ロサンゼルス' },
            { name: '新サンライズクリニック', city: 'ロサンゼルス', website: 'http://www.nsrclinic.com' },
            { name: '上木明マイク医師クリニック', city: 'ロサンゼルス' },
            { name: '日本メディカルクリニック', city: 'ロサンゼルス', website: 'https://www.nihonmedical.com' },
            { name: 'Osato Medical', city: 'ロサンゼルス', website: 'https://www.osatoclinic.com' },
            { name: '松本尚子小児科クリニック', city: 'ロサンゼルス', website: 'https://matsumotomd.com' },
            { name: '有田治生ペインクリニック', city: 'ロサンゼルス', website: 'https://www.painmedicinemd.com' },
            { name: '最所メディカルクリニック', city: 'ロサンゼルス' },
            { name: '鎌田聡一般内科', city: 'ロサンゼルス' },
            { name: 'フェアファックスファミリープラクティス', city: 'バージニア', website: 'https://www.fairfaxfamilypractice.com' },
            { name: '鈴木慶医師', city: 'バージニア' },
            { name: '畑山貴代歯科医師', city: 'ニューヨーク', website: 'https://www.drhatakeyamany.com' },
            { name: '岡本豊歯科医師', city: 'ニューヨーク', website: 'https://smilewelldds.com/' },
            { name: '松井俊樹小児歯科医', city: 'ニューヨーク', website: 'https://www.kidsdentalcastle.com' },
            { name: '山岸由佳小児歯科', city: 'ニューヨーク' },
            { name: '山口舞美歯科医師', city: 'バージニア', website: 'https://novaendo.com/' },
        ]
    },
];

export const southAmericaCountries: Country[] = [
    {
        name: 'アルゼンチン',
        clinics: [
            { name: '日会診療所', city: 'ブエノスアイレス' },
            { name: 'ドイツ病院', nameEn: 'Hospital Alemán', city: 'ブエノスアイレス' },
            { name: 'イタリア病院', nameEn: 'Hospital Italiano', city: 'ブエノスアイレス' },
        ]
    },
    {
        name: 'コロンビア',
        clinics: [
            { name: 'クリニカ・デル・カントリー', nameEn: 'Clínica del Country', city: 'ボゴタ', website: 'https://clinicadelcountry.com' },
            { name: 'クリニカ・パレルモ', city: 'ボゴタ' },
        ]
    },
    {
        name: 'チリ',
        clinics: [
            { name: 'クリニカ・アレマナ', nameEn: 'Clínica Alemana', city: 'サンティアゴ', website: 'https://alemana.cl' },
            { name: 'クリニカ・ラス・コンデス', nameEn: 'Clínica Las Condes', city: 'サンティアゴ', website: 'https://lacondes.cl' },
            { name: 'クリニカ・サンタ・マリア', nameEn: 'Clínica Santa María', city: 'サンティアゴ', website: 'https://clinicasantamaria.cl' },
        ]
    },
    {
        name: 'ブラジル',
        clinics: [
            { name: 'スギサワ病院', nameEn: 'Hospital Sugisawa', city: 'クリチバ', website: 'https://hospitalsugisawa.com.br' },
            { name: '援協リベルダージ医療センター', nameEn: 'Centro Médico Liberdade / Hospital Nipo-Brasileiro ENKYO', city: 'サンパウロ', website: 'https://www.enkyo.org.br' },
            { name: '日伯友好病院', nameEn: 'Hospital Nipo-Brasileiro', city: 'サンパウロ', website: 'https://hnipo.org.br' },
            { name: 'シリオ・リバネス病院', nameEn: 'Hospital Sírio-Libanês', city: 'サンパウロ', website: 'https://j-helpdesk.jp' },
            { name: 'アルベルト・アインシュタイン病院', city: 'サンパウロ' },
            { name: 'モインョス・デ・ヴェント病院', city: 'ポルトアレグレ' },
            { name: 'サマリタノ病院', city: 'リオデジャネイロ' },
            { name: 'コパ・スター病院', city: 'リオデジャネイロ' },
        ]
    },
    {
        name: 'ペルー',
        clinics: [
            { name: 'クリニカ・パルド', city: 'リマ' },
            { name: 'クリニカ・アングロ・アメリカーナ', nameEn: 'Clínica Anglo Americana', city: 'リマ', website: 'https://angloamericana.pe' },
            { name: 'クリニカ・リカルド・パルマ', nameEn: 'Clínica Ricardo Palma', city: 'リマ', website: 'https://ricardopalma.com.pe' },
        ]
    },
    {
        name: 'メキシコ',
        clinics: [
            { name: '日系人医師クリニック', city: 'メキシコシティ', notes: '日本語での診療可能 日本人・日系人医師在籍' },
            { name: 'メキシコ日本語医療相談', city: 'メキシコシティ', notes: '日本語対応（大使館紹介）' },
        ]
    },
];

export const oceaniaCountries: Country[] = [
    {
        name: 'オーストラリア',
        clinics: [
            { name: 'キャンベラ病院', city: 'キャンベラ' },
            { name: 'ノースキャンベラ病院', city: 'キャンベラ' },
            { name: 'ワールドシティ日本語医療・歯科センター', city: 'シドニー', website: 'http://www.worldcitimedical.com.au/jp/' },
            { name: 'タウンホールクリニック', city: 'シドニー', website: 'https://www.townhallclinic.com.au/' },
            { name: 'オブザベートリータワーメディカルセンター', city: 'シドニー', website: 'https://www.otmc.com.au/' },
            { name: 'ノースブリッジメディカルプラクティス', city: 'シドニー', website: 'http://www.northbridgemp.com.au/' },
            { name: 'Dr. セリーナ ラパポート', city: 'シドニー', website: 'https://medicentral.com.au' },
            { name: 'さくらファミリークリニック', city: 'シドニー', website: 'https://sakuraclinic.com.au/' },
            { name: 'スカイアーチメディカルクリニック', city: 'シドニー', website: 'https://skyarchmedicalclinic.com.au/ja/' },
            { name: '日本語医療担当', city: 'シドニー', website: 'https://jp.cbdmedical.com.au/' },
            { name: '高尾康瑞医師', city: 'シドニー', website: 'https://www.dryasutakao.com.au' },
            { name: '岡田メディカルクリニック', city: 'メルボルン' },
            { name: 'トラベラーズメディカルサービス', city: 'メルボルン' },
            { name: '日本語医療センター ゴールドコースト', city: 'ゴールドコースト', website: 'https://www.nihongoiryo.com.au/' },
            { name: 'サーファーズヘルスメディカルセンター', city: 'ゴールドコースト' },
            { name: 'パラマウントクリニック', city: 'パース', website: 'https://paramountclinic.com.au/' },
            { name: '富田愛子医師', city: 'パース', website: 'https://www.doctoraiko.com.au/ja' },
            { name: '内分泌糖尿病内科専門医', city: 'パース', website: 'https://number1womenshealth.com/pages/dr-hikaru-hashimura' },
            { name: '高橋さゆり医師', city: 'パース', website: 'https://womenshealthhub.com.au' },
            { name: 'イアン・マトラス歯科医院', city: 'シドニー' },
            { name: '日本語歯科サポート（シドニー）', city: 'シドニー' },
            { name: '日本語対応（メルボルン）', city: 'メルボルン' },
            { name: '日本語対応（ブリスベン）', city: 'ブリスベン' },
        ]
    },
    {
        name: 'ニュージーランド',
        clinics: [
            { name: 'シティメディカルセンター', city: 'オークランド' },
            { name: 'ホワイトクロス時間外診療クリニック', city: 'オークランド', website: 'https://www.whitecross.co.nz/' },
            { name: 'オークランドシティ病院', city: 'オークランド' },
            { name: '日本語GP検索', city: 'オークランド', website: 'https://www.healthpoint.co.nz/' },
            { name: 'ウェリントン救急', city: 'ウェリントン' },
            { name: 'クライストチャーチ救急', city: 'クライストチャーチ' },
        ]
    },
];

export const africaMiddleEastCountries: Country[] = [
    {
        name: 'アラブ首長国連邦',
        clinics: [
            { name: 'さくらメディカル＆デンタルクリニック', city: 'ドバイ', website: 'https://www.americanwellnesscenter.ae' },
        ]
    },
    {
        name: 'エジプト',
        clinics: [
            { name: 'アル・シェファ・クリニック', city: 'カイロ' },
            { name: 'アングロ・アメリカン病院', city: 'カイロ' },
            { name: 'クレオパトラ病院', city: 'カイロ' },
            { name: 'アル・サラム国際病院', city: 'カイロ', website: 'https://www.assih.com' },
            { name: 'タビビ・クリニック', city: 'カイロ' },
        ]
    },
    {
        name: 'エチオピア',
        clinics: [
            { name: 'ノルディック医療センター', city: 'アディスアベバ' },
        ]
    },
    {
        name: 'ケニア',
        clinics: [
            { name: 'フォレストジャパン医療センター', city: 'ナイロビ' },
            { name: 'アガ・カーン大学病院', city: 'ナイロビ' },
            { name: 'ナイロビ病院', city: 'ナイロビ' },
            { name: 'ガートルーズ小児病院', city: 'ナイロビ' },
            { name: 'ネスビット小児クリニック', city: 'ナイロビ' },
            { name: 'MPシャー病院', city: 'ナイロビ' },
        ]
    },
    {
        name: 'タンザニア',
        clinics: [
            { name: 'ISTクリニック', city: 'ダルエスサラーム' },
        ]
    },
    {
        name: 'ナイジェリア',
        clinics: [
            { name: 'レディントン病院', city: 'ラゴス' },
            { name: 'エバーケア病院', city: 'ラゴス' },
        ]
    },
    {
        name: '南アフリカ',
        clinics: [
            { name: 'ユニタス病院', city: 'プレトリア' },
            { name: 'ウィルガース病院', city: 'プレトリア' },
            { name: 'ミルパーク病院', city: 'ヨハネスブルグ' },
            { name: 'モーニングサイド病院', city: 'ヨハネスブルグ' },
        ]
    },
];
