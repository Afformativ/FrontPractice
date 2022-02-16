import React, {useState} from "react";
import logo from '../photos/logo_transparent.png';

import{
    NavLink
}from'react-router-dom';


function Sidebar(){

    const [nav, setNav]=useState([
        {label:"Home",slug:"/"},
        {label:"All-tests",slug:"all-tests"},
        {label:"Categories",slug:"categories"},
        {label:"Levels",slug:"levels"}
    ])

    const[currentPage,setCurrentPage]=useState("/")

    var navigation =[];
    for(let i = 0;i< nav.length;i++){
        navigation.push(
            <li key={"nav-" + i +"-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className="aic link noul flex c333">
                    <h2 className="label s20">{nav[i].label}</h2>
                </NavLink>
             </li>
        );
    }

    return(
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>
            <ul className="nav">
              {navigation}
            </ul>
            
        </div>
    )
}
export default Sidebar;