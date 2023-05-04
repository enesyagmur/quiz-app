import React from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";

const Introduce = () => {
  const difficulty = ["easy", "medum", "hard"];
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src="https://t4.ftcdn.net/jpg/03/71/27/35/360_F_371273558_v74ZbyUOSOe6thaRyTxaRQe3qfWOACmw.jpg" />
        <Dropdown difficulty /> Dropdown
        <div className="introduce-btn">Start</div>
      </div>
    </div>
  );
};

export default Introduce;
