import React, { useState } from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const difficulty = ["Easy", "Medum", "Hard"];
  const [difficultyChange, setDifficulty] = useState("");
  const naviGate = useNavigate();
  const totalQuestion = 10;

  const startQuiz = () => {
    if (difficultyChange) {
      naviGate(`/quiz/${difficultyChange}/${totalQuestion}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src="https://t4.ftcdn.net/jpg/03/71/27/35/360_F_371273558_v74ZbyUOSOe6thaRyTxaRQe3qfWOACmw.jpg" />
        <Dropdown difficulty={difficulty} setDifficulty={setDifficulty} />
        <div className="introduce-btn" onClick={startQuiz}>
          Start
        </div>
      </div>
    </div>
  );
};

export default Introduce;
