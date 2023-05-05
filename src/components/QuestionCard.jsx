import React, { useEffect, useState } from "react";
import "./QuestionCard.css";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const check = (e) => {
    if (e.currentTarget.value === questionsData[count].correct_answer) {
      SetTimer(30);
      setScore(score + 100);
    } else {
      SetTimer(30);
    }

    if (count < 9) {
      setCount(count + 1);
    }
  };
  const [timer, SetTimer] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        SetTimer(timer - 1);
      } else if (timer === 0 && count !== 9) {
        setCount(count + 1);
        SetTimer(30);
      } else if (count === 9) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="questionCard">
      <div className="questionCardContainer">
        <div className="timer">{timer}</div>
        <div className="score">{score}</div>
        <div className="questionCardTitle">
          {count + 1} - {questionsData[count]?.question}
        </div>
        {questionsData[count]?.answers?.map((answer, i) => (
          <button key={i} value={answer} onClick={check}>
            {/* value değerine de answer veriyoruz ki sonradan yakalayabilelim */}
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
