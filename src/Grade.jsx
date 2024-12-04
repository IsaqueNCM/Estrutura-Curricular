import React from "react";
import Subject from "./Subject";

const Grade = ({
  periodData,
  completedSubjects,
  handleSelectSubject,
  checkPrerequisites,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{periodData.period}</h2>
      <p>CH Total: {periodData.totalHours}h</p>
      <div>
        {periodData.subjects.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            completedSubjects={completedSubjects}
            handleSelectSubject={handleSelectSubject}
            checkPrerequisites={checkPrerequisites}
          />
        ))}
      </div>
    </div>
  );
};

export default Grade;
