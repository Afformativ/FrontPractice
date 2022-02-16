/* eslint-disable no-undef */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import { getAll} from "../Data/Data";
import{useNavigate}from "react-router-dom"


function AllTestsPage(){    
    useEffect(()=>{
      document.title = "All Tests";
  })
  const[tests,setTests]=useState([])
    useEffect(()=>{
        return getAll(setTests)
    },[])
    const navigation=useNavigate();

    const handleSubmit =(id)=>{
      fetchTests(id)
      navigation('/TestCard', {
        state: {
          id: id,
        }
      });
    }

    const fetchTests= async (id="")=>{
      const {data}= await axios.get(`https://localhost:44310/api/Tests/getTests/${id}`)

    }

    const allTests=tests.map((el)=>{
      return (
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" key={el.id}>
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
    return (
      <div className='tests'>{allTests}</div>
    )
}

export default AllTestsPage;