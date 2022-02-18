import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router'
import { getCat } from '../Data/Data'

function CategoriesPage(){
    const[categories,setCategories]=useState([])


    useEffect(()=>{
        return getCat(setCategories)
    },[])

    const navigation=useNavigate();
    
    const handleSubmit=(id)=>{

        navigation('/TestByCat', {
            state: {
              id: id,
            }
          });
    }

    const allCat=categories.map((el)=>{
      return (
        <button onClick={()=>handleSubmit(el.id)} className="level" key={el.id}>{el.name}</button>
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