import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getTestByCat } from "../Data/Data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import axios from "axios";

function TestByCat(props){
    const [testByCat,setTestByCat]=useState([])
    const {state}=useLocation();
    useEffect(()=>{
        return getTestByCat(setTestByCat,state.id)
    },[])
    const navigation=useNavigate();
    const fetchCat= async (id="")=>{
        const {data}= await axios.get(`https://localhost:44310/api/TestSets/getByCategory/${id}`)
  
    }
    const handleSubmit=(id)=>{
        fetchCat(id)
        navigation('/TestCard', {
          state: {
            id: id,
          }
        });
    }
    const TestsByCat=testByCat.map((el)=>{
        return (
          <Card sx={{ maxWidth: 345 }} key={el.id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {el.description}
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>handleSubmit(el.id)}>
            Start the test
          </Button>
        </CardActions>
      </Card>    
        )
      })
    return(
        <div>{TestsByCat}</div>
    )
}

export default TestByCat;