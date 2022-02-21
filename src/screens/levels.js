import axios from "axios";
import React, {useEffect, useState} from "react";
import { getLvl } from "../Data/Data";
import{useNavigate}from "react-router-dom"


function LevelsPage(){
    const[level,setLevel]=useState([])
    useEffect(()=>{
        document.title = "Levels";
    })

    useEffect(()=>{
        return getLvl(setLevel)
    },[])

    const navigation=useNavigate();

    const handleSubmit=(id)=>{

        navigation('/TestByLvl', {
            state: {
              id: id,
            }
          });
    }

    const allLvl=level.map((el)=>{
      return (
        <button onClick={()=>handleSubmit(el.id)} className="level" key={el.id}>{el.difficultyLevel}</button>
      )
    })

    return (
        <div className="app-page rel">
            <div className="levels">
                {allLvl}
            </div>
        </div>
    )
}

export default LevelsPage;