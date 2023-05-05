import React from "react";
// import "QuestionCard.css";

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
      console.log("doğru bildin");
      setCount(count + 1);
      setScore(score + 1);
    } else {
      console.log("yanlış cevap");
      setCount(count + 1);
    }
  };

  return (
    <div className="questionCard">
      <div>
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button key={i} value={answer} onClick={check}>
          {/* value değerine de answer veriyoruz ki sonradan yakalayabilelim */}
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
