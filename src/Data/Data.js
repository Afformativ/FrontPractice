import axios from "axios"

const url=(value)=>`https://localhost:44310/api/${value}/getAll`
const cat_url=url("TestCategories")
const lvl_url=url("TestLevels")
const all_url=url("TestSets")
const checkAnswer=(quest,answ)=>`https://localhost:44310/api/Tests/checkAnswer/${quest}&${answ}`
const test_url=(value)=>`https://localhost:44310/api/Tests/getTests/${value}`
const testByLvl=(value)=>`https://localhost:44310/api/TestSets/getByLevel/${value}`
const testByCat=(value)=>`https://localhost:44310/api/TestSets/getByCategory/${value}`

const getTest=(setState,value)=>{
    axios.get(test_url(value)).then(res=>{
        setState(res.data.entity)
    }).catch(err=>console.log(err))
}

const getTestByLvl=(setState,value)=>{
    axios.get(testByLvl(value)).then(res=>{
        setState(res.data.entity)
    }).catch(err=>console.log(err))
}
const getTestByCat=(setState,value)=>{
    axios.get(testByCat(value)).then(res=>{
        setState(res.data.entity)
    }).catch(err=>console.log(err))
}

const getLvl=(setState) =>{
    axios.get(lvl_url).then(res=>{
        setState(res.data.entity)    
    }).catch(err=>console.log(err))
}

const getCat=(setState) =>{
    axios.get(cat_url).then(res=>{
        setState(res.data.entity)    
    }).catch(err=>console.log(err))
}

const getAll=(setState)=>{
    axios.get(all_url).then(res=>{
        setState(res.data.entity)
    }).catch(err=>console.log(err))
}

const getColor= async(setState,points, questions,currIndex,ans,event)=>{
    let color="white";
    axios.get(`https://localhost:44310/api/Tests/checkAnswer/${questions[currIndex].id}&${ans}`).then(res=>{
      switch (res.data.entity){ 
        case true:
          color="green"
          break;
        case false:
            color="red"
          break;
        default:color="white"
      }
      event.target.style.backgroundColor=color
      if(res.data.entity)
      setState(points + questions[currIndex].question.points)
  }).catch(err=>console.log(err)) 
}

export {getLvl,getCat,getAll,getColor, getTest, getTestByLvl, getTestByCat}
