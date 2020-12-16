import React, {useState} from 'react'
import './App.css';
import Problems from "./Problems";
import Landing from "./Landing";

const App = ()=> {
  const [type, setType] = useState('subtraction')
  const [digits, setDigits] = useState('one')
  const [number, setNumber] = useState('five')
  const [problemList, setProblemList] = useState([])
  const [problems, setProblems] = useState(false)

  const numConverter = {
    'five': 5,
    'ten':10,
    'twenty': 20,
    'thirty': 30
  }

  const digitConverer = {
    'one': 9,
    'two':99,
    'three':999
  }

  const handleTypeSelection = (e) => {
     setType(e.target.id)
  }

  const handleDigitsSelection = (e) => {
    setDigits(e.target.id)
  }

  const handleNumberSelection = (e) => {
    setNumber(e.target.id)
  }

  const add = (a,b) => {
    return a+b;
  }

  const subtract = (a,b) => {
    return a-b;
  }

  const multiply = (a,b) => {
    console.log('hi')
    return a*b;
  }

  const divide = (a,b) => {
    return a/b;
  }


  const handleGenerateProblems = () => {
    const oneDigit = 9;
    const twoDigit = 99;
    const threeDigit = 999;
    const tempProblemList = [];
    const numberInt = numConverter[number]

  for(let i = 0; i < numberInt; i++){
    let ready = false;
    let first, second, total;
    if(type === "division"){
      while(ready == false){
        first = Math.floor(Math.random() * digitConverer[digits]);
        second = Math.floor(Math.random() * 10 +2)
        if(second > first){
          [first, second] = [second, first]
        }

        if(first % second === 0) {
          ready = true
        } 
        console.log('hmmm')
      }
    } else {
        first = Math.floor(Math.random() * digitConverer[digits]);
        second = Math.floor(Math.random() * digitConverer[digits])
      if(second > first){
        [first, second] = [second, first]
      }
  
    }
    
    switch(type){
      case "addition":
        total = add(first, second)
        break;
      case "subtraction":
        total = subtract(first, second)
        break;
      case "multiplication":
        total = multiply(first,second)
        break;
      case "division":
        total = divide(first,second)
        break;
      default:
        break;
    }

    tempProblemList.push({first: first,second: second, answer: total })
  }

    setProblemList(tempProblemList)
    setProblems(true)
   }

  return (
    <div className="App">
     <h1>Unlimited Math!!!</h1>

     <section id="selection-section">
      
      <div id="selection-type">
        <button id="subtraction" className={`btn ${type === "subtraction" ? "active": ""}`} onClick={handleTypeSelection}>Subtraction</button>
        <button id="addition" className={`btn ${type === "addition" ? "active": ""}`} onClick={handleTypeSelection}>Addition</button>
        <button id="multiplication" className={`btn ${type === "multiplication" ? "active": ""}`} onClick={handleTypeSelection}>Multiplication</button>
        <button id="division" className={`btn ${type === "division" ? "active": ""}`} onClick={handleTypeSelection}>Division</button>
      </div>
      <div id="selection-digits">
        <button id="one" className={`btn ${digits === "one" ? "active": ""}`} onClick={handleDigitsSelection}>One</button>
        <button id="two" className={`btn ${digits === "two" ? "active": ""}`} onClick={handleDigitsSelection}>Two</button>
        <button id="three" className={`btn ${digits === "three" ? "active": ""}`} onClick={handleDigitsSelection}>Three</button>

      </div>

      <div id="selection-number">
        <button id="five" className={`btn ${number === "five" ? "active": ""}`} onClick={handleNumberSelection}>Five</button>
        <button id="ten" className={`btn ${number === "ten" ? "active": ""}`} onClick={handleNumberSelection}>Ten</button>
        <button id="twenty" className={`btn ${number === "twenty" ? "active": ""}`} onClick={handleNumberSelection}>Twenty</button>
        <button id="thirty" className={`btn ${number === "thirty" ? "active": ""}`} onClick={handleNumberSelection}>Thirty</button>
      </div>

      <button id="generate-problems" onClick={handleGenerateProblems}>Generate Problems</button>

     </section>

    {problems ? <Problems type={type} digits={digits} number={numConverter[number]} problemsList={problemList} /> : <Landing /> }



    </div>
  );
}

export default App;
