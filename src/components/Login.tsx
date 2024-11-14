// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebaseConfig';
import './Login.css';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('Пользователь вошел:', user);
      navigate('/courses');
    } catch (error) {
      setError('Ошибка входа через Google. Попробуйте еще раз.');
    }
  };

  return (
    <div className="login-container">
      <h2>Добро пожаловать на платформу</h2>
      <p>Войдите через Google, чтобы начать обучение</p>
      <button onClick={handleGoogleLogin} className="google-login-btn">
        Войти через Google
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
