import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getAnswer, getTest } from '../Data/Data';


function TestCard (props){
    const [questions, setQuestions]=useState([]);
    const [answer,setAnswer]=useState()
    const [points,setPoints]=useState(0)
    const[currIndex,setCurrIndex]=useState(0)
    const [showAnswer, setShowAnswer]=useState(false)
    const {state}=useLocation();


  useEffect(()=>{
    return getTest(setQuestions,state.id)
    
  },[]) 

  const handleAnswer = (ans) =>{
    getAnswer(setAnswer,questions[currIndex].id,ans)     
    setShowAnswer(true)
    setShowAnswer(true)
  }
  
  const handleNext = ()=>{
    setCurrIndex(currIndex + 1);  
    if(answer===true){
      setPoints(points + questions[currIndex].question.points)
    }
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
      let col ;
      switch (answer){
        case true:
          col={
            backgroundColor:"green"
          };
          break;
        case false:
          col={
            backgroundColor:"red"
          };
          break;
        default:col={
          backgroundColor:"white"
        };
      }
     
      if(item.id>0) {
      return(
        <button
        onClick={()=>handleAnswer(item.id)}
        style={col} 
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