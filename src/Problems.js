import React, { useState } from "react";
import endGif from './congratulations.gif';
const Problems = ({ type, problemsList }) => {
  const [problemList, setProblemList] = useState(problemsList);
  const [correctCount, setCorrectCount] = useState(0);

  const typeConverter = {
    subtraction: "-",
    addition: "+",
    multiplication: "x",
    division: "/",
  };

  const handleChange = (e) => {
    let values = [...problemList];
    values[e.target.id].input = e.target.value;
    setProblemList(values);
  };

  const handleCheckAnswer = (e) => {
    let convertToNum = parseInt(problemList[e.target.id].input);
    if (problemList[e.target.id].answer === convertToNum) {
      let values = [...problemList];
      values[e.target.id].correct = true;
      setProblemList(values);
      setCorrectCount(correctCount + 1);
    }
  };

  return (
    <section id='problem-section'>
      <div className='problem-score'>
        <span>
          Current Score: {correctCount} / {problemList.length}
        </span>
      </div>

      {correctCount !== problemList.length ? (<div className='problems'>
        {problemList.map((problem, idx) => (
          <div
            className={`problem-container ${problem.correct && "correct"}`}
            key={idx}
          >
            <div className='problem'>{problem.first}</div>
            <div className='problem bottom-border'>
              {typeConverter[type]}
              {problem.second}
            </div>
            {problem.correct === false ? (
              <input
                className={`problem-input ${problem.correct && "correct"}`}
                type='number'
                value={problemList[idx].input}
                onChange={handleChange}
                id={idx}
              />
            ) : (
              <div className='correct lock-input'>{problem.answer}</div>
            )}
            <button
              className='btn bs check-answer'
              onClick={handleCheckAnswer}
              id={idx} disabled={`${problem.correct === true ? "disabled" : ""}`}
            >
              Check Answer
            </button>
          </div>
        ))}
      </div>) : (<div id="end-section">
        <img className="end-gif" src={endGif} alt="Congratulations"/>

      </div>)}
      
    </section>
  );
};

export default Problems;
