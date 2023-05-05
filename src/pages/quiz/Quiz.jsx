import React, { useEffect, useState } from "react";
import "./Quiz.css";

import * as api from "./db";
import QuestionCard from "../../components/QuestionCard";

const Quiz = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData();
      setQuestionsData(data);
    };
    getData();
  }, []);

  console.log(questionsData);

  return (
    <div className="quiz">
      <QuestionCard
        questionsData={questionsData}
        score={score}
        setScore={setScore}
        count={count}
        setCount={setCount}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
};

export default Quiz;
