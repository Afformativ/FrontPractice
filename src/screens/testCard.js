import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getColor, getTest } from '../Data/Data';


function TestCard (props){
    const [questions, setQuestions]=useState([]);
    const [points,setPoints]=useState(0)
    const [currIndex,setCurrIndex]=useState(0)
    const {state}=useLocation();
    const [isActive,setIsActive]=useState(true)


  useEffect(()=>{
    return getTest(setQuestions,state.id)
    
  },[]) 
  const handleAnswer = (ans, event) =>{
    if(isActive){
      getColor(setPoints,points,questions,currIndex,ans,event)
    setIsActive(false)
    }    
  }

  const handleNext = ()=>{
    setCurrIndex(currIndex + 1);    
    setIsActive(true)
  }
 
  const allQuestions = questions.map((el)=>{
    const allAnswers = el.answers.map((el)=>{
      return({
        "id":el.id,
        "answer":el.answerText
      }
      )
    })
    allAnswers.unshift(el.question.questionText)
    return allAnswers;
  })

  const Card=allQuestions.map((el)=>{
      const buttons = el.map((item)=>{ 
     
      if(item.id>0) {
      return(
        <button
        onClick={(event)=>handleAnswer(item.id, event)}
        key={item.id}
        className='button'
        >{item.answer}</button>
      )}
    })
    return(
      <div className='quest'> 
        <div className='question'>
          {el[0]}
        </div>
        {buttons}
      </div>
    )  
  })

    return currIndex>questions.length -1?(
      <h1 className='score '>Your have earned {points} points</h1>
    ) : (      
      <div className='testCard'> 
         <div>{Card[currIndex]}</div>  
         <button className='btn-next' onClick={()=>handleNext()}>Next</button> 
         </div>   
    )
}

export default TestCard;