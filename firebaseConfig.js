// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAtClWBePxYwGKXpubhU5fQ_fG1-WLW0Rs",
    authDomain: "movie-list-88418.firebaseapp.com",
    projectId: "movie-list-88418",
    storageBucket: "movie-list-88418.appspot.com",
    messagingSenderId: "675828718961",
    appId: "1:675828718961:web:8764e2a72e9582e3886ad0",
    measurementId: "G-RH39RR3QP8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
