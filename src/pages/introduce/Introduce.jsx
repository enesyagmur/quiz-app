import React from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";

const Introduce = () => {
  const difficulty = ["easy", "medum", "hard"];
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src="https://media.istockphoto.com/id/1319947380/vector/quiz-logo-banner-pop-art-design-for-survey-answer-question-game-questionnaire-quiz-icon.jpg?s=170667a&w=0&k=20&c=0YZfZa2OU3c6_hziUrvY0yW9y_FCS2Dy-GSuPpk6gAU=" />
        <Dropdown difficulty />
        <div className="introduce-btn">Start</div>
      </div>
    </div>
  );
};

export default Introduce;
