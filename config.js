
// ======================================
// JARVIS CONFIGURATION
// ======================================

// Firebase Configuration
// இவை browser-ல் இருப்பது இயல்பானது.
// Firebase Database Security Rules அவசியம்.

window.JARVIS_CONFIG = {
    firebase: {
        apiKey: "YOUR_FIREBASE_API_KEY",
        authDomain: "meadi-aqua-tech.firebaseapp.com",
        databaseURL: "https://meadi-aqua-tech-default-rtdb.firebaseio.com",
        projectId: "meadi-aqua-tech",
        storageBucket: "meadi-aqua-tech.firebasestorage.app",
        messagingSenderId: "531151217708",
        appId: "1:531151217708:web:b30b6e1a0bf7fa60f29d89",
        measurementId: "G-QW495L6JVE"
    },

    // Cloudflare Worker URL
    groqAPI: "https://YOUR-WORKER-NAME.YOUR-SUBDOMAIN.workers.dev"
};
