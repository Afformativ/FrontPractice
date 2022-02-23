import React, {useEffect, useState} from "react";
import logo from '../photos/logo_transparent.png';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import{useNavigate}from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown'

import{
    NavLink
}from'react-router-dom';
import { getCat, getLvl } from "../Data/Data";


function Sidebar(){
    const [level,setLevel] =useState([])
    const[categories,setCategories]=useState([])
    const [nav, setNav]=useState([
        {label:"Home",slug:"/"},
        {label:"All-tests",slug:"all-tests"},
    ])
    useEffect(()=>{
        return getLvl(setLevel)
    },[])
    useEffect(()=>{
        return getCat(setCategories)
    },[])
    
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
    const navi=useNavigate();
    const handleLevel=(e)=>{
        navi('/TestByLvl', {
            state: {
              id: e.target.value,
            }
          });
          
    }
    const handleCategory=(e)=>{
        navi('/TestByCat', {
            state: {
                id: e.target.value,
            }
          });
    }
    const allLvl=level.map((el)=>{
        return( 
            
            <option key={el.id} value={el.id}>{el.difficultyLevel}</option>
        )
    })
    const allCat=categories.map((el)=>{
        return( 
            <option key={el.id} value={el.id}>{el.name}</option>
        )
    })
    return(
        <div className="sidebar rel">
            <a href="/" className="logo bl">
                <img src={logo} className="bl"/>
            </a>
            <ul className="nav">
              {navigation}
              <div className="divSelect">
              <select className="select" onChange={(e)=>handleCategory(e)}>
                    {allCat}
                </select>
                </div>
                <div className="divSelect">
                <select className="select" onChange={(e)=>handleLevel(e)}>
                    {allLvl}
                </select>
                </div>
            
            </ul>
            
        </div>
    )
}
export default Sidebar;