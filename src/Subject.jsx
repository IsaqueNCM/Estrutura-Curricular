import React from "react";

const Subject = ({
  subject,
  completedSubjects,
  handleSelectSubject,
  checkPrerequisites,
}) => {
  // Verificar se a matéria foi concluída
  const isCompleted = completedSubjects.includes(subject.id);
  
  // Verificar se todos os pré-requisitos foram cumpridos
  const isPrerequisitesMet = checkPrerequisites(subject);
  
  // Função para definir a cor da matéria
  const getColor = () => {
    if (isCompleted && isPrerequisitesMet) {
      return "lightgreen"; // Verde se foi feita e os pré-requisitos foram cumpridos
    }
    if (subject.prerequisites.length === 0) {
      return "yellow"; // Amarelo se não tem pré-requisitos
    }
    if (isPrerequisitesMet && !isCompleted) {
      return "yellow"; // Amarelo se os pré-requisitos foram cumpridos, mas não foi feita
    }
    return "lightcoral"; // Vermelho se os pré-requisitos não foram cumpridos
  };

  return (
    <div
      onClick={() => handleSelectSubject(subject.id)} // Para selecionar ou desmarcar a matéria
      style={{
        backgroundColor: getColor(),
        margin: "5px",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h3>{subject.name}</h3>
      <p>{subject.hours}h</p>
    </div>
  );
};

export default Subject;
