const fs = require('fs');
const dataFile = 'C:/Users/1/.gemini/antigravity/scratch/recovered/src/data/clinics.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

let nextId = Math.max(...data.map(c => parseInt(c.id) || 0)) + 1;

const newClinics = [
    // --- ASIA: SINGAPORE ---
    { nameJa: '日本メディカルケア', nameEn: 'Nippon Medical Care', continent: 'Asia', country: 'シンガポール', city: 'シンガポール', address: 'Gleneagles Hospital', website: 'https://nipponmedicalcare.com.sg', specialties: ['総合診療'], japaneseSupportDetails: 'グレニーグルス病院内 日本人医師・看護師常駐' },
    { nameJa: 'ラッフルズジャパニーズクリニック', nameEn: 'Raffles Japanese Clinic', continent: 'Asia', country: 'シンガポール', city: 'シンガポール', address: 'Raffles Hospital', website: 'https://rafflesj-clinic.com', specialties: ['総合診療'], japaneseSupportDetails: '日本人医師・歯科医・看護師常駐' },
    { nameJa: 'ジャパングリーンクリニック', nameEn: 'Japan Green Clinic', continent: 'Asia', country: 'シンガポール', city: 'シンガポール', address: 'Paragon Medical', website: 'https://japan-green.com.sg', specialties: ['総合診療'], japaneseSupportDetails: '40年以上の実績' },
    { nameJa: 'ことびあクリニック', nameEn: 'Cotovia Clinic Singapore', continent: 'Asia', country: 'シンガポール', city: 'シンガポール', address: 'West Coast Plaza / UE Square', website: 'https://cotoviaclinic.sg', specialties: ['総合診療'], japaneseSupportDetails: '年中無休24時間LINE対応' },
    { nameJa: 'シンガポール日本人会クリニック', nameEn: 'JACS', continent: 'Asia', country: 'シンガポール', city: 'シンガポール', address: '120 Adam Road', website: 'https://japanese-clinic.com.sg', specialties: ['総合診療'], japaneseSupportDetails: '日本人会会員割引あり' },
    { nameJa: 'ヘルスウェイジャパニーズメディカル', nameEn: 'Healthway Japanese Medical', continent: 'Asia', country: 'シンガポール', city: 'シンガポール', address: 'The Centrepoint / Downtown Gallery', website: 'https://healthwaymedical.com', specialties: ['総合診療'], japaneseSupportDetails: '日本人サポート' },

    // --- ASIA: TAIWAN ---
    { nameJa: '台北日本クリニック', nameEn: 'Taipei Japan Clinic', continent: 'Asia', country: '台湾', city: '台北', address: 'MRT中山駅徒歩3分', website: 'https://japandr.com', specialties: ['内科'], japaneseSupportDetails: '台湾初の日本資本クリニック' },
    { nameJa: '台北101クリニック', nameEn: 'Taipei 101 Clinic', continent: 'Asia', country: '台湾', city: '台北', address: '台北101内', specialties: ['総合診療'], japaneseSupportDetails: 'LINE医療相談可' },
    { nameJa: '臺安醫院', nameEn: 'Taiwan Adventist Hospital', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '国際特診センター 日本語対応あり' },
    { nameJa: '國立臺灣大學醫學院附設醫院', nameEn: 'National Taiwan University Hospital', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '国際医療センター 日本語対応' },
    { nameJa: '馬偕紀念醫院', nameEn: 'Mackay Memorial Hospital', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '日本語対応可能' },
    { nameJa: '臺北醫學大學附設醫院', nameEn: 'Taipei Medical University Hospital', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '日本語対応医師あり' },
    { nameJa: '新光呉火獅紀念醫院', nameEn: 'Shin Kong Wu Ho-Su Memorial Hospital', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '日本人外来予約あり' },
    { nameJa: '國泰綜合醫院', nameEn: 'Cathay General Hospital', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '国際医療サービス 日本語対応' },
    { nameJa: '台北市立聯合醫院 仁愛院區', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '日本語通訳サービスあり' },
    { nameJa: '台北市立萬芳醫院', continent: 'Asia', country: '台湾', city: '台北', specialties: ['総合病院'], japaneseSupportDetails: '日本語対応スタッフあり' },
    { nameJa: '輝雄診所', nameEn: 'Liu Hsiung Clinic', continent: 'Asia', country: '台湾', city: '台北', specialties: ['健診'], japaneseSupportDetails: '予約制 日本語対応' },
    { nameJa: '劉内兒科診所', continent: 'Asia', country: '台湾', city: '台北', specialties: ['内科', '小児科'], japaneseSupportDetails: '日本語対応' },

    // --- ASIA: KOREA ---
    { nameJa: '延世大学校 新村セブランス病院', nameEn: 'Yonsei Severance Hospital', continent: 'Asia', country: '韓国', city: 'ソウル', address: '西大門区', phone: '02-2228-5801', specialties: ['総合病院'], japaneseSupportDetails: '国際医療センター 日本語コーディネーター常駐' },
    { nameJa: 'カトリック大学校ソウル聖母病院', nameEn: 'Seoul St. Mary\'s Hospital', continent: 'Asia', country: '韓国', city: 'ソウル', address: '端草区', phone: '02-2258-5747', specialties: ['総合病院'], japaneseSupportDetails: '国際医療センター 日本語専用電話' },
    { nameJa: 'ソウル峨山病院', nameEn: 'Asan Medical Center', continent: 'Asia', country: '韓国', city: 'ソウル', address: '松波区', phone: '02-3010-7944', specialties: ['総合病院'], japaneseSupportDetails: '国際診療センター 日本語対応' },
    { nameJa: '建国大学病院', nameEn: 'Konkuk University Hospital', continent: 'Asia', country: '韓国', city: 'ソウル', address: '廣津区', phone: '02-2030-7225', specialties: ['総合病院'], japaneseSupportDetails: 'インターナショナルクリニック' },
    { nameJa: '順天郷大学付属病院', nameEn: 'Soonchunhyang University Hospital', continent: 'Asia', country: '韓国', city: 'ソウル', address: '龍山区', phone: '02-709-9058', specialties: ['総合病院'], japaneseSupportDetails: '日本人担当医師あり' },
    { nameJa: 'H+ヤンジ病院', nameEn: 'H+ Yangji Hospital', continent: 'Asia', country: '韓国', city: 'ソウル', address: '冠岳区', phone: '070-4665-9364', specialties: ['総合病院'], japaneseSupportDetails: '国際医療センター 日本語対応' },
    { nameJa: 'ロハス医院', nameEn: 'Lohas Clinic', continent: 'Asia', country: '韓国', city: 'ソウル', address: '龍山区二村洞', phone: '02-790-7470', specialties: ['一般内科'], japaneseSupportDetails: '二村洞 日本語対応女性医師' },
    { nameJa: 'ORACLE 皮膚科（チョンダム）', continent: 'Asia', country: '韓国', city: 'ソウル', specialties: ['皮膚科'], japaneseSupportDetails: '日本語対応' },

    // --- ASIA: INDIA ---
    { nameJa: 'Max Healthcare（日本語ヘルプデスク）', nameEn: 'Max Healthcare', continent: 'Asia', country: 'インド', city: 'デリー', specialties: ['総合病院'], japaneseSupportDetails: '日本語ヘルプデスクあり' },
    { nameJa: 'Max Saket', continent: 'Asia', country: 'インド', city: 'デリー', specialties: ['総合病院'], japaneseSupportDetails: 'Max Healthcareグループ 日本語窓口' },
    { nameJa: 'ムンバイ総合病院（日本語デスク）', continent: 'Asia', country: 'インド', city: 'ムンバイ', address: 'ポワイ地区', specialties: ['総合病院'], japaneseSupportDetails: '日本語ヘルプデスク' },

    // --- EUROPE: BELGIUM EXPANDED ---
    { nameJa: 'Clinic Leblanc', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Avenue Paul Hymans 127/5, 1200 Woluwe-Saint-Lambert', specialties: ['内科', '歯科', '健診', '産婦人科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Dr. UENO（上野医師）', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Av. des Vaillants 11, 1200 Bruxelles', specialties: ['内科', '小児科', '皮膚科', '産婦人科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Dr. Dominique JUNGERS（一般内科）', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Av. des Vaillants 11, 1200 Bruxelles', specialties: ['一般内科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Dr. Marc NAMECHE（一般内科）', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Av. Chaudron 34, 1160 Bruxelles', specialties: ['一般内科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Dr. Kaoru TANAKA / Dr. Carlier（循環器科）', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Rue Konkel 202, 1200 Woluwe-Saint-Lambert', specialties: ['循環器科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Dr. Makiko MIYAMOTO（皮膚科）', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Rue d\'Arlon 51, 1000 Bruxelles', specialties: ['皮膚科'], japaneseSupportDetails: 'Brussels Skin Center' },
    { nameJa: 'Dr. Ute EIGELDINGER（歯科）', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Av. Louise 341, 1050 Bruxelles', specialties: ['歯科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Dr. Vervack / Dr. Sachiko MAEMOTO（歯科）', continent: 'Europe', country: 'ベルギー', city: 'ゲント', address: 'Botestraat 104/002, 9032 Gent-Wondelgem', specialties: ['歯科'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'UZ Brussel', nameEn: 'Universitair Ziekenhuis Brussel', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Laarbeeklaan 101, 1090 Bruxelles', specialties: ['総合病院'], japaneseSupportDetails: '日本語対応' },
    { nameJa: 'Delta Hospital', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Boulevard du Triomphe 201, 1160 Bruxelles', specialties: ['総合病院'], japaneseSupportDetails: '日本語対応' },
    { nameJa: '川瀬まり（心理士）', nameEn: 'Ms. Mari Kawase', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', specialties: ['心理', 'セクソロジー'], japaneseSupportDetails: 'Centre Médicis & Delta Hospital' },
    { nameJa: '田中健太郎（理学療法士）', nameEn: 'Mr. Kentaro Tanaka', continent: 'Europe', country: 'ベルギー', city: 'ブリュッセル', address: 'Square de Meeüs 21', specialties: ['理学療法'], japaneseSupportDetails: 'BeNomad' },

    // --- EUROPE: GERMANY ---
    { nameJa: 'Dr. Yukiyo Becker-Schuder（内科）', continent: 'Europe', country: 'ドイツ', city: 'ミュンヘン', address: 'Menzelstr.4a, 81679 München', specialties: ['内科', '総合診療'], japaneseSupportDetails: 'MOFA掲載 総合診療' },
    { nameJa: 'Frauenarzt Dr. Kato（産婦人科）', continent: 'Europe', country: 'ドイツ', city: 'ランダウ', address: 'Hauptstr. 108, 94405 Landau an der Isar', specialties: ['産婦人科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'Dr. Sachiko Freyk（一般内科）', continent: 'Europe', country: 'ドイツ', city: 'ホルプ', specialties: ['一般内科'], japaneseSupportDetails: 'JMAE会員' },

    // --- EUROPE: OTHERS ---
    { nameJa: 'Dr. Noriko Morishita（一般内科）', continent: 'Europe', country: 'イタリア', city: 'ミラノ', specialties: ['一般内科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'Dr. Asuka Nakayama（内科）', continent: 'Europe', country: 'スペイン', city: 'バルセロナ', specialties: ['内科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'Dr. Mari Nakanishi（神経内科）', continent: 'Europe', country: 'スイス', city: 'チューリッヒ', specialties: ['神経内科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'Dr. Tetsujiro Ihara（一般内科）', continent: 'Europe', country: '英国', city: 'ロンドン', specialties: ['一般内科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'Dr. Hiroshi Abino（精神科）', continent: 'Europe', country: '英国', city: 'ロンドン', specialties: ['精神科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'TW13 DENTAL（歯科）', continent: 'Europe', country: '英国', city: 'ロンドン', specialties: ['歯科'], japaneseSupportDetails: '日本語対応歯科' },

    // --- EUROPE: NEW COUNTRIES ---
    { nameJa: 'RMC CLINICS', continent: 'Europe', country: 'ハンガリー', city: 'ブダペスト', specialties: ['総合診療'], japaneseSupportDetails: '日本語通訳手配可能 私立クリニック' },
    { nameJa: 'Rózsakert Medical Center', continent: 'Europe', country: 'ハンガリー', city: 'ブダペスト', specialties: ['総合診療'], japaneseSupportDetails: '日本語通訳手配可能' },
    { nameJa: 'Unicare Medical Center', continent: 'Europe', country: 'チェコ', city: 'プラハ', specialties: ['総合診療'], japaneseSupportDetails: '予約制日本語通訳サービスあり 16言語対応' },
    { nameJa: 'Dr. Ken Okamoto（心臓血管外科）', continent: 'Europe', country: 'デンマーク', city: 'コペンハーゲン', specialties: ['心臓血管外科'], japaneseSupportDetails: 'JMAE会員' },
    { nameJa: 'Dr. Koichi Inoba（眼科）', continent: 'Europe', country: 'スウェーデン', city: 'イェヴレ', specialties: ['眼科'], japaneseSupportDetails: 'JMAE会員' },

    // --- LATIN AMERICA ---
    { nameJa: '日系人医師クリニック', continent: 'Latin America', country: 'メキシコ', city: 'メキシコシティ', specialties: ['一般内科'], japaneseSupportDetails: '日本語での診療可能 日本人・日系人医師在籍' },
    { nameJa: 'メキシコ日本語医療相談', continent: 'Latin America', country: 'メキシコ', city: 'メキシコシティ', specialties: ['医療相談'], japaneseSupportDetails: '日本語対応（大使館紹介）' }
].map(clinic => ({
    id: String(nextId++),
    nameJa: clinic.nameJa || '',
    nameEn: clinic.nameEn || clinic.nameJa,
    continent: clinic.continent || '',
    country: clinic.country || '',
    city: clinic.city || '',
    address: clinic.address || '',
    phone: clinic.phone || '',
    phoneClean: clinic.phone ? clinic.phone.replace(/[^0-9+]/g, '') : '',
    supportLevel: 'support',
    website: clinic.website || '',
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((clinic.nameJa + ' ' + (clinic.address || '')).trim() + ` ${clinic.city} ${clinic.country}`)}`,
    specialties: clinic.specialties || [],
    hoursDescription: clinic.hoursDescription || '',
    japaneseSupportDetails: clinic.japaneseSupportDetails || '',
    emergencyAvailable: !!clinic.emergencyAvailable,
    cashlessAvailable: !!clinic.cashlessAvailable,
    notes: clinic.notes || ''
}));

const updatedData = [...data, ...newClinics];

// verify that the new data has no duplicates
const dedupedData = Array.from(new Map(updatedData.map(item => [item.nameJa, item])).values());

fs.writeFileSync(dataFile, JSON.stringify(dedupedData, null, 2), 'utf8');

console.log('Appended', dedupedData.length - data.length, 'new clinics (filtered duplicates). Total clinics:', dedupedData.length);
