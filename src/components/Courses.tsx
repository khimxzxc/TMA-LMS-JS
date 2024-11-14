import React, { useState } from 'react';
import SectionMaterial from './SectionMaterial';
import './Courses.css';

// Типизация для курса
interface Course {
  id: number;
  title: string;
  description: string;
  materials: string;
  completed: boolean;
}

const courseContent: Course[] = [
  {
    id: 1,
    title: 'Введение в Python',
    description: 'Изучите основы Python: переменные, типы данных, операторы.',
    materials: 'Python — это высокоуровневый язык программирования...',
    completed: false,
  },
  {
    id: 2,
    title: 'Условные операторы и циклы',
    description: 'Научитесь управлять потоком выполнения программ...',
    materials: 'Условные операторы: if, else, elif...',
    completed: false,
  },
  {
    id: 3,
    title: 'Функции',
    description: 'Изучите, как создавать функции и переиспользовать код.',
    materials: 'Функции в Python создаются с помощью ключевого слова def...',
    completed: false,
  },
  // Добавьте остальные разделы
];

function Courses() {
  const [progress, setProgress] = useState(0);
  const [selectedSection, setSelectedSection] = useState<Course | null>(null);
  const [completedSections, setCompletedSections] = useState<Course[]>(courseContent);

  const handleCompleteSection = (sectionId: number) => {
    const updatedSections = completedSections.map((section) =>
      section.id === sectionId ? { ...section, completed: true } : section
    );
    setCompletedSections(updatedSections);
    const newProgress = Math.min(progress + 25, 100); // Прогресс увеличивается на 25%
    setProgress(newProgress);
    setSelectedSection(null); // Сбрасываем выбранный раздел
  };

  return (
    <div className="courses-container">
      <div className="header">
        <h1>Курс: JS для начинающих</h1>
        <p>Прогресс: {progress}%</p>
      </div>

      <div className="course-list">
        {completedSections.map((section) => (
          <div className="course-item" key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {section.completed ? (
              <p>Завершено ✅</p>
            ) : (
              <>
                <button onClick={() => setSelectedSection(section)}>
                  Просмотреть материалы
                </button>
                {selectedSection && selectedSection.id === section.id && (
                  <div>
                    <SectionMaterial materials={section.materials} />
                    <button onClick={() => handleCompleteSection(section.id)}>
                      Завершить раздел
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {progress === 100 && (
        <button className="quiz-button">
          {/* Если используется React Router, замените ссылку на <Link> */}
          <a href="/quiz">Пройти квиз</a>
        </button>
      )}
    </div>
  );
}

export default Courses;
