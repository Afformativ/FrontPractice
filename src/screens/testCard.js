import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getAnswer, getTest } from '../Data/Data';


function TestCard (props){
    const [questions, setQuestions]=useState([]);
    //const [answer,setAnswer]=useState()
    const [points,setPoints]=useState(0)
    const [currIndex,setCurrIndex]=useState(0)
    const {state}=useLocation();
    const [isActive,setIsActive]=useState(true)


  useEffect(()=>{
    return getTest(setQuestions,state.id)
    
  },[]) 
  let col ;
  let result;
  const handleAnswer = (ans, event) =>{
    if(isActive){
    axios.get(`https://localhost:44310/api/Tests/checkAnswer/${questions[currIndex].id}&${ans}`).then(res=>{
      result=res.data.entity
      switch (result){
        case true:
          col= "green"  
          break;
        case false:
          col="red"
          break;
        default:col="white"
      }
      event.target.style.backgroundColor=col
      if(result===true){
        setPoints(points + questions[currIndex].question.points)
      }
  }).catch(err=>console.log(err)) 
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
        >{item.answer}</button>
      )}
    })
    return(
      <div>
        <div>
          {el[0]}
        </div>
        {buttons}
      </div>
    )  
  })

    return currIndex>questions.length -1?(
      <h1 className='text-3xl text-white font-bold'>Your have earned {points} points</h1>
    ) : (      
      <div> 
         <div>{Card[currIndex]}</div>  
         <button onClick={()=>handleNext()}>Next</button> 
         </div>   
    )
}

export default TestCard;