// src/components/Quiz.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const questions = [
  {
    question: 'Что такое переменная в Python?',
    answers: ['Контейнер для хранения данных', 'Тип данных', 'Оператор', 'Функция'],
    correct: 0
  },
  // Другие вопросы...
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [tokens, setTokens] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
      setTokens(50);
    }
  };

  return (
    <div className="quiz-container">
      {completed ? (
        <div className="result">
          <h2>Вы завершили квиз!</h2>
          <p>Ваш результат: {score} из {questions.length}</p>
          <p>Вы заработали {tokens} токенов!</p>
          <button onClick={() => navigate('/courses')}>Вернуться к курсам</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} onClick={() => handleAnswer(index)}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
