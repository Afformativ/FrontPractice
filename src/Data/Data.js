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

const getAnswer=(setState, quest,answ)=>{
    axios.get(checkAnswer(quest,answ)).then(res=>{
        setState(res.data.entity)
        console.log(res.data.entity)
    }).catch(err=>console.log(err))
}

export {getLvl,getCat,getAll,getAnswer, getTest, getTestByLvl, getTestByCat}
