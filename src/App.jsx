import React, { useState } from "react";
import { courseData } from "./data";
import Grade from "./Grade";

const App = () => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const handleSelectSubject = (id) => {
    setCompletedSubjects((prev) => {
      if (prev.includes(id)) {
        // Se a matéria já foi clicada, remove da lista (desmarcar)
        return prev.filter((subjectId) => subjectId !== id);
      }
      // Adiciona a matéria à lista de matérias completadas
      return [...prev, id];
    });
  };

  // Função para verificar se todos os pré-requisitos foram cumpridos
  const checkPrerequisites = (subject) => {
    const prerequisites = subject.prerequisites || [];
    return prerequisites.every((prerequisite) =>
      completedSubjects.includes(prerequisite)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Estrutura Curricular - Ciencia da computação</h1>
      {courseData.map((period) => (
        <Grade
          key={period.period}
          periodData={period}
          completedSubjects={completedSubjects}
          handleSelectSubject={handleSelectSubject}
          checkPrerequisites={checkPrerequisites}
        />
      ))}
    </div>
  );
};

export default App;
