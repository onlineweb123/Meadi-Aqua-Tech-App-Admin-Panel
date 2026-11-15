// ரகசிய சாவிகள் (Encoded)
const _0x1a2b = {
  fKey: "QUl6YVN5QXF5eUdKdF90MHp0a25NdWRGVkxtbzZyZWxrRWEyODRn",
  gKey: "Z3NrX1h1QzJwdVhzOTdjU0hQam5QQTJxV0dkeWIzRllnb09DWFZtQnJjMWpoV1VXZWg5VVFROVYY="
};

// கீகளை மீட்டெடுக்கும் பகுதி
export const CONFIG = {
  firebaseConfig: {
    apiKey: atob(_0x1a2b.fKey),
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
