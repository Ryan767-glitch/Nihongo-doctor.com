import { Country } from './types';

export const asiaCountries: Country[] = [
    {
        name: 'インドネシア',
        clinics: [
            { name: '共愛メディカルサービス', nameEn: 'Kyoai Medical Service', city: 'ジャカルタ', notes: '日本語対応クリニック' },
            { name: 'タケノコクリニック', nameEn: 'Takenoko Clinic', city: 'ジャカルタ', notes: '日本人医師常駐' },
            { name: '絆クリニック', nameEn: 'Kizuna Clinic', city: 'ジャカルタ', notes: '日本語対応' },
            { name: 'DYM Medical Clinic Jakarta', city: 'ジャカルタ', notes: '日本語対応' },
            { name: 'J-Clinic Pondok Indah', city: 'ジャカルタ', notes: '日本語対応' },
            { name: 'Takenoko Pondok Indah', city: 'ジャカルタ' },
            { name: 'SOS Medika Klinik Cipete', city: 'ジャカルタ' },
            { name: 'MRCCC Siloam Semanggi', city: 'ジャカルタ' },
            { name: 'RS Pondok Indah', city: 'ジャカルタ' },
            { name: 'RS Medistra', city: 'ジャカルタ' },
            { name: 'RS Premier Surabaya', city: 'スラバヤ' },
            { name: 'SOS Medika Bali', city: 'バリ' },
            { name: 'タケノコバリ', nameEn: 'Takenoko Bali', city: 'バリ' },
            { name: 'BIMC Hospital Kuta', city: 'バリ' },
            { name: 'Kasih Ibu Hospital', city: 'バリ' },
            { name: 'BIMC Hospital Nusa Dua', city: 'バリ' },
        ]
    },
    {
        name: 'カンボジア',
        clinics: [
            { name: 'Royal Angkor International Hospital', city: 'シェムリアップ' },
            { name: 'Angkor-Japan Friendship International Hospital', city: 'シェムリアップ' },
            { name: 'Un Sovanthan Clinic', city: 'シェムリアップ' },
            { name: 'サンライズジャパン病院', nameEn: 'Sunrise Japan Hospital', city: 'プノンペン', website: 'https://sunrise-hs.com' },
            { name: 'Royal Phnom Penh Hospital', city: 'プノンペン' },
            { name: 'ケンクリニック', nameEn: 'Ken Clinic', city: 'プノンペン' },
            { name: 'Raffles Medical Cambodia', city: 'プノンペン' },
            { name: 'Sun International Clinic', city: 'プノンペン' },
            { name: 'Denriche BKK Dental Clinic', city: 'プノンペン' },
            { name: 'MALIS Dental Clinic', city: 'プノンペン' },
        ]
    },
    {
        name: 'タイ',
        clinics: [
            { name: 'バンコク病院', nameEn: 'Bangkok Hospital', city: 'バンコク', website: 'http://www.bangkokhospital.com' },
            { name: 'BNH Hospital', city: 'バンコク', website: 'https://www.bnhhospital.com' },
            { name: 'Bumrungrad International Hospital', city: 'バンコク', website: 'https://www.bumrungrad.com' },
            { name: 'Samitivej Sukhumvit Hospital', city: 'バンコク', website: 'https://www.samitivejhospitals.com' },
            { name: 'ブレズクリニック', nameEn: 'Blez Clinic', city: 'バンコク' },
            { name: 'DYM Medical Center Thailand', city: 'バンコク' },
            { name: 'コトビアクリニック', nameEn: 'Cotovia Clinic', city: 'バンコク' },
            { name: '桜クロス', nameEn: 'Sakura Cross', city: 'バンコク' },
            { name: 'ラマ9病院', nameEn: 'Rama 9 Hospital', city: 'バンコク' },
            { name: 'Bangkok Hospital Pattaya', city: 'パタヤ' },
            { name: 'Bangkok Hospital Phuket', city: 'プーケット' },
            { name: 'Bangkok Hospital Samui', city: 'サムイ島' },
            { name: 'Kasemrad Sriracha Hospital', city: 'シラチャ' },
            { name: 'Chiang Mai Ram Hospital', city: 'チェンマイ' },
        ]
    },
    {
        name: 'フィリピン',
        clinics: [
            { name: 'MJAクリニック', city: 'マカティ' },
            { name: 'Makati Medical Center', city: 'マカティ' },
            { name: 'St. Luke\'s Medical Center BGC', city: 'マニラ' },
            { name: 'St. Luke\'s Medical Center Quezon City', city: 'ケソン' },
            { name: 'Asian Hospital and Medical Center', city: 'マニラ' },
            { name: '小林デンタルクリニック', nameEn: 'Kobayashi Dental Clinic', city: 'マニラ' },
            { name: 'Navales Dental Clinic', city: 'マニラ' },
        ]
    },
    {
        name: 'ベトナム',
        clinics: [
            { name: 'Tokyo International Clinic', city: 'ハノイ' },
            { name: '仏越病院', city: 'ハノイ' },
            { name: 'Raffles Medical Hanoi', city: 'ハノイ' },
            { name: 'Family Medical Practice Hanoi', city: 'ハノイ' },
            { name: 'さくらクリニック', nameEn: 'Sakura Clinic', city: 'ハノイ' },
            { name: 'T-Matsuoka Clinic', city: 'ハノイ' },
            { name: 'JAPAN International Eye Hospital', city: 'ハノイ' },
            { name: 'Lotus Clinic Hanoi', city: 'ハノイ' },
            { name: 'Vinmec International Hospital Hanoi', city: 'ハノイ' },
            { name: 'Lotus Clinic Ho Chi Minh', city: 'ホーチミン' },
            { name: 'Family Medical Practice HCMC', city: 'ホーチミン' },
            { name: 'Raffles Medical Ho Chi Minh', city: 'ホーチミン' },
            { name: 'FV Hospital', city: 'ホーチミン' },
            { name: 'Vinmec Central Park International Hospital', city: 'ホーチミン' },
            { name: 'DYM Medical Center Vietnam', city: 'ホーチミン' },
            { name: 'ハノイメディカルセンター', city: 'ハノイ' },
        ]
    },
    {
        name: 'マレーシア',
        clinics: [
            { name: 'ひばりクリニック KL', nameEn: 'Hibari Clinic KL', city: 'クアラルンプール' },
            { name: 'もりのまちクリニック', city: 'クアラルンプール' },
            { name: 'あおいファミリークリニック', city: 'クアラルンプール' },
            { name: 'コトビアクリニック', nameEn: 'Kotobia Clinic', city: 'クアラルンプール' },
            { name: 'Gleneagles Kuala Lumpur', city: 'クアラルンプール' },
            { name: 'Prince Court Medical Centre', city: 'クアラルンプール' },
            { name: 'Sunway Medical Centre', city: 'クアラルンプール' },
            { name: 'Kotobia Counter', city: 'コタキナバル' },
            { name: 'Queen Elizabeth Hospital', city: 'コタキナバル' },
            { name: 'Sabah Medical Centre', city: 'コタキナバル' },
            { name: 'Gleneagles Penang', city: 'ペナン' },
            { name: 'Island Hospital Penang', city: 'ペナン' },
            { name: 'Loh Guan Lye Specialists Centre', city: 'ペナン' },
            { name: 'Penang Adventist Hospital', city: 'ペナン' },
            { name: 'Hibari Clinic Penang', city: 'ペナン' },
        ]
    },
    {
        name: 'ミャンマー',
        clinics: [
            { name: 'アジアロイヤル病院', nameEn: 'Asia Royal Hospital', city: 'ヤンゴン' },
            { name: 'パンフレイン病院', city: 'ヤンゴン' },
        ]
    },
    {
        name: 'ラオス',
        clinics: [
            { name: 'Mahosot Hospital International Clinic', city: 'ビエンチャン' },
            { name: '外国人向けクリニック', city: 'ビエンチャン' },
        ]
    },
    {
        name: '中国',
        clinics: [
            { name: 'Raffles Medical Beijing', city: '北京' },
            { name: 'BJU', city: '北京' },
            { name: 'Beijing VISTA Clinic', city: '北京' },
            { name: 'Hong Kong International Medical Clinic Beijing', city: '北京' },
            { name: 'Sino-Japanese Friendship Hospital International Medical Dept', city: '北京', notes: '中日友好病院 国際医療部' },
            { name: '北京フラワークリニック', city: '北京' },
            { name: 'IMC Clinic', city: '上海' },
            { name: '竜頭クリニック', city: '上海' },
        ]
    },
    {
        name: '中国（香港）',
        clinics: [
            { name: '港安醫院', nameEn: 'Hong Kong Adventist Hospital', city: '香港' },
            { name: 'DYM香港クリニック', city: '香港' },
            { name: 'Queen Mary Hospital', city: '香港' },
        ]
    },
    // === 新規追加国 ===
    {
        name: 'シンガポール',
        clinics: [
            { name: '日本メディカルケア', nameEn: 'Nippon Medical Care', city: 'シンガポール', website: 'https://nipponmedicalcare.com.sg', notes: 'グレニーグルス病院内　日本人医師・看護師常駐' },
            { name: 'ラッフルズジャパニーズクリニック', nameEn: 'Raffles Japanese Clinic', city: 'シンガポール', website: 'https://rafflesj-clinic.com', notes: '日本人医師・歯科医・看護師常駐' },
            { name: 'ジャパングリーンクリニック', nameEn: 'Japan Green Clinic', city: 'シンガポール', website: 'https://japan-green.com.sg', notes: '40年以上の実績　総合診療' },
            { name: 'ことびあクリニック', nameEn: 'Cotovia Clinic Singapore', city: 'シンガポール', website: 'https://cotoviaclinic.sg', notes: '年中無休24時間LINE対応' },
            { name: 'シンガポール日本人会クリニック', nameEn: 'JACS', city: 'シンガポール', website: 'https://japanese-clinic.com.sg', notes: '日本人会会員割引あり' },
            { name: 'ヘルスウェイジャパニーズメディカル', nameEn: 'Healthway Japanese Medical', city: 'シンガポール', website: 'https://healthwaymedical.com', notes: 'The Centrepoint院/Downtown Gallery院' },
        ]
    },
    {
        name: '台湾',
        clinics: [
            { name: '台北日本クリニック', nameEn: 'Taipei Japan Clinic', city: '台北', website: 'https://japandr.com', notes: '台湾初の日本資本クリニック MRT中山駅徒歩3分' },
            { name: '台北101クリニック', nameEn: 'Taipei 101 Clinic', city: '台北', notes: '台北101内 LINE医療相談可' },
            { name: '臺安醫院', nameEn: 'Taiwan Adventist Hospital', city: '台北', notes: '国際特診センター 日本語対応あり' },
            { name: '國立臺灣大學醫學院附設醫院', nameEn: 'National Taiwan University Hospital', city: '台北', notes: '国際医療センター 日本語対応' },
            { name: '馬偕紀念醫院', nameEn: 'Mackay Memorial Hospital', city: '台北', notes: '日本語対応可能' },
            { name: '臺北醫學大學附設醫院', nameEn: 'Taipei Medical University Hospital', city: '台北', notes: '日本語対応医師あり' },
            { name: '新光呉火獅紀念醫院', nameEn: 'Shin Kong Wu Ho-Su Memorial Hospital', city: '台北', notes: '日本人外来予約あり' },
            { name: '國泰綜合醫院', nameEn: 'Cathay General Hospital', city: '台北', notes: '国際医療サービス 日本語対応' },
            { name: '台北市立聯合醫院 仁愛院區', city: '台北', notes: '日本語通訳サービスあり' },
            { name: '台北市立萬芳醫院', city: '台北', notes: '日本語対応スタッフあり' },
            { name: '輝雄診所', nameEn: 'Liu Hsiung Clinic', city: '台北', notes: '予約制 日本語対応 健診' },
            { name: '劉内兒科診所', city: '台北', notes: '内科・小児科 日本語対応' },
        ]
    },
    {
        name: '韓国',
        clinics: [
            { name: '延世大学校 新村セブランス病院', nameEn: 'Yonsei Severance Hospital', city: 'ソウル', phone: '02-2228-5801', notes: '国際医療センター 日本語コーディネーター常駐' },
            { name: 'カトリック大学校ソウル聖母病院', nameEn: 'Seoul St. Mary\'s Hospital', city: 'ソウル', phone: '02-2258-5747', notes: '国際医療センター 日本語専用電話' },
            { name: 'ソウル峨山病院', nameEn: 'Asan Medical Center', city: 'ソウル', phone: '02-3010-7944', notes: '国際診療センター 日本語対応' },
            { name: '建国大学病院', nameEn: 'Konkuk University Hospital', city: 'ソウル', phone: '02-2030-7225', notes: 'インターナショナルクリニック' },
            { name: '順天郷大学付属病院', nameEn: 'Soonchunhyang University Hospital', city: 'ソウル', phone: '02-709-9058', notes: '日本人担当医師あり' },
            { name: 'H+ヤンジ病院', nameEn: 'H+ Yangji Hospital', city: 'ソウル', phone: '070-4665-9364', notes: '国際医療センター 日本語対応' },
            { name: 'ロハス医院', nameEn: 'Lohas Clinic', city: 'ソウル', phone: '02-790-7470', notes: '二村洞 日本語対応女性医師' },
            { name: 'ORACLE 皮膚科（チョンダム）', city: 'ソウル', notes: '日本語対応' },
        ]
    },
    {
        name: 'インド',
        clinics: [
            { name: 'Max Healthcare（日本語ヘルプデスク）', nameEn: 'Max Healthcare', city: 'デリー', notes: '日本語ヘルプデスクあり' },
            { name: 'Max Saket', city: 'デリー', notes: 'Max Healthcareグループ 日本語窓口' },
            { name: 'ムンバイ総合病院（日本語デスク）', city: 'ムンバイ', notes: 'ポワイ地区 日本語ヘルプデスク' },
        ]
    },
];
