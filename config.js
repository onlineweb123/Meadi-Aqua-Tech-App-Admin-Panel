// ரகசிய சாவிகள் (Encoded)
const _0x1a2b = {
  fKey: "AIzaSyAqyyGJt_t0ztknMudFVLmo6relkEa284g",
  gKey: "Z3NrX1h1QzJwdVhzOTdjU0hQam5QQTJxV0dkeWIzRllnb09DWFZtQnJjMWpoV1VXZWg5VVFROVYY="
};

export const CONFIG = {
  firebaseConfig: {
    apiKey: _0x1a2b.fKey,
    authDomain: "meadi-aqua-tech.firebaseapp.com",
    databaseURL: "https://meadi-aqua-tech-default-rtdb.firebaseio.com",
    projectId: "meadi-aqua-tech",
    storageBucket: "meadi-aqua-tech.firebasestorage.app",
    messagingSenderId: "531151217708",
    appId: "1:531151217708:web:b30b6e1a0bf7fa60f29d89",
    measurementId: "G-QW495L6JVE"
  },
  groqKey: atob(_0x1a2b.gKey.slice(0, -1))
};
