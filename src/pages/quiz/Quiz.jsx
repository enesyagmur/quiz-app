import React, { useEffect, useState } from "react";
import "./Quiz.css";

import * as api from "./db";

const Quiz = () => {
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData();
      setQuestionsData(data);
    };
    getData();
  }, []);

  console.log(questionsData);

  return <div className="quiz"></div>;
};

export default Quiz;
