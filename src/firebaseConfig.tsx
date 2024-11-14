

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4wtbI6a1YhTqMefNryGO047sCeLhe92o",
  authDomain: "tg-mini-app-aceaa.firebaseapp.com",
  projectId: "tg-mini-app-aceaa",
  storageBucket: "tg-mini-app-aceaa.appspot.com",
  messagingSenderId: "579459652751",
  appId: "1:579459652751:web:ebc8c97284235a6b4d24fa"
};
// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Функция для входа через Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Пользователь вошел через Google:", result.user);
    return result.user; // Возвращаем данные пользователя
  } catch (error) {
    console.error("Ошибка входа через Google:", error);
    throw error;
  }
};

export { auth, signInWithGoogle };