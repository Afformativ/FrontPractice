import React,{useEffect} from "react";
import TestCard from "./testCard";
import {TextField} from "@material-ui/core"


function HomePage (){
    useEffect(()=>{
        document.title = "Testing";
    })
    return(
        <div className="home-page ">
           <div> <h2 className="title">Main Page</h2></div>
            <TestCard/>
        </div>
    )
}
export default HomePage;