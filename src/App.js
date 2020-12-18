import React, { useState } from "react";
import "./App.css";
import Problems from "./Problems";
import Landing from "./Landing";

const App = () => {
  const [type, setType] = useState("subtraction");
  const [digits, setDigits] = useState("one");
  const [number, setNumber] = useState("five");
  const [problemList, setProblemList] = useState([]);
  const [problems, setProblems] = useState(false);

  const numConverter = {
    five: 5,
    ten: 10,
    twenty: 20,
    thirty: 30,
  };

  const digitConverer = {
    one: 9,
    two: 99,
    three: 999,
  };

  const handleTypeSelection = (e) => {
    setType(e.target.id);
  };

  const handleDigitsSelection = (e) => {
    setDigits(e.target.id);
  };

  const handleNumberSelection = (e) => {
    setNumber(e.target.id);
  };

  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  const handleGenerateProblems = () => {
    const tempProblemList = [];
    const numberInt = numConverter[number];

    for (let i = 0; i < numberInt; i++) {
      let ready = false;
      let first, second;
      let total = 0;
      if (type === "division") {
        while (ready === false) {
          first = Math.floor(Math.random() * digitConverer[digits]);
          second = Math.floor(Math.random() * 10 + 2);
          if (second > first) {
            [first, second] = [second, first];
          }

          if (first % second === 0) {
            ready = true;
          }
        }
      } else {
          while (ready ===false){
            first = Math.floor(Math.random() * digitConverer[digits]);
            second = Math.floor(Math.random() * digitConverer[digits]);
            
            if(first && second !== 0){
              ready= true
            }
          }
          if (second > first) {
            [first, second] = [second, first];
          }

      }

      switch (type) {
        case "addition":
          total = add(first, second);
          break;
        case "subtraction":
          total = subtract(first, second);
          break;
        case "multiplication":
          total = multiply(first, second);
          break;
        case "division":
          total = divide(first, second);
          break;
        default:
          break;
      }

      tempProblemList.push({
        id: i,
        first: first,
        second: second,
        answer: total,
        correct: false,
        input: "",
      });
    }

    setProblemList(tempProblemList);
    setProblems(true);
  };

  const handleResetData = () => {
    window.location.reload(false);
  };

  return (
    <div className='App'>
      {problems ? (
        <nav>
          <ul>
            <li>
              <button className='bs btn-reset btn' onClick={handleResetData}>
                Try More Problems
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <h1>Unlimited Math Problems</h1>
      )}

      {problems ? (
        <Problems
          type={type}
          digits={digits}
          number={numConverter[number]}
          problemsList={problemList}
        />
      ) : (
        <div>
          <section id='selection-section'>
            <div id='selection-type'>
              <h2>Select type of problem</h2>
              <div className='type-container'>
                <span>
                  <button
                    id='subtraction'
                    className={`bs btn ${
                      type === "subtraction" ? "active" : ""
                    }`}
                    onClick={handleTypeSelection}
                  >
                    Subtraction
                  </button>
                </span>

                <span>
                  <button
                    id='addition'
                    className={`bs btn ${type === "addition" ? "active" : ""}`}
                    onClick={handleTypeSelection}
                  >
                    Addition
                  </button>
                </span>

                <span>
                  <button
                    id='multiplication'
                    className={`bs btn ${
                      type === "multiplication" ? "active" : ""
                    }`}
                    onClick={handleTypeSelection}
                  >
                    Multiplication
                  </button>
                </span>

                <span>
                  <button
                    id='division'
                    className={`bs btn ${type === "division" ? "active" : ""}`}
                    onClick={handleTypeSelection}
                  >
                    Division
                  </button>
                </span>
              </div>
            </div>

            <div id='selection-digits'>
              <h2>Select how many digits</h2>
              <div className='type-container-three'>
                <span>
                  <button
                    id='one'
                    className={`bs btn ${digits === "one" ? "active" : ""}`}
                    onClick={handleDigitsSelection}
                  >
                    One
                  </button>
                </span>
                <span>
                  <button
                    id='two'
                    className={`bs btn ${digits === "two" ? "active" : ""}`}
                    onClick={handleDigitsSelection}
                  >
                    Two
                  </button>
                </span>
                <span>
                  <button
                    id='three'
                    className={`bs btn ${digits === "three" ? "active" : ""}`}
                    onClick={handleDigitsSelection}
                  >
                    Three
                  </button>
                </span>
              </div>
            </div>

            <div id='selection-number'>
            <h2>How many problems?</h2>
              <div className='type-container'>
              <button
                id='five'
                className={`btn ${number === "five" ? "active" : ""}`}
                onClick={handleNumberSelection}
              >
                Five
              </button>
              <button
                id='ten'
                className={`btn ${number === "ten" ? "active" : ""}`}
                onClick={handleNumberSelection}
              >
                Ten
              </button>
              <button
                id='twenty'
                className={`btn ${number === "twenty" ? "active" : ""}`}
                onClick={handleNumberSelection}
              >
                Twenty
              </button>
              <button
                id='thirty'
                className={`btn ${number === "thirty" ? "active" : ""}`}
                onClick={handleNumberSelection}
              >
                Thirty
              </button>
              </div>
            </div>

            <button className="btn btn-generate" id='generate-problems' onClick={handleGenerateProblems}>
              Generate Problems
            </button>
          </section>
          <Landing />
        </div>
      )}
    </div>
  );
};

export default App;
