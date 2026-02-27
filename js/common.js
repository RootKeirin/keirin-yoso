/* ROOT競輪 共通スクリプト v1.1 */
'use strict';

const RK = {
  /* ───────── 車番カラー ───────── */
  bikeColors: {
    1: { bg: '#fff',    text: '#000', border: '#999' },
    2: { bg: '#111',    text: '#fff', border: '#111' },
    3: { bg: '#e53935', text: '#fff', border: '#e53935' },
    4: { bg: '#1565c0', text: '#fff', border: '#1565c0' },
    5: { bg: '#fdd835', text: '#000', border: '#f9a825' },
    6: { bg: '#2e7d32', text: '#fff', border: '#2e7d32' },
    7: { bg: '#f57c00', text: '#fff', border: '#f57c00' },
    8: { bg: '#ec407a', text: '#fff', border: '#ec407a' },
    9: { bg: '#b3e5fc', text: '#000', border: '#0288d1' },
  },

  /* ───────── 予想印スタイル ───────── */
  markStyles: {
    '◎': { color: '#e53935', label: '本命' },
    '○': { color: '#1565c0', label: '対抗' },
    '▲': { color: '#2e7d32', label: '単穴' },
    '△': { color: '#777',    label: '連下' },
    '✕': { color: '#bbb',    label: '印'   },
    '':  { color: '#ddd',    label: ''      },
  },

  /* ───────── デフォルトデータ ───────── */
  defaultData: {
    nextRaces: [
      { id: 'matsudo_10R', venue: '松戸', raceNum: 10, grade: 'S級', category: '予選', deadline: '03:20' },
      { id: 'kokura_8R',   venue: '小倉', raceNum: 8,  grade: 'F1',  category: '準決勝', deadline: '15:45' }
    ],
    venues: [
      { id: 'hiratsuka', name: '平塚', grade: 'F2', event: 'モーニング', status: '開催中' },
      { id: 'toride',    name: '取手', grade: 'G3', event: '水戸黄門賞', status: '開催中' },
      { id: 'ogaki',     name: '大垣', grade: 'F1', event: 'ナイター',   status: '開催中' }
    ],
    races: {
      matsudo_10R: {
        venue: '松戸', raceNum: 10, grade: 'S級', category: '予選',
        deadline: '03:20', distance: '2000m',
        /* ── ライン予想 ── */
        linePrediction: {
          groups: [[1, 2], [5, 8, 6], [3, 7, 4, 9]],
          comment: '関東ラインの田中-佐藤が主力。茨城・東京連合の渡辺-中村-山田が続く。千葉・埼玉勢は分断ぎみ。'
        },
        /* ── 出走表（予想印・競走得点・ROOT独自点数追加）── */
        riders: [
          { num:1, name:'田中 達也', pref:'東京',   rank:'S1', style:'逃げ', age:34, weight:72, kiki:'111期', results:'1-2-1-3-1', mark:'○',  score:112.5, rootScore:82 },
          { num:2, name:'佐藤 健一', pref:'神奈川', rank:'S1', style:'先行', age:28, weight:70, kiki:'118期', results:'2-1-3-1-2', mark:'◎',  score:118.3, rootScore:91 },
          { num:3, name:'鈴木 雄大', pref:'千葉',   rank:'S2', style:'追込', age:31, weight:74, kiki:'113期', results:'3-4-2-2-3', mark:'△',  score: 98.7, rootScore:68 },
          { num:4, name:'高橋 正樹', pref:'埼玉',   rank:'A1', style:'捲り', age:26, weight:68, kiki:'122期', results:'1-3-4-5-2', mark:'✕',  score: 89.2, rootScore:55 },
          { num:5, name:'渡辺 翔',   pref:'茨城',   rank:'S2', style:'先行', age:29, weight:71, kiki:'116期', results:'2-2-1-4-3', mark:'▲',  score:104.1, rootScore:74 },
          { num:6, name:'山田 拓也', pref:'栃木',   rank:'A1', style:'逃げ', age:33, weight:73, kiki:'112期', results:'4-1-5-2-4', mark:'✕',  score: 92.8, rootScore:61 },
          { num:7, name:'伊藤 慶太', pref:'群馬',   rank:'A1', style:'追込', age:27, weight:69, kiki:'120期', results:'3-5-3-1-5', mark:'△',  score: 88.6, rootScore:52 },
          { num:8, name:'中村 浩二', pref:'東京',   rank:'S1', style:'先行', age:30, weight:75, kiki:'115期', results:'1-1-2-3-2', mark:'▲',  score:115.9, rootScore:85 },
          { num:9, name:'小林 義明', pref:'千葉',   rank:'A1', style:'捲り', age:35, weight:72, kiki:'109期', results:'5-3-4-4-4', mark:'✕',  score: 86.3, rootScore:49 }
        ],
        freePrediction: '展開予想：田中(①)が主導権を握り、佐藤(②)が番手につく本線展開が濃厚。中村(⑧)が3番手を確保し、中団から渡辺(⑤)が捲りを狙う。直線では鈴木(③)と伊藤(⑦)の追込み勢が浮上してくる可能性が高い。地元・千葉勢の鈴木と小林の連携にも注目。',
        aiProPrediction: '【PRO AI 詳細分析レポート】\n\n■ 展開シミュレーション（信頼度92%）\n田中選手の先行率は直近10走で87.5%。松戸バンクの200mを1コーナー付近で主導権確立するパターンが最多。佐藤選手のバック直線最高速度は本場直近3走で計測値トップ3入りしており、田中選手のブロックが外れた際の爆発的末脚が武器。\n\n■ AIモデル推奨買い目\n【本命】連単：②-①　単勝：②\n【対抗】3連単：②-①-⑧\n【穴】3連単：②-⑧-① / ⑤-①-⑧\n\n■ オッズ妙味分析\n②の単勝オッズが3.2倍と過小評価されており、期待値プラスの買い目。',
        tactics: { lead: [1, 2], midField: [5, 8, 6], chase: [3, 7, 4, 9] },
        userPredictions: [
          {
            id: 'up_m1', userName: '競輪匠', handle: '@keirin_takumi',
            grade: 'S級 PRO USER', winRate: 68.2, postCount: 412,
            avatarLetter: '匠', avatarColor: '#0047AB',
            teaser: '田中の番手に佐藤が入る形で確定的。中村が3番手...',
            text: '田中の番手に佐藤が入る形で確定的。中村が3番手に入ってから後方は混戦。渡辺の捲りが届くかどうかがカギ。直線は鈴木の追込みに期待。番手の佐藤が末脚を温存できれば直線でスパートが炸裂する展開。',
            picks: '② - ① - ⑧', likes: 34, pointPrice: 200
          },
          {
            id: 'up_m2', userName: '鉄壁の番手師', handle: '@banteishi_pro',
            grade: 'A級 PRO USER', winRate: 61.8, postCount: 288,
            avatarLetter: '番', avatarColor: '#e53935',
            teaser: '松戸は関東ラインが鍵。田中①の主導権確立が...',
            text: '松戸は関東ラインが鍵。田中①の主導権確立が最重要ポイント。ライン外の中村⑧が前受けから下げるパターンになれば後方勢が有利。渡辺⑤の捲りタイミングに注目しつつ、基本は②軸の連単2点勝負。',
            picks: '② - ① - ⑧', likes: 21, pointPrice: 150
          },
          {
            id: 'up_m3', userName: '麗奈の穴予想', handle: '@reina_ana_keirin',
            grade: 'S級 PRO USER', winRate: 61.5, postCount: 291,
            avatarLetter: '麗', avatarColor: '#2e7d32',
            teaser: '今節の渡辺⑤は捲りタイミングが絶好調...',
            text: '今節の渡辺⑤は捲りタイミングが絶好調。田中の逃げペースが落ちる残り400m地点での仕掛けが的中パターン。過去3走のデータからも⑤の捲り成功率が高く、高配当を狙うなら⑤軸3連単が期待値最大。',
            picks: '⑤ - ① - ③', likes: 57, pointPrice: 100
          }
        ]
      },
      kokura_8R: {
        venue: '小倉', raceNum: 8, grade: 'F1', category: '準決勝',
        deadline: '15:45', distance: '1800m',
        linePrediction: {
          groups: [[1, 2], [4, 7], [3, 5, 6]],
          comment: '松本-上田の地元九州ラインが中心。加藤-清水の熊本・鹿児島ラインが捲り勝負。木村-山口-橋本が追込み展開。'
        },
        riders: [
          { num:1, name:'松本 浩樹', pref:'福岡',   rank:'A1', style:'逃げ', age:29, weight:70, kiki:'117期', results:'1-1-2-1-3', mark:'◎',  score:108.4, rootScore:83 },
          { num:2, name:'上田 義文', pref:'佐賀',   rank:'A1', style:'先行', age:32, weight:73, kiki:'110期', results:'2-3-1-2-1', mark:'○',  score:102.7, rootScore:76 },
          { num:3, name:'木村 洋介', pref:'長崎',   rank:'A2', style:'追込', age:35, weight:76, kiki:'107期', results:'4-2-3-3-4', mark:'△',  score: 88.1, rootScore:58 },
          { num:4, name:'加藤 亮',   pref:'熊本',   rank:'A1', style:'捲り', age:27, weight:68, kiki:'121期', results:'2-1-4-5-2', mark:'▲',  score: 95.3, rootScore:71 },
          { num:5, name:'山口 聡',   pref:'大分',   rank:'A2', style:'先行', age:31, weight:71, kiki:'114期', results:'3-4-2-4-3', mark:'✕',  score: 82.9, rootScore:54 },
          { num:6, name:'橋本 武',   pref:'宮崎',   rank:'A1', style:'追込', age:33, weight:74, kiki:'112期', results:'5-2-5-2-5', mark:'△',  score: 84.6, rootScore:57 },
          { num:7, name:'清水 勇気', pref:'鹿児島', rank:'A2', style:'捲り', age:26, weight:69, kiki:'123期', results:'3-5-3-1-2', mark:'▲',  score: 91.2, rootScore:66 }
        ],
        freePrediction: '地元・松本(①)の逃げ切りが本命。上田(②)が番手を固め、後方から加藤(④)が捲りを仕掛けるかがカギ。清水(⑦)の若手パワーが入れば荒れる可能性も。',
        aiProPrediction: '【PRO AI 詳細分析レポート】\n\n■ 展開シミュレーション（信頼度87%）\n松本選手は小倉コースでの直近10走で6勝を記録。地元有利に加えてスタート反応速度が今節参加選手中トップ。加藤選手の捲り発動タイミングは残り300m地点が最多（全体の73%）。\n\n■ AIモデル推奨買い目\n【本命】連単：①-②　単勝：①\n【対抗】3連単：①-②-④\n【穴】3連単：④-①-② / ①-④-⑦\n\n■ オッズ妙味分析\n①の単勝オッズ2.8倍は若干低いが期待値は十分。3連単の④絡みが高配当狙いに最適。',
        tactics: { lead: [1, 2], midField: [5, 4], chase: [3, 6, 7] },
        userPredictions: [
          {
            id: 'up_k1', userName: '九州の鉄人', handle: '@kyushu_tetsujin',
            grade: 'A級 PRO USER', winRate: 59.3, postCount: 203,
            avatarLetter: '鉄', avatarColor: '#f57c00',
            teaser: '松本①は小倉では負けない。上田②が番手を...',
            text: '松本①は小倉では負けない。上田②が番手をしっかり守れば①②のワンツーはほぼ確定。加藤④の捲りは直線手前で失速するパターンが多く届かない可能性大。安全策で①②⑦の3連単2点買い。',
            picks: '① - ② - ⑦', likes: 28, pointPrice: 100
          },
          {
            id: 'up_k2', userName: 'データ博士', handle: '@data_hakase',
            grade: 'S級 PRO USER', winRate: 72.1, postCount: 534,
            avatarLetter: '博', avatarColor: '#6a1b9a',
            teaser: '過去10走のデータを見ると松本①の小倉コース...',
            text: '過去10走のデータを見ると松本①の小倉コース成績は圧倒的（6勝2連対率90%）。加藤④の捲りは300m地点発動が多く、残り直線で①②に追いつく計算が成立する。3連単は①②④本命、①④②を対抗で勝負。',
            picks: '① - ② - ④', likes: 43, pointPrice: 200
          }
        ]
      }
    },
    proAiPredictions: [
      { id: 'ai_matsudo_10R', raceId: 'matsudo_10R', title: '松戸10R PRO AI予想', confidence: 92, picks: '②-①-⑧', summary: '佐藤の末脚炸裂。田中番手から逆転の本命予想。' },
      { id: 'ai_kokura_8R',  raceId: 'kokura_8R',  title: '小倉8R PRO AI予想',  confidence: 87, picks: '①-②-④', summary: '松本地元完全有利。加藤の捲りが鍵を握る。' }
    ],
    notices: [
      {
        id: 'notice_001', type: 'broadcast', targetEmail: '',
        title: 'ROOT競輪へようこそ！',
        body: 'ROOT競輪をご利用いただきありがとうございます。PRO AI予想・PRO USER予想など豊富なコンテンツをお楽しみください。ご不明な点はお問い合わせフォームよりお気軽にご連絡ください。',
        date: '2026-02-23', readBy: []
      }
    ],
    challenge7: []
  },

  /* ───────── Firebase キャッシュ ───────── */
  _cache: { data: null, allUsers: null, bbs: {}, dynamicPromos: null },

  /* Firebase または localStorage から全共有データを読み込む（ページ初期化時に await で呼ぶ） */
  async init() {
    if (window._fbDb) {
      try {
        const [dataSnap, usersSnap, promosSnap] = await Promise.all([
          window._fbDb.ref('rk_data').once('value'),
          window._fbDb.ref('rk_all_users').once('value'),
          window._fbDb.ref('rk_dynamic_promos').once('value'),
        ]);
        this._cache.data         = dataSnap.val()   || this._makeDefaultData();
        this._cache.allUsers     = usersSnap.val()  || {};
        this._cache.dynamicPromos = promosSnap.val() || [];
        /* localStorageにもキャッシュ（オフライン時フォールバック用） */
        localStorage.setItem('rk_data',          JSON.stringify(this._cache.data));
        localStorage.setItem('rk_all_users',     JSON.stringify(this._cache.allUsers));
        localStorage.setItem('rk_dynamic_promos',JSON.stringify(this._cache.dynamicPromos));
      } catch(e) {
        console.warn('Firebase読込失敗。localStorageにフォールバック:', e);
        this._loadCacheFromLS();
      }
    } else {
      this._loadCacheFromLS();
    }
  },
  _loadCacheFromLS() {
    const s = localStorage.getItem('rk_data');
    this._cache.data          = s ? JSON.parse(s) : this._makeDefaultData();
    this._cache.allUsers      = JSON.parse(localStorage.getItem('rk_all_users')      || '{}');
    this._cache.dynamicPromos = JSON.parse(localStorage.getItem('rk_dynamic_promos') || '[]');
  },
  _makeDefaultData() {
    const d = JSON.parse(JSON.stringify(this.defaultData));
    localStorage.setItem('rk_data', JSON.stringify(d));
    return d;
  },

  /* Firebase への非同期書き込み（fire-and-forget） */
  _fbSet(path, value) {
    if (window._fbDb) {
      window._fbDb.ref(path).set(value).catch(e => console.warn('Firebase書込失敗:', path, e));
    }
  },

  /* ───────── データ操作 ───────── */
  getData() {
    if (this._cache.data) return this._cache.data;
    /* init()前に呼ばれた場合はlocalStorageから */
    try {
      const s = localStorage.getItem('rk_data');
      this._cache.data = s ? JSON.parse(s) : this._makeDefaultData();
      return this._cache.data;
    } catch { this._cache.data = this._makeDefaultData(); return this._cache.data; }
  },
  _initData() {
    this._cache.data = JSON.parse(JSON.stringify(this.defaultData));
    this.saveData(this._cache.data);
    return this._cache.data;
  },
  saveData(data) {
    this._cache.data = data;
    localStorage.setItem('rk_data', JSON.stringify(data));
    this._fbSet('rk_data', data);
  },

  /* ───────── 全ユーザー台帳 ───────── */
  getAllUsers() {
    if (this._cache.allUsers) return this._cache.allUsers;
    this._cache.allUsers = JSON.parse(localStorage.getItem('rk_all_users') || '{}');
    return this._cache.allUsers;
  },
  saveAllUsers(obj) {
    this._cache.allUsers = obj;
    localStorage.setItem('rk_all_users', JSON.stringify(obj));
    this._fbSet('rk_all_users', obj);
  },

  /* ───────── 掲示板メッセージ ───────── */
  getBBSMessages(raceId) {
    if (this._cache.bbs[raceId]) return this._cache.bbs[raceId];
    const s = localStorage.getItem('rk_bbs_' + raceId);
    this._cache.bbs[raceId] = s ? JSON.parse(s) : [];
    return this._cache.bbs[raceId];
  },
  saveBBSMessages(raceId, msgs) {
    this._cache.bbs[raceId] = msgs;
    localStorage.setItem('rk_bbs_' + raceId, JSON.stringify(msgs));
    this._fbSet('rk_bbs/' + raceId, msgs);
  },
  async loadBBSMessages(raceId) {
    if (window._fbDb) {
      try {
        const snap = await window._fbDb.ref('rk_bbs/' + raceId).once('value');
        const msgs = snap.val() || [];
        this._cache.bbs[raceId] = msgs;
        localStorage.setItem('rk_bbs_' + raceId, JSON.stringify(msgs));
        return msgs;
      } catch(e) {
        console.warn('BBS Firebase読込失敗:', e);
      }
    }
    return this.getBBSMessages(raceId);
  },
  deleteBBSMessages(raceId) {
    delete this._cache.bbs[raceId];
    localStorage.removeItem('rk_bbs_' + raceId);
    if (window._fbDb) window._fbDb.ref('rk_bbs/' + raceId).remove().catch(()=>{});
  },
  async getAllBBSFromFirebase() {
    if (!window._fbDb) return {};
    try {
      const snap = await window._fbDb.ref('rk_bbs').once('value');
      return snap.val() || {};
    } catch { return {}; }
  },

  /* ───────── ユーザー認証 ───────── */
  getUser() {
    try { return JSON.parse(localStorage.getItem('rk_user') || 'null'); } catch { return null; }
  },
  saveUser(u) { localStorage.setItem('rk_user', JSON.stringify(u)); },
  logout() { localStorage.removeItem('rk_user'); },
  isPremium() {
    this.checkPremiumExpiry();
    const u = this.getUser();
    return u && u.premium === true;
  },

  /* ───────── ROOT POINT / 購入管理 ───────── */

  /* 有効なグラントを返す（失効済みを自動除去・保存。旧 premiumGrants も移行） */
  _getValidGrants(u) {
    const now = Date.now();
    /* 旧フィールド(premiumGrants)を ptGrants に移行 */
    if (u.premiumGrants && !u.ptGrants) {
      u.ptGrants = u.premiumGrants.map(g => ({ ...g, type: 'premium_monthly' }));
      delete u.premiumGrants;
    }
    const orig  = u.ptGrants || [];
    const valid = orig.filter(g => g.expiresAt > now && g.remaining > 0);
    if (valid.length !== orig.length) {
      u.ptGrants = valid;
      this.saveUser(u);
    }
    return valid;
  },

  /* 失効予定ポイントを追加するヘルパー（3ヶ月失効） */
  _addExpiringPt(u, amount, type) {
    if (!u.ptGrants) u.ptGrants = [];
    /* 旧フィールドも移行 */
    if (u.premiumGrants) {
      u.ptGrants.push(...u.premiumGrants.map(g => ({ ...g, type: 'premium_monthly' })));
      delete u.premiumGrants;
    }
    const expiresAt = Date.now() + 90 * 86400000; /* 90日 ≒ 3ヶ月 */
    u.ptGrants.push({ amount, remaining: amount, grantedAt: Date.now(), expiresAt, type });
    this.saveUser(u);
  },

  /* グラント合計 */
  getPremiumGrantTotal() {
    const u = this.getUser();
    if (!u) return 0;
    return this._getValidGrants(u).reduce((s, g) => s + g.remaining, 0);
  },

  /* 通常pt + グラントの合計 */
  getPoints() {
    const u = this.getUser();
    if (!u) return 0;
    return (u.points || 0) + this.getPremiumGrantTotal();
  },

  /* 失効予定pt（expireDays日以内に失効するグラント残量の合計） */
  getExpiringPt(expireDays = 30) {
    const u = this.getUser();
    if (!u) return 0;
    const limit = Date.now() + expireDays * 86400000;
    return this._getValidGrants(u)
      .filter(g => g.expiresAt <= limit)
      .reduce((s, g) => s + g.remaining, 0);
  },

  /* 最も早く失効するグラントの日時（Dateオブジェクト or null） */
  getEarliestGrantExpiry() {
    const u = this.getUser();
    if (!u) return null;
    const grants = this._getValidGrants(u);
    if (grants.length === 0) return null;
    const minTs = Math.min(...grants.map(g => g.expiresAt));
    return new Date(minTs);
  },

  /* PREMIUM月次ptを付与（1ヶ月に1回、3ヶ月失効） */
  checkPremiumMonthlyGrant() {
    const u = this.getUser();
    if (!u || !u.premium) return 0;
    const now = new Date();
    const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    if ((u.lastPremiumGrantMonth || '') === monthKey) return 0;
    this._addExpiringPt(u, 1000, 'premium_monthly');
    u.lastPremiumGrantMonth = monthKey;
    this.saveUser(u);
    return 1000;
  },

  /* 購入済み予想IDセット（ユーザーごとに分離） */
  _purchasedKey() {
    const u = this.getUser();
    return u ? 'rk_purchased_' + u.email : 'rk_purchased_guest';
  },
  getPurchasedSet() {
    try { return new Set(JSON.parse(localStorage.getItem(this._purchasedKey()) || '[]')); }
    catch { return new Set(); }
  },
  isPurchased(predId) {
    return this.getPurchasedSet().has(predId);
  },
  /* 購入処理: 成功→'ok', ログイン未→'no_login', ポイント不足→'no_points' */
  /* ── PRO USER 還元率テーブル ── */
  PU_REVENUE_RATES: {
    /* 有償ポイント（有効期限なし）への還元率 */
    paid: { 'S級 PRO USER': 0.90, 'A級 PRO USER': 0.85, 'B級 PRO USER': 0.80, '新人 PRO USER': 0.70 },
    /* 配布ポイント（有効期限あり）への還元率 */
    grant: { 'S級 PRO USER': 0.60, 'A級 PRO USER': 0.55, 'B級 PRO USER': 0.50, '新人 PRO USER': 0.40 },
  },
  calcRevenuePt(grade, paidPt, grantPt) {
    const pr = this.PU_REVENUE_RATES;
    const paidRate  = pr.paid[grade]  ?? 0.70;
    const grantRate = pr.grant[grade] ?? 0.40;
    return Math.floor(paidPt * paidRate + grantPt * grantRate);
  },

  purchasePred(predId, cost) {
    const u = this.getUser();
    if (!u) return { status: 'no_login' };
    /* 有効グラントを失効日が早い順に並べて先に消費 */
    const grants = this._getValidGrants(u).sort((a, b) => a.expiresAt - b.expiresAt);
    const grantTotal = grants.reduce((s, g) => s + g.remaining, 0);
    if ((u.points || 0) + grantTotal < cost) return { status: 'no_points' };
    let remain = cost;
    let grantUsed = 0;
    for (const g of grants) {
      if (remain <= 0) break;
      const consume = Math.min(g.remaining, remain);
      g.remaining -= consume;
      grantUsed   += consume;
      remain      -= consume;
    }
    const paidUsed = remain; /* グラントで賄えなかった分 = 有償ptから */
    u.ptGrants = grants.filter(g => g.remaining > 0);
    u.points = (u.points || 0) - paidUsed;
    this.saveUser(u);
    const set = this.getPurchasedSet();
    set.add(predId);
    localStorage.setItem(this._purchasedKey(), JSON.stringify([...set]));
    return { status: 'ok', paidPt: paidUsed, grantPt: grantUsed };
  },

  /* ── PRO USER 売上ログ ── */
  getPuSaleLog() {
    try { return JSON.parse(localStorage.getItem('rk_pu_sale_log') || '[]'); }
    catch { return []; }
  },
  logPuSale(raceId, predId, cost, paidPt, grantPt) {
    const data = this.getData();
    const pred = (data.races?.[raceId]?.userPredictions || []).find(p => p.id === predId);
    if (!pred) return;
    const u     = this.getUser();
    const grade = pred.grade || '新人 PRO USER';
    const revenuePt = this.calcRevenuePt(grade, paidPt ?? cost, grantPt ?? 0);
    const log = this.getPuSaleLog();
    log.push({
      predId,
      puId:      pred.proUserId || null,
      handle:    pred.handle    || null,
      grade,
      email:     u?.email       || 'unknown',
      pt:        cost,
      paidPt:    paidPt  ?? cost,
      grantPt:   grantPt ?? 0,
      revenuePt,
      ts:        new Date().toISOString()
    });
    if (log.length > 10000) log.splice(0, log.length - 10000);
    localStorage.setItem('rk_pu_sale_log', JSON.stringify(log));
  },
  calcMonthSales(puId, handle) {
    const now = new Date();
    const ym  = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
    return this.getPuSaleLog()
      .filter(e => e.ts.startsWith(ym) && (e.puId === puId || e.handle === handle))
      .reduce((sum, e) => sum + (e.pt || 0), 0);
  },
  calcTotalSales(puId, handle) {
    return this.getPuSaleLog()
      .filter(e => e.puId === puId || e.handle === handle)
      .reduce((sum, e) => sum + (e.pt || 0), 0);
  },
  calcMonthRevenue(puId, handle) {
    const now = new Date();
    const ym  = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
    return this.getPuSaleLog()
      .filter(e => e.ts.startsWith(ym) && (e.puId === puId || e.handle === handle))
      .reduce((sum, e) => sum + (e.revenuePt || 0), 0);
  },
  calcTotalRevenue(puId, handle) {
    return this.getPuSaleLog()
      .filter(e => e.puId === puId || e.handle === handle)
      .reduce((sum, e) => sum + (e.revenuePt || 0), 0);
  },

  /* ── 出金申請 ── */
  getWithdrawalRequests() {
    try { return JSON.parse(localStorage.getItem('rk_withdrawal_reqs') || '[]'); }
    catch { return []; }
  },
  saveWithdrawalRequests(list) {
    localStorage.setItem('rk_withdrawal_reqs', JSON.stringify(list));
  },
  addWithdrawalRequest(req) {
    const list = this.getWithdrawalRequests();
    list.push(req);
    this.saveWithdrawalRequests(list);
  },
  updateWithdrawalStatus(id, status, adminNote) {
    const list = this.getWithdrawalRequests();
    const idx  = list.findIndex(r => r.id === id);
    if (idx === -1) return;
    list[idx].status      = status;
    list[idx].processedTs = new Date().toISOString();
    if (adminNote !== undefined) list[idx].adminNote = adminNote;
    this.saveWithdrawalRequests(list);
  },

  /* ───────── 管理者認証 ───────── */
  async hashPassword(pw) {
    /* シンプルな同期ハッシュ（全環境対応） */
    let h = 5381;
    for (let i = 0; i < pw.length; i++) {
      h = ((h << 5) + h) ^ (pw.charCodeAt(i) & 0xff);
      h = h >>> 0;
    }
    return 'fbk_' + h.toString(16).padStart(8, '0') + '_' + pw.length.toString(16);
  },
  isAdminLoggedIn() {
    const t = sessionStorage.getItem('rk_adminToken');
    return t && t === localStorage.getItem('rk_adminToken');
  },
  async adminLogin(password) {
    const hash = await this.hashPassword(password);
    let stored = localStorage.getItem('rk_adminHash');
    /* 保存済みハッシュがない、または環境が変わってアルゴリズム不一致の場合は再設定 */
    if (!stored) {
      stored = await this.hashPassword('RootAdmin2026!');
      localStorage.setItem('rk_adminHash', stored);
    } else if (stored.startsWith('fbk_') !== hash.startsWith('fbk_')) {
      /* HTTP ↔ HTTPS 切替によるアルゴリズム不一致 → ハッシュをリセットして再計算 */
      stored = await this.hashPassword('RootAdmin2026!');
      localStorage.setItem('rk_adminHash', stored);
    }
    if (hash !== stored) return false;
    const token = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,'0')).join('');
    sessionStorage.setItem('rk_adminToken', token);
    localStorage.setItem('rk_adminToken', token);
    return true;
  },
  /* パスワード検証のみ（セッション設定なし） */
  async verifyAdminPassword(password) {
    const hash = await this.hashPassword(password);
    let stored = localStorage.getItem('rk_adminHash');
    if (!stored) {
      stored = await this.hashPassword('RootAdmin2026!');
      localStorage.setItem('rk_adminHash', stored);
    } else if (stored.startsWith('fbk_') !== hash.startsWith('fbk_')) {
      stored = await this.hashPassword('RootAdmin2026!');
      localStorage.setItem('rk_adminHash', stored);
    }
    return hash === stored;
  },
  /* TOTP検証後にセッションを設定 */
  setAdminSession() {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,'0')).join('');
    sessionStorage.setItem('rk_adminToken', token);
    localStorage.setItem('rk_adminToken', token);
  },
  /* TOTP シークレット生成（Base32 20バイト） */
  generateTOTPSecret() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const bytes = crypto.getRandomValues(new Uint8Array(20));
    let result = '', bits = 0, val = 0;
    for (const b of bytes) {
      val = (val << 8) | b; bits += 8;
      while (bits >= 5) { result += chars[(val >>> (bits - 5)) & 31]; bits -= 5; }
    }
    if (bits > 0) result += chars[(val << (5 - bits)) & 31];
    return result;
  },
  adminLogout() {
    sessionStorage.removeItem('rk_adminToken');
    localStorage.removeItem('rk_adminToken');
  },

  /* ───────── サブ管理者認証 ───────── */
  isSubAdminLoggedIn() {
    const t = sessionStorage.getItem('rk_subAdminToken');
    return !!(t && t === localStorage.getItem('rk_subAdminToken'));
  },
  async subAdminLogin(password) {
    const hash = await this.hashPassword(password);
    let stored = localStorage.getItem('rk_subAdminHash');
    if (!stored) {
      stored = await this.hashPassword('SubAdmin2026!');
      localStorage.setItem('rk_subAdminHash', stored);
    } else if (stored.startsWith('fbk_') !== hash.startsWith('fbk_')) {
      stored = await this.hashPassword('SubAdmin2026!');
      localStorage.setItem('rk_subAdminHash', stored);
    }
    if (hash !== stored) return false;
    const token = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,'0')).join('');
    sessionStorage.setItem('rk_subAdminToken', token);
    localStorage.setItem('rk_subAdminToken', token);
    return true;
  },
  subAdminLogout() {
    sessionStorage.removeItem('rk_subAdminToken');
    localStorage.removeItem('rk_subAdminToken');
  },
  /* 'main' | 'sub' | null */
  getAdminRole() {
    if (this.isAdminLoggedIn()) return 'main';
    if (this.isSubAdminLoggedIn()) return 'sub';
    return null;
  },

  /* ───────── PRO USER ───────── */
  getRKProUsers() {
    return JSON.parse(localStorage.getItem('rk_prousers') || '[]');
  },
  saveRKProUsers(list) {
    localStorage.setItem('rk_prousers', JSON.stringify(list));
  },
  async proUserLogin(handle, password) {
    const list = this.getRKProUsers();
    const u = list.find(p => p.handle === handle);
    if (!u || !u.passwordHash) return false;
    const hash = await this.hashPassword(password);
    if (hash !== u.passwordHash) return false;
    const token = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,'0')).join('');
    sessionStorage.setItem('rk_puToken', token);
    sessionStorage.setItem('rk_puId', u.id);
    localStorage.setItem('rk_puToken_' + u.id, token);
    return true;
  },
  isProUserLoggedIn() {
    const token = sessionStorage.getItem('rk_puToken');
    const id    = sessionStorage.getItem('rk_puId');
    if (!token || !id) return false;
    return token === localStorage.getItem('rk_puToken_' + id);
  },
  getLoggedInProUser() {
    if (!this.isProUserLoggedIn()) return null;
    const id = sessionStorage.getItem('rk_puId');
    return this.getRKProUsers().find(p => p.id === id) || null;
  },
  proUserLogout() {
    const id = sessionStorage.getItem('rk_puId');
    if (id) localStorage.removeItem('rk_puToken_' + id);
    sessionStorage.removeItem('rk_puToken');
    sessionStorage.removeItem('rk_puId');
  },

  /* ───────── プロモーションコード ───────── */
  PROMO_CODES: {
    'KanaiTHX': { days: 3, label: '3日間PREMIUM無料' }
  },
  getDynamicPromoCodes() {
    if (this._cache.dynamicPromos) return this._cache.dynamicPromos;
    this._cache.dynamicPromos = JSON.parse(localStorage.getItem('rk_dynamic_promos') || '[]');
    return this._cache.dynamicPromos;
  },
  saveDynamicPromoCodes(list) {
    this._cache.dynamicPromos = list;
    localStorage.setItem('rk_dynamic_promos', JSON.stringify(list));
    this._fbSet('rk_dynamic_promos', list);
  },
  /* 期限切れチェック（isPremium から自動呼び出し） */
  checkPremiumExpiry() {
    const u = this.getUser();
    if (!u || !u.premiumExpires) return;
    if (Date.now() > u.premiumExpires) {
      /* 期限切れ: PayPalサブスクがなければpremiumをOFF */
      if (!u.premiumSubId) {
        u.premium = false;
        delete u.premiumExpires;
        this.saveUser(u);
      }
    } else {
      /* 有効期限内: premiumをONに保つ */
      if (!u.premium) { u.premium = true; this.saveUser(u); }
    }
  },
  /* プロモーションコードを適用 */
  applyPromoCode(code) {
    const u = this.getUser();
    if (!u) return { ok: false, msg: 'ログインが必要です' };
    if (!u.emailVerified) return { ok: false, msg: 'メール認証が完了していません。登録メールのリンクをクリックして本登録を完了してください。' };
    const codeUpper = code.toUpperCase();

    /* ── ダイナミックコードを優先チェック ── */
    const dynList = this.getDynamicPromoCodes();
    const dynIdx  = dynList.findIndex(d => d.code === codeUpper);
    if (dynIdx !== -1) {
      const dyn = dynList[dynIdx];
      if (!dyn.active) return { ok: false, msg: 'このコードは無効です' };
      if (dyn.maxUses > 0 && dyn.usedEmails.length >= dyn.maxUses)
        return { ok: false, msg: 'このコードの使用上限に達しています' };
      if (dyn.usedEmails.includes(u.email))
        return { ok: false, msg: 'このコードは既に使用済みです' };

      if (dyn.type === 'premium_days') {
        const now = Date.now();
        const base = (u.premiumExpires && u.premiumExpires > now) ? u.premiumExpires : now;
        u.premiumExpires = base + dyn.value * 24 * 60 * 60 * 1000;
        u.premium = true;
        this.saveUser(u);
      } else if (dyn.type === 'add_points') {
        this._addExpiringPt(u, dyn.value, 'promo');
      }
      dyn.usedEmails.push(u.email);
      dynList[dynIdx] = dyn;
      this.saveDynamicPromoCodes(dynList);
      return { ok: true, label: dyn.label };
    }

    /* ── ハードコードされたコードにフォールバック ── */
    const promo = this.PROMO_CODES[code] || this.PROMO_CODES[codeUpper];
    if (!promo) return { ok: false, msg: 'プロモーションコードが無効です' };
    /* 使用済みチェック（同メールアドレスで1回限り） */
    const usedKey = 'rk_promo_' + codeUpper;
    const usedBy = JSON.parse(localStorage.getItem(usedKey) || '[]');
    if (usedBy.includes(u.email)) return { ok: false, msg: 'このコードは既に使用済みです' };
    /* 適用 */
    const now = Date.now();
    const base = (u.premiumExpires && u.premiumExpires > now) ? u.premiumExpires : now;
    u.premiumExpires = base + promo.days * 24 * 60 * 60 * 1000;
    u.premium = true;
    this.saveUser(u);
    usedBy.push(u.email);
    localStorage.setItem(usedKey, JSON.stringify(usedBy));
    return { ok: true, label: promo.label, expires: u.premiumExpires };
  },
  /* PREMIUM期限の残り時間を文字列で返す */
  getPremiumExpiresLabel() {
    const u = this.getUser();
    const expires = u ? (u.premiumExpires || 0) : 0;
    if (!expires || expires < Date.now()) return null;
    const diff = expires - Date.now();
    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    if (days > 0) return `あと${days}日${hours}時間`;
    return `あと${hours}時間`;
  },

  /* ───────── お知らせ管理 ───────── */
  getNotices() {
    const d = this.getData();
    return d.notices || [];
  },
  /* ユーザー宛のお知らせ（全体 + 個別）を返す */
  getNoticesForUser(email) {
    return this.getNotices().filter(n =>
      n.type === 'broadcast' || n.targetEmail === email
    ).sort((a, b) => b.date.localeCompare(a.date));
  },
  /* 既読IDセット（ユーザーオブジェクト内に保存） */
  _getReadIds() {
    const u = this.getUser();
    return u ? (u.readNoticeIds || []) : [];
  },
  isNoticeRead(noticeId) {
    return this._getReadIds().includes(noticeId);
  },
  /* 未読数 */
  getUnreadCount(email) {
    return this.getNoticesForUser(email).filter(n => !this.isNoticeRead(n.id)).length;
  },
  /* 既読にする（ユーザーオブジェクト + グローバル readBy 両方に記録）
     戻り値: 初回既読で付与したpt数（0なら付与なし） */
  markNoticeRead(noticeId) {
    const u = this.getUser();
    if (!u) return 0;
    if (!u.readNoticeIds) u.readNoticeIds = [];
    let awardedPt = 0;
    const isFirst = !u.readNoticeIds.includes(noticeId);
    if (isFirst) {
      u.readNoticeIds.push(noticeId);
      /* giftPt が設定されていれば付与 */
      const notice = this.getNotices().find(n => n.id === noticeId);
      if (notice && notice.giftPt > 0) {
        this._addExpiringPt(u, notice.giftPt, 'notice');
        awardedPt = notice.giftPt;
      }
      this.saveUser(u);
    }
    /* グローバル側（管理画面の既読数カウント用） */
    const d = this.getData();
    const n = (d.notices || []).find(x => x.id === noticeId);
    if (n && !n.readBy.includes(u.email)) {
      n.readBy.push(u.email);
      this.saveData(d);
    }
    return awardedPt;
  },
  /* 管理者: お知らせ追加 */
  addNotice(notice) {
    const d = this.getData();
    if (!d.notices) d.notices = [];
    notice.id = 'notice_' + Date.now();
    notice.readBy = [];
    d.notices.unshift(notice);
    this.saveData(d);
    return notice.id;
  },
  /* 管理者: お知らせ削除 */
  deleteNotice(id) {
    const d = this.getData();
    d.notices = (d.notices || []).filter(n => n.id !== id);
    this.saveData(d);
  },

  /* ───────── スケジュールタスク ───────── */
  getScheduledTasks() {
    try { return JSON.parse(localStorage.getItem('rk_scheduled') || '[]'); } catch { return []; }
  },
  saveScheduledTasks(tasks) {
    localStorage.setItem('rk_scheduled', JSON.stringify(tasks));
  },
  addScheduledTask(task) {
    const tasks = this.getScheduledTasks();
    task.id        = 'sched_' + Date.now();
    task.createdAt = new Date().toISOString().slice(0, 16);
    task.status    = 'pending';
    tasks.push(task);
    this.saveScheduledTasks(tasks);
    return task.id;
  },
  deleteScheduledTask(id) {
    this.saveScheduledTasks(this.getScheduledTasks().filter(t => t.id !== id));
  },
  /* 期限到来タスクを実行（各ページの renderHeader から自動呼び出し） */
  processScheduledTasks() {
    const tasks = this.getScheduledTasks();
    const now   = Date.now();
    let changed = false;
    const d = this.getData();
    if (!d.nextRaces) d.nextRaces = [];
    tasks.forEach(t => {
      if (t.status !== 'pending') return;
      if (new Date(t.executeAt).getTime() > now) return;
      if (t.type === 'add_next_race') {
        d.nextRaces.push(t.data);
        t.status = 'executed';
        changed  = true;
      } else if (t.type === 'delete_next_race') {
        const idx = d.nextRaces.findIndex(r =>
          r.id === t.targetId && r.venue === t.targetVenue
        );
        if (idx !== -1) {
          const raceId = d.nextRaces[idx].id;
          d.nextRaces.splice(idx, 1);
          /* 紐付けデータを全削除 */
          if (raceId && d.races) {
            delete d.races[raceId];
            this.deleteBBSMessages(raceId);
            Object.keys(localStorage)
              .filter(k => k.startsWith('rk_bbs_' + raceId + '_last_'))
              .forEach(k => localStorage.removeItem(k));
          }
        }
        t.status = 'executed';
        changed  = true;
      }
    });
    if (changed) {
      this.saveData(d);
      this.saveScheduledTasks(tasks);
    }
  },

  /* ───────── 実力7チャレンジ ───────── */
  getChallenge7() {
    const d = this.getData();
    return d.challenge7 || [];
  },
  getActiveChallenge7() {
    return this.getChallenge7().find(c => c.status === 'open') || null;
  },
  submitChallenge7Entry(challengeId, predictions) {
    const u = this.getUser();
    if (!u) return { ok: false, msg: 'ログインが必要です' };
    if (!u.emailVerified) return { ok: false, msg: 'メール認証が完了していません。登録メールのURLをクリックして本登録を完了してください' };
    const d = this.getData();
    if (!d.challenge7) return { ok: false, msg: 'チャレンジが見つかりません' };
    const idx = d.challenge7.findIndex(x => x.id === challengeId);
    if (idx === -1) return { ok: false, msg: 'チャレンジが見つかりません' };
    const c = d.challenge7[idx];
    if (c.status !== 'open') return { ok: false, msg: '受付終了しています' };
    if (!predictions || predictions.length !== c.races.length) {
      return { ok: false, msg: 'すべてのレースの1着を選んでください' };
    }
    const today = new Date().toISOString().slice(0, 10);
    const myEntries = (c.entries || []).filter(e => e.email === u.email);
    const todayCount = myEntries.filter(e => (e.submittedAt || '').startsWith(today)).length;
    const isPremium = this.isPremium();
    if (isPremium) {
      if (myEntries.length >= 20) return { ok: false, msg: '予想の上限（20通り）に達しました' };
    } else {
      if (todayCount >= 1) return { ok: false, msg: '本日の予想は済んでいます（PREMIUMなら20通りまで可能）' };
    }
    if (!c.entries) c.entries = [];
    c.entries.push({
      email: u.email, name: u.name, predictions,
      submittedAt: new Date().toISOString().slice(0, 16),
      entryNum: myEntries.length + 1
    });
    d.challenge7[idx] = c;
    this.saveData(d);
    return { ok: true, entryNum: myEntries.length + 1 };
  },
  judgeChallenge7(challengeId, raceWinners) {
    const d = this.getData();
    if (!d.challenge7) return false;
    const idx = d.challenge7.findIndex(x => x.id === challengeId);
    if (idx === -1) return false;
    const c = d.challenge7[idx];
    c.races.forEach((r, i) => { r.winner = (raceWinners[i] !== undefined && raceWinners[i] !== '') ? parseInt(raceWinners[i]) : null; });
    const winEntries = (c.entries || []).filter(e =>
      Array.isArray(e.predictions) &&
      e.predictions.every((p, i) => p !== null && p !== '' && parseInt(p) === c.races[i].winner)
    );
    c.winners = [...new Set(winEntries.map(e => e.email))];
    c.prizePerWinner = c.winners.length > 0 ? Math.floor((c.prizePool || 0) / c.winners.length) : 0;
    c.status = 'judged';
    d.challenge7[idx] = c;
    this.saveData(d);
    return { winners: c.winners, prizePerWinner: c.prizePerWinner };
  },
  grantChallenge7Prizes(challengeId) {
    const d = this.getData();
    if (!d.challenge7) return false;
    const idx = d.challenge7.findIndex(x => x.id === challengeId);
    if (idx === -1) return false;
    const c = d.challenge7[idx];
    if (c.status !== 'judged' || c.prizeGranted) return false;
    const prizes = this.getPendingCh7Prizes();
    c.winners.forEach(email => {
      prizes[email] = (prizes[email] || 0) + c.prizePerWinner;
      this.addNotice({
        type: 'individual', targetEmail: email,
        title: `🏆 実力7チャレンジ当選！ +${c.prizePerWinner.toLocaleString()}pt`,
        body: `${c.title || '実力7チャレンジ'}で全問正解しました！\n賞金として ${c.prizePerWinner.toLocaleString()} ROOT POINTが付与されます。\n次回ログイン時に自動的に反映されます。`,
        date: new Date().toISOString().slice(0, 10)
      });
    });
    localStorage.setItem('rk_ch7_prizes', JSON.stringify(prizes));
    c.prizeGranted = true;
    d.challenge7[idx] = c;
    this.saveData(d);
    return c.winners.length;
  },
  getPendingCh7Prizes() {
    try { return JSON.parse(localStorage.getItem('rk_ch7_prizes') || '{}'); } catch { return {}; }
  },
  checkAndApplyCh7Prizes() {
    const u = this.getUser();
    if (!u || !u.email) return 0;
    const prizes = this.getPendingCh7Prizes();
    const amount = prizes[u.email] || 0;
    if (amount > 0) {
      this._addExpiringPt(u, amount, 'challenge7');
      delete prizes[u.email];
      localStorage.setItem('rk_ch7_prizes', JSON.stringify(prizes));
      setTimeout(() => {
        const t = document.createElement('div');
        t.textContent = `🏆 実力7チャレンジ当選！ +${amount.toLocaleString()} pt 獲得`;
        t.style.cssText = 'position:fixed;top:60px;left:50%;transform:translateX(-50%);background:#6a1b9a;color:#fff;padding:12px 20px;border-radius:10px;font-weight:bold;font-size:.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.35);text-align:center;pointer-events:none;';
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 4000);
      }, 600);
    }
    return amount;
  },

  /* ───────── お問い合わせ管理 ───────── */
  getContacts() {
    try { return JSON.parse(localStorage.getItem('rk_contacts') || '[]'); } catch { return []; }
  },
  addContact(contact) {
    const list = this.getContacts();
    contact.id = 'contact_' + Date.now();
    contact.date = new Date().toISOString().slice(0, 10);
    contact.status = 'pending';
    list.unshift(contact);
    localStorage.setItem('rk_contacts', JSON.stringify(list));
    return contact.id;
  },
  updateContactStatus(id, status) {
    const list = this.getContacts();
    const c = list.find(x => x.id === id);
    if (c) { c.status = status; localStorage.setItem('rk_contacts', JSON.stringify(list)); }
  },

  /* ───────── 時刻 ───────── */
  formatNow() {
    const n = new Date();
    return `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
  },
  startClock(elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    const tick = () => { el.textContent = this.formatNow(); };
    tick();
    setInterval(tick, 10000);
  },

  /* ───────── ヘッダー描画 ───────── */
  renderHeader() {
    this.processScheduledTasks(); /* 期限到来タスクを自動実行 */
    this.checkAndApplyCh7Prizes(); /* 実力7チャレンジ賞金の自動付与 */
    const user = this.getUser();
    let rightHtml = '';
    if (user) {
      rightHtml = `
        <div class="login-group">
          <span class="user-name-badge">${user.name}</span>
          ${user.premium ? '<span class="badge-premium-sm">PREMIUM</span>' : '<a href="premium.html" class="btn-login login-premium">PREMIUM</a>'}
        </div>`;
    } else {
      rightHtml = `
        <a href="register.html" class="btn-register">新規<br>登録</a>
        <div class="login-group">
          <a href="login.html?redirect=premium.html" class="btn-login login-premium">PREMIUM</a>
          <a href="login.html" class="btn-login login-normal">ログイン</a>
        </div>`;
    }
    const header = document.getElementById('site-header');
    if (header) {
      header.innerHTML = `
        <div class="header-left">
          <div class="time-label-group">
            <span class="time-label">現在時刻</span>
            <span class="current-time" id="time-val">--:--</span>
          </div>
          <button class="refresh-btn" onclick="location.reload();">↻</button>
        </div>
        <a href="index.html" class="site-title">ROOT競輪</a>
        <div class="header-right">${rightHtml}</div>`;
      this.startClock('time-val');
    }
  }
};

window.RK = RK;
