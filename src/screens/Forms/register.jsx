import axios from "axios";
import React, { useState } from "react";
import loginImg from "../../photos/login.svg";


function Register(props) {
  const [username,setUsername]=useState([])
  const [password,setPassword]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`https://localhost:44310/api/Account/register?username=${username}&password=${password}&role=user`,{
      username:username,
      password:password,
      role:"user"
    }).then((res)=>{
      console.log(res)
    })
  }
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Register</div>
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
            <div className="form-group">
              <label htmlFor="email">Confirm password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={(e)=>handleSubmit(e)}>
            Register
          </button>
        </div>
      </div>
    );
  }

export {Register}
