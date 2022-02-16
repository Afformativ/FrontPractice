import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const TEST_URL=(value)=>`https://localhost:44310/api/Tests/getTests/${value}`
function TestCard (props){
    const [questions, setQuestions]=useState([]);
    const {state}=useLocation();
  useEffect(()=>{
    return axios.get(TEST_URL(state.id)).then(res=>{
      setQuestions(res.data.entity)   
       console.log(res.data.entity)
    }).catch(err=>console.log(err))
  },[])

  const allQuestions = questions.map((el)=>{
    console.log(el)
    const allAnswers=el.answers.map((el)=>{
      return(
        el.answerText
      )
    })
  allAnswers.unshift(el.question.questionText)
    return allAnswers;
  
  })
  const Card=allQuestions.map((el)=>{
    return(
      <div>
        <div>
          {el[0]}
        </div>
        <button>{el[1]}</button>
        <button>{el[2]}</button>
        <button>{el[3]}</button>
        <button>{el[4]}</button>
      </div>
    )
  })
  
  console.log(allQuestions)
    return(        
         <div>{Card[0]}</div>        
    )
}
export default TestCard;