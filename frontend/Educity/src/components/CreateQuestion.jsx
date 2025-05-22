import React, { useState } from "react";

const CreateQuiz = () => {
  // Step 1: Form state setup
  const [quizData, setQuizData] = useState({
    course: "jee",
    subject: "Physics",
    chapter: "Kinematics",
    questions: [
      {
        id: `q1-${Date.now()}`, // Unique ID (e.g., "q1-123456789")
        text: "",
        options: ["", "", ""],
        correctOption: 0, // Index of correct option (0, 1, or 2)
      },
    ],
  });

  // Step 2: Add new question
  const addQuestion = () => {
    const newQuestion = {
      id: `q${quizData.questions.length + 1}-${Date.now()}`, // Auto-generate ID
      text: "",
      options: ["", "", ""],
      correctOption: 0,
    };
    setQuizData({
      ...quizData,
      questions: [...quizData.questions, newQuestion],
    });
  };

  // Step 3: Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      });
      alert(response.ok ? "Quiz saved!" : "Failed to save");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        {/* Course/Subject/Chapter Inputs */}
        <input
          value={quizData.chapter}
          onChange={(e) =>
            setQuizData({ ...quizData, chapter: e.target.value })
          }
          placeholder="Chapter Name"
        />

        {/* Questions List */}
        {quizData.questions.map((q, qIndex) => (
          <div
            key={q.id}
            style={{
              margin: "20px 0",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <textarea
              value={q.text}
              onChange={(e) => {
                const updatedQuestions = [...quizData.questions];
                updatedQuestions[qIndex].text = e.target.value;
                setQuizData({ ...quizData, questions: updatedQuestions });
              }}
              placeholder="Question text"
              required
            />

            {/* Options */}
            {q.options.map((opt, optIndex) => (
              <div key={optIndex}>
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => {
                    const updatedQuestions = [...quizData.questions];
                    updatedQuestions[qIndex].options[optIndex] = e.target.value;
                    setQuizData({ ...quizData, questions: updatedQuestions });
                  }}
                  placeholder={`Option ${optIndex + 1}`}
                  required
                />
                <input
                  type="radio"
                  name={`correct-${q.id}`}
                  checked={q.correctOption === optIndex}
                  onChange={() => {
                    const updatedQuestions = [...quizData.questions];
                    updatedQuestions[qIndex].correctOption = optIndex;
                    setQuizData({ ...quizData, questions: updatedQuestions });
                  }}
                />
                <label>Correct?</label>
              </div>
            ))}
          </div>
        ))}

        <button type="button" onClick={addQuestion}>
          Add Question
        </button>
        <button type="submit">Save Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
