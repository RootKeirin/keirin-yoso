/* ── Firebase 設定 ── */
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDJi5lvinn7ew2uoreTJ5hQG1d3Sl9kHHY",
  authDomain:        "root-keirin.firebaseapp.com",
  databaseURL:       "https://root-keirin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "root-keirin",
  storageBucket:     "root-keirin.firebasestorage.app",
  messagingSenderId: "567680933943",
  appId:             "1:567680933943:web:fc678f3e26113aa6451fb2"
};

/* Firebase を初期化 */
if (typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    window._fbDb = firebase.database();
  } catch(e) {
    console.warn('Firebase初期化エラー:', e);
    window._fbDb = null;
  }
} else {
  window._fbDb = null;
}
