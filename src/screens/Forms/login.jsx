import axios from "axios";
import React, { useState } from "react";
import loginImg from "../../photos/login.svg";

function Login (props) {
  const [username,setUsername]=useState();
  const [password,setPassword]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`https://localhost:44310/api/Account/jwttoken?username=${username}&password=${password}`,{
      username:username,
      password:password,
    }).then((res)=>{
      console.log(res.data.entity)
    })

  }
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={(e)=>handleSubmit(e)}>
            Login
          </button>
        </div>
      </div>
    );
}
export {Login}