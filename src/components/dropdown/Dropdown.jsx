import React from "react";
import "./Dropdown.css";

const Dropdown = ({ difficulty, setDifficulty }) => {
  return (
    <div className="dropdown">
      <select onChange={(e) => setDifficulty(e.target.value)}>
        {difficulty.map((dt, i) => (
          <option value={dt}>{dt}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
