import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getAnswer, getTest } from '../Data/Data';


function TestCard (props){
    const [questions, setQuestions]=useState([]);
    const [answer,setAnswer]=useState()
    const [points,setPoints]=useState(0)
    const [gameEnded,setGameEnded]=useState(false)
    const[currIndex,setCurrIndex]=useState(0)
    const {state}=useLocation();


  useEffect(()=>{
    return getTest(setQuestions,state.id)
    
  },[]) 
 
  const handleAnswer = (ans) =>{
   setCurrIndex(currIndex + 1);
    getAnswer(setAnswer,questions[currIndex].id,ans) 
    console.log(answer)
    if(answer===true){
      setPoints(points+1)
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

    return gameEnded ?(
      <div>Your have earned {points}</div>
    ) : (        
         <div>{Card[currIndex]}</div>        
    )
}

export default TestCard;