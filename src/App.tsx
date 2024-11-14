import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Courses from './components/Courses';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Страница входа */}
        <Route path="/courses" element={<Courses />} /> {/* Страница курсов */}
        <Route path="/quiz" element={<Quiz />} /> {/* Страница квиза */}
      </Routes>
    </Router>
  );
}

export default App;
