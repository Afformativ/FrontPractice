import React,{useEffect} from "react";
import photo from '../photos/Main.png';


function HomePage (){
    useEffect(()=>{
        document.title = "Testing";
    })
    return(
        <div className="home-page ">
           <div> <h2 className="title">Main Page</h2></div>
           <img src={photo} className="bl"/>
        </div>
    )
}
export default HomePage;