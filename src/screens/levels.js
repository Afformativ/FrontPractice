import axios from "axios";
import React, {useEffect, useState} from "react";
import { getLvl } from "../Data/Data";


function LevelsPage(){
    const[level,setLevel]=useState([])
    useEffect(()=>{
        document.title = "Levels";
    })

    useEffect(()=>{
        return getLvl(setLevel)
    },[])

    const allLvl=level.map((el)=>{
      return (
        <div className="level" key={el.id}>{el.difficultyLevel}</div>
      )
    })

    return (
        <div className="app-page rel">
            <h2 className="title ">Levels</h2>
            <div className="levels">
                {allLvl}
            </div>
        </div>
    )
}

export default LevelsPage;