import React from "react";
import "./Modal.css";

const Modal = ({ score }) => {
  return (
    <div className="modal">
      <h1>Quiz Bitti</h1>
      <h4>{"Skor : " + score}</h4>
      <button onClick={() => (window.location = "/")}>Yeniden Başla</button>
    </div>
  );
};

export default Modal;
