import React, { useEffect, useState } from "react";
import "./quizApp.css";
import data from "../data";

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      setQuestion();
    }
  }, [quizStarted]);

  useEffect(() => {
    setTopScore(score > topScore ? score : topScore);
  }, [score, topScore]);

  const setQuestion = () => {
    const questionData = data.mathQuestions[currentQuestionIndex];
    setCurrentQuestion(questionData.question);
    setAnswers(questionData.answers);
    setAnswerSelected(false);
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (!answerSelected) {
      setAnswerSelected(true);

      const isCorrect =
        selectedAnswer ===
        data.mathQuestions[currentQuestionIndex].correctAnswer;

      if (isCorrect) {
        setScore(score + 1);
      } else {
        setScore(Math.max(score - 1, 0));
      }

      // Change answer color based on correctness
      const answerElements = document.querySelectorAll(".answer");
      answerElements.forEach((element) => {
        if (element.textContent === selectedAnswer) {
          element.style.backgroundColor = isCorrect ? "green" : "red";
        } else {
          element.style.pointerEvents = "none"; // Disable click events for other answers
        }
      });

      // Move to the next question after 1 second
      setTimeout(() => {
        if (currentQuestionIndex === data.mathQuestions.length - 1) {
          setCurrentQuestionIndex(0);
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }, 1000);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <section>
      {quizStarted ? (
        <>
          <h3 className="question">{currentQuestion}</h3>

          {answers.map((answer, index) => (
            <p
              key={index}
              className="answer"
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </p>
          ))}
        </>
      ) : (
        <div className="start-container">
          <h1>Quiz Game for Math people</h1>
          <p className="score">Top Score: {topScore}</p>
          <button onClick={startQuiz} className="start-btn">
            Start
          </button>
        </div>
      )}
    </section>
  );
};

export default QuizApp;
