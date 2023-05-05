import "./Introduce.css";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const naviGate = useNavigate();

  const startQuiz = () => {
    naviGate(`/quiz/easy/10`);
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src="https://t4.ftcdn.net/jpg/03/71/27/35/360_F_371273558_v74ZbyUOSOe6thaRyTxaRQe3qfWOACmw.jpg" />
        {/* <Dropdown difficulty={difficulty} setDifficulty={setDifficulty} /> */}
        <div className="introduce-btn" onClick={startQuiz}>
          Start
        </div>
      </div>
    </div>
  );
};

export default Introduce;
