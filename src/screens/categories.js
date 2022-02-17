import React,{useEffect,useState} from 'react'
import { getCat } from '../Data/Data'

function CategoriesPage(){
    const[categories,setCategories]=useState([])


    useEffect(()=>{
        return getCat(setCategories)
    },[])

    const allCat=categories.map((el)=>{
      return (
        <button className="level" key={el.id}>{el.name}</button>
      )
    })
    
    useEffect(()=>{
        document.title = "Categories";
    })
    
    return(
        <div className="app-page rel">
        <h2 className="title">Categories</h2>
        <div className="categories">
                {allCat}
            </div>
        </div>
    )
}
export default CategoriesPage;