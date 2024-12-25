import './App.css';
import HomePage from './pages/HomePage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEpXwWzcZ3W2KAIQ_mPr1Hf-X3tDW0h-w",
  authDomain: "blog-app-5ecb1.firebaseapp.com",
  projectId: "blog-app-5ecb1",
  storageBucket: "blog-app-5ecb1.firebasestorage.app",
  messagingSenderId: "426640933908",
  appId: "1:426640933908:web:318a920c0f46d29e14d301",
  measurementId: "G-R92Y0NG3K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
