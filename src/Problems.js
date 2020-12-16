import React, {useState} from 'react';



const Problems = ({type, problemsList}) => {
  const [problemList, setProblemList] = useState([])
  const [listSet, setListSet] = useState(false)

  const typeConverter = {
    'subtraction': '-',
    'addition': '+',
    'multiplication':'x',
    'division': '/'
  }
 
    
  return (
    <div>
      {problemsList.map((problem, idx) => (
        <div key={idx}>
          <div>{problem.first}</div>
          <div>{typeConverter[type]}{problem.second}</div>
          <div>{problem.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default Problems
